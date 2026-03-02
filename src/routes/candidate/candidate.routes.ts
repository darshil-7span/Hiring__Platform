import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { createApplicationSchema } from "../../schemas/application.schema";
import { updateCandidateProfileSchema } from "../../schemas/candidate.schema";
import { candidateController } from "../../controllers/candidate/candidate.controller";

const router = Router();

/**
 * CANDIDATE ROUTES
 *
 * Base: /api/candidate
 */

/**
 * GET /api/candidate/profile
 * Get candidate profile
 * Auth: Required (Candidate role)
 */
router.get(
  "/profile",
  authMiddleware,
  (req, res) => candidateController.getProfile(req, res),
);

/**
 * PATCH /api/candidate/profile
 * Update candidate profile (qualification, experience, resume, location)
 * Auth: Required (Candidate role)
 */
router.patch(
  "/profile",
  authMiddleware,
  validate(updateCandidateProfileSchema),
  (req, res) => candidateController.updateProfile(req, res),
);

/**
 * POST /api/candidate/apply
 * Apply to a job using authenticated candidate user id
 * Body: { jobPostId, coverLetter? }
 * Auth: Required (Candidate role)
 */
router.post(
  "/apply",
  authMiddleware,
  validate(createApplicationSchema),
  (req, res) => candidateController.applyToJob(req, res),
);

export default router;
 