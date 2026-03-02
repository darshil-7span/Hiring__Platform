import { applicationRepository } from "../repositories/application.repository";

/**
 * Application Service (Business Logic Layer)
 * Handles job application business logic
 */

/**
 * Get all candidate applications
 */
const getAllCandidateApplications = async () => {
  const applications = await applicationRepository.getCandidateApplications();

  return applications.map((app) => ({
    application_id: Number(app.id),
    status: app.status,
    applied_at: app.applied_at,
    candidate: {
      id: Number(app.candidate?.id),
      name: app.candidate?.name,
      email: app.candidate?.email,
      phone_number: app.candidate?.phone_number,
      profile: {
        qualification: app.candidate?.candidate_profile?.qualification,
        experience_years: app.candidate?.candidate_profile?.experience_years,
        resume_url: app.candidate?.candidate_profile?.resume_url,
        location: {
          state: app.candidate?.candidate_profile?.state?.name,
          city: app.candidate?.candidate_profile?.city?.name,
        },
      },
    },
    job: {
      id: Number(app.job?.id),
      title: app.job?.job_title,
      description: app.job?.description,
      employment_type: app.job?.employment_type,
      job_type: app.job?.job_type,
      salary: {
        min: app.job?.salary_min ? Number(app.job.salary_min) : null,
        max: app.job?.salary_max ? Number(app.job.salary_max) : null,
        currency: app.job?.currency,
      },
      status: app.job?.job_status,
      recruiter: {
        id: Number(app.job?.recruiter?.id),
        name: app.job?.recruiter?.name,
        email: app.job?.recruiter?.email,
      },
    },
  }));
};

/**
 * Get applications for a specific job
 */
const getApplicationsByJob = async (jobId: bigint) => {
  const applications = await applicationRepository.getApplicationsByJobId(jobId);

  return applications.map((app) => ({
    application_id: Number(app.id),
    status: app.status,
    applied_at: app.applied_at,
    candidate: {
      id: Number(app.candidate?.id),
      name: app.candidate?.name,
      email: app.candidate?.email,
      phone_number: app.candidate?.phone_number,
      profile: {
        qualification: app.candidate?.candidate_profile?.qualification,
        experience_years: app.candidate?.candidate_profile?.experience_years,
        resume_url: app.candidate?.candidate_profile?.resume_url,
        location: {
          state: app.candidate?.candidate_profile?.state?.name,
          city: app.candidate?.candidate_profile?.city?.name,
        },
      },
    },
  }));
};

/**
 * Get applications by candidate
 */
const getApplicationsByCandidate = async (candidateId: bigint) => {
  const applications = await applicationRepository.getApplicationsByCandidateId(candidateId);

  return applications.map((app) => ({
    application_id: Number(app.id),
    status: app.status,
    applied_at: app.applied_at,
    job: {
      id: Number(app.job?.id),
      title: app.job?.job_title,
      description: app.job?.description,
      employment_type: app.job?.employment_type,
      job_type: app.job?.job_type,
      salary: {
        min: app.job?.salary_min ? Number(app.job.salary_min) : null,
        max: app.job?.salary_max ? Number(app.job.salary_max) : null,
        currency: app.job?.currency,
      },
      recruiter: {
        name: app.job?.recruiter?.name,
        email: app.job?.recruiter?.email,
      },
    },
  }));
};

export const applicationService = {
  getAllCandidateApplications,
  getApplicationsByJob,
  getApplicationsByCandidate,
};
