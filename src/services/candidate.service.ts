import { candidateRepository, UpdateCandidateProfileData } from "../repositories/candidate.repository";
import { getLogger } from "../utils/logger";
import { NotFoundError } from "../utils/errors";

const logger = getLogger("CandidateService");

/**
 * Candidate Service (Business Logic Layer)
 * Handles candidate profile business logic
 */

/**
 * Get candidate profile
 */
const getProfile = async (userId: bigint) => {
  logger.info(`[GET_PROFILE] Fetching candidate profile for user: ${userId}`);
  
  const profile = await candidateRepository.getCandidateProfile(userId);
  
  if (!profile) {
    logger.warn(`[GET_PROFILE] Candidate profile not found for user: ${userId}`);
    throw NotFoundError("Candidate profile not found");
  }

  const response = {
    user: {
      id: Number(profile.user.id),
      name: profile.user.name,
      email: profile.user.email,
      phone_number: profile.user.phone_number,
    },
    profile: {
      state_id: profile.state_id,
      state_name: profile.state?.name,
      city_id: profile.city_id,
      city_name: profile.city?.name,
      qualification: profile.qualification,
      experience_years: profile.experience_years,
      resume_url: profile.resume_url,
      created_at: profile.created_at,
      updated_at: profile.updated_at,
    },
  };
  
  logger.info(`[GET_PROFILE] Successfully transformed candidate profile for user: ${userId}`);
  return response;
};

/**
 * Update candidate profile
 */
const updateProfile = async (userId: bigint, data: UpdateCandidateProfileData) => {
  logger.info(`[UPDATE_PROFILE] Updating candidate profile for user: ${userId}`);
  
  // Check if profile exists
  const exists = await candidateRepository.profileExists(userId);
  if (!exists) {
    logger.warn(`[UPDATE_PROFILE] Candidate profile not found for user: ${userId}`);
    throw NotFoundError("Candidate profile not found");
  }

  const profile = await candidateRepository.updateCandidateProfile(userId, data);

  const response = {
    user: {
      id: Number(profile.user.id),
      name: profile.user.name,
      email: profile.user.email,
      phone_number: profile.user.phone_number,
    },
    profile: {
      state_id: profile.state_id,
      state_name: profile.state?.name,
      city_id: profile.city_id,
      city_name: profile.city?.name,
      qualification: profile.qualification,
      experience_years: profile.experience_years,
      resume_url: profile.resume_url,
      updated_at: profile.updated_at,
    },
  };
  
  logger.info(`[UPDATE_PROFILE] Successfully updated and transformed profile for user: ${userId}`);
  return response;
};

export const candidateService = {
  getProfile,
  updateProfile,
};
