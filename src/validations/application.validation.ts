import { z } from "zod";

/**
 * APPLICATION SCHEMAS - Request/Response validation for job applications
 */

// Create Application Request Schema (DTO)
export const createApplicationSchema = z.object({
  body: z.object({
    jobPostId: z.number().int().positive("Job post ID must be positive"),
    coverLetter: z.string().min(50, "Cover letter must be at least 50 characters").optional(),
  }),
});
