import prisma from "../config/prisma";
import { getLogger } from "../utils/logger";

const logger = getLogger("JobDAO");

/**
 * Job Repository (DAO Layer)
 * All database operations related to job posts
 */

/**
 * Create a new job post
 */
const createJob = async (recruiterId: bigint, data: any) => {
  logger.info(`Creating job post for recruiter: ${recruiterId}`);
  const job = await prisma.jobPost.create({
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
        create: data.skillIds.map((skillId: number) => ({
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
  logger.info(`Job post created successfully: ${job.id}`);
  return job;
};

/**
 * Get job by ID with all details
 */
const getJobById = async (jobId: bigint) => {
  logger.info(`Querying job by ID: ${jobId}`);
  const job = await prisma.jobPost.findUnique({
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
  logger.info(`Job ${job ? "found" : "not found"} for ID: ${jobId}`);
  return job;
};

/**
 * Get all jobs posted by a specific recruiter
 */
const getRecruiterJobs = async (recruiterId: bigint) => {
  logger.info(`Querying jobs for recruiter: ${recruiterId}`);
  const jobs = await prisma.jobPost.findMany({
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
  logger.info(`Found ${jobs.length} jobs for recruiter: ${recruiterId}`);
  return jobs;
};

/**
 * Update a job post
 */
const updateJob = async (jobId: bigint, data: any) => {
  logger.info(`Updating job: ${jobId}`);
  
  // Disconnect old skills first
  await prisma.jobSkill.deleteMany({
    where: {
      job_id: jobId,
    },
  });

  const updatedJob = await prisma.jobPost.update({
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
  logger.info(`Job updated successfully: ${jobId}`);
  return updatedJob;
};

/**
 * Delete a job post
 */
const deleteJob = async (jobId: bigint) => {
  logger.info(`Deleting job: ${jobId}`);
  
  // Delete related records first
  await prisma.jobSkill.deleteMany({
    where: { job_id: jobId },
  });

  await prisma.application.deleteMany({
    where: { job_id: jobId },
  });

  const deletedJob = await prisma.jobPost.delete({
    where: { id: jobId },
  });
  logger.info(`Job deleted successfully: ${jobId}`);
  return deletedJob;
};

/**
 * Filter jobs by location and salary range
 */
const filterJobs = async (filters: any) => {
  logger.info(`Filtering jobs with criteria`, filters);
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

  const jobs = await prisma.jobPost.findMany({
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
  logger.info(`Found ${jobs.length} jobs matching filter criteria`);
  return jobs;
};

/**
 * Get count of total active jobs
 */
const getTotalActiveJobs = async () => {
  logger.info(`Counting total active jobs`);
  const count = await prisma.jobPost.count({
    where: {
      job_status: "Active",
    },
  });
  logger.info(`Total active jobs: ${count}`);
  return count;
};

/**
 * Search jobs by title and description
 */
const searchJobs = async (searchTerm: string) => {
  logger.info(`Searching jobs with term: ${searchTerm}`);
  const jobs = await prisma.jobPost.findMany({
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
  logger.info(`Found ${jobs.length} jobs matching search term: ${searchTerm}`);
  return jobs;
};

/**
 * Create a job application for a candidate
 */
const applyToJob = async (candidateId: bigint, jobPostId: number) => {
  logger.info(`Candidate ${candidateId} applying to job: ${jobPostId}`);
  
  // Ensure job exists and is active
  const job = await prisma.jobPost.findUnique({
    where: { id: BigInt(jobPostId) },
  });

  if (!job || job.job_status !== "Active") {
    logger.warn(`Job not found or not active: ${jobPostId}`);
    throw new Error("Job not found or not active");
  }

  // Prevent duplicate applications
  const existingApplication = await prisma.application.findFirst({
    where: {
      job_id: job.id,
      candidate_id: candidateId,
    },
  });

  if (existingApplication) {
    logger.warn(`Duplicate application attempt: Candidate ${candidateId}, Job ${jobPostId}`);
    throw new Error("You have already applied for this job");
  }

  const application = await prisma.application.create({
    data: {
      job_id: job.id,
      candidate_id: candidateId,
      status: "Applied",
      applied_at: new Date(),
    },
  });
  logger.info(`Application created successfully: ${application.id}`);
  return application;
};

export const jobRepository = {
  createJob,
  getJobById,
  getRecruiterJobs,
  updateJob,
  deleteJob,
  filterJobs,
  getTotalActiveJobs,
  searchJobs,
  applyToJob,
};
