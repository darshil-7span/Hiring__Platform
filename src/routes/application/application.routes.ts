import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { applicationController } from "../../controllers/application/application.controller";

/**
 * APPLICATION ROUTES
 *
 * Base: /api/applications
 */

const router = Router();

/**
 * GET /api/applications/candidates
 * Get all candidates who applied for jobs
 * Shows complete list with candidate details, job details
 * Auth: Required
 */
router.get(
  "/candidates",
  authMiddleware,
  (req, res) => applicationController.getAllCandidateApplications(req, res),
);

/**
 * GET /api/applications/job/:jobId
 * Get all applications for a specific job
 * Auth: Required
 */
router.get(
  "/job/:jobId",
  authMiddleware,
  (req, res) => applicationController.getApplicationsByJob(req, res),
);

/**
 * GET /api/applications/my-applications
 * Get applications for the logged-in candidate
 * Auth: Required (Candidate role)
 */
router.get(
  "/my-applications",
  authMiddleware,
  (req, res) => applicationController.getMyCandidateApplications(req, res),
);

export default router;
