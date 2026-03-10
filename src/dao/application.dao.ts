import prisma from "../config/prisma";
import { getLogger } from "../utils/logger";
import type { ApplicationWithFullDetails, ApplicationWithCandidate, ApplicationWithJob } from "../types";

const logger = getLogger("ApplicationDAO");

// ============================================
// HELPER FUNCTIONS
// ============================================

const APPLICATION_FULL_INCLUDE = {
  candidate: {
    select: {
      id: true,
      name: true,
      email: true,
      phone_number: true,
      candidate_profile: {
        select: {
          qualification: true,
          experience_years: true,
          resume_url: true,
          state_id: true,
          city_id: true,
          state: {
            select: {
              name: true,
            },
          },
          city: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  },
  job: {
    select: {
      id: true,
      job_title: true,
      description: true,
      employment_type: true,
      job_type: true,
      salary_min: true,
      salary_max: true,
      currency: true,
      job_status: true,
      recruiter: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  },
};

const APPLICATION_WITH_CANDIDATE_INCLUDE = {
  candidate: {
    select: {
      id: true,
      name: true,
      email: true,
      phone_number: true,
      candidate_profile: {
        select: {
          qualification: true,
          experience_years: true,
          resume_url: true,
          state: {
            select: {
              name: true,
            },
          },
          city: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  },
};

const APPLICATION_WITH_JOB_INCLUDE = {
  job: {
    select: {
      id: true,
      job_title: true,
      description: true,
      employment_type: true,
      job_type: true,
      salary_min: true,
      salary_max: true,
      currency: true,
      recruiter: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  },
};

// ============================================
// DAO FUNCTIONS
// ============================================

const getCandidateApplications = async (): Promise<ApplicationWithFullDetails[]> => {
  logger.info(`Querying all candidate applications`);
  const applications = await prisma.application.findMany({
    include: APPLICATION_FULL_INCLUDE,
    orderBy: {
      applied_at: 'desc',
    },
  });
  logger.info(`Found ${applications.length} candidate applications`);
  return applications;
};

const getApplicationsByJobId = async (jobId: bigint): Promise<ApplicationWithCandidate[]> => {
  logger.info(`Querying applications for job: ${jobId}`);
  const applications = await prisma.application.findMany({
    where: {
      job_id: jobId,
    },
    include: APPLICATION_WITH_CANDIDATE_INCLUDE,
    orderBy: {
      applied_at: 'desc',
    },
  });
  logger.info(`Found ${applications.length} applications for job: ${jobId}`);
  return applications;
};

const getApplicationsByCandidateId = async (candidateId: bigint): Promise<ApplicationWithJob[]> => {
  logger.info(`Querying applications for candidate: ${candidateId}`);
  const applications = await prisma.application.findMany({
    where: {
      candidate_id: candidateId,
    },
    include: APPLICATION_WITH_JOB_INCLUDE,
    orderBy: {
      applied_at: 'desc',
    },
  });
  logger.info(`Found ${applications.length} applications for candidate: ${candidateId}`);
  return applications;
};

export const applicationRepository = {
  getCandidateApplications,
  getApplicationsByJobId,
  getApplicationsByCandidateId,
};
