import { Router } from "express";
import { authRole } from "../../middlewares/auth-role.middleware";
import { applicationController } from "../../controllers/application/application.controller";

/**
 * APPLICATION ROUTES
 *
 * Base: /api/applications
 * 
 * Note: Using authRole() for combined authentication + role check
 */

const router = Router();

/**
 * GET /api/applications/candidates
 * Get all candidates who applied for jobs
 * Shows complete list with candidate details, job details
 * Auth: Required (Recruiter role - to view all applications)
 */
router.get(
  "/candidates",
  authRole("recruiter"),
  applicationController.getAllCandidateApplications,
);

/**
 * GET /api/applications/job/:jobId
 * Get all applications for a specific job
 * Auth: Required (Recruiter role - to view job applications)
 */
router.get(
  "/job/:jobId",
  authRole("recruiter"),
  applicationController.getApplicationsByJob,
);

/**
 * GET /api/applications/my-applications
 * Get applications for the logged-in candidate
 * Auth: Required (Candidate role)
 */
router.get(
  "/my-applications",
  authRole("candidate"),
  applicationController.getMyCandidateApplications,
);

export default router;
