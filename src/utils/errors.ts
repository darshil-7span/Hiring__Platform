/**
 * ERROR UTILITIES FOR EXPRESS 5
 * Create custom errors with status codes
 * Express 5 automatically catches async errors - no asyncHandler needed!
 */

/**
 * Create error with status code
 */
const createError = (statusCode: number, message: string) => {
  const error: any = new Error(message);
  error.statusCode = statusCode;
  return error;
};

/**
 * 400 - Bad Request
 * Use when: Invalid input data
 */
export const BadRequestError = (message = "Bad request") =>
  createError(400, message);

/**
 * 401 - Unauthorized
 * Use when: User not logged in
 */
export const UnauthorizedError = (message = "Unauthorized") =>
  createError(401, message);

/**
 * 403 - Forbidden
 * Use when: User doesn't have permission
 */
export const ForbiddenError = (message = "Forbidden") =>
  createError(403, message);

/**
 * 404 - Not Found
 * Use when: Resource doesn't exist
 */
export const NotFoundError = (message = "Not found") =>
  createError(404, message);

/**
 * 409 - Conflict
 * Use when: Resource already exists
 */
export const ConflictError = (message = "Already exists") =>
  createError(409, message);
