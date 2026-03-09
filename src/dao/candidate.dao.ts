import prisma from "../config/prisma";
import type { CandidateProfile, User, State, City } from "../../generated/prisma";
import { getLogger } from "../utils/logger";
import { UpdateCandidateProfileData } from "../types";

const logger = getLogger("CandidateDAO");

/**
 * Candidate Repository (DAO Layer)
 * All database operations for candidate profiles
 */

export type CandidateProfileWithRelations = CandidateProfile & {
  user: Pick<User, 'id' | 'name' | 'email' | 'phone_number'>;
  state: State | null;
  city: City | null;
};

/**
 * Get candidate profile by user ID
 */
const getCandidateProfile = async (userId: bigint): Promise<CandidateProfileWithRelations | null> => {
  logger.info(`Querying candidate profile for user: ${userId}`);
  const profile = await prisma.candidateProfile.findUnique({
    where: { user_id: userId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone_number: true,
        },
      },
      state: true,
      city: true,
    },
  });
  logger.info(`Candidate profile for user ${userId}: ${profile ? 'Found' : 'Not found'}`);
  return profile;
};

/**
 * Update candidate profile
 */
const updateCandidateProfile = async (
  userId: bigint,
  data: UpdateCandidateProfileData
): Promise<CandidateProfileWithRelations> => {
  logger.info(`Updating candidate profile for user: ${userId}`);
  
  // Build update data object - only include fields that are provided
  const updateData: any = {
    updated_at: new Date(),
  };

  if (data.state_id !== undefined) updateData.state_id = data.state_id;
  if (data.city_id !== undefined) updateData.city_id = data.city_id;
  if (data.qualification !== undefined) updateData.qualification = data.qualification;
  if (data.experience_years !== undefined) updateData.experience_years = data.experience_years;
  if (data.resume_url !== undefined) updateData.resume_url = data.resume_url;

  const updatedProfile = await prisma.candidateProfile.update({
    where: { user_id: userId },
    data: updateData,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone_number: true,
        },
      },
      state: true,
      city: true,
    },
  });
  
  logger.info(`Successfully updated candidate profile for user: ${userId}`);
  return updatedProfile;
};

/**
 * Check if candidate profile exists
 */
const profileExists = async (userId: bigint): Promise<boolean> => {
  logger.info(`Checking if candidate profile exists for user: ${userId}`);
  const profile = await prisma.candidateProfile.findUnique({
    where: { user_id: userId },
    select: { user_id: true },
  });
  const exists = !!profile;
  logger.info(`Candidate profile for user ${userId}: ${exists ? 'Exists' : 'Does not exist'}`);
  return exists;
};

export const candidateRepository = {
  getCandidateProfile,
  updateCandidateProfile,
  profileExists,
};
