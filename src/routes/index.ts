import { Router } from "express";
import authRoutes from "./auth/auth.routes";

/**
 * Main Router
 * Combines all module routes
 */

const router = Router();

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
