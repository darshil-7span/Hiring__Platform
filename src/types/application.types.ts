/**
 * APPLICATION TYPES
 * Job application-related interfaces and types
 */

import type { ApplicationStatus } from "../../generated/prisma";

// =====================
// REQUEST TYPES
// =====================

export interface CreateApplicationInput {
  jobId: number;
  candidateId: number;
}

export interface UpdateApplicationStatusInput {
  status: ApplicationStatus;
}

// =====================
// RESPONSE TYPES
// =====================

export interface ApplicationResponse {
  id: number;
  jobId: number;
  candidateId: number;
  status: ApplicationStatus;
  appliedAt: Date;
  job?: {
    id: number;
    title: string;
    company: string;
  };
  candidate?: {
    id: number;
    name: string;
    email: string;
  };
}

// =====================
// DETAILED RESPONSE TYPES
// =====================

/**
 * Response for candidate applications with full job details
 */
export interface CandidateApplicationResponse {
  application_id: number;
  status: ApplicationStatus;
  applied_at: Date;
  candidate: {
    id: number;
    name: string;
    email: string;
    phone_number: string | null;
    profile: {
      qualification: string | null;
      experience_years: number | null;
      resume_url: string | null;
      location: {
        state: string | null;
        city: string | null;
      };
    };
  };
  job: {
    id: number;
    title: string;
    description: string | null;
    employment_type: string;
    job_type: string;
    salary: {
      min: number | null;
      max: number | null;
      currency: string | null;
    };
    status: string;
    recruiter: {
      id: number;
      name: string;
      email: string;
    };
  };
}

/**
 * Response for job applications (recruiter view)
 */
export interface JobApplicationResponse {
  application_id: number;
  status: ApplicationStatus;
  applied_at: Date;
  candidate: {
    id: number;
    name: string;
    email: string;
    phone_number: string | null;
    profile: {
      qualification: string | null;
      experience_years: number | null;
      resume_url: string | null;
      location: {
        state: string | null;
        city: string | null;
      };
    };
  };
}

/**
 * Response for applications by specific candidate
 */
export interface UserApplicationResponse {
  application_id: number;
  status: ApplicationStatus;
  applied_at: Date;
  job: {
    id: number;
    title: string;
    description: string | null;
    employment_type: string;
    job_type: string;
    salary: {
      min: number | null;
      max: number | null;
      currency: string | null;
    };
    recruiter: {
      name: string;
      email: string;
    };
  };
}
