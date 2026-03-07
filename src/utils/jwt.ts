import * as jwt from "jsonwebtoken";
import { env } from "../config/env";

/**
 * JWT Utility Functions
 */

export interface JWTPayload {
  userId: number;
  email: string;
  role: string;
}

/**
 * Generate JWT token
 * @param payload - User information to encode in token
 * @returns JWT token string
 */
export const generateToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  } as jwt.SignOptions);
};

/**
 * Verify JWT token
 * @param token - JWT token string
 * @returns Decoded payload or null if invalid
 */
export const verifyToken = (token: string): JWTPayload | null => {
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JWTPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};
