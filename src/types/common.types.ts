/**
 * COMMON TYPES
 * Shared types used across multiple modules
 */

// =====================
// API RESPONSE TYPES
// =====================

export interface ApiResponseOptions {
  success?: boolean;
  message?: string;
  data?: any;
  statusCode?: number;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// =====================
// PAGINATION TYPES
// =====================

export interface PaginationQuery {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// =====================
// PARAMETER TYPES
// =====================

export interface IdParam {
  id: string;
}

// =====================
// GENERIC RESPONSE TYPES
// =====================

export interface SuccessResponse {
  success: true;
  message: string;
  data?: any;
}

export interface ErrorResponse {
  success: false;
  message: string;
  errors?: any[];
}
