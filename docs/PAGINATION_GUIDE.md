# Pagination Guide

## Overview

The API response utility now includes comprehensive pagination support to help you build efficient, scalable list endpoints.

---

## Pagination Response Format

All paginated responses follow this structure:

```json
{
  "success": true,
  "message": "Data fetched successfully",
  "data": [
    { "id": 1, "name": "Item 1" },
    { "id": 2, "name": "Item 2" }
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

## Available Functions

### 1. `getPaginationParams(query, defaultPage?, defaultLimit?, maxLimit?)`

Extracts and validates pagination parameters from query string.

**Parameters:**
- `query` - Request query object (req.query)
- `defaultPage` - Default page number (default: 1)
- `defaultLimit` - Default items per page (default: 10)
- `maxLimit` - Maximum allowed items per page (default: 100)

**Returns:**
```typescript
{
  page: number,    // Validated page number (min: 1)
  limit: number,   // Validated limit (min: 1, max: maxLimit)
  skip: number     // Calculated offset for database queries
}
```

**Example:**
```typescript
const { page, limit, skip } = getPaginationParams(req.query);
// Query: ?page=2&limit=20
// Returns: { page: 2, limit: 20, skip: 20 }
```

---

### 2. `calculatePagination(page, limit, totalItems)`

Calculates pagination metadata.

**Parameters:**
- `page` - Current page number
- `limit` - Items per page
- `totalItems` - Total number of items in database

**Returns:**
```typescript
{
  currentPage: number,
  pageSize: number,
  totalItems: number,
  totalPages: number,
  hasNextPage: boolean,
  hasPreviousPage: boolean
}
```

**Example:**
```typescript
const pagination = calculatePagination(1, 10, 95);
// Returns:
// {
//   currentPage: 1,
//   pageSize: 10,
//   totalItems: 95,
//   totalPages: 10,
//   hasNextPage: true,
//   hasPreviousPage: false
// }
```

---

### 3. `sendPaginatedResponse(res, data, page, limit, totalItems, message?, statusCode?)`

Sends a standardized paginated response.

**Parameters:**
- `res` - Express Response object
- `data` - Array of items to return
- `page` - Current page number
- `limit` - Items per page
- `totalItems` - Total number of items
- `message` - Success message (default: "Data fetched successfully")
- `statusCode` - HTTP status code (default: 200)

**Example:**
```typescript
const users = await prisma.user.findMany({ skip, take: limit });
const total = await prisma.user.count();

sendPaginatedResponse(res, users, page, limit, total, "Users fetched successfully");
```

---

## Usage Examples

### Basic Pagination

```typescript
import { getPaginationParams, sendPaginatedResponse } from "../utils/apiResponse";
import { getLogger } from "../utils/logger";

const logger = getLogger("UserController");

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_USERS] API request received`);
  
  // Extract pagination params
  const { page, limit, skip } = getPaginationParams(req.query);
  
  // Fetch data with pagination
  const users = await prisma.user.findMany({
    skip,
    take: limit,
  });
  
  // Get total count
  const totalUsers = await prisma.user.count();
  
  logger.info(`[GET_USERS] Fetched ${users.length} users`);
  
  // Send paginated response
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

**API Call:**
```
GET /api/users?page=1&limit=10
```

**Response:**
```json
{
  "success": true,
  "message": "Users fetched successfully",
  "data": [...10 users...],
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

### Pagination with Filters

```typescript
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_USERS] API request received`, { query: req.query });
  
  const { page, limit, skip } = getPaginationParams(req.query);
  
  // Build filters
  const filters: any = {};
  
  if (req.query.role) {
    filters.role = { role_name: req.query.role };
  }
  
  if (req.query.isActive) {
    filters.is_active = req.query.isActive === "true";
  }
  
  if (req.query.search) {
    filters.OR = [
      { name: { contains: req.query.search, mode: "insensitive" } },
      { email: { contains: req.query.search, mode: "insensitive" } },
    ];
  }
  
  // Fetch with filters and pagination
  const users = await prisma.user.findMany({
    where: filters,
    skip,
    take: limit,
    orderBy: { created_at: "desc" },
  });
  
  // Count with same filters
  const totalUsers = await prisma.user.count({ where: filters });
  
  logger.info(`[GET_USERS] Fetched ${users.length} of ${totalUsers} users`);
  
  sendPaginatedResponse(res, users, page, limit, totalUsers);
};
```

**API Call:**
```
GET /api/users?page=1&limit=10&role=candidate&isActive=true&search=john
```

---

### Custom Defaults

```typescript
// Custom pagination defaults: page 1, 20 items per page, max 50
const { page, limit, skip } = getPaginationParams(req.query, 1, 20, 50);
```

---

### Service Layer Pattern

```typescript
// Service Layer
export const userService = {
  getPaginatedUsers: async (page: number, limit: number) => {
    const logger = getLogger("UserService");
    
    try {
      logger.info(`Fetching paginated users`, { page, limit });
      
      const skip = (page - 1) * limit;
      
      const [users, totalCount] = await Promise.all([
        prisma.user.findMany({ skip, take: limit }),
        prisma.user.count(),
      ]);
      
      return { users, totalCount };
    } catch (error) {
      logger.error(`Failed to fetch users`, { error });
      throw error;
    }
  },
};

// Controller Layer
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const logger = getLogger("UserController");
  logger.info(`[GET_USERS] API request received`);
  
  const { page, limit } = getPaginationParams(req.query);
  
  const { users, totalCount } = await userService.getPaginatedUsers(page, limit);
  
  logger.info(`[GET_USERS] Response sent`);
  
  sendPaginatedResponse(res, users, page, limit, totalCount);
};
```

---

## Query String Parameters

### Supported Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | number | 1 | Current page number (1-based) |
| `limit` | number | 10 | Items per page |

### Examples

```
# Page 1, 10 items per page (default)
GET /api/users

# Page 2, 20 items per page
GET /api/users?page=2&limit=20

# With filters
GET /api/users?page=1&limit=10&role=candidate&isActive=true

# With search
GET /api/users?page=1&limit=10&search=john
```

---

## Pagination Metadata

The `pagination` object in the response contains:

| Field | Type | Description |
|-------|------|-------------|
| `currentPage` | number | Current page number |
| `pageSize` | number | Number of items per page |
| `totalItems` | number | Total number of items in database |
| `totalPages` | number | Total number of pages |
| `hasNextPage` | boolean | Whether there's a next page |
| `hasPreviousPage` | boolean | Whether there's a previous page |

---

## Best Practices

### 1. Always Set a Maximum Limit

```typescript
// Protect against large requests
const { page, limit, skip } = getPaginationParams(req.query, 1, 10, 100);
```

### 2. Use Parallel Queries for Count

```typescript
// Fetch data and count in parallel for better performance
const [users, totalCount] = await Promise.all([
  prisma.user.findMany({ skip, take: limit }),
  prisma.user.count(),
]);
```

### 3. Apply Same Filters to Count Query

```typescript
const filters = { is_active: true };

const [users, totalCount] = await Promise.all([
  prisma.user.findMany({ where: filters, skip, take: limit }),
  prisma.user.count({ where: filters }), // Same filters!
]);
```

### 4. Add Sorting for Consistent Results

```typescript
const users = await prisma.user.findMany({
  skip,
  take: limit,
  orderBy: { created_at: "desc" }, // Always sort!
});
```

### 5. Log Pagination Info

```typescript
logger.info(`Fetched page ${page} with ${users.length} items (${totalCount} total)`);
```

---

## Frontend Integration

### React/Next.js Example

```typescript
const fetchUsers = async (page = 1, limit = 10) => {
  const response = await fetch(`/api/users?page=${page}&limit=${limit}`);
  const data = await response.json();
  
  return {
    users: data.data,
    pagination: data.pagination,
  };
};

// Component
const UserList = () => {
  const [page, setPage] = useState(1);
  const { users, pagination } = useFetchUsers(page);
  
  return (
    <div>
      <h2>Users</h2>
      <p>Page {pagination.currentPage} of {pagination.totalPages}</p>
      <p>Showing {users.length} of {pagination.totalItems} users</p>
      
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      
      <div>
        {pagination.hasPreviousPage && (
          <button onClick={() => setPage(page - 1)}>Previous</button>
        )}
        {pagination.hasNextPage && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};
```

---

## Performance Tips

### 1. Use Database Indexes

```sql
CREATE INDEX idx_user_created_at ON users(created_at DESC);
CREATE INDEX idx_user_role ON users(role_id);
```

### 2. Avoid `COUNT(*)` on Large Tables

For very large tables, consider:
- Caching the total count
- Using estimated counts
- Removing total count from UI

### 3. Cursor-Based Pagination for Large Datasets

For infinite scroll or very large datasets:

```typescript
// Cursor-based pagination (alternative approach)
const users = await prisma.user.findMany({
  take: limit,
  cursor: lastUserId ? { id: lastUserId } : undefined,
  skip: lastUserId ? 1 : 0, // Skip the cursor
  orderBy: { id: "asc" },
});
```

---

## Common Pitfalls

❌ **Don't forget to validate input**
```typescript
// Bad
const page = parseInt(req.query.page);
const limit = parseInt(req.query.limit);

// Good
const { page, limit, skip } = getPaginationParams(req.query);
```

❌ **Don't use different filters for data and count**
```typescript
// Bad
const users = await prisma.user.findMany({ where: { is_active: true } });
const total = await prisma.user.count(); // Missing filter!

// Good
const filters = { is_active: true };
const users = await prisma.user.findMany({ where: filters });
const total = await prisma.user.count({ where: filters });
```

❌ **Don't forget to add sorting**
```typescript
// Bad
const users = await prisma.user.findMany({ skip, take: limit });

// Good
const users = await prisma.user.findMany({
  skip,
  take: limit,
  orderBy: { created_at: "desc" },
});
```

---

## Summary

✅ Use `getPaginationParams()` to extract and validate query parameters
✅ Use `sendPaginatedResponse()` for consistent paginated responses
✅ Always include total count for pagination metadata
✅ Apply same filters to both data and count queries
✅ Add sorting for consistent results
✅ Set reasonable maximum limits
✅ Use parallel queries for better performance
✅ Log pagination information for debugging

---

## Quick Reference

```typescript
// Import utilities
import { getPaginationParams, sendPaginatedResponse } from "../utils/apiResponse";

// In controller
const { page, limit, skip } = getPaginationParams(req.query);

const [data, total] = await Promise.all([
  prisma.model.findMany({ skip, take: limit, orderBy: { created_at: "desc" } }),
  prisma.model.count(),
]);

sendPaginatedResponse(res, data, page, limit, total, "Data fetched successfully");
```
