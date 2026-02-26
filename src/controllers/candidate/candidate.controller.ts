import { Request, Response } from "express";
import { JobRepository } from "../../repositories/job.repository";

const jobRepository = new JobRepository();

export class CandidateController {
  /**
   * CANDIDATE: Apply to a job using authenticated user id
   * Route: POST /api/candidate/apply
   * Body: { jobPostId }
   * Auth: Required (Candidate role)
   */
  async applyToJob(req: Request, res: Response) {
    try {
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - User ID not found",
        });
      }

      const candidateId = BigInt(req.user.id);
      const { jobPostId } = req.body as { jobPostId: number };

      const application = await jobRepository.applyToJob(
        candidateId,
        jobPostId,
      );

      return res.status(201).json({
        success: true,
        message: "Job application submitted successfully",
        data: {
          applicationId: application.id,
          jobPostId: application.job_id,
          candidateId: application.candidate_id,
          status: application.status,
          appliedAt: application.applied_at,
        },
      });
    } catch (error: any) {
      if (
        error instanceof Error &&
        (error.message === "Job not found or not active" ||
          error.message === "You have already applied for this job")
      ) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      console.error("Error applying to job:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to apply for job",
      });
    }
  }
}

