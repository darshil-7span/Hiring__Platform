import { Request, Response } from "express";
import { jobRepository } from "../../dao/job.dao";
import { getLogger } from "../../utils/logger";
import { sendResponse } from "../../utils/apiResponse";
import { NotFoundError, ForbiddenError } from "../../utils/errors";

const logger = getLogger("JobController");

/**
 * Job Controller
 * Handles all job-related operations for recruiters and candidates
 */

// Extend Express Request to include user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string | number;
        email: string;
        role: string;
      };
    }
  }
}

/**
 * RECRUITER: Post a new job
 */
const createJob = async (req: Request, res: Response) => {
  logger.info(`[CREATE_JOB] API request received`);
  
  const recruiterId = BigInt(req.user!.id);  // Guaranteed by authRole middleware
  const jobData = req.body;

  // Create job in database
  const job = await jobRepository.createJob(recruiterId, jobData);

  logger.info(`[CREATE_JOB] Job created successfully`, { jobId: job.id });
  
  sendResponse(res, {
    statusCode: 201,
    message: "Job posted successfully",
    data: {
      jobId: job.id,
      title: job.job_title,
      description: job.description,
      salaryRange: {
        min: job.salary_min?.toString(),
        max: job.salary_max?.toString(),
      },
      createdAt: job.created_at,
    },
  });
};

/**
 * RECRUITER: Get all jobs posted by the recruiter
 */
const getMyJobs = async (req: Request, res: Response) => {
  logger.info(`[GET_MY_JOBS] API request received`);
  
  const recruiterId = BigInt(req.user!.id);  // Guaranteed by authRole middleware
  const jobs = await jobRepository.getRecruiterJobs(recruiterId);

  logger.info(`[GET_MY_JOBS] Retrieved ${jobs.length} jobs`);
  
  sendResponse(res, {
    statusCode: 200,
    message: "Jobs retrieved successfully",
    data: {
      total: jobs.length,
      jobs: jobs.map((job) => ({
        jobId: job.id,
        title: job.job_title,
        location: `${job.city?.name}, ${job.state?.name}`,
        salaryRange: {
          min: job.salary_min?.toString(),
          max: job.salary_max?.toString(),
        },
        status: job.job_status,
        applicationsCount: job.applications?.length || 0,
        createdAt: job.created_at,
      })),
    },
  });
};

/**
 * RECRUITER: Get a specific job by ID
 */
const getJobById = async (req: Request, res: Response) => {
  logger.info(`[GET_JOB_BY_ID] API request received`, { jobId: req.params.id });
  
  const jobId = BigInt(req.params.id as string);
  const job = await jobRepository.getJobById(jobId);

  if (!job) {
    logger.warn(`[GET_JOB_BY_ID] Job not found`, { jobId: req.params.id });
    throw NotFoundError("Job not found");
  }

  logger.info(`[GET_JOB_BY_ID] Job retrieved successfully`, { jobId: job.id });
  
  sendResponse(res, {
    statusCode: 200,
    message: "Job retrieved successfully",
    data: {
      jobId: job.id,
      title: job.job_title,
      description: job.description,
      recruiter: job.recruiter
        ? {
            name: job.recruiter.name,
            email: job.recruiter.email,
          }
        : null,
      location: {
        state: job.state?.name,
        city: job.city?.name,
      },
      salary: {
        min: job.salary_min?.toString(),
        max: job.salary_max?.toString(),
        currency: job.currency_rel?.code,
      },
      experience: {
        min: job.min_exp?.toString(),
        max: job.max_exp?.toString(),
      },
      employmentType: job.employment_type,
      jobType: job.job_type,
      benefits: job.benefits,
      openingsCount: job.openings_count,
      status: job.job_status,
      skills:
        job.job_skills?.map((js) => ({
          id: js.skill.id,
          name: js.skill.name,
        })) || [],
      applicationsCount: job.applications?.length || 0,
      createdAt: job.created_at,
      updatedAt: job.updated_at,
    },
  });
};

/**
 * RECRUITER: Update a job
 */
const updateJob = async (req: Request, res: Response) => {
  logger.info(`[UPDATE_JOB] API request received`, { jobId: req.params.id });
  
  const jobId = BigInt(req.params.id as string);
  const recruiterId = BigInt(req.user!.id);  // Guaranteed by authRole middleware

  // Verify job belongs to recruiter
  const job = await jobRepository.getJobById(jobId);

  if (!job) {
    logger.warn(`[UPDATE_JOB] Job not found`, { jobId: req.params.id });
    throw NotFoundError("Job not found");
  }

  if (job.recruiter_id !== recruiterId) {
    logger.warn(`[UPDATE_JOB] Unauthorized - Not job owner`, { jobId, recruiterId });
    throw ForbiddenError("You are not authorized to update this job");
  }

  const updateData = req.body;
  const updatedJob = await jobRepository.updateJob(jobId, updateData);

  logger.info(`[UPDATE_JOB] Job updated successfully`, { jobId: updatedJob.id });
  
  sendResponse(res, {
    statusCode: 200,
    message: "Job updated successfully",
    data: {
      jobId: updatedJob.id,
      title: updatedJob.job_title,
      description: updatedJob.description,
      salaryRange: {
        min: updatedJob.salary_min?.toString(),
        max: updatedJob.salary_max?.toString(),
      },
      status: updatedJob.job_status,
      updatedAt: updatedJob.updated_at,
    },
  });
};

/**
 * RECRUITER: Delete a job
 */
const deleteJob = async (req: Request, res: Response) => {
  logger.info(`[DELETE_JOB] API request received`, { jobId: req.params.id });
  
  const jobId = BigInt(req.params.id as string);
  const recruiterId = BigInt(req.user!.id);  // Guaranteed by authRole middleware

  // Verify job belongs to recruiter
  const job = await jobRepository.getJobById(jobId);

  if (!job) {
    logger.warn(`[DELETE_JOB] Job not found`, { jobId: req.params.id });
    throw NotFoundError("Job not found");
  }

  if (!job.recruiter_id || job.recruiter_id.toString() !== recruiterId.toString()) {
    logger.warn(`[DELETE_JOB] Unauthorized - Not job owner`, { jobId, recruiterId });
    throw ForbiddenError("You are not authorized to delete this job");
  }

  await jobRepository.deleteJob(jobId);

  logger.info(`[DELETE_JOB] Job deleted successfully`, { jobId });
  
  sendResponse(res, {
    statusCode: 200,
    message: "Job deleted successfully",
    data: {
      deletedJobId: jobId,
    },
  });
};

/**
 * Filter jobs by location and salary range
 */
const filterJobs = async (req: Request, res: Response) => {
  logger.info(`[FILTER_JOBS] API request received`);
  
  const filters = req.query as any;
  const jobs = await jobRepository.filterJobs(filters);
  const total = await jobRepository.getTotalActiveJobs();

  logger.info(`[FILTER_JOBS] Found ${jobs.length} jobs`);
  
  sendResponse(res, {
    statusCode: 200,
    message: "Jobs filtered successfully",
    data: {
      total,
      limit: parseInt((filters.limit as string) || "10"),
      offset: parseInt((filters.offset as string) || "0"),
      jobs: jobs.map((job) => ({
        jobId: job.id,
        title: job.job_title,
        description: (job.description?.substring(0, 150) || "") + "...",
        recruiter: job.recruiter
          ? {
              name: job.recruiter.name,
            }
          : null,
        location: {
          state: job.state?.name,
          city: job.city?.name,
        },
        salaryRange: {
          min: job.salary_min?.toString(),
          max: job.salary_max?.toString(),
        },
        employmentType: job.employment_type,
        jobType: job.job_type,
        skills: job.job_skills?.map((js) => js.skill.name) || [],
        openingsCount: job.openings_count,
        createdAt: job.created_at,
      })),
    },
  });
};

/**
 * Search jobs by title and description
 */
const searchJobs = async (req: Request, res: Response) => {
  logger.info(`[SEARCH_JOBS] API request received`);
  
  const searchTerm = req.query.q as string;

  if (!searchTerm || searchTerm.length < 2) {
    logger.warn(`[SEARCH_JOBS] Invalid search term`);
    throw new Error("Search term must be at least 2 characters");
  }

  const jobs = await jobRepository.searchJobs(searchTerm);

  logger.info(`[SEARCH_JOBS] Found ${jobs.length} jobs`, { searchTerm });
  
  sendResponse(res, {
    statusCode: 200,
    message: `Found ${jobs.length} jobs matching "${searchTerm}"`,
    data: {
      total: jobs.length,
      jobs: jobs.map((job) => ({
        jobId: job.id,
        title: job.job_title,
        description: (job.description?.substring(0, 150) || "") + "...",
        recruiter: job.recruiter
          ? {
              name: job.recruiter.name,
            }
          : null,
        location: {
          state: job.state?.name,
          city: job.city?.name,
        },
        salaryRange: {
          min: job.salary_min?.toString(),
          max: job.salary_max?.toString(),
        },
        createdAt: job.created_at,
      })),
    },
  });
};

/**
 * Get all active jobs
 */
const getAllJobs = async (req: Request, res: Response) => {
  logger.info(`[GET_ALL_JOBS] API request received`);
  
  const limit = parseInt((req.query.limit as string) || "10");
  const offset = parseInt((req.query.offset as string) || "0");

  const jobs = await jobRepository.filterJobs({
    limit: limit.toString(),
    offset: offset.toString(),
  });

  const total = await jobRepository.getTotalActiveJobs();

  logger.info(`[GET_ALL_JOBS] Retrieved ${jobs.length} jobs`);
  
  sendResponse(res, {
    statusCode: 200,
    message: "All jobs retrieved successfully",
    data: {
      total,
      limit,
      offset,
      jobs: jobs.map((job) => ({
        jobId: job.id,
        title: job.job_title,
        description: (job.description?.substring(0, 150) || "") + "...",
        recruiter: job.recruiter
          ? {
              name: job.recruiter.name,
            }
          : null,
        location: {
          state: job.state?.name,
          city: job.city?.name,
        },
        salaryRange: {
          min: job.salary_min?.toString(),
          max: job.salary_max?.toString(),
        },
        employmentType: job.employment_type,
        jobType: job.job_type,
        createdAt: job.created_at,
      })),
    },
  });
};

export const jobController = {
  createJob,
  getMyJobs,
  getJobById,
  updateJob,
  deleteJob,
  filterJobs,
  searchJobs,
  getAllJobs,
};

