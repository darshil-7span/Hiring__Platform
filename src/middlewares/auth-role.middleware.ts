// src/middlewares/auth-role.middleware.ts

import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { env } from "../config/env";
import { getLogger } from "../utils/logger";
import { UnauthorizedError, ForbiddenError } from "../utils/errors";

const logger = getLogger("AuthRoleMiddleware");

/**
 * Combined Authentication + Role-based access control middleware
 * Verifies JWT token AND checks if user has required role in ONE step
 * 
 * More efficient than using authMiddleware + roleMiddleware separately
 * 
 * Usage:
 * router.post("/secure-route", authRole("recruiter"), controller.method)
 * router.get("/admin", authRole("admin"), controller.method)
 * router.get("/any-user", authRole("recruiter", "candidate"), controller.method)
 * 
 * Benefits:
 * - Single token verification (not twice)
 * - Less middleware overhead
 * - Cleaner route definitions
 * - Better performance
 */
export const authRole = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // 1. Check Authorization Header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      logger.warn(`[AUTH_ROLE] No token provided for ${req.method} ${req.path}`);
      throw UnauthorizedError("No token provided");
    }

    const token = authHeader.split(" ")[1];

    // 2. Verify JWT Token
    let decoded: any;
    try {
      decoded = jwt.verify(token, env.JWT_SECRET);
    } catch (error) {
      logger.warn(`[AUTH_ROLE] Invalid token for ${req.method} ${req.path}`);
      throw UnauthorizedError("Invalid or expired token");
    }

    // 3. Set user in request
    req.user = {
      id: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    };

    // 4. Check Role (if roles specified)
    if (allowedRoles.length > 0) {
      const userRole = decoded.role?.toLowerCase();

      if (!userRole || !allowedRoles.includes(userRole)) {
        logger.warn(
          `[AUTH_ROLE] User ${decoded.email} with role '${userRole}' attempted to access ${req.method} ${req.path} (requires: ${allowedRoles.join(", ")})`
        );
        throw ForbiddenError(
          `Access denied - Required role: ${allowedRoles.join(" or ")}`
        );
      }

      logger.info(
        `[AUTH_ROLE] User ${decoded.email} (${userRole}) authorized for ${req.method} ${req.path}`
      );
    } else {
      // No role check, just authentication
      logger.info(
        `[AUTH_ROLE] User ${decoded.email} authenticated for ${req.method} ${req.path}`
      );
    }

    next();
  };
};

/**
 * Simple authentication only (no role check)
 * Use when any authenticated user can access
 * 
 * Usage:
 * router.get("/profile", authOnly(), controller.method)
 */
export const authOnly = () => authRole();
