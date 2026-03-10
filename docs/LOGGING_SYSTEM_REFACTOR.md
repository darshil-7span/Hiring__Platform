# Logging System Refactoring 📋✨

## Problem Statement

**User Concern:**
> "this logs folder have combined log file but this log file looks messy like i think logs we have to write according file name like routes.log, controller.log but what happened current all logs show in one file so which way is better for this"

**Before (Messy ❌):**
- All logs mixed in one `combined.log` file
- Hard to find specific module logs
- Difficult to debug specific features
- Log file becomes huge and unreadable

```
logs/
└── combined.log  ← Everything mixed together! 😵

Content:
[AuthController] User registered
[JobController] Job created
[ApplicationController] Application submitted
[AuthController] Login failed
[CandidateController] Profile updated
[JobController] Job deleted
...endless mixed logs...
```

---

## Solution: Module-Based Logging ✅

### **New Log Structure (Clean & Organized 🎯)**

```
logs/
├── combined.log              ← All logs (complete backup)
├── error.log                 ← All errors across all modules
├── modules/
│   ├── auth.log             ← Only authentication logs
│   ├── job.log              ← Only job-related logs
│   ├── application.log      ← Only application logs
│   ├── candidate.log        ← Only candidate logs
│   ├── recruiter.log        ← Only recruiter logs
│   └── general.log          ← System/misc logs
└── README.md                 ← Documentation
```

---

## How It Works 🔧

### **1. Automatic Module Detection**

The logger automatically routes logs to the correct file based on module name:

```typescript
// In AuthController
const logger = getLogger("AuthController");
logger.info("User logged in");
// ✅ Logs to: console, combined.log, error.log (if error), modules/auth.log

// In JobController
const logger = getLogger("JobController");
logger.info("Job created");
// ✅ Logs to: console, combined.log, modules/job.log

// In ApplicationService
const logger = getLogger("ApplicationService");
logger.error("Application failed");
// ✅ Logs to: console, combined.log, error.log, modules/application.log
```

### **2. Smart Module Mapping**

The logger intelligently groups related modules:

| Module Name Pattern | Log File | Example Modules |
|---------------------|----------|-----------------|
| Contains "auth" | `modules/auth.log` | AuthController, AuthService, AuthDAO |
| Contains "job" | `modules/job.log` | JobController, JobService, JobRepository |
| Contains "application" | `modules/application.log` | ApplicationController, ApplicationService |
| Contains "candidate" | `modules/candidate.log` | CandidateController, CandidateService |
| Contains "recruiter" | `modules/recruiter.log` | RecruiterController, RecruiterService |
| Others | `modules/general.log` | Middleware, Utils, System logs |

---

## Implementation Details 🛠️

### **Updated logger.ts**

**Key Features:**
1. ✅ **Module-specific file transports** - Each module gets its own log file
2. ✅ **Logger caching** - Prevents memory leaks from duplicate transports
3. ✅ **Automatic routing** - Smart module name detection
4. ✅ **Log rotation** - 10MB max size, keeps 3 files
5. ✅ **Multiple outputs** - Console + Combined + Error + Module-specific

**Code Structure:**
```typescript
// Cache to prevent duplicate transports (fixes memory leak)
const moduleLoggers = new Map<string, winston.Logger>();

// Smart module-to-file mapping
const getModuleLogFile = (moduleName: string): string => {
  if (moduleName.toLowerCase().includes("auth")) return "logs/modules/auth.log";
  if (moduleName.toLowerCase().includes("job")) return "logs/modules/job.log";
  // ... other mappings
};

// Cached logger creation
export const getLogger = (moduleName: string): winston.Logger => {
  if (moduleLoggers.has(moduleName)) {
    return moduleLoggers.get(moduleName)!; // Reuse existing logger
  }
  
  // Create new logger with module-specific transport
  const moduleLogger = baseLogger.child({ moduleName });
  moduleLogger.add(new winston.transports.File({
    filename: getModuleLogFile(moduleName),
    maxsize: 10485760, // 10MB
    maxFiles: 3,
  }));
  
  moduleLoggers.set(moduleName, moduleLogger); // Cache it
  return moduleLogger;
};
```

---

## Benefits 🎉

### **For Developers:**
1. ✅ **Faster Debugging** - Open only the relevant log file
2. ✅ **Cleaner Logs** - No more mixed logs
3. ✅ **Easy Search** - Use `grep` or text editor to find logs
4. ✅ **Better Context** - See all logs for one feature together

### **For Operations:**
1. ✅ **Targeted Monitoring** - Monitor specific modules
2. ✅ **Smaller Files** - Each module log is smaller
3. ✅ **Better Rotation** - Module logs rotate independently
4. ✅ **Easy Analysis** - Analyze one module at a time

### **For Testing:**
1. ✅ **Test Verification** - Check module-specific logs during tests
2. ✅ **Isolated Issues** - Quickly identify which module has issues
3. ✅ **Better Reporting** - Generate module-specific reports

---

## Usage Examples 💡

### **Example 1: Debugging Auth Issues**

**Instead of searching through 10,000 lines in combined.log:**
```bash
# Just check auth logs (maybe 200 lines)
tail -f logs/modules/auth.log
```

**What you'll see:**
```
2026-03-08 02:17:31 [AuthController] info: [REGISTER] API request received for email: user@example.com
2026-03-08 02:17:31 [AuthService] info: Registration started {"email":"user@example.com","role":"candidate"}
2026-03-08 02:17:31 [AuthDAO] info: Checking if email exists: user@example.com
2026-03-08 02:17:31 [AuthDAO] warn: Email exists: user@example.com
2026-03-08 02:17:31 [AuthService] error: Registration failed: Email already exists
```

**Clear flow:** Request → Service → DAO → Error

### **Example 2: Monitoring Job Creation**

```bash
# Watch job logs in real-time
tail -f logs/modules/job.log
```

**What you'll see:**
```
2026-03-08 10:15:22 [JobController] info: [CREATE_JOB] API request received
2026-03-08 10:15:22 [JobService] info: Creating job {"title":"Senior Developer","recruiterId":"5"}
2026-03-08 10:15:22 [JobRepository] info: Job created successfully {"jobId":"123"}
2026-03-08 10:15:22 [JobController] info: [CREATE_JOB] Job created successfully
```

### **Example 3: Finding All Errors**

```bash
# Check error.log for all errors across modules
tail -f logs/error.log

# Or search for specific error
grep "Database connection" logs/error.log
```

---

## Best Practices 📚

### **For Development:**
```bash
# Watch specific module during development
tail -f logs/modules/auth.log

# Or watch all errors
tail -f logs/error.log

# Or watch everything
tail -f logs/combined.log
```

### **For Production:**
```bash
# Set log level to error in production
export LOG_LEVEL=error

# Monitor errors only
watch -n 1 "wc -l logs/error.log"

# Archive old logs
tar -czf logs-backup-$(date +%Y%m%d).tar.gz logs/*.log
```

### **For Testing:**
```bash
# Clear logs before test run
rm logs/modules/*.log

# Run tests
npm test

# Check module-specific results
cat logs/modules/auth.log
```

---

## Quick Commands 🚀

```bash
# View module logs
tail -f logs/modules/auth.log          # Auth logs
tail -f logs/modules/job.log           # Job logs
tail -f logs/modules/application.log   # Application logs

# Search for errors
grep "error" logs/modules/auth.log
grep "500" logs/error.log

# Count log entries
wc -l logs/modules/*.log

# Clear all logs
rm logs/*.log logs/modules/*.log

# Archive logs
tar -czf logs-$(date +%Y%m%d-%H%M%S).tar.gz logs/
```

---

## Migration Notes 🔄

### **Changes Made:**
1. ✅ Updated `src/utils/logger.ts` with module routing
2. ✅ Added logger caching to prevent memory leaks
3. ✅ Created `logs/modules/` directory structure
4. ✅ Added `.gitkeep` to track empty directory
5. ✅ Updated `.gitignore` to ignore log files but keep structure
6. ✅ Created `logs/README.md` with documentation

### **No Code Changes Needed:**
- ✅ All existing `getLogger()` calls work as-is
- ✅ No controller/service/repository changes needed
- ✅ Backward compatible with old logging

### **Automatic Benefits:**
- ✅ All `AuthController`, `AuthService`, `AuthDAO` → `modules/auth.log`
- ✅ All `JobController`, `JobService`, `JobRepository` → `modules/job.log`
- ✅ All other modules automatically routed correctly

---

## Files Changed Summary 📄

| File | Change | Reason |
|------|--------|--------|
| `src/utils/logger.ts` | ✅ Added module routing + caching | Core logging improvement |
| `logs/modules/.gitkeep` | ✅ Created | Ensure directory tracked in git |
| `logs/README.md` | ✅ Created | Documentation for team |
| `.gitignore` | ✅ Updated | Ignore log files, keep structure |

---

## Verification ✅

**Check log files are created:**
```bash
ls -la logs/modules/
# Should see: auth.log, job.log, application.log, candidate.log, recruiter.log, general.log
```

**Test logging:**
```bash
# Start server
npm run dev

# Make API requests (register, login, create job, etc.)

# Check module logs
tail logs/modules/auth.log        # Should see auth logs
tail logs/modules/job.log         # Should see job logs
```

---

## Future Enhancements 🚀

1. **Log Aggregation** - Send logs to ELK stack or Datadog
2. **Real-time Dashboard** - Visualize logs in real-time
3. **Alert System** - Send alerts on critical errors
4. **Performance Metrics** - Add request duration logs
5. **Structured Logging** - JSON format for better parsing

---

## Conclusion 🎯

**Before:** One messy `combined.log` file with everything mixed ❌

**After:** Clean, organized, module-specific log files for easy debugging ✅

Now you can:
- ✅ Debug auth issues by checking `modules/auth.log`
- ✅ Monitor job creation in `modules/job.log`
- ✅ Track errors in `error.log`
- ✅ Keep full history in `combined.log`

**Much better for development, debugging, and production monitoring!** 🎉
