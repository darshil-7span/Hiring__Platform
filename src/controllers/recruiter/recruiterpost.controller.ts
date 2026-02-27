import { Request, Response } from "express";
import { JobRepository } from "../../repositories/job.repository";
import {
  CreateJobRequest,
  UpdateJobRequest,
  FilterJobRequest,
} from "../../schemas/job.schema";

/**
 * JOB CONTROLLER
 * Handles all job-related operations for recruiters and candidates
 */

// Extend Express Request to include user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string | number;
        email: string;
        role: string;
      };
    }
  }
}

const jobRepository = new JobRepository();

export class JobController {
  /**
   * RECRUITER: Post a new job
   * Route: POST /api/jobs
   * Body: { title, description, employmentType, jobType, salaryMin, salaryMax, stateId, cityId, skillIds, ... }
   * Auth: Required (Recruiter role)
   */
  async createJob(req: Request, res: Response) {
    try {
      // Extract recruiter ID from authenticated user (from token)
      console.log("Authenticated user:", req.user);
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - User ID not found",
        });
      }

      const recruiterId = BigInt(req.user?.id);

      const jobData = req.body;

      // Create job in database
      const job = await jobRepository.createJob(recruiterId, jobData);

      return res.status(201).json({
        success: true,
        message: "Job posted successfully",
        data: {
          jobId: job.id,
          title: job.job_title,
          description: job.description,
          salaryRange: {
            min: job.salary_min?.toString(),
            max: job.salary_max?.toString(),
          },
          createdAt: job.created_at,
        },
      });
    } catch (error: any) {
      console.error("Error creating job:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to create job",
      });
    }
  }

  /**
   * RECRUITER: Get all jobs posted by the recruiter
   * Route: GET /api/jobs/my-jobs
   * Auth: Required (Recruiter role)
   */
  async getMyJobs(req: Request, res: Response) {
    try {
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - User ID not found",
        });
      }

      const recruiterId = BigInt(req.user.id);

      const jobs = await jobRepository.getRecruiterJobs(recruiterId);

      return res.status(200).json({
        success: true,
        message: "Jobs retrieved successfully",
        data: {
          total: jobs.length,
          jobs: jobs.map((job) => ({
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
          })),
        },
      });
    } catch (error: any) {
      console.error("Error fetching recruiter jobs:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to fetch jobs",
      });
    }
  }

  /**
   * RECRUITER: Get a specific job by ID (with applications)
   * Route: GET /api/jobs/:id
   * Auth: Required (Recruiter role - for own jobs)
   */
  async getJobById(req: Request, res: Response) {
    try {
      const jobId = BigInt(req.params.id as string);

      const job = await jobRepository.getJobById(jobId);

      if (!job) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      // Check if recruiter is the owner (optional: for authorization)
      // Currently allowing any authenticated user to view jobs
      // You can add: if (job.recruiter_id !== recruiterId) return 403;

      return res.status(200).json({
        success: true,
        message: "Job retrieved successfully",
        data: {
          jobId: job.id,
          title: job.job_title,
          description: job.description,
          recruiter: job.recruiter
            ? {
                name: job.recruiter.name,
                email: job.recruiter.email,
              }
            : null,
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
          skills:
            job.job_skills?.map((js) => ({
              id: js.skill.id,
              name: js.skill.name,
            })) || [],
          applicationsCount: job.applications?.length || 0,
          createdAt: job.created_at,
          updatedAt: job.updated_at,
        },
      });
    } catch (error: any) {
      console.error("Error fetching job:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to fetch job",
      });
    }
  }

  /**
   * RECRUITER: Update a job
   * Route: PATCH /api/jobs/:id
   * Body: { title?, description?, salary?, location?, ... }
   * Auth: Required (Recruiter - owner only)
   */
  async updateJob(req: Request, res: Response) {
    try {
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - User ID not found",
        });
      }

      const jobId = BigInt(req.params.id as string);
      const recruiterId = BigInt(req.user.id);

      // Verify job belongs to recruiter
      const job = await jobRepository.getJobById(jobId);

      if (!job) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      if (job.recruiter_id !== recruiterId) {
        return res.status(403).json({
          success: false,
          message: "You are not authorized to update this job",
        });
      }

      const updateData = req.body;
      const updatedJob = await jobRepository.updateJob(jobId, updateData);

      return res.status(200).json({
        success: true,
        message: "Job updated successfully",
        data: {
          jobId: updatedJob.id,
          title: updatedJob.job_title,
          description: updatedJob.description,
          salaryRange: {
            min: updatedJob.salary_min?.toString(),
            max: updatedJob.salary_max?.toString(),
          },
          status: updatedJob.job_status,
          updatedAt: updatedJob.updated_at,
        },
      });
    } catch (error: any) {
      console.error("Error updating job:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to update job",
      });
    }
  }

  /**
   * RECRUITER: Delete a job
   * Route: DELETE /api/jobs/:id
   * Auth: Required (Recruiter - owner only)
   */
  async deleteJob(req: Request, res: Response) {
    try {
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - User ID not found",
        });
      }

      const jobId = BigInt(req.params.id as string);
      const recruiterId = BigInt(req.user?.id);

      // Verify job belongs to recruiter
      const job = await jobRepository.getJobById(jobId);

      if (!job) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }

      //   console.log("Job recruiter_id:", job.recruiter_id);
      //   console.log("Token recruiterId:", recruiterId);
      //   console.log(
      //     "Compare:",
      //     job.recruiter_id?.toString(),
      //     recruiterId.toString(),
      //   );

      if (
        !job.recruiter_id ||
        job.recruiter_id.toString() !== recruiterId.toString()
      ) {
        return res.status(403).json({
          success: false,
          message: "You are not authorized to delete this job",
        });
      }

      await jobRepository.deleteJob(jobId);

      return res.status(200).json({
        success: true,
        message: "Job deleted successfully",
        data: {
          deletedJobId: jobId,
        },
      });
    } catch (error: any) {
      //   console.error("Error deleting job:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to delete job",
      });
    }
  }

  /**
   * BOTH ROLES: Filter jobs by location and salary range
   * Route: GET /api/jobs/filter?stateId=1&cityId=2&salaryMin=100000&salaryMax=500000
   * Query: { stateId?, cityId?, salaryMin?, salaryMax?, employmentType?, jobType?, limit?, offset? }
   * Auth: Required (Recruiter, Candidate)
   */
  async filterJobs(req: Request, res: Response) {
    try {
      // Check authentication
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message:
            "Unauthorized - User authentication required to access filters",
        });
      }

      const filters = req.query as any;

      const jobs = await jobRepository.filterJobs(filters);
      const total = await jobRepository.getTotalActiveJobs();

      return res.status(200).json({
        success: true,
        message: "Jobs filtered successfully",
        data: {
          total,
          limit: parseInt((filters.limit as string) || "10"),
          offset: parseInt((filters.offset as string) || "0"),
          jobs: jobs.map((job) => ({
            jobId: job.id,
            title: job.job_title,
            description: (job.description?.substring(0, 150) || "") + "...",
            recruiter: job.recruiter
              ? {
                  name: job.recruiter.name,
                }
              : null,
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
            skills: job.job_skills?.map((js) => js.skill.name) || [],
            openingsCount: job.openings_count,
            createdAt: job.created_at,
          })),
        },
      });
    } catch (error: any) {
      console.error("Error filtering jobs:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to filter jobs",
      });
    }
  }

  /**
   * BOTH ROLES: Search jobs by title and description
   * Route: GET /api/jobs/search?q=developer
   * Query: { q: string }
   * Auth: Required (Recruiter, Candidate)
   */
  async searchJobs(req: Request, res: Response) {
    try {
      // Check authentication
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - User authentication required to search jobs",
        });
      }

      const searchTerm = req.query.q as string;

      if (!searchTerm || searchTerm.length < 2) {
        return res.status(400).json({
          success: false,
          message: "Search term must be at least 2 characters",
        });
      }

      const jobs = await jobRepository.searchJobs(searchTerm);

      return res.status(200).json({
        success: true,
        message: `Found ${jobs.length} jobs matching "${searchTerm}"`,
        data: {
          total: jobs.length,
          jobs: jobs.map((job) => ({
            jobId: job.id,
            title: job.job_title,
            description: (job.description?.substring(0, 150) || "") + "...",
            recruiter: job.recruiter
              ? {
                  name: job.recruiter.name,
                }
              : null,
            location: {
              state: job.state?.name,
              city: job.city?.name,
            },
            salaryRange: {
              min: job.salary_min?.toString(),
              max: job.salary_max?.toString(),
            },
            createdAt: job.created_at,
          })),
        },
      });
    } catch (error: any) {
      console.error("Error searching jobs:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to search jobs",
      });
    }
  }

  /**
   * BOTH ROLES: Get all active jobs (browsable)
   * Route: GET /api/jobs
   * Query: { limit?, offset? }
   * Auth: Required (Recruiter, Candidate)
   */
  async getAllJobs(req: Request, res: Response) {
    try {
      // Check authentication
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - User authentication required to browse jobs",
        });
      }

      const limit = parseInt((req.query.limit as string) || "10");
      const offset = parseInt((req.query.offset as string) || "0");

      const jobs = await jobRepository.filterJobs({
        limit: limit.toString(),
        offset: offset.toString(),
      });

      const total = await jobRepository.getTotalActiveJobs();

      return res.status(200).json({
        success: true,
        message: "All jobs retrieved successfully",
        data: {
          total,
          limit,
          offset,
          jobs: jobs.map((job) => ({
            jobId: job.id,
            title: job.job_title,
            description: (job.description?.substring(0, 150) || "") + "...",
            recruiter: job.recruiter
              ? {
                  name: job.recruiter.name,
                }
              : null,
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
            createdAt: job.created_at,
          })),
        },
      });
    } catch (error: any) {
      console.error("Error fetching all jobs:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to fetch jobs",
      });
    }
  }
}
