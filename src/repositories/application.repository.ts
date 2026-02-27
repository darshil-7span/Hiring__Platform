import prisma from "../config/prisma";

/**
 * Application Repository (DAO Layer)
 * All database operations for job applications
 */

export class ApplicationRepository {
  /**
   * Get all candidates who applied for jobs with full details
   */
  async getCandidateApplications() {
    return await prisma.application.findMany({
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
  }

  /**
   * Get applications for a specific job
   */
  async getApplicationsByJobId(jobId: bigint) {
    return await prisma.application.findMany({
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
  }

  /**
   * Get applications by candidate ID
   */
  async getApplicationsByCandidateId(candidateId: bigint) {
    return await prisma.application.findMany({
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
  }
}

// Export singleton instance
export const applicationRepository = new ApplicationRepository();
