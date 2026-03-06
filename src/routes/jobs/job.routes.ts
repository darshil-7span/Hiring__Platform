import { Router } from "express";
import { jobController } from "../../controllers/recruiter/recruiterpost.controller";
import { validate } from "../../middlewares/validate.middleware";
import { authRole } from "../../middlewares/auth-role.middleware";
import {
  createJobSchema,
  updateJobSchema,
  deleteJobSchema,
  getJobByIdSchema,
  filterJobSchema,
  searchJobSchema,
} from "../../schemas/job.schema";

/**
 * JOB ROUTES
 *
 * Routes for job posting, updating, deleting, and filtering
 *
 * Pattern:
 * router.method(path, validate(schema), authRole("role1", "role2"), controller.method)
 * 
 * Note: Using authRole() combines authentication + role check in one middleware
 * More efficient than authMiddleware + roleMiddleware
 */

const router = Router();

/**
 * ==================== RECRUITER ROUTES ====================
 */
/**
 * POST /api/jobs
 * Create a new job post
 * Auth: Required (Recruiter)
 * Body: { title, description, employmentType, jobType, stateId, cityId, skillIds, ... }
 */
router.post(
  "/",
  validate(createJobSchema),
  authRole("recruiter"),
  jobController.createJob,
);

/**
 * GET /api/jobs/my-jobs
 * Get all jobs posted by the authenticated recruiter
 * Auth: Required (Recruiter)
 */
router.get(
  "/my-jobs",
  authRole("recruiter"),
  jobController.getMyJobs,
);

/**
 * GET /api/jobs/:id
 * Get a specific job with full details
 * Auth: Optional
 * Params: { id: JobID }
 */
router.get(
  "/:id",
  validate(getJobByIdSchema),
  jobController.getJobById,
);

/**
 * PATCH /api/jobs/:id
 * Update an existing job
 * Auth: Required (Recruiter - owner only)
 * Params: { id: JobID }
 * Body: { title?, description?, salary?, ... }
 */
router.patch(
  "/:id",
  validate(updateJobSchema),
  authRole("recruiter"),
  jobController.updateJob,
);

/**
 * DELETE /api/jobs/:id
 * Delete a job post
 * Auth: Required (Recruiter - owner only)
 * Params: { id: JobID }
 */
router.delete(
  "/:id",
  validate(deleteJobSchema),
  authRole("recruiter"),
  jobController.deleteJob,
);

/**
 * ==================== SEARCH & FILTER ROUTES (Both Roles) ====================
 */

/**
 * GET /api/jobs/search?q=developer
 * Search jobs by title and description
 * Auth: Required (Recruiter, Candidate)
 * Query: { q: searchTerm }
 */
router.get(
  "/search/jobs",
  authRole("recruiter", "candidate"),
  validate(searchJobSchema),
  jobController.searchJobs,
);

/**
 * GET /api/jobs/filter?stateId=1&cityId=2&salaryMin=100000&salaryMax=500000
 * Filter jobs by location, salary, employment type, job type
 * Auth: Required (Recruiter, Candidate)
 * Query: { stateId?, cityId?, salaryMin?, salaryMax?, employmentType?, jobType?, limit?, offset? }
 *
 * Example Queries:
 * - Filter by state: ?stateId=1
 * - Filter by city: ?stateId=1&cityId=5
 * - Filter by salary: ?salaryMin=100000&salaryMax=500000
 * - Filter by employment type: ?employmentType=fulltime
 * - Filter by remote/onsite: ?jobType=Remote
 * - Pagination: ?limit=20&offset=0
 */
router.get(
  "/browse/all",
  authRole("recruiter", "candidate"),
  validate(filterJobSchema),
  jobController.filterJobs,
);

/**
 * GET /api/jobs
 * Get all active jobs (paginated)
 * Auth: Required (Recruiter, Candidate)
 * Query: { limit?, offset? }
 */
router.get(
  "/",
  authRole("recruiter", "candidate"),
  jobController.getAllJobs,
);

export default router;
