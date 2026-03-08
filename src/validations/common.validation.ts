import { z } from "zod";

/**
 * COMMON SCHEMAS - Reusable schemas across the application
 */

// Pagination Query Schema (for list endpoints)
export const paginationSchema = z.object({
  query: z.object({
    page: z.string().optional().default("1").transform(Number),
    limit: z.string().optional().default("10").transform(Number),
    sortBy: z.string().optional(),
    sortOrder: z.enum(["asc", "desc"]).optional(),
  }),
});

// ID Parameter Schema (for routes with :id)
export const idParamSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID must be a number"),
  }),
});

// Success Response Schema (standard API response)
export const successResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: z.any().optional(),
});

// Error Response Schema (standard API error)
export const errorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  errors: z.array(
    z.object({
      field: z.string(),
      message: z.string(),
    })
  ).optional(),
});

// TypeScript Types
export type PaginationQuery = z.infer<typeof paginationSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
export type SuccessResponse = z.infer<typeof successResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
