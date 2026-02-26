import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError, ZodIssue } from "zod";

/**
 * VALIDATION MIDDLEWARE
 * 
 * This middleware validates incoming requests against Zod schemas
 * It checks: req.body, req.params, req.query
 * 
 * Usage in routes:
 * router.post('/login', validate(loginSchema), authController.login);
 */

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("📋 Validating request:", req.method, req.path);
      console.log("📦 Body:", req.body);
      
      // Validate request data against schema
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      
      console.log("✅ Validation passed");
      // If validation passes, continue to next middleware/controller
      return next();
    } catch (error) {
      console.log("❌ Validation failed:", error);
      // If validation fails, return 400 with detailed errors
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.issues.map((err: ZodIssue) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        });
      }
      
      // Handle unexpected errors
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
};
