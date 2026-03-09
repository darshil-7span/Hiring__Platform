import { recruiterRepository } from "../dao/recruiter.dao";
import { UpdateRecruiterProfileData, RecruiterProfileResponse } from "../types";
import { getLogger } from "../utils/logger";
import { NotFoundError } from "../utils/errors";

const logger = getLogger("RecruiterService");

/**
 * Recruiter Service (Business Logic Layer)
 * Handles recruiter profile business logic
 */

/**
 * Get recruiter profile
 */
const getProfile = async (userId: bigint): Promise<RecruiterProfileResponse> => {
  logger.info(`[GET_PROFILE] Fetching recruiter profile for user: ${userId}`);
  
  const profile = await recruiterRepository.getRecruiterProfile(userId);
  
  if (!profile) {
    logger.warn(`[GET_PROFILE] Recruiter profile not found for user: ${userId}`);
    throw NotFoundError("Recruiter profile not found");
  }

  const response = {
    user: {
      id: Number(profile.user.id),
      name: profile.user.name,
      email: profile.user.email,
      phone_number: profile.user.phone_number,
    },
    profile: {
      designation: profile.designation,
      state_id: profile.state_id,
      state_name: profile.state?.name,
      city_id: profile.city_id,
      city_name: profile.city?.name,
      created_at: profile.created_at,
      updated_at: profile.updated_at,
    },
  };
  
  logger.info(`[GET_PROFILE] Successfully transformed recruiter profile for user: ${userId}`);
  return response;
};

/**
 * Update recruiter profile
 */
const updateProfile = async (userId: bigint, data: UpdateRecruiterProfileData): Promise<RecruiterProfileResponse> => {
  logger.info(`[UPDATE_PROFILE] Updating recruiter profile for user: ${userId}`);
  
  // Check if profile exists
  const exists = await recruiterRepository.profileExists(userId);
  if (!exists) {
    logger.warn(`[UPDATE_PROFILE] Recruiter profile not found for user: ${userId}`);
    throw NotFoundError("Recruiter profile not found");
  }

  const profile = await recruiterRepository.updateRecruiterProfile(userId, data);

  const response = {
    user: {
      id: Number(profile.user.id),
      name: profile.user.name,
      email: profile.user.email,
      phone_number: profile.user.phone_number,
    },
    profile: {
      designation: profile.designation,
      state_id: profile.state_id,
      state_name: profile.state?.name,
      city_id: profile.city_id,
      city_name: profile.city?.name,
      created_at: profile.created_at,
      updated_at: profile.updated_at,
    },
  };
  
  logger.info(`[UPDATE_PROFILE] Successfully updated and transformed profile for user: ${userId}`);
  return response;
};

export const recruiterService = {
  getProfile,
  updateProfile,
};
