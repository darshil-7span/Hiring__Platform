import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { updateRecruiterProfileSchema } from "../../schemas/recruiter.schema";
import { recruiterController } from "../../controllers/recruiter/recruiter.controller";

/**
 * RECRUITER ROUTES
 *
 * Base: /api/recruiter
 */

const router = Router();

/**
 * GET /api/recruiter/profile
 * Get recruiter profile
 * Auth: Required (Recruiter role)
 */
router.get(
  "/profile",
  authMiddleware,
  (req, res) => recruiterController.getProfile(req, res),
);

/**
 * PATCH /api/recruiter/profile
 * Update recruiter profile (designation, location)
 * Auth: Required (Recruiter role)
 */
router.patch(
  "/profile",
  authMiddleware,
  validate(updateRecruiterProfileSchema),
  (req, res) => recruiterController.updateProfile(req, res),
);

export default router;
