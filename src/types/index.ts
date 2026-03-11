/**
 * TYPES INDEX
 * Central export point for all application types
 * 
 * Usage:
 *   import { AuthResponse, JobResponse, ApiResponse } from '@/types';
 */

// Express type extensions (global) - loaded via tsconfig include
// No need to import .d.ts files - they're automatically included

// Auth types
export * from './auth.types';

// User types (candidate & recruiter)
export * from './user.types';

// Job types
export * from './job.types';

// Application types
export * from './application.types';

// Common types (shared across modules)
export * from './common.types';
