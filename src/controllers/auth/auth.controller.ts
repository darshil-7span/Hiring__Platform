import { Request, Response } from "express";
import { authService } from "../../services/auth/auth.service";
import { sendResponse } from "../../utils/apiResponse";
import { getLogger } from "../../utils/logger";

const logger = getLogger("AuthController");

/**
 * Auth Controller (HTTP Layer)
 * Handles HTTP requests and responses for authentication
 * Express 5 automatically catches async errors!
 */

/**
 * Register new user
 * POST /api/auth/register
 */
const register = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[REGISTER] API request received for email: ${req.body.email}`);
  
  const { name, email, password, phone_number, country_id, role_name } = req.body;

  const result = await authService.register({
    name,
    email,
    password,
    phone_number,
    country_id,
    role_name,
  });

  logger.info(`[REGISTER] API response sent successfully for: ${email}`);
  
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User registered successfully",
    data: result,
  });
};

/**
 * Login user
 * POST /api/auth/login
 */
const login = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[LOGIN] API request received for email: ${req.body.email}`);
  
  const { email, password } = req.body;

  const result = await authService.login({
    email,
    password,
  });

  logger.info(`[LOGIN] API response sent successfully for: ${email}`);
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Login successful",
    data: result,
  });
};

export const authController = {
  register,
  login,
};
