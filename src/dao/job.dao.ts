import prisma from "../config/prisma";
import { getLogger } from "../utils/logger";
import type { JobWithDetails, JobPostCreateData, JobPostUpdateData, JobFilterCriteria } from "../types";

const logger = getLogger("JobDAO");

// ============================================
// HELPER FUNCTIONS
// ============================================

const buildJobCreateData = (recruiterId: bigint, data: JobPostCreateData) => ({
  recruiter_id: recruiterId,
  job_title: data.title,
  description: data.description,
  employment_type: data.employmentType,
  job_type: data.jobType,
  salary_min: data.salaryMin ? BigInt(data.salaryMin) : null,
  salary_max: data.salaryMax ? BigInt(data.salaryMax) : null,
  currency_id: data.currencyId || 1,
  min_exp: data.minExperience ? BigInt(data.minExperience) : null,
  max_exp: data.maxExperience ? BigInt(data.maxExperience) : null,
  state_id: data.stateId,
  city_id: data.cityId,
  benefits: data.benefits,
  openings_count: data.openingsCount || 1,
  application_deadline: data.applicationDeadline ? new Date(data.applicationDeadline) : null,
  job_status: "Active" as const,
  job_skills: {
    create: data.skillIds.map((skillId: number) => ({
      skill_id: skillId,
    })),
  },
});

const buildJobUpdateData = (data: JobPostUpdateData) => ({
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
  application_deadline: data.applicationDeadline ? new Date(data.applicationDeadline) : undefined,
  job_status: data.jobStatus,
  job_skills: {
    create: data.skillIds
      ? data.skillIds.map((skillId: number) => ({
          skill_id: skillId,
        }))
      : [],
  },
});

const JOB_BASIC_INCLUDE = {
  job_skills: {
    include: {
      skill: true,
    },
  },
  currency_rel: true,
  state: true,
  city: true,
};

const JOB_DETAIL_INCLUDE = {
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
};

// ============================================
// DAO FUNCTIONS
// ============================================

const createJob = async (recruiterId: bigint, data: JobPostCreateData): Promise<JobWithDetails> => {
  logger.info(`Creating job post for recruiter: ${recruiterId}`);
  const job = await prisma.jobPost.create({
    data: buildJobCreateData(recruiterId, data),
    include: JOB_BASIC_INCLUDE,
  });
  logger.info(`Job post created successfully: ${job.id}`);
  return job;
};

const getJobById = async (jobId: bigint): Promise<JobWithDetails | null> => {
  logger.info(`Querying job by ID: ${jobId}`);
  const job = await prisma.jobPost.findUnique({
    where: { id: jobId },
    include: JOB_DETAIL_INCLUDE,
  });
  logger.info(`Job ${job ? "found" : "not found"} for ID: ${jobId}`);
  return job;
};

const getRecruiterJobs = async (recruiterId: bigint): Promise<JobWithDetails[]> => {
  logger.info(`Querying jobs for recruiter: ${recruiterId}`);
  const jobs = await prisma.jobPost.findMany({
    where: {
      recruiter_id: recruiterId,
    },
    include: JOB_DETAIL_INCLUDE,
    orderBy: {
      created_at: "desc",
    },
  });
  logger.info(`Found ${jobs.length} jobs for recruiter: ${recruiterId}`);
  return jobs;
};

const updateJob = async (jobId: bigint, data: JobPostUpdateData): Promise<JobWithDetails> => {
  logger.info(`Updating job: ${jobId}`);
  
  await prisma.jobSkill.deleteMany({
    where: {
      job_id: jobId,
    },
  });

  const updatedJob = await prisma.jobPost.update({
    where: { id: jobId },
    data: buildJobUpdateData(data),
    include: JOB_BASIC_INCLUDE,
  });
  logger.info(`Job updated successfully: ${jobId}`);
  return updatedJob;
};

const deleteJob = async (jobId: bigint): Promise<JobWithDetails> => {
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

const filterJobs = async (filters: JobFilterCriteria): Promise<JobWithDetails[]> => {
  logger.info(`Filtering jobs with criteria`, filters);
  const whereConditions: any = {
    job_status: "Active",
  };

  if (filters.stateId) {
    whereConditions.state_id = parseInt(filters.stateId as string);
  }

  if (filters.cityId) {
    whereConditions.city_id = parseInt(filters.cityId as string);
  }

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

  if (filters.employmentType) {
    whereConditions.employment_type = filters.employmentType;
  }

  if (filters.jobType) {
    whereConditions.job_type = filters.jobType;
  }

  const jobs = await prisma.jobPost.findMany({
    where: whereConditions,
    include: JOB_DETAIL_INCLUDE,
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

const searchJobs = async (searchTerm: string): Promise<JobWithDetails[]> => {
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
    include: JOB_DETAIL_INCLUDE,
    orderBy: {
      created_at: "desc",
    },
  });
  logger.info(`Found ${jobs.length} jobs matching search term: ${searchTerm}`);
  return jobs;
};

const applyToJob = async (candidateId: bigint, jobPostId: number): Promise<any> => {
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
