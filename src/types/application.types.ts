/**
 * APPLICATION TYPES
 * Job application-related interfaces and types
 */

import type { ApplicationStatus } from "../../generated/prisma";

// =====================
// DAO TYPES (Database Layer)
// =====================

export type ApplicationWithFullDetails = any;
export type ApplicationWithCandidate = any;
export type ApplicationWithJob = any;

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

// =====================
// FORMATTER FUNCTIONS
// =====================

export const formatCandidateApplicationResponse = (app: any): CandidateApplicationResponse => ({
  application_id: Number(app.id),
  status: app.status!,
  applied_at: app.applied_at!,
  candidate: {
    id: Number(app.candidate?.id),
    name: app.candidate?.name || "",
    email: app.candidate?.email || "",
    phone_number: app.candidate?.phone_number || null,
    profile: {
      qualification: app.candidate?.candidate_profile?.qualification || null,
      experience_years: app.candidate?.candidate_profile?.experience_years || null,
      resume_url: app.candidate?.candidate_profile?.resume_url || null,
      location: {
        state: app.candidate?.candidate_profile?.state?.name || null,
        city: app.candidate?.candidate_profile?.city?.name || null,
      },
    },
  },
  job: {
    id: Number(app.job?.id),
    title: app.job?.job_title || "",
    description: app.job?.description || null,
    employment_type: app.job?.employment_type || "",
    job_type: app.job?.job_type || "",
    salary: {
      min: app.job?.salary_min ? Number(app.job.salary_min) : null,
      max: app.job?.salary_max ? Number(app.job.salary_max) : null,
      currency: app.job?.currency || null,
    },
    status: app.job?.job_status || "",
    recruiter: {
      id: Number(app.job?.recruiter?.id),
      name: app.job?.recruiter?.name || "",
      email: app.job?.recruiter?.email || "",
    },
  },
});

export const formatJobApplicationResponse = (app: any): JobApplicationResponse => ({
  application_id: Number(app.id),
  status: app.status!,
  applied_at: app.applied_at!,
  candidate: {
    id: Number(app.candidate?.id),
    name: app.candidate?.name || "",
    email: app.candidate?.email || "",
    phone_number: app.candidate?.phone_number || null,
    profile: {
      qualification: app.candidate?.candidate_profile?.qualification || null,
      experience_years: app.candidate?.candidate_profile?.experience_years || null,
      resume_url: app.candidate?.candidate_profile?.resume_url || null,
      location: {
        state: app.candidate?.candidate_profile?.state?.name || null,
        city: app.candidate?.candidate_profile?.city?.name || null,
      },
    },
  },
});

export const formatUserApplicationResponse = (app: any): UserApplicationResponse => ({
  application_id: Number(app.id),
  status: app.status!,
  applied_at: app.applied_at!,
  job: {
    id: Number(app.job?.id),
    title: app.job?.job_title || "",
    description: app.job?.description || null,
    employment_type: app.job?.employment_type || "",
    job_type: app.job?.job_type || "",
    salary: {
      min: app.job?.salary_min ? Number(app.job.salary_min) : null,
      max: app.job?.salary_max ? Number(app.job.salary_max) : null,
      currency: app.job?.currency || null,
    },
    recruiter: {
      name: app.job?.recruiter?.name || "",
      email: app.job?.recruiter?.email || "",
    },
  },
});
