import * as winston from "winston";
import * as path from "path";

/**
 * Winston Logger Configuration
 * Centralized logging system with module-specific log files
 * 
 * Log Structure:
 * logs/
 *   ├── combined.log       - All logs (backup)
 *   ├── error.log          - All errors
 *   └── modules/
 *       ├── auth.log       - Authentication logs
 *       ├── job.log        - Job operations
 *       ├── application.log - Application logs
 *       ├── candidate.log  - Candidate logs
 *       └── recruiter.log  - Recruiter logs
 */

const logFormat = winston.format.printf(({ timestamp, level, message, moduleName, ...metadata }) => {
  let log = `${timestamp} [${moduleName || "App"}] ${level}: ${message}`;
  
  // Add metadata if present
  if (Object.keys(metadata).length > 0) {
    log += ` ${JSON.stringify(metadata)}`;
  }
  
  return log;
});

/**
 * Map module names to log files
 * This groups related modules into single log files
 */
const getModuleLogFile = (moduleName: string): string => {
  const moduleNameLower = moduleName.toLowerCase();
  
  // Auth-related modules
  if (moduleNameLower.includes("auth")) {
    return "logs/modules/auth.log";
  }
  
  // Job-related modules
  if (moduleNameLower.includes("job")) {
    return "logs/modules/job.log";
  }
  
  // Application-related modules
  if (moduleNameLower.includes("application")) {
    return "logs/modules/application.log";
  }
  
  // Candidate-related modules
  if (moduleNameLower.includes("candidate")) {
    return "logs/modules/candidate.log";
  }
  
  // Recruiter-related modules
  if (moduleNameLower.includes("recruiter")) {
    return "logs/modules/recruiter.log";
  }
  
  // Default/other modules
  return "logs/modules/general.log";
};

// Create base logger configuration
const baseLogger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    logFormat
  ),
  transports: [
    // Console transport for development
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat
      ),
    }),
    // Combined log (all logs backup)
    new winston.transports.File({
      filename: "logs/combined.log",
      maxsize: 10485760, // 10MB
      maxFiles: 5,
    }),
    // Error log (all errors)
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      maxsize: 10485760, // 10MB
      maxFiles: 5,
    }),
  ],
});

// Cache for module loggers to prevent duplicate transports
const moduleLoggers = new Map<string, winston.Logger>();

/**
 * Get a logger instance for a specific module
 * Creates an independent logger with module-specific log file
 * Uses caching to prevent duplicate transports
 * 
 * @param moduleName - Name of the module (e.g., "AuthController", "JobService", "ApplicationRepository")
 * @returns Winston logger instance with module name context and dedicated log file
 * 
 * @example
 * const logger = getLogger("AuthController");
 * logger.info("User logged in", { userId: 123 });
 * // Logs to: console, combined.log, error.log, and modules/auth.log (each log appears once)
 */
export const getLogger = (moduleName: string): winston.Logger => {
  // Check if logger already exists in cache
  if (moduleLoggers.has(moduleName)) {
    return moduleLoggers.get(moduleName)!;
  }
  
  // Get the appropriate log file for this module
  const moduleLogFile = getModuleLogFile(moduleName);
  
  // Create an independent logger (not a child) to avoid duplicate transports
  const moduleLogger = winston.createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.errors({ stack: true }),
      logFormat
    ),
    defaultMeta: { moduleName }, // Add module name to all logs
    transports: [
      // Console transport
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
          logFormat
        ),
      }),
      // Combined log (all logs)
      new winston.transports.File({
        filename: "logs/combined.log",
        maxsize: 10485760, // 10MB
        maxFiles: 5,
      }),
      // Error log (errors only)
      new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
        maxsize: 10485760, // 10MB
        maxFiles: 5,
      }),
      // Module-specific log
      new winston.transports.File({
        filename: moduleLogFile,
        maxsize: 10485760, // 10MB
        maxFiles: 3,
      }),
    ],
  });
  
  // Cache the logger
  moduleLoggers.set(moduleName, moduleLogger);
  
  return moduleLogger;
};

export default baseLogger;
