import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { authRole } from "../../middlewares/auth-role.middleware";
import { createApplicationSchema } from "../../schemas/application.schema";
import { updateCandidateProfileSchema } from "../../schemas/candidate.schema";
import { candidateController } from "../../controllers/candidate/candidate.controller";

const router = Router();

/**
 * CANDIDATE ROUTES
 *
 * Base: /api/candidate
 * 
 * Note: Using authRole() for combined authentication + role check
 */

/**
 * GET /api/candidate/profile
 * Get candidate profile
 * Auth: Required (Candidate role)
 */
router.get(
  "/profile",
  authRole("candidate"),
  candidateController.getProfile,
);

/**
 * PATCH /api/candidate/profile
 * Update candidate profile (qualification, experience, resume, location)
 * Auth: Required (Candidate role)
 */
router.patch(
  "/profile",
  authRole("candidate"),
  validate(updateCandidateProfileSchema),
  candidateController.updateProfile,
);

/**
 * POST /api/candidate/apply
 * Apply to a job using authenticated candidate user id
 * Body: { jobPostId, coverLetter? }
 * Auth: Required (Candidate role)
 */
router.post(
  "/apply",
  authRole("candidate"),
  validate(createApplicationSchema),
  candidateController.applyToJob,
);

export default router;
 