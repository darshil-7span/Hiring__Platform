import { Router } from "express";

// Import all routes
import jobRoutes from "./jobs/job.routes";
// import authRoutes from "./auth/auth.routes";
// import applicationRoutes from "./application/application.routes";

/**
 * MAIN ROUTES INDEX
 * Combines all route modules
 */

const router = Router();

/**
 * Job Routes
 * Base: /api/jobs
 * Routes:
 *   POST   /api/jobs              - Create job (recruiter)
 *   GET    /api/jobs              - Get all jobs (paginated)
 *   GET    /api/jobs/my-jobs      - Get recruiter's jobs
 *   GET    /api/jobs/:id          - Get job details
 *   PATCH  /api/jobs/:id          - Update job (recruiter)
 *   DELETE /api/jobs/:id          - Delete job (recruiter)
 *   GET    /api/jobs/search?q=    - Search jobs
 *   GET    /api/jobs/filter?...   - Filter jobs by location, salary, etc.
 */
router.use("/jobs", jobRoutes);

/**
 * Auth Routes (Example - uncomment when ready)
 * Base: /api/auth
 */
// router.use("/auth", authRoutes);

/**
 * Application Routes (Example)
 * Base: /api/applications
 */
// router.use("/applications", applicationRoutes);

export default router;
