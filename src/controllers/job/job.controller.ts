import { Request, Response } from "express";
import { jobService } from "../../services/job.service";
import { getLogger } from "../../utils/logger";
import { sendResponse } from "../../utils/apiResponse";

const logger = getLogger("JobController");

const createJob = async (req: Request, res: Response) => {
  logger.info(`[CREATE_JOB] Request received`);
  const recruiterId = BigInt(req.user!.id);
  const data = await jobService.createJob(recruiterId, req.body);
  
  sendResponse(res, {
    statusCode: 201,
    message: "Job posted successfully",
    data,
  });
};

const getMyJobs = async (req: Request, res: Response) => {
  logger.info(`[GET_MY_JOBS] Request received`);
  const recruiterId = BigInt(req.user!.id);
  const data = await jobService.getRecruiterJobs(recruiterId);
  
  sendResponse(res, {
    statusCode: 200,
    message: "Jobs retrieved successfully",
    data,
  });
};

const getJobById = async (req: Request, res: Response) => {
  logger.info(`[GET_JOB_BY_ID] Request received`);
  const jobId = BigInt(req.params.id as string);
  const data = await jobService.getJobById(jobId);
  
  sendResponse(res, {
    statusCode: 200,
    message: "Job retrieved successfully",
    data,
  });
};

const updateJob = async (req: Request, res: Response) => {
  logger.info(`[UPDATE_JOB] Request received`);
  const jobId = BigInt(req.params.id as string);
  const recruiterId = BigInt(req.user!.id);
  const data = await jobService.updateJob(jobId, recruiterId, req.body);
  
  sendResponse(res, {
    statusCode: 200,
    message: "Job updated successfully",
    data,
  });
};

const deleteJob = async (req: Request, res: Response) => {
  logger.info(`[DELETE_JOB] Request received`);
  const jobId = BigInt(req.params.id as string);
  const recruiterId = BigInt(req.user!.id);
  const data = await jobService.deleteJob(jobId, recruiterId);
  
  sendResponse(res, {
    statusCode: 200,
    message: "Job deleted successfully",
    data,
  });
};

const filterJobs = async (req: Request, res: Response) => {
  logger.info(`[FILTER_JOBS] Request received`);
  const data = await jobService.filterJobs(req.query as any);
  
  sendResponse(res, {
    statusCode: 200,
    message: "Jobs filtered successfully",
    data,
  });
};

const searchJobs = async (req: Request, res: Response) => {
  logger.info(`[SEARCH_JOBS] Request received`);
  const searchTerm = req.query.q as string;
  const data = await jobService.searchJobs(searchTerm);
  
  sendResponse(res, {
    statusCode: 200,
    message: `Found ${data.total} jobs matching "${searchTerm}"`,
    data,
  });
};

const getAllJobs = async (req: Request, res: Response) => {
  logger.info(`[GET_ALL_JOBS] Request received`);
  const limit = parseInt((req.query.limit as string) || "10");
  const offset = parseInt((req.query.offset as string) || "0");
  const data = await jobService.getAllJobs(limit, offset);
  
  sendResponse(res, {
    statusCode: 200,
    message: "All jobs retrieved successfully",
    data,
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

