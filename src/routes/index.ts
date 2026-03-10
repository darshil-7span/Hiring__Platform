import { Router } from "express";
import authRoutes from "./auth/auth.routes";

// Import all routes
import jobRoutes from "./jobs/job.routes";
import candidateRoutes from "./candidate/candidate.routes";
import recruiterRoutes from "./recruiter/recruiter.routes";
import applicationRoutes from "./application/application.routes";

/**
 * MAIN ROUTES INDEX
 * Combines all route modules
 */

const router = Router();

/**
 * Auth Routes
 * Base: /api/auth
 * Routes:
 *   POST   /api/auth/register     - Register new user
 *   POST   /api/auth/login        - Login user
 */
router.use("/auth", authRoutes);

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
 * Candidate Routes
 * Base: /api/candidate
 * Routes:
 *   GET    /api/candidate/profile   - Get candidate profile
 *   PATCH  /api/candidate/profile   - Update candidate profile
 *   POST   /api/candidate/apply     - Apply to a job (candidate)
 */
router.use("/candidate", candidateRoutes);

/**
 * Recruiter Routes
 * Base: /api/recruiter
 * Routes:
 *   GET    /api/recruiter/profile   - Get recruiter profile
 *   PATCH  /api/recruiter/profile   - Update recruiter profile
 */
router.use("/recruiter", recruiterRoutes);

/**
 * Application Routes
 * Base: /api/applications
 * Routes:
 *   GET    /api/applications/candidates        - Get all candidate applications
 *   GET    /api/applications/job/:jobId        - Get applications for a job
 *   GET    /api/applications/my-applications   - Get my applications (candidate)
 */
router.use("/applications", applicationRoutes);

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

export default router;
