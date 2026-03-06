import { Router } from "express";
import { authController } from "../../controllers/auth/auth.controller";
import { validate } from "../../middlewares/validate.middleware";
import { registerSchema, loginSchema } from "../../schemas/auth.schema";

/**
 * Auth Routes Module
 * Handles all authentication related routes
 */

const router = Router();

/**
 * POST /api/auth/register
 * Register new user (Candidate or Recruiter)
 */
router.post(
  "/register",
  validate(registerSchema),
  authController.register,
);

/**
 * POST /api/auth/login
 * Login user and get JWT token
 */
router.post(
  "/login",
  validate(loginSchema),
  authController.login,
);

export default router;
