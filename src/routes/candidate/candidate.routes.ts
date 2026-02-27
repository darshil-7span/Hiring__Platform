import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { createApplicationSchema } from "../../schemas/application.schema";
import { CandidateController } from "../../controllers/candidate/candidate.controller";

const router = Router();
const candidateController = new CandidateController();

/**
 * CANDIDATE ROUTES
 *
 * Base: /api/candidate
 */

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
 