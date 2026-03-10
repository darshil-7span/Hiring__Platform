import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import { env } from "./config/env";
import routes from "./routes";
import { errorHandler } from "./middlewares/error.middleware";

const app: Application = express();

app.use(cors());
app.use(express.json());

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hiring Platform API",
    version: "1.0.0",
  });
});

app.use("/api", routes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

export default app;
