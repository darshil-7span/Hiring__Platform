import { Request, Response } from "express";
import { LoginRequest, LoginResponse } from "../../schemas/auth.schema";

/**
 * EXAMPLE AUTH CONTROLLER
 * 
 * This shows how to use Zod schemas in your controllers
 * The validation middleware ensures req.body matches the schema
 */

export class AuthController {
  /**
   * Login Example
   * Route: POST /api/auth/login
   * Validation: loginSchema (validates email & password)
   */
  async login(req: Request, res: Response) {
    try {
      // At this point, req.body is already validated by middleware
      // TypeScript knows the exact shape of req.body
      const { email, password } = req.body;

      // Your business logic here
      // Example: Check credentials, generate token, etc.
      
      // Mock response (replace with real logic)
      const response: LoginResponse = {
        success: true,
        message: "Login successful",
        data: {
          user: {
            id: 1,
            email: email,
            firstName: "John",
            lastName: "Doe",
            role: "CANDIDATE",
          },
          token: "jwt_token_here",
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  /**
   * Register Example
   * Route: POST /api/auth/register
   * Validation: registerSchema
   */
  async register(req: Request, res: Response) {
    try {
      const { email, password, firstName, lastName, roleId } = req.body;

      // Your business logic here
      // Example: Hash password, create user in database, etc.

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
          userId: 1,
          email: email,
        },
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}
