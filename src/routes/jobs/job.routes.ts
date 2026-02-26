import { Router } from "express";
import { JobController } from "../../controllers/recruiter/recruiterpost.controller";
import { validate } from "../../middlewares/validate.middleware";
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
 * router.method(path, validate(schema), authMiddleware (optional), controller.method)
 */

const router = Router();
const jobController = new JobController();

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
  // authMiddleware, // Uncomment when auth is ready
  // roleMiddleware("recruiter"), // Uncomment when role check is ready
  jobController.createJob.bind(jobController),
);

/**
 * GET /api/jobs/my-jobs
 * Get all jobs posted by the authenticated recruiter
 * Auth: Required (Recruiter)
 */
router.get(
  "/my-jobs",
  // authMiddleware, // Uncomment when auth is ready
  // roleMiddleware("recruiter"), // Uncomment when role check is ready
  jobController.getMyJobs.bind(jobController),
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
  jobController.getJobById.bind(jobController),
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
  // authMiddleware, // Uncomment when auth is ready
  // roleMiddleware("recruiter"), // Uncomment when role check is ready
  jobController.updateJob.bind(jobController),
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
  // authMiddleware, // Uncomment when auth is ready
  // roleMiddleware("recruiter"), // Uncomment when role check is ready
  jobController.deleteJob.bind(jobController),
);

/**
 * ==================== SEARCH & FILTER ROUTES (Both Roles) ====================
 */

/**
 * GET /api/jobs/search?q=developer
 * Search jobs by title and description
 * Auth: Not required
 * Query: { q: searchTerm }
 */
router.get(
  "/search/jobs",
  validate(searchJobSchema),
  jobController.searchJobs.bind(jobController),
);

/**
 * GET /api/jobs/filter?stateId=1&cityId=2&salaryMin=100000&salaryMax=500000
 * Filter jobs by location, salary, employment type, job type
 * Auth: Not required
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
  validate(filterJobSchema),
  jobController.filterJobs.bind(jobController),
);

/**
 * GET /api/jobs
 * Get all active jobs (paginated)
 * Auth: Not required
 * Query: { limit?, offset? }
 */
router.get("/", jobController.getAllJobs.bind(jobController));

export default router;
