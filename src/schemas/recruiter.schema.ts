import { z } from "zod";

/**
 * RECRUITER PROFILE SCHEMAS
 * Request validation for recruiter profile operations
 */

// Update Recruiter Profile Schema
export const updateRecruiterProfileSchema = z.object({
  body: z.object({
    designation: z.string().min(1).max(255).optional(),
    state_id: z.number().int().positive().optional(),
    city_id: z.number().int().positive().optional(),
  }),
});

// TypeScript Types
export type UpdateRecruiterProfileRequest = z.infer<typeof updateRecruiterProfileSchema>;
