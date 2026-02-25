import { z } from "zod";

/**
 * JOB SCHEMAS - Request/Response validation for job operations
 */

// Create Job Request Schema (DTO)
export const createJobSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    jobType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"], {
      message: "Invalid job type",
    }),
    experienceLevel: z.enum(["ENTRY", "MID", "SENIOR", "LEAD"], {
      message: "Invalid experience level",
    }),
    locationId: z.number().int().positive("Location ID must be positive"),
    salaryMin: z.number().positive("Minimum salary must be positive").optional(),
    salaryMax: z.number().positive("Maximum salary must be positive").optional(),
    currencyId: z.number().int().positive("Currency ID must be positive").optional(),
    skillIds: z.array(z.number().int().positive()).min(1, "At least one skill is required"),
  }),
});

// Update Job Request Schema (DTO)
export const updateJobSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Job ID must be a number"),
  }),
  body: z.object({
    title: z.string().min(3).optional(),
    description: z.string().min(10).optional(),
    jobType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"]).optional(),
    experienceLevel: z.enum(["ENTRY", "MID", "SENIOR", "LEAD"]).optional(),
    status: z.enum(["DRAFT", "PUBLISHED", "CLOSED"]).optional(),
    locationId: z.number().int().positive().optional(),
    salaryMin: z.number().positive().optional(),
    salaryMax: z.number().positive().optional(),
    currencyId: z.number().int().positive().optional(),
    skillIds: z.array(z.number().int().positive()).optional(),
  }),
});

// Get Job by ID Schema (DTO)
export const getJobByIdSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Job ID must be a number"),
  }),
});

// Job Response Schema (DTO)
export const jobResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  jobType: z.string(),
  experienceLevel: z.string(),
  status: z.string(),
  locationId: z.number(),
  salaryMin: z.number().nullable(),
  salaryMax: z.number().nullable(),
  currencyId: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// TypeScript Types (Auto-generated from Zod schemas)
export type CreateJobRequest = z.infer<typeof createJobSchema>;
export type UpdateJobRequest = z.infer<typeof updateJobSchema>;
export type GetJobByIdRequest = z.infer<typeof getJobByIdSchema>;
export type JobResponse = z.infer<typeof jobResponseSchema>;
