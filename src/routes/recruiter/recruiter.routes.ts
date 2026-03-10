import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { authRole } from "../../middlewares/auth-role.middleware";
import { updateRecruiterProfileSchema } from "../../validations/recruiter.validation";
import { recruiterController } from "../../controllers/recruiter/recruiter.controller";

/**
 * RECRUITER ROUTES
 *
 * Base: /api/recruiter
 * 
 * Note: Using authRole() for combined authentication + role check
 */

const router = Router();

/**
 * GET /api/recruiter/profile
 * Get recruiter profile
 * Auth: Required (Recruiter role)
 */
router.get(
  "/profile",
  authRole("recruiter"),
  recruiterController.getProfile,
);

/**
 * PATCH /api/recruiter/profile
 * Update recruiter profile (designation, location)
 * Auth: Required (Recruiter role)
 */
router.patch(
  "/profile",
  authRole("recruiter"),
  validate(updateRecruiterProfileSchema),
  recruiterController.updateProfile,
);

export default router;
