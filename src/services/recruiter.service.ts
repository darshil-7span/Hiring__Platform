import { recruiterRepository } from "../dao/recruiter.dao";
import { 
  UpdateRecruiterProfileData, 
  RecruiterProfileResponse,
  formatRecruiterProfileResponse 
} from "../types";
import { getLogger } from "../utils/logger";
import { NotFoundError } from "../utils/errors";

const logger = getLogger("RecruiterService");
const getProfile = async (userId: bigint): Promise<RecruiterProfileResponse> => {
  logger.info(`[GET_PROFILE] Fetching recruiter profile for user: ${userId}`);
  
  const profile = await recruiterRepository.getRecruiterProfile(userId);
  
  if (!profile) {
    logger.warn(`[GET_PROFILE] Recruiter profile not found for user: ${userId}`);
    throw NotFoundError("Recruiter profile not found");
  }
  
  logger.info(`[GET_PROFILE] Successfully transformed recruiter profile for user: ${userId}`);
  return formatRecruiterProfileResponse(profile);
};

const updateProfile = async (userId: bigint, data: UpdateRecruiterProfileData): Promise<RecruiterProfileResponse> => {
  logger.info(`[UPDATE_PROFILE] Updating recruiter profile for user: ${userId}`);
  
  const exists = await recruiterRepository.profileExists(userId);
  if (!exists) {
    logger.warn(`[UPDATE_PROFILE] Recruiter profile not found for user: ${userId}`);
    throw NotFoundError("Recruiter profile not found");
  }

  const profile = await recruiterRepository.updateRecruiterProfile(userId, data);
  
  logger.info(`[UPDATE_PROFILE] Successfully updated and transformed profile for user: ${userId}`);
  return formatRecruiterProfileResponse(profile);
};

export const recruiterService = {
  getProfile,
  updateProfile,
};
