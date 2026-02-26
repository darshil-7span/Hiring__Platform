import { Router } from "express";
import authRoutes from "./auth/auth.routes";

// Import all routes
import jobRoutes from "./jobs/job.routes";
import candidateRoutes from "./candidate/candidate.routes";
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
 * Candidate Routes
 * Base: /api/candidate
 * Routes:
 *   POST   /api/candidate/apply   - Apply to a job (candidate)
 */
router.use("/candidate", candidateRoutes);

// Mount module routes
router.use("/auth", authRoutes);

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

export default router;
