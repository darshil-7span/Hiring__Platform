import { applicationRepository } from "../dao/application.dao";
import { getLogger } from "../utils/logger";
import type {
  CandidateApplicationResponse,
  JobApplicationResponse,
  UserApplicationResponse,
} from "../types";

const logger = getLogger("ApplicationService");

/**
 * Application Service (Business Logic Layer)
 * Handles job application business logic
 */

/**
 * Get all candidate applications
 */
const getAllCandidateApplications = async (): Promise<CandidateApplicationResponse[]> => {
  logger.info(`[GET_ALL_APPLICATIONS] Fetching all candidate applications`);
  const applications = await applicationRepository.getCandidateApplications();

  const response = applications.map((app) => ({
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
  }));

  logger.info(`[GET_ALL_APPLICATIONS] Transformed ${response.length} applications for response`);
  return response;
};

/**
 * Get applications for a specific job
 */
const getApplicationsByJob = async (jobId: bigint): Promise<JobApplicationResponse[]> => {
  logger.info(`[GET_APPLICATIONS_BY_JOB] Fetching applications for job: ${jobId}`);
  const applications = await applicationRepository.getApplicationsByJobId(jobId);

  const response = applications.map((app) => ({
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
  }));

  logger.info(`[GET_APPLICATIONS_BY_JOB] Transformed ${response.length} applications for job: ${jobId}`);
  return response;
};

/**
 * Get applications by candidate
 */
const getApplicationsByCandidate = async (candidateId: bigint): Promise<UserApplicationResponse[]> => {
  logger.info(`[GET_APPLICATIONS_BY_CANDIDATE] Fetching applications for candidate: ${candidateId}`);
  const applications = await applicationRepository.getApplicationsByCandidateId(candidateId);

  const response = applications.map((app) => ({
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
  }));

  logger.info(`[GET_APPLICATIONS_BY_CANDIDATE] Transformed ${response.length} applications for candidate: ${candidateId}`);
  return response;
};

export const applicationService = {
  getAllCandidateApplications,
  getApplicationsByJob,
  getApplicationsByCandidate,
};
