# 🛡️ Zod Validation Guide (DTO Pattern)

## 📚 What is Zod?

**Zod** is a TypeScript-first schema validation library that acts like **DTOs (Data Transfer Objects)** in other frameworks.

### Why use Zod?
✅ **Type Safety** - Auto-generates TypeScript types  
✅ **Validation** - Validates incoming requests before hitting controllers  
✅ **Error Messages** - Provides clear, customizable error messages  
✅ **Less Code** - No need to write manual validation logic  

---

## 🏗️ Project Structure

```
src/
├── schemas/                    # ← Zod schemas (like DTOs)
│   ├── auth.schema.ts         # Login, Register schemas
│   ├── job.schema.ts          # Job CRUD schemas
│   ├── application.schema.ts  # Application schemas
│   └── common.schema.ts       # Reusable schemas (pagination, etc.)
│
├── middlewares/
│   └── validate.middleware.ts # ← Validation middleware
│
├── controllers/
│   └── auth/
│       └── auth.controller.example.ts  # ← Example usage
│
└── routes/
    └── auth/
        └── auth.routes.example.ts      # ← Example routes
```

---

## 🚀 How to Use

### Step 1: Define Schema (DTO)

**File:** `src/schemas/auth.schema.ts`

```typescript
import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password is required"),
  }),
});

// Auto-generate TypeScript type
export type LoginRequest = z.infer<typeof loginSchema>;
```

### Step 2: Use in Routes

**File:** `src/routes/auth/auth.routes.ts`

```typescript
import { validate } from "../../middlewares/validate.middleware";
import { loginSchema } from "../../schemas/auth.schema";

router.post(
  "/login",
  validate(loginSchema), // ← Validates before controller
  authController.login
);
```

### Step 3: Use in Controller

**File:** `src/controllers/auth/auth.controller.ts`

```typescript
async login(req: Request, res: Response) {
  // req.body is already validated! TypeScript knows the shape
  const { email, password } = req.body;
  
  // Your business logic here...
}
```

---

## 🔍 What Happens?

### ✅ Valid Request
```bash
POST /api/auth/login
Body: { "email": "user@example.com", "password": "myPassword123" }

→ Validation passes
→ Controller executes
→ Response: { "success": true, "token": "..." }
```

### ❌ Invalid Request
```bash
POST /api/auth/login
Body: { "email": "invalid-email", "password": "" }

→ Validation fails
→ Response:
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "body.email", "message": "Invalid email format" },
    { "field": "body.password", "message": "Password is required" }
  ]
}
```

---

## 📝 Common Patterns

### 1. Request Body Validation
```typescript
export const createJobSchema = z.object({
  body: z.object({
    title: z.string().min(3),
    description: z.string().min(10),
  }),
});
```

### 2. URL Parameters Validation
```typescript
export const getJobByIdSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID must be a number"),
  }),
});
```

### 3. Query Parameters Validation
```typescript
export const paginationSchema = z.object({
  query: z.object({
    page: z.string().transform(Number).default("1"),
    limit: z.string().transform(Number).default("10"),
  }),
});
```

### 4. Optional Fields
```typescript
export const updateJobSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    description: z.string().min(10).optional(),
  }),
});
```

### 5. Enums
```typescript
export const createJobSchema = z.object({
  body: z.object({
    jobType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT"]),
  }),
});
```

### 6. Arrays
```typescript
export const createJobSchema = z.object({
  body: z.object({
    skillIds: z.array(z.number().int().positive()).min(1),
  }),
});
```

---

## 🎯 Real-World Example

### Create Job Endpoint

**1. Schema** (`src/schemas/job.schema.ts`)
```typescript
export const createJobSchema = z.object({
  body: z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    jobType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT"]),
    skillIds: z.array(z.number()).min(1),
  }),
});
```

**2. Route** (`src/routes/job/job.routes.ts`)
```typescript
router.post("/jobs", validate(createJobSchema), jobController.create);
```

**3. Controller** (`src/controllers/job/job.controller.ts`)
```typescript
async create(req: Request, res: Response) {
  const { title, description, jobType, skillIds } = req.body;
  
  // Create job in database
  const job = await prisma.jobPost.create({
    data: { title, description, jobType, ... }
  });
  
  return res.status(201).json({
    success: true,
    data: job,
  });
}
```

---

## 🛠️ Available Zod Methods

| Method | Description | Example |
|--------|-------------|---------|
| `z.string()` | String validation | `z.string().min(3).max(100)` |
| `z.number()` | Number validation | `z.number().int().positive()` |
| `z.boolean()` | Boolean validation | `z.boolean()` |
| `z.enum()` | Enum validation | `z.enum(["A", "B", "C"])` |
| `z.array()` | Array validation | `z.array(z.number()).min(1)` |
| `z.object()` | Object validation | `z.object({ key: z.string() })` |
| `.optional()` | Make field optional | `z.string().optional()` |
| `.nullable()` | Allow null | `z.string().nullable()` |
| `.default()` | Default value | `z.string().default("hello")` |
| `.email()` | Email validation | `z.string().email()` |
| `.url()` | URL validation | `z.string().url()` |
| `.regex()` | Regex validation | `z.string().regex(/^\d+$/)` |
| `.min()` | Minimum length/value | `z.string().min(5)` |
| `.max()` | Maximum length/value | `z.string().max(100)` |
| `.transform()` | Transform value | `z.string().transform(Number)` |

---

## 📦 Benefits Over Manual Validation

### ❌ Without Zod (Manual Validation)
```typescript
async login(req: Request, res: Response) {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }
  
  if (password.length < 8) {
    return res.status(400).json({ error: "Password too short" });
  }
  
  // Business logic...
}
```

### ✅ With Zod
```typescript
// Schema defined once
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

// Controller is clean
async login(req: Request, res: Response) {
  const { email, password } = req.body; // Already validated!
  // Business logic...
}
```

---

## 🔄 Next Steps

1. **Copy example files** to your actual controllers/routes
2. **Remove `.example.ts` suffix** when using them
3. **Create schemas** for your specific endpoints
4. **Add validation** to all routes using `validate(schema)`

---

## 📚 Additional Resources

- **Zod Documentation:** https://zod.dev/
- **TypeScript Types:** Automatically generated from schemas using `z.infer`
- **Error Handling:** Handled by `validate.middleware.ts`

---

**Remember:** Schemas are your **single source of truth** for request/response validation! 🎯
