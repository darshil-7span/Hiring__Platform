import { Request, Response } from "express";
import { recruiterService } from "../../services/recruiter.service";

/**
 * Recruiter Controller (HTTP Layer)
 * Handles HTTP requests for recruiter profile
 */

/**
 * Get recruiter profile
 * GET /api/recruiter/profile
 */
const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;  // From auth middleware
    
    if (!userId) {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
      return;
    }

    const profile = await recruiterService.getProfile(BigInt(userId));

    res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      data: profile,
    });
  } catch (error) {
    console.error("❌ Get profile error:", error);
    const message = error instanceof Error ? error.message : "Failed to get profile";
    res.status(404).json({
      success: false,
      message,
    });
  }
};

/**
 * Update recruiter profile
 * PATCH /api/recruiter/profile
 */
const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;  // From auth middleware
    
    if (!userId) {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
      return;
    }

    const { designation, state_id, city_id } = req.body;

    const profile = await recruiterService.updateProfile(BigInt(userId), {
      designation,
      state_id,
      city_id,
    });

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: profile,
    });
  } catch (error) {
    console.error("❌ Update profile error:", error);
    const message = error instanceof Error ? error.message : "Failed to update profile";
    res.status(400).json({
      success: false,
      message,
    });
  }
};

export const recruiterController = {
  getProfile,
  updateProfile,
};
