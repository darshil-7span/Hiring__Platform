import { Request, Response } from "express";
import { applicationService } from "../../services/application.service";
import { getLogger } from "../../utils/logger";
import { sendResponse } from "../../utils/apiResponse";
import { BadRequestError, UnauthorizedError } from "../../utils/errors";

const logger = getLogger("ApplicationController");

/**
 * Application Controller (HTTP Layer)
 * Handles HTTP requests for job applications
 */

/**
 * Get all candidate applications
 * GET /api/applications/candidates
 * Shows which candidates applied for which jobs
 */
const getAllCandidateApplications = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_ALL_APPLICATIONS] API request received`);

  const applications = await applicationService.getAllCandidateApplications();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Candidate applications retrieved successfully",
    data: {
      count: applications.length,
      applications,
    },
  });
  
  logger.info(`[GET_ALL_APPLICATIONS] API response sent with ${applications.length} applications`);
};

/**
 * Get applications for a specific job
 * GET /api/applications/job/:jobId
 */
const getApplicationsByJob = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_APPLICATIONS_BY_JOB] API request received`);
  
  const jobId = req.params.jobId;

  if (!jobId || Array.isArray(jobId)) {
    throw BadRequestError("Invalid Job ID");
  }

  logger.info(`[GET_APPLICATIONS_BY_JOB] Fetching applications for job: ${jobId}`);
  const applications = await applicationService.getApplicationsByJob(BigInt(jobId));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Job applications retrieved successfully",
    data: {
      count: applications.length,
      applications,
    },
  });
  
  logger.info(`[GET_APPLICATIONS_BY_JOB] API response sent with ${applications.length} applications`);
};

/**
 * Get applications by candidate (my applications)
 * GET /api/applications/my-applications
 */
const getMyCandidateApplications = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_MY_APPLICATIONS] API request received`);
  
  const userId = req.user?.id;

  if (!userId) {
    throw UnauthorizedError("User not authenticated");
  }

  logger.info(`[GET_MY_APPLICATIONS] Fetching applications for candidate: ${userId}`);
  const applications = await applicationService.getApplicationsByCandidate(BigInt(userId));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Your applications retrieved successfully",
    data: {
      count: applications.length,
      applications,
    },
  });
  
  logger.info(`[GET_MY_APPLICATIONS] API response sent with ${applications.length} applications`);
};

export const applicationController = {
  getAllCandidateApplications,
  getApplicationsByJob,
  getMyCandidateApplications,
};
