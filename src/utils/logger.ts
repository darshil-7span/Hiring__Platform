import winston from "winston";

/**
 * Winston Logger Configuration
 * Centralized logging system for the application
 */

const logFormat = winston.format.printf(({ timestamp, level, message, moduleName, ...metadata }) => {
  let log = `${timestamp} [${moduleName || "App"}] ${level}: ${message}`;
  
  // Add metadata if present
  if (Object.keys(metadata).length > 0) {
    log += ` ${JSON.stringify(metadata)}`;
  }
  
  return log;
});

// Create base logger configuration
const baseLogger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DDTHH:mm:ssZ" }),
    winston.format.errors({ stack: true }),
    logFormat
  ),
  transports: [
    // Console transport for development
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: "YYYY-MM-DDTHH:mm:ssZ" }),
        logFormat
      ),
    }),
    // File transport for all logs
    new winston.transports.File({
      filename: "logs/combined.log",
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    // File transport for error logs
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
  ],
});

/**
 * Get a logger instance for a specific module
 * @param moduleName - Name of the module (e.g., "UserService", "AuthController", "UserDAO")
 * @returns Winston logger instance with module name context
 */
export const getLogger = (moduleName: string) => {
  return baseLogger.child({ moduleName });
};

export default baseLogger;
