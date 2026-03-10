# Testing Guide - Auth Module

This guide helps you verify that:
1. ✅ **Logger** is working correctly
2. ✅ **API Response** format is consistent
3. ✅ **Error Handling** returns JSON (not HTML)

---

## 🧪 Test Scenarios

### Test 1: Successful Registration (Logger + Response)

**Request:**
```bash
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone_number": "1234567890",
  "country_id": 1,
  "role_name": "candidate"
}
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "candidate"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Expected Console Logs:**
```
2026-03-05T10:00:00Z [AuthController] info: [REGISTER] API request received for email: john@example.com
2026-03-05T10:00:01Z [AuthService] info: Processing registration for email: john@example.com
2026-03-05T10:00:02Z [AuthDAO] info: Checking if email exists: john@example.com
2026-03-05T10:00:03Z [AuthDAO] info: Email does not exist: john@example.com
2026-03-05T10:00:04Z [AuthService] info: Finding role: candidate
2026-03-05T10:00:05Z [AuthDAO] info: Querying role by name: candidate
2026-03-05T10:00:06Z [AuthDAO] info: Role found: candidate
2026-03-05T10:00:07Z [AuthService] info: Hashing password for: john@example.com
2026-03-05T10:00:08Z [AuthService] info: Creating user: john@example.com
2026-03-05T10:00:09Z [AuthDAO] info: Creating user: john@example.com
2026-03-05T10:00:10Z [AuthDAO] info: User created successfully: john@example.com
2026-03-05T10:00:11Z [AuthService] info: Creating candidate profile for user: 1
2026-03-05T10:00:12Z [AuthDAO] info: Upserting candidate profile for user: 1
2026-03-05T10:00:13Z [AuthDAO] info: Candidate profile upserted for user: 1
2026-03-05T10:00:14Z [AuthService] info: Generating JWT token for user: john@example.com
2026-03-05T10:00:15Z [AuthService] info: Registration completed successfully for: john@example.com
2026-03-05T10:00:16Z [AuthController] info: [REGISTER] API response sent successfully for: john@example.com
```

✅ **What to Check:**
- Response has `success: true`
- Response has `message` and `data`
- Console shows logs from all 3 layers (Controller → Service → DAO)
- Response is JSON format

---

### Test 2: Successful Login (Logger + Response)

**Request:**
```bash
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "candidate"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Expected Console Logs:**
```
2026-03-05T10:05:00Z [AuthController] info: [LOGIN] API request received for email: john@example.com
2026-03-05T10:05:01Z [AuthService] info: Processing login for email: john@example.com
2026-03-05T10:05:02Z [AuthService] info: Finding user: john@example.com
2026-03-05T10:05:03Z [AuthDAO] info: Querying user by email: john@example.com
2026-03-05T10:05:04Z [AuthDAO] info: User found for email: john@example.com
2026-03-05T10:05:05Z [AuthService] info: Verifying password for: john@example.com
2026-03-05T10:05:06Z [AuthService] info: Generating JWT token for user: john@example.com
2026-03-05T10:05:07Z [AuthService] info: Login completed successfully for: john@example.com
2026-03-05T10:05:08Z [AuthController] info: [LOGIN] API response sent successfully for: john@example.com
```

✅ **What to Check:**
- Response has `success: true`
- Response has `message` and `data`
- Console shows logs from all 3 layers
- Response is JSON format

---

### Test 3: Error - Duplicate Email (Error Middleware)

**Request:**
```bash
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "john@example.com",  # Same email as before
  "password": "password123",
  "phone_number": "1234567890",
  "country_id": 1,
  "role_name": "candidate"
}
```

**Expected Response (500):**
```json
{
  "success": false,
  "message": "Email already registered"
}
```

**Expected Console Logs:**
```
2026-03-05T10:10:00Z [AuthController] info: [REGISTER] API request received for email: john@example.com
2026-03-05T10:10:01Z [AuthService] info: Processing registration for email: john@example.com
2026-03-05T10:10:02Z [AuthDAO] info: Checking if email exists: john@example.com
2026-03-05T10:10:03Z [AuthDAO] info: Email exists: john@example.com
2026-03-05T10:10:04Z [AuthService] warn: Registration failed: Email already exists - john@example.com
2026-03-05T10:10:05Z [AuthService] error: Registration failed for john@example.com {"error": {...}}
2026-03-05T10:10:06Z [ErrorMiddleware] error: [ERROR] Email already registered {"path": "/api/auth/register", "method": "POST", "statusCode": 500, ...}
```

✅ **What to Check:**
- Response has `success: false`
- Response has `message` with error details
- Response is **JSON format** (NOT HTML)
- Error logged by ErrorMiddleware
- Service layer caught and logged the error

---

### Test 4: Error - Invalid Login (Error Middleware)

**Request:**
```bash
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "wrongpassword"
}
```

**Expected Response (500):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

**Expected Console Logs:**
```
2026-03-05T10:15:00Z [AuthController] info: [LOGIN] API request received for email: john@example.com
2026-03-05T10:15:01Z [AuthService] info: Processing login for email: john@example.com
2026-03-05T10:15:02Z [AuthService] info: Finding user: john@example.com
2026-03-05T10:15:03Z [AuthDAO] info: Querying user by email: john@example.com
2026-03-05T10:15:04Z [AuthDAO] info: User found for email: john@example.com
2026-03-05T10:15:05Z [AuthService] info: Verifying password for: john@example.com
2026-03-05T10:15:06Z [AuthService] warn: Login failed: Invalid password - john@example.com
2026-03-05T10:15:07Z [AuthService] error: Login failed for john@example.com {"error": {...}}
2026-03-05T10:15:08Z [ErrorMiddleware] error: [ERROR] Invalid credentials {"path": "/api/auth/login", "method": "POST", "statusCode": 500, ...}
```

✅ **What to Check:**
- Response has `success: false`
- Response has error `message`
- Response is **JSON format** (NOT HTML)
- Error logged at Service and ErrorMiddleware level

---

### Test 5: Error - User Not Found (Error Middleware)

**Request:**
```bash
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "notexist@example.com",
  "password": "password123"
}
```

**Expected Response (500):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

**Expected Console Logs:**
```
2026-03-05T10:20:00Z [AuthController] info: [LOGIN] API request received for email: notexist@example.com
2026-03-05T10:20:01Z [AuthService] info: Processing login for email: notexist@example.com
2026-03-05T10:20:02Z [AuthService] info: Finding user: notexist@example.com
2026-03-05T10:20:03Z [AuthDAO] info: Querying user by email: notexist@example.com
2026-03-05T10:20:04Z [AuthDAO] info: User not found for email: notexist@example.com
2026-03-05T10:20:05Z [AuthService] warn: Login failed: User not found - notexist@example.com
2026-03-05T10:20:06Z [AuthService] error: Login failed for notexist@example.com {"error": {...}}
2026-03-05T10:20:07Z [ErrorMiddleware] error: [ERROR] Invalid credentials {"path": "/api/auth/login", "method": "POST", "statusCode": 500, ...}
```

✅ **What to Check:**
- Response is **JSON format** (NOT HTML)
- Error properly logged through all layers
- User-friendly error message (doesn't reveal if user exists or not)

---

### Test 6: Error - Database Error (Error Middleware)

Simulate by temporarily stopping the database or using invalid connection.

**Expected Response (500):**
```json
{
  "success": false,
  "message": "Internal server error"
}
```

**Expected Console Logs:**
```
2026-03-05T10:25:00Z [AuthController] info: [LOGIN] API request received for email: john@example.com
2026-03-05T10:25:01Z [AuthService] info: Processing login for email: john@example.com
2026-03-05T10:25:02Z [AuthService] info: Finding user: john@example.com
2026-03-05T10:25:03Z [AuthDAO] info: Querying user by email: john@example.com
2026-03-05T10:25:04Z [AuthDAO] error: Failed to find user by email: john@example.com {"error": "Can't reach database server..."}
2026-03-05T10:25:05Z [AuthService] error: Login failed for john@example.com {"error": {...}}
2026-03-05T10:25:06Z [ErrorMiddleware] error: [ERROR] Can't reach database server... {"path": "/api/auth/login", "method": "POST", "statusCode": 500, ...}
```

✅ **What to Check:**
- Response is **JSON format** (NOT HTML)
- Error logged at DAO, Service, and ErrorMiddleware levels
- Stack trace logged for debugging

---

## 🔍 How to Test

### Option 1: Using cURL

```bash
# Test Registration
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone_number": "1234567890",
    "country_id": 1,
    "role_name": "candidate"
  }'

# Test Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'

# Test Error - Duplicate Email
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone_number": "1234567890",
    "country_id": 1,
    "role_name": "candidate"
  }'

# Test Error - Wrong Password
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "wrongpassword"
  }'
```

### Option 2: Using Postman

1. Create a new collection: "Auth Tests"
2. Add requests for each test scenario
3. Check response format and console logs

### Option 3: Using Thunder Client (VS Code Extension)

1. Install Thunder Client extension
2. Create requests for each test scenario
3. Run and verify

---

## ✅ Verification Checklist

### Logger Verification
- [ ] Logs appear in console
- [ ] Logs show timestamp in ISO format
- [ ] Logs show module name (e.g., `[AuthController]`, `[AuthService]`, `[AuthDAO]`)
- [ ] Logs show log level (info, warn, error)
- [ ] Logs show detailed message
- [ ] Logs from all 3 layers appear (Controller → Service → DAO)
- [ ] Error logs include error details and stack trace

### Response Format Verification
- [ ] Success responses have `success: true`
- [ ] Success responses have `message` field
- [ ] Success responses have `data` field
- [ ] Error responses have `success: false`
- [ ] Error responses have `message` field
- [ ] All responses are in **JSON format**
- [ ] Status codes are correct (200, 201, 400, 401, 500, etc.)

### Error Handling Verification
- [ ] Errors are caught by Express 5 automatically
- [ ] Errors are sent to ErrorMiddleware
- [ ] ErrorMiddleware logs the error with full details
- [ ] ErrorMiddleware sends **JSON response** (NOT HTML)
- [ ] Error response has consistent format: `{ success: false, message: "..." }`
- [ ] Error logs show path, method, statusCode, stack trace
- [ ] Errors propagate correctly: DAO → Service → Controller → ErrorMiddleware
- [ ] Custom error messages are preserved
- [ ] Stack traces appear in development mode only

---

## 🎯 Expected Results Summary

| Test Scenario | Status Code | Response Format | Logs Present | Error Format |
|---------------|-------------|-----------------|--------------|--------------|
| Successful Registration | 201 | JSON ✅ | Controller, Service, DAO ✅ | N/A |
| Successful Login | 200 | JSON ✅ | Controller, Service, DAO ✅ | N/A |
| Duplicate Email | 500 | JSON ✅ | Service, ErrorMiddleware ✅ | JSON ✅ |
| Invalid Password | 500 | JSON ✅ | Service, ErrorMiddleware ✅ | JSON ✅ |
| User Not Found | 500 | JSON ✅ | DAO, Service, ErrorMiddleware ✅ | JSON ✅ |
| Database Error | 500 | JSON ✅ | DAO, Service, ErrorMiddleware ✅ | JSON ✅ |

---

## 🚨 Common Issues to Check

### Issue 1: HTML Error Page Instead of JSON
**Problem:** Browser shows HTML error page
**Solution:** Error middleware now sets `Content-Type: application/json`

### Issue 2: Logs Not Appearing
**Problem:** Console doesn't show logs
**Solution:** Check that `logs/` directory exists and Winston is configured

### Issue 3: Error Not Caught
**Problem:** App crashes instead of returning error response
**Solution:** Express 5 auto-catches async errors, ensure you're using Express 5.2.1

### Issue 4: Wrong Status Code
**Problem:** All errors return 500
**Solution:** Use custom error functions: `BadRequestError(400)`, `UnauthorizedError(401)`, etc.

---

## 📊 Log Files

Check these files after testing:
- `logs/combined.log` - All logs
- `logs/error.log` - Only error logs

---

## 🎉 Success Criteria

Your implementation is perfect when:

✅ **Logger:**
- Logs appear in console with proper format
- Logs include timestamp, module name, level, message
- Logs appear from all 3 layers (Controller, Service, DAO)
- Error logs include stack traces and metadata

✅ **Response:**
- All responses are JSON format
- Success responses: `{ success: true, message: "...", data: {...} }`
- Error responses: `{ success: false, message: "..." }`
- No HTML error pages

✅ **Error Handling:**
- Errors caught automatically by Express 5
- Errors logged by ErrorMiddleware
- Errors sent as JSON (not HTML)
- Error propagation works: DAO → Service → Controller → ErrorMiddleware
- Custom error messages preserved
- Stack traces in development only

---

## 🔧 Quick Test Script

Run this to start your server and test:

```bash
# Terminal 1: Start server
npm run dev

# Terminal 2: Run tests
# Successful registration
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123","phone_number":"1234567890","country_id":1,"role_name":"candidate"}'

# Check logs in Terminal 1 - you should see:
# - [AuthController] info: [REGISTER] API request received
# - [AuthService] info: Processing registration
# - [AuthDAO] info: Checking if email exists
# - ... (more logs from all layers)
# - [AuthController] info: [REGISTER] API response sent successfully

# Test error handling (duplicate email)
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User 2","email":"test@example.com","password":"password123","phone_number":"1234567890","country_id":1,"role_name":"candidate"}'

# Check logs in Terminal 1 - you should see:
# - [AuthService] warn: Registration failed: Email already exists
# - [ErrorMiddleware] error: [ERROR] Email already registered

# Verify response is JSON with: {"success":false,"message":"Email already registered"}
```

---

If all checks pass, your implementation is **production-ready**! ✨
