import type { Response } from "express";

/**
 * Standardized API Response Structure
 */
export interface ApiResponseOptions {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: any;
}

/**
 * API Response Format
 */
export interface ApiResponse {
  success: boolean;
  message: string;
  data: any;
}

/**
 * Centralized API Response Utility
 * Ensures consistent response structure across all endpoints
 * 
 * @param res - Express Response object
 * @param options - Response options
 * @returns Express Response
 * 
 * @example
 * ```typescript
 * return sendResponse(res, {
 *   statusCode: 200,
 *   message: "User fetched successfully",
 *   data: user
 * });
 * ```
 */
export const sendResponse = (
  res: Response,
  options: ApiResponseOptions = {}
): Response => {
  const {
    statusCode = 200,
    success = true,
    message = "Success",
    data = null,
  } = options;

  const response: ApiResponse = {
    success,
    message,
    data,
  };

  return res.status(statusCode).json(response);
};

/**
 * Helper function for success responses
 */
export const sendSuccess = (
  res: Response,
  message: string = "Success",
  data: any = null,
  statusCode: number = 200
): Response => {
  return sendResponse(res, {
    statusCode,
    success: true,
    message,
    data,
  });
};

/**
 * Helper function for error responses
 * Ensures JSON format and consistent error structure
 */
export const sendError = (
  res: Response,
  message: string = "Error",
  statusCode: number = 500,
  data: any = null
): Response => {
  // ALWAYS set Content-Type to ensure JSON response (never HTML)
  res.setHeader("Content-Type", "application/json");
  
  return sendResponse(res, {
    statusCode,
    success: false,
    message,
    data,
  });
};

/**
 * Helper function for paginated responses
 * 
 * @param res - Express Response object
 * @param data - Data to return
 * @param meta - Pagination metadata (page, limit, total)
 * @returns Express Response
 * 
 * @example
 * ```typescript
 * const users = await getUsers(page, limit);
 * const total = await getUserCount();
 * 
 * return sendPaginatedResponse(res, users, { page: 1, limit: 10, total: 95 });
 * ```
 */
export const sendPaginatedResponse = (
  res: Response,
  data: any,
  meta: {
    page: number;
    limit: number;
    total: number;
  }
) => {
  return res.status(200).json({
    success: true,
    data,
    meta,
  });
};
