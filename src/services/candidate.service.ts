import { candidateRepository } from "../dao/candidate.dao";
import { 
  UpdateCandidateProfileData, 
  CandidateProfileResponse,
  formatCandidateProfileResponse 
} from "../types";
import { getLogger } from "../utils/logger";
import { NotFoundError } from "../utils/errors";

const logger = getLogger("CandidateService");
const getProfile = async (userId: bigint): Promise<CandidateProfileResponse> => {
  logger.info(`[GET_PROFILE] Fetching candidate profile for user: ${userId}`);
  
  const profile = await candidateRepository.getCandidateProfile(userId);
  
  if (!profile) {
    logger.warn(`[GET_PROFILE] Candidate profile not found for user: ${userId}`);
    throw NotFoundError("Candidate profile not found");
  }
  
  logger.info(`[GET_PROFILE] Successfully transformed candidate profile for user: ${userId}`);
  return formatCandidateProfileResponse(profile);
};

const updateProfile = async (userId: bigint, data: UpdateCandidateProfileData): Promise<CandidateProfileResponse> => {
  logger.info(`[UPDATE_PROFILE] Updating candidate profile for user: ${userId}`);
  
  const exists = await candidateRepository.profileExists(userId);
  if (!exists) {
    logger.warn(`[UPDATE_PROFILE] Candidate profile not found for user: ${userId}`);
    throw NotFoundError("Candidate profile not found");
  }

  const profile = await candidateRepository.updateCandidateProfile(userId, data);
  
  logger.info(`[UPDATE_PROFILE] Successfully updated and transformed profile for user: ${userId}`);
  return formatCandidateProfileResponse(profile);
};

export const candidateService = {
  getProfile,
  updateProfile,
};
