/**
 * JOB TYPES
 * Job posting-related interfaces and types
 */

// Import Prisma enums from generated client
import type { EmploymentType, JobType, JobStatus } from "../../generated/prisma";

// =====================
// REQUEST TYPES
// =====================

export interface CreateJobInput {
  title: string;
  description: string;
  employmentType: EmploymentType;
  jobType: JobType;
  salaryMin?: number;
  salaryMax?: number;
  currencyId?: number;
  minExperience?: number;
  maxExperience?: number;
  stateId: number;
  cityId: number;
  benefits?: string;
  openingsCount?: number;
  applicationDeadline?: Date;
  skillIds: number[];
}

export interface UpdateJobInput {
  title?: string;
  description?: string;
  employmentType?: EmploymentType;
  jobType?: JobType;
  salaryMin?: number;
  salaryMax?: number;
  currencyId?: number;
  minExperience?: number;
  maxExperience?: number;
  stateId?: number;
  cityId?: number;
  benefits?: string;
  openingsCount?: number;
  applicationDeadline?: Date;
  jobStatus?: JobStatus;
  skillIds?: number[];
}

export interface FilterJobInput {
  employmentType?: EmploymentType;
  jobType?: JobType;
  stateId?: number;
  cityId?: number;
  minSalary?: number;
  maxSalary?: number;
  minExperience?: number;
  maxExperience?: number;
  page?: number;
  limit?: number;
}

export interface SearchJobInput {
  query: string;
  page?: number;
  limit?: number;
}

// =====================
// RESPONSE TYPES
// =====================

export interface JobResponse {
  id: number;
  title: string;
  description: string;
  employmentType: EmploymentType;
  jobType: JobType;
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  minExperience?: number;
  maxExperience?: number;
  state?: string;
  city?: string;
  benefits?: string;
  openingsCount?: number;
  applicationDeadline?: Date;
  jobStatus: JobStatus;
  skills: string[];
  recruiter?: {
    id: number;
    name: string;
    email: string;
  };
  created_at: Date;
  updated_at: Date;
}
