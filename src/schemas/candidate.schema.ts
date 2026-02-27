import { z } from "zod";

/**
 * CANDIDATE PROFILE SCHEMAS
 * Request validation for candidate profile operations
 */

// Update Candidate Profile Schema
export const updateCandidateProfileSchema = z.object({
  body: z.object({
    state_id: z.number().int().positive().optional(),
    city_id: z.number().int().positive().optional(),
    qualification: z.string().min(1).max(255).optional(),
    experience_years: z.number().int().min(0).max(50).optional(),
    resume_url: z.string().url("Invalid URL format").optional(),
  }),
});

// TypeScript Types
export type UpdateCandidateProfileRequest = z.infer<typeof updateCandidateProfileSchema>;
