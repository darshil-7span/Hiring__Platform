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
 * 2. Logs the error with full details
 * 3. Uses sendError utility for consistent response format
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

  // Log error details
  logger.error(`[ERROR] ${message}`, {
    path: req.path,
    method: req.method,
    statusCode,
    stack: err.stack,
    body: req.body,
  });

  // Use sendError utility for consistent error response format
  // This ensures error responses match the standard API response structure
  const errorData = process.env.NODE_ENV === "development" 
    ? { stack: err.stack } 
    : null;

  sendError(res, message, statusCode, errorData);
};
