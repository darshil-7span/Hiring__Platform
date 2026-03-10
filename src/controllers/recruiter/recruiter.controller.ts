import { Request, Response } from "express";
import { recruiterService } from "../../services/recruiter.service";
import { getLogger } from "../../utils/logger";
import { sendResponse } from "../../utils/apiResponse";

const logger = getLogger("RecruiterController");

/**
 * Recruiter Controller (HTTP Layer)
 * Handles HTTP requests for recruiter profile
 */

/**
 * Get recruiter profile
 * GET /api/recruiter/profile
 */
const getProfile = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_PROFILE] API request received`);
  
  const userId = req.user!.id;  // Guaranteed by authRole middleware

  logger.info(`[GET_PROFILE] Fetching profile for user: ${userId}`);
  const profile = await recruiterService.getProfile(BigInt(userId));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile retrieved successfully",
    data: profile,
  });
  
  logger.info(`[GET_PROFILE] API response sent successfully`);
};

/**
 * Update recruiter profile
 * PATCH /api/recruiter/profile
 */
const updateProfile = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[UPDATE_PROFILE] API request received`);
  
  const userId = req.user!.id;  // Guaranteed by authRole middleware

  const { designation, state_id, city_id } = req.body;

  logger.info(`[UPDATE_PROFILE] Updating profile for user: ${userId}`);
  const profile = await recruiterService.updateProfile(BigInt(userId), {
    designation,
    state_id,
    city_id,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile updated successfully",
    data: profile,
  });
  
  logger.info(`[UPDATE_PROFILE] API response sent successfully`);
};

export const recruiterController = {
  getProfile,
  updateProfile,
};