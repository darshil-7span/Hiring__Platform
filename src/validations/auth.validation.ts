import { z } from "zod";

/**
 * AUTH SCHEMAS - Request/Response validation for authentication
 */

// Register Request Schema (DTO)
export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    phone_number: z.string().optional(),
    country_id: z.number().int().positive("Country ID must be a positive integer"),
    role_name: z.enum(["candidate", "recruiter"], {
      message: "Role must be either 'candidate' or 'recruiter'",
    }),
  }),
});

// Login Request Schema (DTO)
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password is required"),
  }),
});
