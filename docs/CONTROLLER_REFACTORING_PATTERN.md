# 🚀 Complete Refactoring Guide - Apply to All Controllers

## Pattern Summary

Based on the auth module, here's the exact pattern to apply to **ALL controller functions**:

---

## ❌ OLD Pattern (Remove This Everywhere)

```typescript
const someFunction = async (req: Request, res: Response) => {
  try {
    // Check auth
    if (!req.user?.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    
    // Business logic
    const result = await repository.doSomething();
    
    // Return response
    return res.status(200).json({
      success: true,
      message: "Success",
      data: result,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed",
    });
  }
};
```

---

## ✅ NEW Pattern (Apply This Everywhere)

```typescript
const someFunction = async (req: Request, res: Response) => {
  logger.info(`[OPERATION_NAME] API request received`);
  
  // Check auth
  if (!req.user?.id) {
    logger.warn(`[OPERATION_NAME] Unauthorized`);
    return sendError(res, "Unauthorized", 401);
  }
  
  // Business logic
  const result = await repository.doSomething();
  
  logger.info(`[OPERATION_NAME] Success`, { count: result.length });
  
  sendResponse(res, {
    statusCode: 200,
    message: "Success message",
    data: result,
  });
};
```

---

## 🔧 Step-by-Step Transformation

### Step 1: Add Imports (Top of File)
```typescript
import { getLogger } from "../../utils/logger";
import { sendResponse, sendError } from "../../utils/apiResponse";

const logger = getLogger("ControllerName");
```

### Step 2: Remove Try-Catch Wrapper
```typescript
// ❌ Remove this
try {
  // ... code
} catch (error: any) {
  console.error("Error:", error);
  return res.status(500).json({ success: false, message: error.message });
}

// ✅ Just write the code
logger.info(`[OPERATION] Starting`);
const result = await doSomething();
logger.info(`[OPERATION] Completed`);
```

### Step 3: Replace Error Responses
```typescript
// ❌ Replace all of these
return res.status(401).json({
  success: false,
  message: "Unauthorized",
});

return res.status(404).json({
  success: false,
  message: "Not found",
});

// ✅ With this
return sendError(res, "Unauthorized", 401);
return sendError(res, "Not found", 404);
```

### Step 4: Replace Success Responses
```typescript
// ❌ Replace this
return res.status(200).json({
  success: true,
  message: "Success",
  data: result,
});

// ✅ With this
sendResponse(res, {
  statusCode: 200,
  message: "Success",
  data: result,
});
```

### Step 5: Add Logging
```typescript
// At the start of function
logger.info(`[OPERATION_NAME] API request received`);

// Before throwing business errors
logger.warn(`[OPERATION_NAME] Validation failed`, { reason: "..." });

// Before sending success response
logger.info(`[OPERATION_NAME] Success`, { id: result.id });
```

---

## 📝 Complete Example Transformation

### BEFORE (recruiterpost.controller.ts - createJob):
```typescript
const createJob = async (req: Request, res: Response) => {
  try {
    console.log("Authenticated user:", req.user);
    if (!req.user?.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - User ID not found",
      });
    }

    const recruiterId = BigInt(req.user?.id);
    const jobData = req.body;

    const job = await jobRepository.createJob(recruiterId, jobData);

    return res.status(201).json({
      success: true,
      message: "Job posted successfully",
      data: {
        jobId: job.id,
        title: job.job_title,
        // ... more data
      },
    });
  } catch (error: any) {
    console.error("Error creating job:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create job",
    });
  }
};
```

### AFTER (recruiterpost.controller.ts - createJob):
```typescript
const createJob = async (req: Request, res: Response) => {
  logger.info(`[CREATE_JOB] API request received`);
  
  if (!req.user?.id) {
    logger.warn(`[CREATE_JOB] Unauthorized - User ID not found`);
    return sendError(res, "Unauthorized - User ID not found", 401);
  }

  const recruiterId = BigInt(req.user.id);
  const jobData = req.body;

  const job = await jobRepository.createJob(recruiterId, jobData);

  logger.info(`[CREATE_JOB] Job created successfully`, { jobId: job.id });
  
  sendResponse(res, {
    statusCode: 201,
    message: "Job posted successfully",
    data: {
      jobId: job.id,
      title: job.job_title,
      // ... more data
    },
  });
};
```

---

## 🎯 Apply This Pattern To

### ✅ Already Done
- `src/controllers/auth/auth.controller.ts`
- `src/repositories/auth.repository.ts`
- `src/services/auth/auth.service.ts`
- `src/repositories/job.repository.ts`

### ⏳ Need to Apply

**Job/Recruiter Controllers:**
- `src/controllers/recruiter/recruiterpost.controller.ts` (8 functions)
  - createJob ✅ (started)
  - getMyJobs ✅ (started)
  - getJobById ⏳
  - updateJob ⏳
  - deleteJob ⏳
  - filterJobs ⏳
  - searchJobs ⏳
  - getAllJobs ⏳

**Application Controller:**
- `src/controllers/application/application.controller.ts` (3 functions)
  - applyToJob ⏳
  - getMyApplications ⏳
  - getJobApplications ⏳

**Candidate Controller:**
- `src/controllers/candidate/candidate.controller.ts` (3 functions)
  - getProfile ⏳
  - updateProfile ⏳
  - uploadResume ⏳

**Recruiter Controller:**
- `src/controllers/recruiter/recruiter.controller.ts` (2 functions)
  - getProfile ⏳
  - updateProfile ⏳

---

## 🚨 Important Notes

### Authentication Checks
```typescript
// ✅ Keep auth checks (they're business logic)
if (!req.user?.id) {
  logger.warn(`[OPERATION] Unauthorized`);
  return sendError(res, "Unauthorized", 401);
}

// ✅ Keep authorization checks
if (job.recruiter_id !== recruiterId) {
  logger.warn(`[OPERATION] Forbidden`, { jobId, recruiterId });
  return sendError(res, "You are not authorized to update this job", 403);
}
```

### Validation Checks
```typescript
// ✅ Keep validation in controller
if (!searchTerm || searchTerm.length < 2) {
  logger.warn(`[SEARCH] Invalid search term`);
  return sendError(res, "Search term must be at least 2 characters", 400);
}
```

### Don't Remove Business Logic
```typescript
// ✅ Keep business logic calls
const result = await repository.doSomething();

// ✅ Keep data transformations for response
const transformedData = result.map(item => ({
  id: item.id,
  name: item.name
}));
```

---

## 📦 Files That Need Full Refactoring

Due to file size, here are the counts:

| File | Functions | Try-Catch Blocks | LOC |
|------|-----------|-----------------|-----|
| `recruiterpost.controller.ts` | 8 | 8 | 518 |
| `application.controller.ts` | 3 | 3 | ~150 |
| `candidate.controller.ts` | 3 | 3 | ~120 |
| `recruiter.controller.ts` | 2 | 2 | ~80 |

**Total:** 16 functions, 16 try-catch blocks to remove

---

## ✅ Quick Checklist for Each Function

- [ ] Add logger.info at start
- [ ] Remove try-catch wrapper
- [ ] Replace console.log/console.error with logger
- [ ] Replace res.status().json() with sendResponse() or sendError()
- [ ] Add logger.info before sending response
- [ ] Add logger.warn for business errors
- [ ] Keep auth/validation checks

---

## 🎉 Expected Result

Every controller function should follow this clean pattern:
1. Log API request received
2. Check auth/validation (no try-catch)
3. Call repository/service
4. Log success
5. Send response using utility

Express 5 handles all errors automatically!

---

**Ready to continue? I'll refactor all remaining controller functions systematically.**
