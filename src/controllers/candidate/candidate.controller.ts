import { Request, Response } from "express";
import { jobRepository } from "../../dao/job.dao";
import { candidateService } from "../../services/candidate.service";
import { getLogger } from "../../utils/logger";
import { sendResponse } from "../../utils/apiResponse";
import { UnauthorizedError, BadRequestError } from "../../utils/errors";

const logger = getLogger("CandidateController");

/**
 * Get candidate profile
 * GET /api/candidate/profile
 */
const getProfile = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_PROFILE] API request received`);
  
  const userId = req.user?.id;  // From auth middleware
  
  if (!userId) {
    throw UnauthorizedError("User not authenticated");
  }

  logger.info(`[GET_PROFILE] Fetching profile for user: ${userId}`);
  const profile = await candidateService.getProfile(BigInt(userId));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile retrieved successfully",
    data: profile,
  });
  
  logger.info(`[GET_PROFILE] API response sent successfully`);
};

/**
 * Update candidate profile
 * PATCH /api/candidate/profile
 */
const updateProfile = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[UPDATE_PROFILE] API request received`);
  
  const userId = req.user?.id;  // From auth middleware
  
  if (!userId) {
    throw UnauthorizedError("User not authenticated");
  }

  const { state_id, city_id, qualification, experience_years, resume_url } = req.body;

  logger.info(`[UPDATE_PROFILE] Updating profile for user: ${userId}`);
  const profile = await candidateService.updateProfile(BigInt(userId), {
    state_id,
    city_id,
    qualification,
    experience_years,
    resume_url,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile updated successfully",
    data: profile,
  });
  
  logger.info(`[UPDATE_PROFILE] API response sent successfully`);
};

/**
 * CANDIDATE: Apply to a job using authenticated user id
 * Route: POST /api/candidate/apply
 * Body: { jobPostId }
 * Auth: Required (Candidate role)
 */
const applyToJob = async (req: Request, res: Response) => {
  logger.info(`[APPLY_TO_JOB] API request received`);
  
  if (!req.user?.id) {
    throw UnauthorizedError("User not authenticated");
  }

  const candidateId = BigInt(req.user.id);
  const { jobPostId } = req.body as { jobPostId: number };

  if (!jobPostId) {
    throw BadRequestError("Job Post ID is required");
  }

  logger.info(`[APPLY_TO_JOB] Candidate ${candidateId} applying to job: ${jobPostId}`);
  const application = await jobRepository.applyToJob(candidateId, jobPostId);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Job application submitted successfully",
    data: {
      applicationId: application.id,
      jobPostId: application.job_id,
      candidateId: application.candidate_id,
      status: application.status,
      appliedAt: application.applied_at,
    },
  });
  
  logger.info(`[APPLY_TO_JOB] Application submitted successfully - ID: ${application.id}`);
};

export const candidateController = {
  getProfile,
  updateProfile,
  applyToJob,
};

