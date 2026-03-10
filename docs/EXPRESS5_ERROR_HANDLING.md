# 🛡️ Error Handling for Express 5

## ⚡ Express 5 Features

**No `asyncHandler` needed!** Express 5 automatically catches async errors.

## 🔄 Flow

```
Controller
   ↓
throw Error (with statusCode)
   ↓
Express 5 auto catches it
   ↓
Error Middleware
   ↓
Response to user
```

---

## 📁 Files to Create

```
src/
├── utils/
│   └── errors.ts              ← Custom error functions
└── middlewares/
    └── error.middleware.ts    ← Global error handler
```

---

## 📄 Step 1: Create `src/utils/errors.ts`

```typescript
/**
 * Create error with status code
 */
const createError = (statusCode: number, message: string) => {
  const error: any = new Error(message);
  error.statusCode = statusCode;
  return error;
};

/**
 * 400 - Bad Request
 */
export const BadRequestError = (message = "Bad request") => 
  createError(400, message);

/**
 * 401 - Unauthorized (not logged in)
 */
export const UnauthorizedError = (message = "Unauthorized") => 
  createError(401, message);

/**
 * 403 - Forbidden (no permission)
 */
export const ForbiddenError = (message = "Forbidden") => 
  createError(403, message);

/**
 * 404 - Not Found
 */
export const NotFoundError = (message = "Not found") => 
  createError(404, message);

/**
 * 409 - Conflict (already exists)
 */
export const ConflictError = (message = "Already exists") => 
  createError(409, message);
```

---

## 📄 Step 2: Create `src/middlewares/error.middleware.ts`

```typescript
import { Request, Response, NextFunction } from "express";

/**
 * Global Error Handler Middleware
 * Express 5 automatically sends async errors here
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    success: false,
    message,
  });
};
```

---

## 📄 Step 3: Update `src/app.ts`

```typescript
import express from "express";
import cors from "cors";
import routes from "./routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

// Body parser middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// Error Handler (MUST be last!)
app.use(errorHandler);

export default app;
```

---

## 🔄 Update Controllers

### Before:
```typescript
const getJobById = async (req: Request, res: Response) => {
  try {
    const jobId = BigInt(req.params.id);
    const job = await jobRepository.getJobById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error: any) {
    console.error("Error fetching job:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch job",
    });
  }
};
```

### After (Express 5):
```typescript
import { NotFoundError } from "../../utils/errors";

const getJobById = async (req: Request, res: Response) => {
  const jobId = BigInt(req.params.id);
  const job = await jobRepository.getJobById(jobId);

  if (!job) {
    throw NotFoundError("Job not found");
  }

  return res.status(200).json({
    success: true,
    data: job,
  });
};
// Express 5 automatically catches errors - no try-catch needed!
```

---

## ✅ Changes for Each Controller

### For EVERY function:

**Remove:**
- ❌ `try {`
- ❌ `} catch (error: any) { ... }`
- ❌ `console.error(...)`

**Replace:**
```typescript
// Change from:
return res.status(404).json({
  success: false,
  message: "Job not found",
});

// To:
throw NotFoundError("Job not found");
```

**Keep:**
- ✅ `async` keyword (Express 5 handles it!)
- ✅ Success responses (`res.json()`)

---

## 📋 Implementation Checklist

- [ ] Create `src/utils/errors.ts`
- [ ] Create `src/middlewares/error.middleware.ts`
- [ ] Update `src/app.ts` - add error middleware at end
- [ ] Update controllers - remove try-catch, use throw

---

**Ready?** Say: **"apply error handling for express 5"** 🚀
