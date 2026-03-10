/**
 * JOB TYPES
 * Job posting-related interfaces and types
 */

import type { EmploymentType, JobType, JobStatus } from "../../generated/prisma";

// =====================
// DAO TYPES (Database Layer)
// =====================

export type JobWithDetails = any;
export type JobPostCreateData = any;
export type JobPostUpdateData = any;
export type JobFilterCriteria = any;

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

// =====================
// FORMATTER FUNCTIONS
// =====================

export const formatJobResponse = (job: any) => ({
  jobId: job.id,
  title: job.job_title,
  description: job.description,
  location: {
    state: job.state?.name,
    city: job.city?.name,
  },
  salary: {
    min: job.salary_min?.toString(),
    max: job.salary_max?.toString(),
    currency: job.currency_rel?.code,
  },
  experience: {
    min: job.min_exp?.toString(),
    max: job.max_exp?.toString(),
  },
  employmentType: job.employment_type,
  jobType: job.job_type,
  benefits: job.benefits,
  openingsCount: job.openings_count,
  status: job.job_status,
  skills: job.job_skills?.map((js: any) => ({
    id: js.skill.id,
    name: js.skill.name,
  })) || [],
  recruiter: job.recruiter ? {
    id: job.recruiter.id,
    name: job.recruiter.name,
    email: job.recruiter.email,
  } : null,
  applicationsCount: job.applications?.length || 0,
  createdAt: job.created_at,
  updatedAt: job.updated_at,
});

export const formatJobListResponse = (job: any) => ({
  jobId: job.id,
  title: job.job_title,
  location: `${job.city?.name}, ${job.state?.name}`,
  salaryRange: {
    min: job.salary_min?.toString(),
    max: job.salary_max?.toString(),
  },
  status: job.job_status,
  applicationsCount: job.applications?.length || 0,
  createdAt: job.created_at,
});

export const formatJobSearchResponse = (job: any) => ({
  jobId: job.id,
  title: job.job_title,
  description: (job.description?.substring(0, 150) || "") + "...",
  recruiter: job.recruiter ? { name: job.recruiter.name } : null,
  location: {
    state: job.state?.name,
    city: job.city?.name,
  },
  salaryRange: {
    min: job.salary_min?.toString(),
    max: job.salary_max?.toString(),
  },
  employmentType: job.employment_type,
  jobType: job.job_type,
  skills: job.job_skills?.map((js: any) => js.skill.name) || [],
  openingsCount: job.openings_count,
  createdAt: job.created_at,
});

export const formatJobCreateResponse = (job: any) => ({
  jobId: job.id,
  title: job.job_title,
  description: job.description,
  salaryRange: {
    min: job.salary_min?.toString(),
    max: job.salary_max?.toString(),
  },
  createdAt: job.created_at,
});

export const formatJobUpdateResponse = (job: any) => ({
  jobId: job.id,
  title: job.job_title,
  description: job.description,
  salaryRange: {
    min: job.salary_min?.toString(),
    max: job.salary_max?.toString(),
  },
  status: job.job_status,
  updatedAt: job.updated_at,
});
