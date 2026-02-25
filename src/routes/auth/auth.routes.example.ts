import { Router } from "express";
import { AuthController } from "../../controllers/auth/auth.controller.example";
import { validate } from "../../middlewares/validate.middleware";
import { loginSchema, registerSchema } from "../../schemas/auth.schema";

/**
 * EXAMPLE AUTH ROUTES
 * 
 * This shows how to use validation middleware with Zod schemas
 * 
 * Pattern:
 * router.method(path, validate(schema), controller.method)
 *                      ↑
 *                      This validates the request before hitting controller
 */

const router = Router();
const authController = new AuthController();

/**
 * POST /api/auth/register
 * Body: { email, password, firstName, lastName, roleId }
 * Validates: registerSchema
 */
router.post(
  "/register",
  validate(registerSchema), // ← Validates req.body
  authController.register
);

/**
 * POST /api/auth/login
 * Body: { email, password }
 * Validates: loginSchema
 */
router.post(
  "/login",
  validate(loginSchema), // ← Validates req.body
  authController.login
);

export default router;
