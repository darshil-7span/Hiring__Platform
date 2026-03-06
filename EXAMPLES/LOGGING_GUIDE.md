# Production-Ready Logging & Response System

## Overview

This document explains the centralized logging and API response system implemented for this Node.js + Express + TypeScript backend following clean architecture principles.

## Architecture Layers

```
Controller → Service → DAO (Repository)
```

Each layer has specific responsibilities:

- **Controller**: Handle HTTP requests/responses
- **Service**: Implement business logic
- **DAO**: Perform database operations

## Logging System

### Logger Configuration

Location: `src/utils/logger.ts`

**Features:**
- Winston-based logging
- Support for multiple log levels: `info`, `error`, `warn`, `debug`
- Automatic timestamp inclusion
- Module name tracking
- File rotation (5MB max, 5 files)
- Separate error log file
- Colorized console output in development

**Log Format:**
```
2026-03-05T10:00:00Z [UserService] info: Fetching user with id 123
```

### Usage

```typescript
import { getLogger } from "../utils/logger";

const logger = getLogger("ModuleName");

// Log info
logger.info("Operation started", { userId: 123 });

// Log error
logger.error("Operation failed", { error });

// Log warning
logger.warn("Potential issue detected");

// Log debug
logger.debug("Debug information");
```

### Logging Rules Per Layer

#### DAO Layer (Repository)
- Log all database queries
- Log query success/failure
- Log data being queried/modified
- Always wrap in try-catch
- Re-throw errors after logging

```typescript
const logger = getLogger("UserDAO");

const findUserById = async (userId: number) => {
  try {
    logger.info(`Querying user by ID: ${userId}`);
    const user = await prisma.user.findUnique({ where: { id: userId } });
    logger.info(`User ${user ? "found" : "not found"}: ${userId}`);
    return user;
  } catch (error) {
    logger.error(`Failed to query user: ${userId}`, { error });
    throw error;
  }
};
```

#### Service Layer
- Log business logic execution
- Log validation results
- Log service method entry/exit
- Always wrap in try-catch
- Re-throw errors after logging

```typescript
const logger = getLogger("UserService");

const getUserProfile = async (userId: number) => {
  try {
    logger.info(`Fetching user profile for ID: ${userId}`);
    const user = await userDAO.findUserById(userId);
    
    if (!user) {
      logger.warn(`User not found: ${userId}`);
      throw new Error("User not found");
    }
    
    logger.info(`User profile fetched successfully: ${userId}`);
    return user;
  } catch (error) {
    logger.error(`Failed to fetch user profile: ${userId}`, { error });
    throw error;
  }
};
```

#### Controller Layer
- Log API request received
- Log request metadata (IP, user agent)
- Log API response sent
- Use descriptive operation names in brackets

```typescript
const logger = getLogger("UserController");

const getUserProfile = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  
  logger.info(`[GET_PROFILE] API request received for user: ${userId}`, {
    ip: req.ip,
    userAgent: req.get("user-agent"),
  });
  
  const user = await userService.getUserProfile(userId);
  
  logger.info(`[GET_PROFILE] API response sent successfully for user: ${userId}`);
  
  sendResponse(res, {
    statusCode: 200,
    message: "User fetched successfully",
    data: user,
  });
};
```

## API Response System

### Response Utility

Location: `src/utils/apiResponse.ts`

**Standardized Response Structure:**
```json
{
  "success": boolean,
  "message": string,
  "data": any
}
```

### Usage

#### Option 1: sendResponse (Full Control)

```typescript
import { sendResponse } from "../utils/apiResponse";

sendResponse(res, {
  statusCode: 200,
  success: true,
  message: "User fetched successfully",
  data: user,
});
```

#### Option 2: sendSuccess (Helper)

```typescript
import { sendSuccess } from "../utils/apiResponse";

sendSuccess(res, "User fetched successfully", user, 200);
```

#### Option 3: sendError (Helper)

```typescript
import { sendError } from "../utils/apiResponse";

sendError(res, "User not found", 404);
```

### Default Values

```typescript
statusCode = 200
success = true
message = "Success"
data = null
```

### Important Rule

**Controllers must NEVER call `res.json()` directly!**

❌ **Bad:**
```typescript
res.status(200).json({
  success: true,
  message: "Success",
  data: user,
});
```

✅ **Good:**
```typescript
sendResponse(res, {
  statusCode: 200,
  message: "Success",
  data: user,
});
```

## Complete Example Flow

### 1. DAO Layer
```typescript
const logger = getLogger("UserDAO");

const findUserById = async (userId: number) => {
  try {
    logger.info(`Querying user by ID: ${userId}`);
    const user = await prisma.user.findUnique({ where: { id: userId } });
    logger.info(`User found: ${userId}`);
    return user;
  } catch (error) {
    logger.error(`Database query failed for user: ${userId}`, { error });
    throw error;
  }
};
```

### 2. Service Layer
```typescript
const logger = getLogger("UserService");

const getUserProfile = async (userId: number) => {
  try {
    logger.info(`Fetching user profile for ID: ${userId}`);
    const user = await userDAO.findUserById(userId);
    
    if (!user) {
      logger.warn(`User not found: ${userId}`);
      throw new Error("User not found");
    }
    
    logger.info(`User profile fetched successfully: ${userId}`);
    return user;
  } catch (error) {
    logger.error(`Failed to fetch user profile: ${userId}`, { error });
    throw error;
  }
};
```

### 3. Controller Layer
```typescript
const logger = getLogger("UserController");

const getUserProfile = async (req: Request, res: Response) => {
  logger.info(`[GET_PROFILE] API request received for user: ${req.params.id}`);
  
  const user = await userService.getUserProfile(parseInt(req.params.id));
  
  logger.info(`[GET_PROFILE] API response sent successfully`);
  
  sendResponse(res, {
    statusCode: 200,
    message: "User fetched successfully",
    data: user,
  });
};
```

## Log Files

Logs are stored in the `logs/` directory:

- `logs/combined.log` - All logs
- `logs/error.log` - Error logs only

## Benefits

✅ **Centralized logging** - Consistent format across all modules
✅ **Standardized responses** - Same structure for all API endpoints
✅ **Easy debugging** - Trace requests through all layers
✅ **Production-ready** - Log rotation, file storage
✅ **Type-safe** - Full TypeScript support
✅ **Clean architecture** - Clear separation of concerns
✅ **Maintainable** - Easy to update logging/response logic

## Environment Variables

```env
LOG_LEVEL=info  # Options: debug, info, warn, error
NODE_ENV=development  # Controls console colorization
```

## Migration Guide

To update existing code:

1. **Import logger:**
   ```typescript
   import { getLogger } from "../utils/logger";
   const logger = getLogger("ModuleName");
   ```

2. **Wrap operations in try-catch:**
   ```typescript
   try {
     logger.info("Operation starting");
     // ... your code
     logger.info("Operation completed");
   } catch (error) {
     logger.error("Operation failed", { error });
     throw error;
   }
   ```

3. **Replace res.json() with sendResponse:**
   ```typescript
   // Before
   res.status(200).json({ success: true, message: "Success", data });
   
   // After
   sendResponse(res, { statusCode: 200, message: "Success", data });
   ```

## Examples

See the `EXAMPLES/` directory for complete implementations:
- `user.dao.example.ts` - DAO layer with logging
- `user.service.example.ts` - Service layer with logging
- `user.controller.example.ts` - Controller with logging and sendResponse
