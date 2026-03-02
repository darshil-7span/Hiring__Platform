import { recruiterRepository, UpdateRecruiterProfileData } from "../repositories/recruiter.repository";

/**
 * Recruiter Service (Business Logic Layer)
 * Handles recruiter profile business logic
 */

/**
 * Get recruiter profile
 */
const getProfile = async (userId: bigint) => {
  const profile = await recruiterRepository.getRecruiterProfile(userId);
  
  if (!profile) {
    throw new Error("Recruiter profile not found");
  }

  return {
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
};

/**
 * Update recruiter profile
 */
const updateProfile = async (userId: bigint, data: UpdateRecruiterProfileData) => {
  // Check if profile exists
  const exists = await recruiterRepository.profileExists(userId);
  if (!exists) {
    throw new Error("Recruiter profile not found");
  }

  const profile = await recruiterRepository.updateRecruiterProfile(userId, data);

  return {
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
      updated_at: profile.updated_at,
    },
  };
};

export const recruiterService = {
  getProfile,
  updateProfile,
};
