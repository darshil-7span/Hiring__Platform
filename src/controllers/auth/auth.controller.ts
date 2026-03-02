import { Request, Response } from "express";
import { authService } from "../../services/auth/auth.service";

/**
 * Auth Controller (HTTP Layer)
 * Handles HTTP requests and responses for authentication
 */

/**
 * Register new user
 * POST /api/auth/register
 */
const register = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("📝 Register attempt:", req.body.email);
    const { name, email, password, phone_number, country_id, role_name } = req.body;

    const result = await authService.register({
      name,
      email,
      password,
      phone_number,
      country_id,
      role_name,
    });

    console.log("✅ Registration successful for:", email);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    console.error("❌ Registration error:", error);
    const message = error instanceof Error ? error.message : "Registration failed";
    res.status(400).json({
      success: false,
      message,
    });
  }
};

/**
 * Login user
 * POST /api/auth/login
 */
const login = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("🔑 Login attempt:", req.body.email);
    const { email, password } = req.body;

    const result = await authService.login({
      email,
      password,
    });

    console.log("✅ Login successful for:", email);
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    console.error("❌ Login error:", error);
    const message = error instanceof Error ? error.message : "Login failed";
    res.status(401).json({
      success: false,
      message,
    });
  }
};

export const authController = {
  register,
  login,
};
