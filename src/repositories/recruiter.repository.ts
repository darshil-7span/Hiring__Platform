import prisma from "../config/prisma";
import type { RecruiterProfile, User, State, City } from "../../generated/prisma";

/**
 * Recruiter Repository (DAO Layer)
 * All database operations for recruiter profiles
 */

export interface UpdateRecruiterProfileData {
  designation?: string;
  state_id?: number;
  city_id?: number;
}

export type RecruiterProfileWithRelations = RecruiterProfile & {
  user: Pick<User, 'id' | 'name' | 'email' | 'phone_number'>;
  state: State | null;
  city: City | null;
};

export class RecruiterRepository {
  /**
   * Get recruiter profile by user ID
   */
  async getRecruiterProfile(userId: bigint): Promise<RecruiterProfileWithRelations | null> {
    return await prisma.recruiterProfile.findUnique({
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
   * Update recruiter profile
   */
  async updateRecruiterProfile(
    userId: bigint,
    data: UpdateRecruiterProfileData
  ): Promise<RecruiterProfileWithRelations> {
    // Build update data object - only include fields that are provided
    const updateData: any = {
      updated_at: new Date(),
    };

    if (data.designation !== undefined) updateData.designation = data.designation;
    if (data.state_id !== undefined) updateData.state_id = data.state_id;
    if (data.city_id !== undefined) updateData.city_id = data.city_id;

    return await prisma.recruiterProfile.update({
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
   * Check if recruiter profile exists
   */
  async profileExists(userId: bigint): Promise<boolean> {
    const profile = await prisma.recruiterProfile.findUnique({
      where: { user_id: userId },
      select: { user_id: true },
    });
    return !!profile;
  }
}

// Export singleton instance
export const recruiterRepository = new RecruiterRepository();
