import prisma from "../config/prisma";
import { CreateJobRequest, FilterJobRequest } from "../schemas/job.schema";

/**
 * JOB REPOSITORY
 * Handles all database operations for job posts
 */

export class JobRepository {
  /**
   * Create a new job post
   * Used by recruiters to post a new job
   */
  async createJob(recruiterId: bigint, data: CreateJobRequest["body"]) {
    return prisma.jobPost.create({
      data: {
        recruiter_id: recruiterId,
        job_title: data.title,
        description: data.description,
        employment_type: data.employmentType,
        job_type: data.jobType,
        salary_min: data.salaryMin ? BigInt(data.salaryMin) : null,
        salary_max: data.salaryMax ? BigInt(data.salaryMax) : null,
        currency_id: data.currencyId || 1, // Default to INR
        min_exp: data.minExperience ? BigInt(data.minExperience) : null,
        max_exp: data.maxExperience ? BigInt(data.maxExperience) : null,
        state_id: data.stateId,
        city_id: data.cityId,
        benefits: data.benefits,
        openings_count: data.openingsCount || 1,
        application_deadline: data.applicationDeadline
          ? new Date(data.applicationDeadline)
          : null,
        job_status: "Active",
        job_skills: {
          create: data.skillIds.map((skillId) => ({
            skill_id: skillId,
          })),
        },
      },
      include: {
        job_skills: {
          include: {
            skill: true,
          },
        },
        currency_rel: true,
        state: true,
        city: true,
      },
    });
  }

  /**
   * Get job by ID with all details
   */
  async getJobById(jobId: bigint) {
    return prisma.jobPost.findUnique({
      where: { id: jobId },
      include: {
        recruiter: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        job_skills: {
          include: {
            skill: true,
          },
        },
        currency_rel: true,
        state: true,
        city: true,
        applications: {
          select: {
            id: true,
            candidate_id: true,
            status: true,
            applied_at: true,
          },
        },
      },
    });
  }

  /**
   * Get all jobs posted by a specific recruiter
   */
  async getRecruiterJobs(recruiterId: bigint) {
    return prisma.jobPost.findMany({
      where: {
        recruiter_id: recruiterId,
      },
      include: {
        job_skills: {
          include: {
            skill: true,
          },
        },
        currency_rel: true,
        state: true,
        city: true,
        applications: {
          select: {
            id: true,
            candidate_id: true,
            status: true,
            applied_at: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
  }

  /**
   * Update a job post
   */
  async updateJob(jobId: bigint, data: any) {
    // Disconnect old skills first
    await prisma.jobSkill.deleteMany({
      where: {
        job_id: jobId,
      },
    });

    return prisma.jobPost.update({
      where: { id: jobId },
      data: {
        job_title: data.title,
        description: data.description,
        employment_type: data.employmentType,
        job_type: data.jobType,
        salary_min: data.salaryMin ? BigInt(data.salaryMin) : undefined,
        salary_max: data.salaryMax ? BigInt(data.salaryMax) : undefined,
        currency_id: data.currencyId,
        min_exp: data.minExperience ? BigInt(data.minExperience) : undefined,
        max_exp: data.maxExperience ? BigInt(data.maxExperience) : undefined,
        state_id: data.stateId,
        city_id: data.cityId,
        benefits: data.benefits,
        openings_count: data.openingsCount,
        application_deadline: data.applicationDeadline
          ? new Date(data.applicationDeadline)
          : undefined,
        job_status: data.jobStatus,
        job_skills: {
          create: data.skillIds
            ? data.skillIds.map((skillId: number) => ({
                skill_id: skillId,
              }))
            : [],
        },
      },
      include: {
        job_skills: {
          include: {
            skill: true,
          },
        },
        currency_rel: true,
        state: true,
        city: true,
      },
    });
  }

  /**
   * Delete a job post
   */
  async deleteJob(jobId: bigint) {
    // Delete related records first
    await prisma.jobSkill.deleteMany({
      where: { job_id: jobId },
    });

    await prisma.application.deleteMany({
      where: { job_id: jobId },
    });

    return prisma.jobPost.delete({
      where: { id: jobId },
    });
  }

  /**
   * Filter jobs by location and salary range
   * Used by candidates to search jobs
   */
  async filterJobs(filters: FilterJobRequest["query"]) {
    const whereConditions: any = {
      job_status: "Active",
    };

    // Filter by location (state and/or city)
    if (filters.stateId) {
      whereConditions.state_id = parseInt(filters.stateId as string);
    }

    if (filters.cityId) {
      whereConditions.city_id = parseInt(filters.cityId as string);
    }

    // Filter by salary range
    if (filters.salaryMin || filters.salaryMax) {
      whereConditions.AND = [];

      if (filters.salaryMin) {
        whereConditions.AND.push({
          salary_max: {
            gte: BigInt(filters.salaryMin as string),
          },
        });
      }

      if (filters.salaryMax) {
        whereConditions.AND.push({
          salary_min: {
            lte: BigInt(filters.salaryMax as string),
          },
        });
      }
    }

    // Filter by employment type
    if (filters.employmentType) {
      whereConditions.employment_type = filters.employmentType;
    }

    // Filter by job type (Remote, OnSite, Hybrid)
    if (filters.jobType) {
      whereConditions.job_type = filters.jobType;
    }

    return prisma.jobPost.findMany({
      where: whereConditions,
      include: {
        recruiter: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        job_skills: {
          include: {
            skill: true,
          },
        },
        currency_rel: true,
        state: true,
        city: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: filters.limit ? parseInt(filters.limit as string) : 10,
      skip: filters.offset ? parseInt(filters.offset as string) : 0,
    });
  }

  /**
   * Get count of total active jobs (useful for pagination)
   */
  async getTotalActiveJobs() {
    return prisma.jobPost.count({
      where: {
        job_status: "Active",
      },
    });
  }

  /**
   * Search jobs by title and description
   */
  async searchJobs(searchTerm: string) {
    return prisma.jobPost.findMany({
      where: {
        job_status: "Active",
        OR: [
          {
            job_title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        recruiter: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        job_skills: {
          include: {
            skill: true,
          },
        },
        currency_rel: true,
        state: true,
        city: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
  }
}
