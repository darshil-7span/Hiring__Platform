import { Request, Response, NextFunction } from "express";
import { getLogger } from "../utils/logger";
import { sendError } from "../utils/apiResponse";

const logger = getLogger("ErrorMiddleware");

/**
 * GLOBAL ERROR HANDLER MIDDLEWARE FOR EXPRESS 5
 * 
 * Express 5 automatically catches async errors and sends them here.
 * No need for asyncHandler or try-catch in controllers!
 * 
 * This middleware:
 * 1. Receives all errors from the app
 * 2. Logs the error with full details internally (for debugging)
 * 3. Returns clean, professional error messages to clients
 * 4. NEVER exposes stack traces or internal details
 * 
 * SECURITY: Stack traces are logged internally only, never sent to clients
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get status code and message
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  // Log error details internally (for debugging - NEVER exposed to client)
  logger.error(`[ERROR] ${message}`, {
    path: req.path,
    method: req.method,
    statusCode,
    stack: err.stack, // Logged internally for debugging
    body: req.body,
    user: req.user?.id,
  });

  // Send clean response without any internal details
  // Stack traces are logged above for debugging, never sent to client
  sendError(res, message, statusCode);
};
