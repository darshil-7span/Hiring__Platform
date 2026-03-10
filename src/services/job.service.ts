import { jobRepository } from "../dao/job.dao";
import { getLogger } from "../utils/logger";
import { NotFoundError, ForbiddenError, BadRequestError } from "../utils/errors";
import { 
  formatJobResponse, 
  formatJobListResponse, 
  formatJobSearchResponse,
  formatJobCreateResponse,
  formatJobUpdateResponse,
  type JobPostCreateData, 
  type JobPostUpdateData, 
  type JobFilterCriteria 
} from "../types";

const logger = getLogger("JobService");

const createJob = async (recruiterId: bigint, data: JobPostCreateData) => {
  logger.info(`[JobService] Creating job for recruiter: ${recruiterId}`);
  const job = await jobRepository.createJob(recruiterId, data);
  logger.info(`[JobService] Job created successfully: ${job.id}`);
  
  return formatJobCreateResponse(job);
};

const getJobById = async (jobId: bigint) => {
  logger.info(`[JobService] Fetching job: ${jobId}`);
  const job = await jobRepository.getJobById(jobId);
  
  if (!job) {
    logger.warn(`[JobService] Job not found: ${jobId}`);
    throw NotFoundError("Job not found");
  }
  
  logger.info(`[JobService] Job retrieved: ${jobId}`);

  return formatJobResponse(job);
};

const getRecruiterJobs = async (recruiterId: bigint) => {
  logger.info(`[JobService] Fetching jobs for recruiter: ${recruiterId}`);
  const jobs = await jobRepository.getRecruiterJobs(recruiterId);
  logger.info(`[JobService] Found ${jobs.length} jobs for recruiter: ${recruiterId}`);
  
  return {
    total: jobs.length,
    jobs: jobs.map(formatJobListResponse),
  };
};

const updateJob = async (jobId: bigint, recruiterId: bigint, data: JobPostUpdateData) => {
  logger.info(`[JobService] Updating job: ${jobId}`);
  
  const job = await jobRepository.getJobById(jobId);
  
  if (!job) {
    logger.warn(`[JobService] Job not found: ${jobId}`);
    throw NotFoundError("Job not found");
  }
  
  if (job.recruiter_id !== recruiterId) {
    logger.warn(`[JobService] Unauthorized - Not job owner`, { jobId, recruiterId });
    throw ForbiddenError("You are not authorized to update this job");
  }
  
  const updatedJob = await jobRepository.updateJob(jobId, data);
  logger.info(`[JobService] Job updated successfully: ${jobId}`);
  
  return formatJobUpdateResponse(updatedJob);
};

const deleteJob = async (jobId: bigint, recruiterId: bigint) => {
  logger.info(`[JobService] Deleting job: ${jobId}`);
  
  const job = await jobRepository.getJobById(jobId);
  
  if (!job) {
    logger.warn(`[JobService] Job not found: ${jobId}`);
    throw NotFoundError("Job not found");
  }
  
  if (job.recruiter_id.toString() !== recruiterId.toString()) {
    logger.warn(`[JobService] Unauthorized - Not job owner`, { jobId, recruiterId });
    throw ForbiddenError("You are not authorized to delete this job");
  }
  
  await jobRepository.deleteJob(jobId);
  logger.info(`[JobService] Job deleted successfully: ${jobId}`);
  
  return { deletedJobId: jobId };
};

const filterJobs = async (filters: JobFilterCriteria) => {
  logger.info(`[JobService] Filtering jobs`);
  const jobs = await jobRepository.filterJobs(filters);
  const total = await jobRepository.getTotalActiveJobs();
  const limit = parseInt((filters.limit as string) || "10");
  const offset = parseInt((filters.offset as string) || "0");
  
  logger.info(`[JobService] Found ${jobs.length} jobs out of ${total} total`);
  
  return {
    total,
    limit,
    offset,
    jobs: jobs.map(formatJobSearchResponse),
  };
};

const searchJobs = async (searchTerm: string) => {
  logger.info(`[JobService] Searching jobs with term: ${searchTerm}`);
  
  if (!searchTerm || searchTerm.length < 2) {
    logger.warn(`[JobService] Invalid search term`);
    throw BadRequestError("Search term must be at least 2 characters");
  }
  
  const jobs = await jobRepository.searchJobs(searchTerm);
  logger.info(`[JobService] Found ${jobs.length} jobs matching: ${searchTerm}`);
  
  return {
    total: jobs.length,
    jobs: jobs.map(formatJobSearchResponse),
  };
};

const getAllJobs = async (limit: number, offset: number) => {
  logger.info(`[JobService] Getting all jobs (limit: ${limit}, offset: ${offset})`);
  
  const jobs = await jobRepository.filterJobs({
    limit: limit.toString(),
    offset: offset.toString(),
  });
  
  const total = await jobRepository.getTotalActiveJobs();
  logger.info(`[JobService] Retrieved ${jobs.length} jobs out of ${total} total`);
  
  return {
    total,
    limit,
    offset,
    jobs: jobs.map(formatJobSearchResponse),
  };
};

const applyToJob = async (candidateId: bigint, jobPostId: number) => {
  logger.info(`[JobService] Candidate ${candidateId} applying to job: ${jobPostId}`);
  const application = await jobRepository.applyToJob(candidateId, jobPostId);
  logger.info(`[JobService] Application created: ${application.id}`);
  return application;
};

export const jobService = {
  createJob,
  getJobById,
  getRecruiterJobs,
  updateJob,
  deleteJob,
  filterJobs,
  searchJobs,
  getAllJobs,
  applyToJob,
};
