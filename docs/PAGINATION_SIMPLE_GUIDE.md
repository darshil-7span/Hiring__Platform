# Simple Pagination Guide

## Overview

The API response utility now includes a simple, clean pagination function that returns data with metadata.

---

## Response Format

```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Jane" }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 95
  }
}
```

---

## Function Signature

```typescript
export const sendPaginatedResponse = (
  res: Response,
  data: any,
  meta: {
    page: number;
    limit: number;
    total: number;
  }
) => {
  return res.status(200).json({
    success: true,
    data,
    meta,
  });
};
```

---

## Usage Example

```typescript
import { sendPaginatedResponse } from "../utils/apiResponse";
import { getLogger } from "../utils/logger";

const logger = getLogger("UserController");

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_USERS] API request received`);
  
  // Extract pagination params
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;
  
  // Fetch data
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      skip,
      take: limit,
      orderBy: { created_at: "desc" },
    }),
    prisma.user.count(),
  ]);
  
  logger.info(`[GET_USERS] Fetched ${users.length} of ${total} users`);
  
  // Send paginated response
  sendPaginatedResponse(res, users, {
    page,
    limit,
    total,
  });
};
```

---

## API Call Examples

```bash
# Page 1, 10 items per page
GET /api/users?page=1&limit=10

# Page 2, 20 items per page
GET /api/users?page=2&limit=20

# With filters
GET /api/users?page=1&limit=10&role=candidate&isActive=true
```

---

## Response Structure

The response always includes:
- `success`: Boolean indicating success (always `true` for this function)
- `data`: The actual data array or object
- `meta`: Pagination metadata
  - `page`: Current page number
  - `limit`: Items per page
  - `total`: Total number of items in database

---

## Complete Example with Filters

```typescript
export const getJobs = async (req: Request, res: Response): Promise<void> => {
  logger.info(`[GET_JOBS] API request received`, { query: req.query });
  
  // Extract pagination
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;
  
  // Build filters
  const filters: any = {};
  
  if (req.query.status) {
    filters.status = req.query.status;
  }
  
  if (req.query.search) {
    filters.title = {
      contains: req.query.search,
      mode: "insensitive",
    };
  }
  
  // Fetch with filters and pagination
  const [jobs, total] = await Promise.all([
    prisma.job.findMany({
      where: filters,
      skip,
      take: limit,
      orderBy: { created_at: "desc" },
    }),
    prisma.job.count({ where: filters }),
  ]);
  
  logger.info(`[GET_JOBS] Fetched ${jobs.length} of ${total} jobs`);
  
  // Send response
  sendPaginatedResponse(res, jobs, { page, limit, total });
};
```

---

## Helper Function for Extracting Params

You can create a simple helper:

```typescript
// utils/pagination.ts
export const getPaginationParams = (query: any) => {
  const page = Math.max(1, parseInt(query.page as string) || 1);
  const limit = Math.max(1, Math.min(parseInt(query.limit as string) || 10, 100));
  const skip = (page - 1) * limit;
  
  return { page, limit, skip };
};

// Usage in controller
import { getPaginationParams } from "../utils/pagination";

const { page, limit, skip } = getPaginationParams(req.query);
```

---

## Frontend Integration

### React/Next.js Example

```typescript
const fetchUsers = async (page = 1, limit = 10) => {
  const response = await fetch(`/api/users?page=${page}&limit=${limit}`);
  const json = await response.json();
  
  return {
    users: json.data,
    meta: json.meta,
  };
};

// Component
const UserList = () => {
  const [page, setPage] = useState(1);
  const { users, meta } = useFetchUsers(page);
  
  const totalPages = Math.ceil(meta.total / meta.limit);
  
  return (
    <div>
      <h2>Users</h2>
      <p>Page {meta.page} of {totalPages}</p>
      <p>Showing {users.length} of {meta.total} users</p>
      
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      
      <div>
        <button 
          disabled={meta.page === 1} 
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button 
          disabled={meta.page >= totalPages} 
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
```

---

## Best Practices

✅ **Always validate page and limit**
```typescript
const page = Math.max(1, parseInt(req.query.page as string) || 1);
const limit = Math.max(1, Math.min(parseInt(req.query.limit as string) || 10, 100));
```

✅ **Use parallel queries for performance**
```typescript
const [data, total] = await Promise.all([
  prisma.model.findMany({ skip, take: limit }),
  prisma.model.count(),
]);
```

✅ **Apply same filters to both queries**
```typescript
const filters = { is_active: true };
const [data, total] = await Promise.all([
  prisma.model.findMany({ where: filters, skip, take: limit }),
  prisma.model.count({ where: filters }),
]);
```

✅ **Always add sorting**
```typescript
prisma.model.findMany({
  skip,
  take: limit,
  orderBy: { created_at: "desc" },
});
```

✅ **Log pagination info**
```typescript
logger.info(`Fetched page ${page}: ${data.length} of ${total} items`);
```

---

## Summary

The pagination function is simple and clean:

```typescript
// Import
import { sendPaginatedResponse } from "../utils/apiResponse";

// Use
sendPaginatedResponse(res, data, { page, limit, total });

// Response
{
  "success": true,
  "data": [...],
  "meta": { "page": 1, "limit": 10, "total": 95 }
}
```

That's it! Simple, clean, and effective. ✨
