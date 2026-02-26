import { Request, Response } from "express";
import { applicationService } from "../../services/application.service";

/**
 * Application Controller (HTTP Layer)
 * Handles HTTP requests for job applications
 */

export class ApplicationController {
  /**
   * Get all candidate applications
   * GET /api/applications/candidates
   * Shows which candidates applied for which jobs
   */
  async getAllCandidateApplications(req: Request, res: Response): Promise<void> {
    try {
      console.log("📋 Fetching all candidate applications...");

      const applications = await applicationService.getAllCandidateApplications();

      res.status(200).json({
        success: true,
        message: "Candidate applications retrieved successfully",
        count: applications.length,
        data: applications,
      });
    } catch (error) {
      console.error("❌ Error fetching applications:", error);
      const message = error instanceof Error ? error.message : "Failed to fetch applications";
      res.status(500).json({
        success: false,
        message,
      });
    }
  }

  /**
   * Get applications for a specific job
   * GET /api/applications/job/:jobId
   */
  async getApplicationsByJob(req: Request, res: Response): Promise<void> {
    try {
      const jobId = req.params.jobId;

      if (!jobId || Array.isArray(jobId)) {
        res.status(400).json({
          success: false,
          message: "Invalid Job ID",
        });
        return;
      }

      const applications = await applicationService.getApplicationsByJob(BigInt(jobId));

      res.status(200).json({
        success: true,
        message: "Job applications retrieved successfully",
        count: applications.length,
        data: applications,
      });
    } catch (error) {
      console.error("❌ Error fetching job applications:", error);
      const message = error instanceof Error ? error.message : "Failed to fetch applications";
      res.status(500).json({
        success: false,
        message,
      });
    }
  }

  /**
   * Get applications by candidate (my applications)
   * GET /api/applications/my-applications
   */
  async getMyCandidateApplications(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
        return;
      }

      const applications = await applicationService.getApplicationsByCandidate(BigInt(userId));

      res.status(200).json({
        success: true,
        message: "Your applications retrieved successfully",
        count: applications.length,
        data: applications,
      });
    } catch (error) {
      console.error("❌ Error fetching candidate applications:", error);
      const message = error instanceof Error ? error.message : "Failed to fetch applications";
      res.status(500).json({
        success: false,
        message,
      });
    }
  }
}

// Export singleton instance
export const applicationController = new ApplicationController();
