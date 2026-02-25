import { z } from "zod";

/**
 * AUTH SCHEMAS - Request/Response validation for authentication
 */

// Register Request Schema (DTO)
export const registerSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    roleId: z.number().int().positive("Role ID must be a positive integer"),
  }),
});

// Login Request Schema (DTO)
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password is required"),
  }),
});

// Login Response Schema (DTO)
export const loginResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    user: z.object({
      id: z.number(),
      email: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      role: z.string(),
    }),
    token: z.string(),
  }),
});

// TypeScript Types (Auto-generated from Zod schemas)
export type RegisterRequest = z.infer<typeof registerSchema>;
export type LoginRequest = z.infer<typeof loginSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
