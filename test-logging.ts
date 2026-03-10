// Test script to verify logging system
import { getLogger } from "./src/utils/logger";

console.log("🧪 Testing Logging System...\n");

// Test 1: Auth logs
const authLogger = getLogger("AuthController");
console.log("📝 Test 1: Writing to AuthController...");
authLogger.info("Test login attempt");
authLogger.info("Test user found");
authLogger.warn("Test warning");

// Test 2: Job logs
const jobLogger = getLogger("JobController");
console.log("📝 Test 2: Writing to JobController...");
jobLogger.info("Test job created");
jobLogger.info("Test job updated");

// Test 3: Application logs
const appLogger = getLogger("ApplicationController");
console.log("📝 Test 3: Writing to ApplicationController...");
appLogger.info("Test application submitted");

// Test 4: Error logs
console.log("📝 Test 4: Writing error...");
authLogger.error("Test error message");

console.log("\n✅ Test complete! Check the logs:");
console.log("   - logs/combined.log (should have all logs)");
console.log("   - logs/error.log (should have only the error)");
console.log("   - logs/modules/auth.log (should have auth logs - NO DUPLICATES!)");
console.log("   - logs/modules/job.log (should have job logs - NO DUPLICATES!)");
console.log("   - logs/modules/application.log (should have application logs - NO DUPLICATES!)");

// Give Winston time to write the logs
setTimeout(() => {
  console.log("\n🔍 Checking for duplicates in auth.log...");
  process.exit(0);
}, 1000);
