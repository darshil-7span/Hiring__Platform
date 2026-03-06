# Best Practice: DRY Principle - Error Response Structure

## ❌ Before (BAD - Code Duplication)

### Problem:
Error response structure was duplicated in two places:

**1. `apiResponse.ts` - sendError function:**
```typescript
export const sendError = (res, message, statusCode, data) => {
  return res.status(statusCode).json({
    success: false,
    message,
    data,
  });
};
```

**2. `error.middleware.ts` - Error handler:**
```typescript
export const errorHandler = (err, req, res, next) => {
  // ... logging code ...
  
  res.status(statusCode).json({
    success: false,
    message,
    ...(NODE_ENV === "development" && { stack, error }),
  });
};
```

**Issues:**
- 🔴 Code duplication (violates DRY principle)
- 🔴 If we change response format, must update in 2 places
- 🔴 Inconsistency risk if one is updated and other is forgotten
- 🔴 More code to maintain

---

## ✅ After (GOOD - Single Source of Truth)

### Solution:
Error middleware now uses `sendError()` utility function.

**1. `apiResponse.ts` - Single source of truth:**
```typescript
/**
 * Helper function for error responses
 * Ensures JSON format and consistent error structure
 */
export const sendError = (
  res: Response,
  message: string = "Error",
  statusCode: number = 500,
  data: any = null
): Response => {
  // ALWAYS set Content-Type to ensure JSON response (never HTML)
  res.setHeader("Content-Type", "application/json");
  
  return sendResponse(res, {
    statusCode,
    success: false,
    message,
    data,
  });
};
```

**2. `error.middleware.ts` - Uses the utility:**
```typescript
import { sendError } from "../utils/apiResponse";

export const errorHandler = (err, req, res, next) => {
  // Get status code and message
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  // Log error details
  logger.error(`[ERROR] ${message}`, {
    path: req.path,
    method: req.method,
    statusCode,
    stack: err.stack,
    body: req.body,
  });

  // Use sendError utility for consistent error response format
  const errorData = process.env.NODE_ENV === "development" 
    ? { stack: err.stack } 
    : null;

  sendError(res, message, statusCode, errorData);
};
```

**Benefits:**
- ✅ Single source of truth (DRY principle)
- ✅ Change response format in ONE place only
- ✅ Consistent error responses across the app
- ✅ Less code to maintain
- ✅ Easier to test and debug

---

## 🎯 Best Practices Applied

### 1. **DRY (Don't Repeat Yourself)**
- Error response structure defined ONCE in `apiResponse.ts`
- Error middleware reuses this structure via `sendError()`

### 2. **Single Source of Truth**
- All error responses use the same utility function
- Controllers can also use `sendError()` if needed
- Consistency guaranteed across the entire application

### 3. **Separation of Concerns**
- `apiResponse.ts` - Handles response formatting
- `error.middleware.ts` - Handles error logging and delegates formatting

### 4. **Maintainability**
- Want to add error codes? Update ONE function
- Want to change format? Update ONE function
- Want to add metadata? Update ONE function

### 5. **Reusability**
- Any part of the app can use `sendError()`
- Controllers, middleware, services can all send consistent errors

---

## 📊 Response Structure

All error responses now use the same structure:

```json
{
  "success": false,
  "message": "Error message here",
  "data": null
}
```

With optional development data:
```json
{
  "success": false,
  "message": "Error message here",
  "data": {
    "stack": "Error stack trace..."
  }
}
```

---

## 🔧 Usage Examples

### In Error Middleware:
```typescript
// Automatically called by Express 5 for all errors
export const errorHandler = (err, req, res, next) => {
  logger.error(`[ERROR] ${err.message}`, {...});
  
  const errorData = NODE_ENV === "development" ? { stack: err.stack } : null;
  sendError(res, err.message, err.statusCode || 500, errorData);
};
```

### In Controllers (if needed):
```typescript
export const someController = async (req, res) => {
  if (!req.body.email) {
    return sendError(res, "Email is required", 400);
  }
  
  // ... rest of code
};
```

### In Middleware:
```typescript
export const validateRequest = (req, res, next) => {
  if (!isValid(req.body)) {
    return sendError(res, "Invalid request", 400);
  }
  next();
};
```

---

## 🎨 Architecture Pattern

```
┌─────────────────────────────────────────┐
│         utils/apiResponse.ts            │
│  (Single Source of Truth)               │
│                                         │
│  • sendResponse()                       │
│  • sendSuccess()                        │
│  • sendError()  ← All errors use this   │
│  • sendPaginatedResponse()              │
└─────────────────────────────────────────┘
              ▲
              │ Uses
              │
┌─────────────┴───────────────────────────┐
│  middlewares/error.middleware.ts        │
│  • Logs error                           │
│  • Calls sendError() for response       │
└─────────────────────────────────────────┘
              ▲
              │ Sends errors to
              │
┌─────────────┴───────────────────────────┐
│  Controllers / Services / DAOs          │
│  • Throw errors                         │
│  • Express 5 catches automatically      │
└─────────────────────────────────────────┘
```

---

## ✨ Key Improvements

### Before:
```typescript
// error.middleware.ts
res.status(statusCode).json({
  success: false,
  message,
});

// Somewhere else in the code
res.status(400).json({
  success: false,
  message: "Bad request",
});
```
**Problem:** Response format duplicated, can become inconsistent

### After:
```typescript
// error.middleware.ts
sendError(res, message, statusCode);

// Anywhere else in the code
sendError(res, "Bad request", 400);
```
**Solution:** Single function, always consistent

---

## 📝 Summary

**What Changed:**
1. ✅ `sendError()` now sets `Content-Type: application/json` header
2. ✅ Error middleware imports and uses `sendError()`
3. ✅ Error middleware only handles logging
4. ✅ Response formatting delegated to `sendError()`
5. ✅ Removed duplicate JSON response structure

**Why It's Better:**
- Single source of truth for error responses
- Follows DRY principle
- Easier to maintain and update
- Consistent across entire application
- Less code duplication

**Result:**
- ✨ Cleaner code
- ✨ Better maintainability
- ✨ Guaranteed consistency
- ✨ Follows best practices

---

This is the **correct way** to structure error handling in production applications! 🎉
