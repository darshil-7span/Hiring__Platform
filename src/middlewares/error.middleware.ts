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
 * 2. Logs the error with full details (stack trace stays in logs only)
 * 3. Returns clean, client-friendly error messages
 * 4. Controlled by SHOW_STACK_TRACE environment variable
 * 
 * SECURITY: Set SHOW_STACK_TRACE=false in production
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

  // Log error details internally (ALWAYS logged, NEVER exposed to client)
  logger.error(`[ERROR] ${message}`, {
    path: req.path,
    method: req.method,
    statusCode,
    stack: err.stack, // Logged internally for debugging
    body: req.body,
    user: req.user?.id,
  });

  // Check environment variable to determine if stack traces should be shown
  // SHOW_STACK_TRACE=true  -> Show stack trace (debugging)
  // SHOW_STACK_TRACE=false -> Hide stack trace (production)
  const showStackTrace = process.env.SHOW_STACK_TRACE === "true";

  const errorData = showStackTrace 
    ? { 
        stack: err.stack,
        path: req.path,
        timestamp: new Date().toISOString(),
      } 
    : undefined;

  sendError(res, message, statusCode, errorData);
};
