// src/middlewares/role.middleware.ts

import { Request, Response, NextFunction } from "express";

/**
 * Role-based access control middleware
 * Checks if the authenticated user has one of the required roles
 *
 * Usage:
 * router.post("/secure-route", authMiddleware, roleMiddleware("recruiter", "admin"), controller.method)
 */
export const roleMiddleware = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // authMiddleware must be applied first
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - User not authenticated",
        });
      }

      const userRole = req.user.role?.toLowerCase();

      // Check if user has one of the allowed roles
      if (!userRole || !allowedRoles.includes(userRole)) {
        return res.status(403).json({
          success: false,
          message: `Forbidden - This action requires one of these roles: ${allowedRoles.join(", ")}`,
        });
      }

      next();
    } catch (error) {
      return res.status(403).json({
        success: false,
        message: "Forbidden - Role verification failed",
      });
    }
  };
};
