# Quick Reference Guide

## 🔧 Logger Usage

```typescript
import { getLogger } from "../utils/logger";

// Create logger instance
const logger = getLogger("ModuleName");

// Log methods
logger.info("Information message", { metadata });
logger.error("Error message", { error });
logger.warn("Warning message");
logger.debug("Debug message");
```

---

## 📤 API Response Usage

```typescript
import { sendResponse, sendSuccess, sendError } from "../utils/apiResponse";

// Full control
sendResponse(res, {
  statusCode: 200,
  success: true,
  message: "Success",
  data: result,
});

// Success helper
sendSuccess(res, "Success message", data, 200);

// Error helper
sendError(res, "Error message", 404);
```

---

## 📄 Pagination Usage

```typescript
import { getPaginationParams, sendPaginatedResponse } from "../utils/apiResponse";

// Extract pagination params from query string
const { page, limit, skip } = getPaginationParams(req.query);
// Query: ?page=2&limit=20
// Returns: { page: 2, limit: 20, skip: 20 }

// Fetch data with pagination
const [data, total] = await Promise.all([
  prisma.model.findMany({ skip, take: limit, orderBy: { created_at: "desc" } }),
  prisma.model.count(),
]);

// Send paginated response
sendPaginatedResponse(res, data, page, limit, total, "Data fetched successfully");
```

**Response Format:**
```json
{
  "success": true,
  "message": "Data fetched successfully",
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "pageSize": 10,
    "totalItems": 95,
    "totalPages": 10,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

---

## 🏗️ Architecture Pattern

### DAO Layer Template
```typescript
import { getLogger } from "../utils/logger";
const logger = getLogger("ModuleDAO");

const methodName = async (params) => {
  try {
    logger.info(`Operation starting: ${params}`);
    const result = await prisma.model.operation(...);
    logger.info(`Operation completed: ${params}`);
    return result;
  } catch (error) {
    logger.error(`Operation failed: ${params}`, { error });
    throw error;
  }
};
```

### Service Layer Template
```typescript
import { getLogger } from "../utils/logger";
const logger = getLogger("ModuleService");

const methodName = async (params) => {
  try {
    logger.info(`Business logic starting: ${params}`);
    // Business logic here
    logger.info(`Business logic completed: ${params}`);
    return result;
  } catch (error) {
    logger.error(`Business logic failed: ${params}`, { error });
    throw error;
  }
};
```

### Controller Layer Template
```typescript
import { getLogger } from "../utils/logger";
import { sendResponse } from "../utils/apiResponse";

const logger = getLogger("ModuleController");

const methodName = async (req: Request, res: Response) => {
  logger.info(`[OPERATION] API request received`, { params: req.params });
  
  const result = await service.method(req.params);
  
  logger.info(`[OPERATION] API response sent successfully`);
  
  sendResponse(res, {
    statusCode: 200,
    message: "Success",
    data: result,
  });
};
```

---

## 📋 Checklist for New Modules

- [ ] Import `getLogger` from `../utils/logger`
- [ ] Create logger instance: `const logger = getLogger("ModuleName")`
- [ ] Wrap operations in try-catch blocks
- [ ] Log operation start
- [ ] Log operation completion
- [ ] Log errors before re-throwing
- [ ] Import `sendResponse` in controllers
- [ ] Replace all `res.json()` with `sendResponse()`
- [ ] Log API requests and responses

---

## 🎯 Common Patterns

### DAO: Find by ID
```typescript
const findById = async (id: number) => {
  try {
    logger.info(`Querying by ID: ${id}`);
    const result = await prisma.model.findUnique({ where: { id } });
    logger.info(`${result ? "Found" : "Not found"}: ${id}`);
    return result;
  } catch (error) {
    logger.error(`Query failed for ID: ${id}`, { error });
    throw error;
  }
};
```

### DAO: Create
```typescript
const create = async (data: any) => {
  try {
    logger.info(`Creating record`, { data });
    const result = await prisma.model.create({ data });
    logger.info(`Record created successfully`, { id: result.id });
    return result;
  } catch (error) {
    logger.error(`Create failed`, { error, data });
    throw error;
  }
};
```

### Service: Validation
```typescript
const process = async (data: any) => {
  try {
    logger.info(`Processing data`, { data });
    
    if (!isValid(data)) {
      logger.warn(`Validation failed`, { data });
      throw new Error("Invalid data");
    }
    
    const result = await dao.create(data);
    logger.info(`Processing completed`, { result });
    return result;
  } catch (error) {
    logger.error(`Processing failed`, { error });
    throw error;
  }
};
```

### Controller: Success Response
```typescript
const handler = async (req: Request, res: Response) => {
  logger.info(`[OPERATION] Request received`);
  const result = await service.process(req.body);
  logger.info(`[OPERATION] Response sent`);
  sendResponse(res, {
    statusCode: 201,
    message: "Created successfully",
    data: result,
  });
};
```

---

## 🚫 Don'ts

❌ Don't use `console.log()` - Use logger instead
❌ Don't use `res.json()` - Use sendResponse instead
❌ Don't log sensitive data (passwords, tokens)
❌ Don't skip error logging
❌ Don't forget to re-throw errors after logging

---

## ✅ Do's

✅ Use descriptive log messages
✅ Include relevant metadata
✅ Log at appropriate levels (info, warn, error)
✅ Use try-catch in all async functions
✅ Use sendResponse for all API responses
✅ Follow the 3-layer architecture
✅ Keep controller logic minimal

---

## 📊 Log Levels

- `info` - Normal operations (queries, requests, results)
- `warn` - Potential issues (validation failures, not found)
- `error` - Actual errors (database failures, exceptions)
- `debug` - Detailed debugging information

---

## 🔍 Troubleshooting

**Issue**: Logs not appearing in files
- **Solution**: Ensure `logs/` directory exists

**Issue**: Too many logs
- **Solution**: Set `LOG_LEVEL=warn` in `.env`

**Issue**: TypeScript errors
- **Solution**: Ensure Winston is installed: `npm install winston`

**Issue**: Response format inconsistent
- **Solution**: Ensure all controllers use `sendResponse()`
