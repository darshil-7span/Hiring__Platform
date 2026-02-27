import { candidateRepository, UpdateCandidateProfileData } from "../repositories/candidate.repository";

/**
 * Candidate Service (Business Logic Layer)
 * Handles candidate profile business logic
 */

export class CandidateService {
  /**
   * Get candidate profile
   */
  async getProfile(userId: bigint) {
    const profile = await candidateRepository.getCandidateProfile(userId);
    
    if (!profile) {
      throw new Error("Candidate profile not found");
    }

    return {
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
  }

  /**
   * Update candidate profile
   */
  async updateProfile(userId: bigint, data: UpdateCandidateProfileData) {
    // Check if profile exists
    const exists = await candidateRepository.profileExists(userId);
    if (!exists) {
      throw new Error("Candidate profile not found");
    }

    const profile = await candidateRepository.updateCandidateProfile(userId, data);

    return {
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
  }
}

// Export singleton instance
export const candidateService = new CandidateService();
