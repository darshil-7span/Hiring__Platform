import prisma from "../config/prisma";
import { getLogger } from "../utils/logger";
import { UpdateRecruiterProfileData, RecruiterProfileWithRelations } from "../types";

const logger = getLogger("RecruiterDAO");

/**
 * Recruiter Repository (DAO Layer)
 * All database operations for recruiter profiles
 */

/**
 * Get recruiter profile by user ID
 */
const getRecruiterProfile = async (userId: bigint): Promise<RecruiterProfileWithRelations | null> => {
  logger.info(`Querying recruiter profile for user: ${userId}`);
  const profile = await prisma.recruiterProfile.findUnique({
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
  logger.info(`Recruiter profile for user ${userId}: ${profile ? 'Found' : 'Not found'}`);
  return profile;
};

/**
 * Update recruiter profile
 */
const updateRecruiterProfile = async (
  userId: bigint,
  data: UpdateRecruiterProfileData
): Promise<RecruiterProfileWithRelations> => {
  logger.info(`Updating recruiter profile for user: ${userId}`);
  
  // Build update data object - only include fields that are provided
  const updateData: any = {
    updated_at: new Date(),
  };

  if (data.designation !== undefined) updateData.designation = data.designation;
  if (data.state_id !== undefined) updateData.state_id = data.state_id;
  if (data.city_id !== undefined) updateData.city_id = data.city_id;

  const updatedProfile = await prisma.recruiterProfile.update({
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
  
  logger.info(`Successfully updated recruiter profile for user: ${userId}`);
  return updatedProfile;
};

/**
 * Check if recruiter profile exists
 */
const profileExists = async (userId: bigint): Promise<boolean> => {
  logger.info(`Checking if recruiter profile exists for user: ${userId}`);
  const profile = await prisma.recruiterProfile.findUnique({
    where: { user_id: userId },
    select: { user_id: true },
  });
  const exists = !!profile;
  logger.info(`Recruiter profile for user ${userId}: ${exists ? 'Exists' : 'Does not exist'}`);
  return exists;
};

export const recruiterRepository = {
  getRecruiterProfile,
  updateRecruiterProfile,
  profileExists,
};
