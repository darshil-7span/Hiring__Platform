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

// Update Application Status Schema (DTO)
export const updateApplicationStatusSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Application ID must be a number"),
  }),
  body: z.object({
    status: z.enum(["APPLIED", "UNDER_REVIEW", "SHORTLISTED", "REJECTED", "ACCEPTED"], {
      message: "Invalid application status",
    }),
  }),
});

// Get Application by ID Schema (DTO)
export const getApplicationByIdSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Application ID must be a number"),
  }),
});

// Application Response Schema (DTO)
export const applicationResponseSchema = z.object({
  id: z.number(),
  candidateId: z.number(),
  jobPostId: z.number(),
  status: z.string(),
  coverLetter: z.string().nullable(),
  appliedAt: z.date(),
  updatedAt: z.date(),
});

// TypeScript Types (Auto-generated from Zod schemas)
export type CreateApplicationRequest = z.infer<typeof createApplicationSchema>;
export type UpdateApplicationStatusRequest = z.infer<typeof updateApplicationStatusSchema>;
export type GetApplicationByIdRequest = z.infer<typeof getApplicationByIdSchema>;
export type ApplicationResponse = z.infer<typeof applicationResponseSchema>;
