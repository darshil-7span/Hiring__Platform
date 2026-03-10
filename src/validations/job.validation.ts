import { z } from "zod";

/**
 * JOB SCHEMAS - Request/Response validation for job operations
 */

// =====================
// CREATE JOB SCHEMA - Recruiter posting a new job
// =====================
export const createJobSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, "Job title must be at least 3 characters")
      .max(255, "Job title must be at most 255 characters"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(5000, "Description must be at most 5000 characters"),
    employmentType: z.enum(["fulltime", "parttime", "internship"], {
      message:
        "Invalid employment type. Must be fulltime, parttime, or internship",
    }),
    jobType: z.enum(["Remote", "OnSite", "Hybrid"], {
      message: "Invalid job type. Must be Remote, OnSite, or Hybrid",
    }),
    salaryMin: z
      .number()
      .positive("Minimum salary must be positive")
      .optional(),
    salaryMax: z
      .number()
      .positive("Maximum salary must be positive")
      .optional(),
    currencyId: z
      .number()
      .int()
      .positive("Currency ID must be positive")
      .optional(),
    minExperience: z
      .number()
      .int()
      .nonnegative("Minimum experience must be non-negative")
      .optional(),
    maxExperience: z
      .number()
      .int()
      .nonnegative("Maximum experience must be non-negative")
      .optional(),
    stateId: z.number().int().positive("State ID must be positive"),
    cityId: z.number().int().positive("City ID must be positive"),
    benefits: z
      .string()
      .max(1000, "Benefits must be at most 1000 characters")
      .optional(),
    openingsCount: z
      .number()
      .int()
      .positive("Number of openings must be positive")
      .optional(),
    applicationDeadline: z.string().datetime().optional(),
    skillIds: z
      .array(z.number().int().positive())
      .min(1, "At least one skill is required"),
  }),
});

// =====================
// UPDATE JOB SCHEMA - Recruiter updating an existing job
// =====================
export const updateJobSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Job ID must be a valid number"),
  }),
  body: z.object({
    title: z
      .string()
      .min(3, "Title must be at least 3 characters")
      .max(255)
      .optional(),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(5000)
      .optional(),
    employmentType: z.enum(["fulltime", "parttime", "internship"]).optional(),
    jobType: z.enum(["Remote", "OnSite", "Hybrid"]).optional(),
    salaryMin: z.number().positive().optional(),
    salaryMax: z.number().positive().optional(),
    currencyId: z.number().int().positive().optional(),
    minExperience: z.number().int().nonnegative().optional(),
    maxExperience: z.number().int().nonnegative().optional(),
    stateId: z.number().int().positive().optional(),
    cityId: z.number().int().positive().optional(),
    benefits: z.string().max(1000).optional(),
    openingsCount: z.number().int().positive().optional(),
    applicationDeadline: z.string().datetime().optional(),
    jobStatus: z.enum(["Active", "Deactive"]).optional(),
    skillIds: z.array(z.number().int().positive()).optional(),
  }),
});

// =====================
// DELETE JOB SCHEMA - Recruiter deleting a job
// =====================
export const deleteJobSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Job ID must be a valid number"),
  }),
});

// =====================
// GET JOB BY ID SCHEMA
// =====================
export const getJobByIdSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "Job ID must be a valid number"),
  }),
});

// =====================
// FILTER JOBS SCHEMA - Search and filter jobs by location, salary, etc.
// =====================
export const filterJobSchema = z.object({
  query: z.object({
    stateId: z.string().optional(),
    cityId: z.string().optional(),
    salaryMin: z.string().optional(),
    salaryMax: z.string().optional(),
    employmentType: z.enum(["fulltime", "parttime", "internship"]).optional(),
    jobType: z.enum(["Remote", "OnSite", "Hybrid"]).optional(),
    limit: z.string().optional().default("10"),
    offset: z.string().optional().default("0"),
  }),
});

// =====================
// SEARCH JOBS SCHEMA
// =====================
export const searchJobSchema = z.object({
  query: z.object({
    q: z.string().min(2, "Search term must be at least 2 characters"),
  }),
});
