# 🎛️ SINGLE VARIABLE ERROR CONTROL

## ✅ Simple Configuration with One Variable

Instead of relying on `NODE_ENV` (development/production), we now use a **single, dedicated variable** to control error visibility.

---

## 🔧 Configuration

### Environment Variable: `SHOW_STACK_TRACE`

**Location:** `.env` file

```bash
# Error Handling Configuration
# Set to "true" to show stack traces in API responses (for debugging)
# Set to "false" for production (never expose stack traces)
SHOW_STACK_TRACE=false
```

---

## 📊 How It Works

### ✅ `SHOW_STACK_TRACE=false` (Recommended for Production)

**API Response:**
```json
{
  "success": false,
  "message": "Email already registered"
}
```
✅ Clean, professional response  
✅ No sensitive information exposed  
✅ Stack trace logged internally for debugging  

---

### 🔍 `SHOW_STACK_TRACE=true` (For Debugging Only)

**API Response:**
```json
{
  "success": false,
  "message": "Email already registered",
  "data": {
    "stack": "Error: Email already registered\n    at Object.register...",
    "path": "/api/auth/register",
    "timestamp": "2026-03-12T12:00:00.000Z"
  }
}
```
✅ Helpful for debugging  
✅ See exactly where the error occurred  
⚠️ **Never use in production!**  

---

## 🎯 Benefits of Single Variable Approach

| Benefit | Description |
|---------|-------------|
| **✅ Simplicity** | One variable controls everything |
| **✅ Clarity** | Clear purpose: show stack trace or not |
| **✅ Flexibility** | Can enable/disable without changing NODE_ENV |
| **✅ Security** | Easy to ensure it's off in production |
| **✅ Debugging** | Can enable temporarily when investigating issues |

---

## 🔄 Quick Switching

### Scenario 1: Development (Debugging)
```bash
# .env
SHOW_STACK_TRACE=true
NODE_ENV=development
```
Result: **See stack traces in API responses**

---

### Scenario 2: Development (Production-like)
```bash
# .env
SHOW_STACK_TRACE=false
NODE_ENV=development
```
Result: **Clean responses, but still in dev mode**

---

### Scenario 3: Production
```bash
# .env
SHOW_STACK_TRACE=false
NODE_ENV=production
```
Result: **Clean responses, production mode**

---

## 🧪 Testing

### Test 1: With Stack Trace (SHOW_STACK_TRACE=true)

1. Update `.env`:
   ```bash
   SHOW_STACK_TRACE=true
   ```

2. Restart server:
   ```bash
   npm run dev
   ```

3. Test duplicate email:
   ```bash
   curl -X POST http://localhost:5002/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "email": "existing@example.com",
       ...
     }'
   ```

4. Expected Response:
   ```json
   {
     "success": false,
     "message": "Email already registered",
     "data": {
       "stack": "...",
       "path": "/api/auth/register",
       "timestamp": "2026-03-12T12:00:00.000Z"
     }
   }
   ```

---

### Test 2: Without Stack Trace (SHOW_STACK_TRACE=false)

1. Update `.env`:
   ```bash
   SHOW_STACK_TRACE=false
   ```

2. Restart server:
   ```bash
   npm run dev
   ```

3. Test duplicate email:
   ```bash
   curl -X POST http://localhost:5002/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "email": "existing@example.com",
       ...
     }'
   ```

4. Expected Response:
   ```json
   {
     "success": false,
     "message": "Email already registered"
   }
   ```
   ✅ **Clean response!**

---

## 🔒 Security Best Practices

### ✅ DO

```bash
# Production
SHOW_STACK_TRACE=false

# Staging
SHOW_STACK_TRACE=false

# Development (most of the time)
SHOW_STACK_TRACE=false
```

### ⚠️ ONLY WHEN DEBUGGING

```bash
# Temporary debugging (turn off when done)
SHOW_STACK_TRACE=true
```

### ❌ NEVER

```bash
# NEVER in production
SHOW_STACK_TRACE=true
NODE_ENV=production
```

---

## 📝 Implementation Code

### Error Middleware (`src/middlewares/error.middleware.ts`)

```typescript
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  // ALWAYS log internally (full details)
  logger.error(`[ERROR] ${message}`, {
    path: req.path,
    method: req.method,
    statusCode,
    stack: err.stack, // Logged for debugging
    body: req.body,
    user: req.user?.id,
  });

  // Single variable controls stack trace visibility
  const showStackTrace = process.env.SHOW_STACK_TRACE === "true";

  const errorData = showStackTrace 
    ? { 
        stack: err.stack,
        path: req.path,
        timestamp: new Date().toISOString(),
      } 
    : undefined;

  sendError(res, message, statusCode, errorData);
};
```

---

## 🎯 Comparison

### Before (Multiple Conditions)
```typescript
const errorData = process.env.NODE_ENV === "development" 
  ? { stack: err.stack } 
  : null;
```
❌ Tied to NODE_ENV  
❌ Can't debug in production-like environment  
❌ Less flexible  

---

### After (Single Variable)
```typescript
const showStackTrace = process.env.SHOW_STACK_TRACE === "true";
const errorData = showStackTrace ? { stack: err.stack } : undefined;
```
✅ Independent variable  
✅ Can debug in any environment  
✅ Clear and flexible  
✅ Easy to control  

---

## 📚 Environment Variables Reference

```bash
# Database
DATABASE_URL="postgresql://..."

# JWT
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN=7d

# Server
PORT=5002
NODE_ENV=development

# Error Handling (NEW)
SHOW_STACK_TRACE=false  # 👈 Single control for stack traces
```

---

## ✅ Summary

### What Changed:
1. ✅ Added `SHOW_STACK_TRACE` environment variable
2. ✅ Updated error middleware to use single variable
3. ✅ Removed dependency on `NODE_ENV` for error visibility
4. ✅ Stack traces always logged internally
5. ✅ Client visibility controlled by one variable

### Benefits:
- **Simpler** - One variable to control everything
- **Clearer** - Explicit purpose
- **Flexible** - Works in any environment
- **Secure** - Easy to ensure it's off in production

### Current Setting:
```bash
SHOW_STACK_TRACE=false
```
✅ **Clean responses, no stack traces exposed to clients**  
✅ **Stack traces still logged internally for debugging**

---

🎉 **Clean, simple, and production-ready!**
