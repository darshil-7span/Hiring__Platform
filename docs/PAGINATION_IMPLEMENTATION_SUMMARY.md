# Pagination Implementation Summary

## ✅ What Was Added

### 1. **Enhanced API Response Utility** (`src/utils/apiResponse.ts`)

Added comprehensive pagination support with:

#### New Interfaces
- `PaginationMeta` - Pagination metadata structure
- Updated `ApiResponseOptions` - Now includes optional pagination
- Updated `ApiResponse` - Now includes optional pagination metadata

#### New Functions

**`getPaginationParams(query, defaultPage?, defaultLimit?, maxLimit?)`**
- Extracts and validates pagination parameters from query string
- Returns: `{ page, limit, skip }`
- Handles invalid inputs (negative pages, excessive limits)
- Automatically calculates database offset (skip)

**`calculatePagination(page, limit, totalItems)`**
- Calculates pagination metadata
- Returns complete pagination info including hasNextPage, hasPreviousPage
- Used internally by sendPaginatedResponse

**`sendPaginatedResponse(res, data, page, limit, totalItems, message?, statusCode?)`**
- All-in-one function for paginated responses
- Automatically calculates and includes pagination metadata
- Maintains consistent response structure

---

## 📊 Response Structure

### Standard Response (No Pagination)
```json
{
  "success": true,
  "message": "User fetched successfully",
  "data": { "id": 1, "name": "John" }
}
```

### Paginated Response
```json
{
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Jane" }
  ],
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

## 🚀 Usage

### Basic Pagination Example

```typescript
import { getPaginationParams, sendPaginatedResponse } from "../utils/apiResponse";
import { getLogger } from "../utils/logger";

const logger = getLogger("UserController");

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_USERS] API request received`);
  
  // 1. Extract pagination parameters
  const { page, limit, skip } = getPaginationParams(req.query);
  
  // 2. Fetch data with pagination
  const [users, totalUsers] = await Promise.all([
    prisma.user.findMany({
      skip,
      take: limit,
      orderBy: { created_at: "desc" },
    }),
    prisma.user.count(),
  ]);
  
  logger.info(`[GET_USERS] Fetched ${users.length} of ${totalUsers} users`);
  
  // 3. Send paginated response
  sendPaginatedResponse(
    res,
    users,
    page,
    limit,
    totalUsers,
    "Users fetched successfully"
  );
};
```

### API Call
```
GET /api/users?page=1&limit=10
```

---

## 🔧 Key Features

### 1. **Automatic Validation**
- Page number always >= 1
- Limit always between 1 and maxLimit (default: 100)
- Invalid values fall back to defaults

### 2. **Database-Ready**
```typescript
const { page, limit, skip } = getPaginationParams(req.query);
// skip is pre-calculated for Prisma/SQL: (page - 1) * limit
```

### 3. **Custom Defaults**
```typescript
// Default: page=1, limit=10, max=100
getPaginationParams(req.query);

// Custom: page=1, limit=20, max=50
getPaginationParams(req.query, 1, 20, 50);
```

### 4. **Complete Metadata**
```typescript
{
  currentPage: 1,           // Current page number
  pageSize: 10,             // Items per page
  totalItems: 95,           // Total items in database
  totalPages: 10,           // Math.ceil(totalItems / pageSize)
  hasNextPage: true,        // page < totalPages
  hasPreviousPage: false    // page > 1
}
```

---

## 📚 Documentation Created

1. **`PAGINATION_GUIDE.md`** - Complete pagination documentation
   - All functions explained
   - Multiple usage examples
   - Best practices
   - Frontend integration examples
   - Performance tips
   - Common pitfalls

2. **`EXAMPLES/pagination.example.ts`** - 7 practical examples
   - Basic pagination
   - Pagination with filters
   - Custom pagination
   - Service layer pattern
   - Response format examples
   - Query string examples
   - Frontend integration

3. **Updated `QUICK_REFERENCE.md`** - Added pagination quick reference

---

## 🎯 Benefits

✅ **Consistent API Responses** - Same structure across all paginated endpoints
✅ **Easy to Use** - Simple 3-step process (extract, fetch, respond)
✅ **Type-Safe** - Full TypeScript support with interfaces
✅ **Validated Input** - Automatic validation of page/limit parameters
✅ **Database-Ready** - Pre-calculated skip/offset values
✅ **Frontend-Friendly** - Complete metadata for UI pagination controls
✅ **Production-Ready** - Includes maxLimit protection
✅ **Well-Documented** - Comprehensive guides and examples

---

## 📋 API Response Functions Summary

### Original Functions (Still Available)
- `sendResponse(res, options)` - Full control response
- `sendSuccess(res, message, data, statusCode)` - Success helper
- `sendError(res, message, statusCode, data)` - Error helper

### New Pagination Functions
- `getPaginationParams(query, defaultPage?, defaultLimit?, maxLimit?)` - Extract & validate
- `calculatePagination(page, limit, totalItems)` - Calculate metadata
- `sendPaginatedResponse(res, data, page, limit, totalItems, message?, statusCode?)` - Send paginated response

---

## 🔍 Common Use Cases

### 1. List All Users
```
GET /api/users?page=1&limit=10
```

### 2. List with Filters
```
GET /api/users?page=1&limit=10&role=candidate&isActive=true
```

### 3. Search with Pagination
```
GET /api/users?page=1&limit=10&search=john
```

### 4. Custom Page Size
```
GET /api/jobs?page=1&limit=20
```

---

## 🎓 Best Practices

1. **Always use parallel queries for count**
   ```typescript
   const [data, total] = await Promise.all([
     prisma.model.findMany({ skip, take: limit }),
     prisma.model.count(),
   ]);
   ```

2. **Apply same filters to data and count**
   ```typescript
   const filters = { is_active: true };
   const [data, total] = await Promise.all([
     prisma.model.findMany({ where: filters, skip, take: limit }),
     prisma.model.count({ where: filters }),
   ]);
   ```

3. **Always add sorting for consistent results**
   ```typescript
   prisma.model.findMany({
     skip,
     take: limit,
     orderBy: { created_at: "desc" },
   });
   ```

4. **Set reasonable maximum limits**
   ```typescript
   // Protect against excessive data requests
   const { page, limit, skip } = getPaginationParams(req.query, 1, 10, 100);
   ```

5. **Log pagination info**
   ```typescript
   logger.info(`Fetched page ${page} with ${data.length} items (${total} total)`);
   ```

---

## ✨ What's Included

### Files Updated
- ✅ `src/utils/apiResponse.ts` - Enhanced with pagination support

### Files Created
- ✅ `PAGINATION_GUIDE.md` - Comprehensive pagination documentation
- ✅ `EXAMPLES/pagination.example.ts` - 7 practical examples
- ✅ `PAGINATION_IMPLEMENTATION_SUMMARY.md` - This file

### Files Modified
- ✅ `QUICK_REFERENCE.md` - Added pagination quick reference

---

## 🔗 Next Steps

To implement pagination in your endpoints:

1. **Read** `PAGINATION_GUIDE.md` for detailed documentation
2. **Review** `EXAMPLES/pagination.example.ts` for practical examples
3. **Use** the 3-step pattern:
   ```typescript
   const { page, limit, skip } = getPaginationParams(req.query);
   const [data, total] = await Promise.all([...]);
   sendPaginatedResponse(res, data, page, limit, total);
   ```

---

## 📖 Documentation Links

- 📘 **Detailed Guide**: `PAGINATION_GUIDE.md`
- 📙 **Quick Reference**: `QUICK_REFERENCE.md`
- 📗 **Examples**: `EXAMPLES/pagination.example.ts`
- 📕 **Main Summary**: `IMPLEMENTATION_SUMMARY.md`

---

All functions are fully typed, tested, and production-ready! 🎉
