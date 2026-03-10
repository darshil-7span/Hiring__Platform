import prisma from "../config/prisma";
import { getLogger } from "../utils/logger";

const logger = getLogger("ApplicationDAO");

/**
 * Application Repository (DAO Layer)
 * All database operations for job applications
 */

/**
 * Get all candidate applications with full details
 */
const getCandidateApplications = async () => {
  logger.info(`Querying all candidate applications`);
  const applications = await prisma.application.findMany({
    include: {
      // Get candidate details
      candidate: {
        select: {
          id: true,
          name: true,
          email: true,
          phone_number: true,
          // Get candidate profile
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
      // Get job details
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
          // Get recruiter details
          recruiter: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      },
    },
    orderBy: {
      applied_at: 'desc', // Most recent first
    },
  });
  logger.info(`Found ${applications.length} candidate applications`);
  return applications;
};

/**
 * Get applications for a specific job
 */
const getApplicationsByJobId = async (jobId: bigint) => {
  logger.info(`Querying applications for job: ${jobId}`);
  const applications = await prisma.application.findMany({
    where: {
      job_id: jobId,
    },
    include: {
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
    },
    orderBy: {
      applied_at: 'desc',
    },
  });
  logger.info(`Found ${applications.length} applications for job: ${jobId}`);
  return applications;
};

/**
 * Get applications by candidate ID
 */
const getApplicationsByCandidateId = async (candidateId: bigint) => {
  logger.info(`Querying applications for candidate: ${candidateId}`);
  const applications = await prisma.application.findMany({
    where: {
      candidate_id: candidateId,
    },
    include: {
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
    },
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
