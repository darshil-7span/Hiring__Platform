# Logs Directory Structure 📋

This directory contains organized log files for the Hiring Platform application.

## Directory Structure

```
logs/
├── combined.log              ← All logs (complete backup)
├── error.log                 ← All errors across all modules
├── modules/
│   ├── auth.log             ← Authentication & Authorization logs
│   ├── job.log              ← Job posting & management logs
│   ├── application.log      ← Application submission & tracking logs
│   ├── candidate.log        ← Candidate profile & operations logs
│   ├── recruiter.log        ← Recruiter profile & operations logs
│   └── general.log          ← Other system logs
└── README.md                 ← This file
```

## Log File Purpose

### **combined.log**
- Contains ALL logs from all modules and levels
- Use for complete audit trail
- Helpful for timeline analysis across modules

### **error.log**
- Contains ONLY error-level logs
- First place to check when debugging issues
- Includes stack traces for errors

### **Module-Specific Logs**

#### **modules/auth.log**
- User registration attempts
- Login/logout events
- JWT token generation & verification
- Authentication failures
- Role verification logs

#### **modules/job.log**
- Job creation by recruiters
- Job updates & deletions
- Job search queries
- Job filtering operations
- Job listing requests

#### **modules/application.log**
- Job application submissions
- Application status changes
- Application filtering & search
- Recruiter reviewing applications

#### **modules/candidate.log**
- Candidate profile creation
- Profile updates
- Resume uploads
- Candidate-specific operations

#### **modules/recruiter.log**
- Recruiter profile creation
- Profile updates
- Recruiter-specific operations
- Job management by recruiters

#### **modules/general.log**
- System-level logs
- Middleware operations
- Other uncategorized logs

## Log Format

Each log entry follows this format:
```
YYYY-MM-DD HH:mm:ss [ModuleName] LEVEL: Message { metadata }
```

**Example:**
```
2026-03-08 02:17:31 [AuthController] info: [REGISTER] API request received for email: user@example.com {"userId":14}
2026-03-08 02:17:32 [AuthService] error: Registration failed: Email already exists {"email":"user@example.com"}
```

## Log Levels

- **error** - Application errors (logged to error.log)
- **warn** - Warning messages (potential issues)
- **info** - General information (default level)
- **debug** - Detailed debugging information
- **verbose** - Very detailed information

## Log Rotation

All log files have automatic rotation configured:
- **Max File Size:** 10 MB
- **Max Files:** 3-5 (older files are deleted)
- **Naming:** `filename.1.log`, `filename.2.log`, etc.

## Best Practices

### For Development
1. Check **module-specific logs** for focused debugging
2. Use **combined.log** to see the full request flow
3. Check **error.log** first when encountering errors

### For Production
1. Monitor **error.log** regularly
2. Set up log aggregation (e.g., ELK stack, Datadog)
3. Archive old logs before deletion
4. Use log analysis tools for insights

## Quick Commands

### View logs in real-time
```bash
# Watch all logs
tail -f logs/combined.log

# Watch auth logs only
tail -f logs/modules/auth.log

# Watch errors only
tail -f logs/error.log
```

### Search for specific errors
```bash
# Find all errors related to user registration
grep "REGISTER" logs/modules/auth.log

# Find all 500 errors
grep "500" logs/error.log
```

### Clear old logs
```bash
# Clear all logs (careful!)
rm logs/*.log logs/modules/*.log
```

## Environment Variables

Configure logging behavior in `.env`:

```env
# Log level: error, warn, info, debug, verbose
LOG_LEVEL=info

# In production, set to 'error' for minimal logging
# LOG_LEVEL=error
```

## Troubleshooting

### If logs are not being created:
1. Ensure `logs/` and `logs/modules/` directories exist
2. Check write permissions on the logs directory
3. Verify LOG_LEVEL is set correctly in `.env`

### If logs are too large:
1. Reduce `maxsize` in `src/utils/logger.ts`
2. Reduce `maxFiles` to keep fewer rotated files
3. Increase log level to `warn` or `error`

### If logs are empty:
1. Check if application is running
2. Verify logger is imported correctly in modules
3. Check console output for any Winston errors

---

**Last Updated:** March 8, 2026
**Maintained By:** Development Team
