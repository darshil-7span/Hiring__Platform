import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import { env } from "./config/env";
import routes from "./routes/index";

// routes
// import healthRoutes from "./routes/health.routes";

const app: Application = express();

/* ===============================
   GLOBAL MIDDLEWARES
================================ */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/* ===============================
   ROUTES
================================ */
// app.use("/api/health", healthRoutes);

// Main API routes
app.use("/api", routes);

app.use("/", (req, res, next) => {
  console.log("✅ Connected");
  next();
});

/* ===============================
   404 HANDLER
================================ */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* ===============================
   GLOBAL ERROR HANDLER
================================ */
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err);

    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  },
);

export default app;
