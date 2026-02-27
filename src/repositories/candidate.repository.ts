import prisma from "../config/prisma";
import type { CandidateProfile, User, State, City } from "../../generated/prisma";

/**
 * Candidate Repository (DAO Layer)
 * All database operations for candidate profiles
 */

export interface UpdateCandidateProfileData {
  state_id?: number;
  city_id?: number;
  qualification?: string;
  experience_years?: number;
  resume_url?: string;
}

export type CandidateProfileWithRelations = CandidateProfile & {
  user: Pick<User, 'id' | 'name' | 'email' | 'phone_number'>;
  state: State | null;
  city: City | null;
};

export class CandidateRepository {
  /**
   * Get candidate profile by user ID
   */
  async getCandidateProfile(userId: bigint): Promise<CandidateProfileWithRelations | null> {
    return await prisma.candidateProfile.findUnique({
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
  }

  /**
   * Update candidate profile
   */
  async updateCandidateProfile(
    userId: bigint,
    data: UpdateCandidateProfileData
  ): Promise<CandidateProfileWithRelations> {
    // Build update data object - only include fields that are provided
    const updateData: any = {
      updated_at: new Date(),
    };

    if (data.state_id !== undefined) updateData.state_id = data.state_id;
    if (data.city_id !== undefined) updateData.city_id = data.city_id;
    if (data.qualification !== undefined) updateData.qualification = data.qualification;
    if (data.experience_years !== undefined) updateData.experience_years = data.experience_years;
    if (data.resume_url !== undefined) updateData.resume_url = data.resume_url;

    return await prisma.candidateProfile.update({
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
  }

  /**
   * Check if candidate profile exists
   */
  async profileExists(userId: bigint): Promise<boolean> {
    const profile = await prisma.candidateProfile.findUnique({
      where: { user_id: userId },
      select: { user_id: true },
    });
    return !!profile;
  }
}

// Export singleton instance
export const candidateRepository = new CandidateRepository();
