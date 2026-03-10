# Types Folder - Quick Reference

## 🎯 TL;DR (Too Long; Didn't Read)

### **What We Created:**
Centralized types folder at `src/types/` with all interfaces organized by module.

### **Why:**
Industry standard for Express.js apps. Makes code cleaner and easier to maintain.

### **How to Use:**
```typescript
import { AuthResponse, JobResponse, ApiResponse } from "@/types";
```

---

## 📦 What's Inside

| File | Contains | Use For |
|------|----------|---------|
| `auth.types.ts` | RegisterInput, LoginInput, AuthResponse, CreateUserData, JWTPayload | Auth module |
| `user.types.ts` | CandidateProfile, RecruiterProfile, Update*Data | User profiles |
| `job.types.ts` | CreateJobInput, UpdateJobInput, JobResponse, FilterJobInput | Job module |
| `application.types.ts` | CreateApplicationInput, ApplicationResponse | Applications |
| `common.types.ts` | ApiResponse, PaginationQuery, SuccessResponse | Shared types |
| `index.ts` | Re-exports all types | Central import point |

---

## 🚀 Quick Start

### **Step 1: Import types**
```typescript
// In any file, import from types folder
import { AuthResponse, CreateUserData } from "@/types";
// or
import { AuthResponse, CreateUserData } from "../../types";
```

### **Step 2: Use the types**
```typescript
const register = async (input: RegisterInput): Promise<AuthResponse> => {
  const userData: CreateUserData = {
    name: input.name,
    email: input.email,
    // ...
  };
  
  const user = await createUser(userData);
  return { user, token };
};
```

### **Step 3: Remove old interface definitions**
```typescript
// ❌ Remove this from your service/dao files:
// export interface AuthResponse { ... }

// ✅ Import from types instead
import { AuthResponse } from "@/types";
```

---

## 📋 Migration Checklist

### Quick Migration (Do This):
- [ ] Open `src/services/auth/auth.service.ts`
- [ ] Add: `import { RegisterInput, LoginInput, AuthResponse } from "../../types";`
- [ ] Delete: The interface definitions from the file
- [ ] Repeat for other files (dao, controllers, utils)
- [ ] Run: `npm run build` to check for errors
- [ ] Fix any import issues
- [ ] Done! ✅

---

## 🎨 Before & After

### BEFORE:
```typescript
// src/services/auth/auth.service.ts
export interface RegisterInput { ... }
export interface LoginInput { ... }
export interface AuthResponse { ... }

// src/dao/auth.dao.ts  
export interface CreateUserData { ... }

// src/utils/jwt.ts
export interface JWTPayload { ... }
```

### AFTER:
```typescript
// src/types/auth.types.ts (ALL IN ONE PLACE!)
export interface RegisterInput { ... }
export interface LoginInput { ... }
export interface AuthResponse { ... }
export interface CreateUserData { ... }
export interface JWTPayload { ... }

// src/services/auth/auth.service.ts (CLEAN!)
import { RegisterInput, LoginInput, AuthResponse } from "../../types";
// No interface definitions here!

// src/dao/auth.dao.ts (CLEAN!)
import { CreateUserData } from "../types";
// No interface definitions here!
```

---

## 💡 Common Patterns

### **Pattern 1: Service Functions**
```typescript
import { RegisterInput, AuthResponse } from "@/types";

const register = async (input: RegisterInput): Promise<AuthResponse> => {
  // ...
};
```

### **Pattern 2: DAO Functions**
```typescript
import { CreateUserData } from "@/types";

const createUser = async (data: CreateUserData) => {
  // ...
};
```

### **Pattern 3: Controllers**
```typescript
import { Request, Response } from "express";
import { AuthResponse } from "@/types";

const registerController = async (req: Request, res: Response) => {
  const result: AuthResponse = await authService.register(req.body);
  res.json(result);
};
```

---

## ❓ FAQ

### Q: Where do I put new interfaces?
**A:** Add them to the appropriate file in `src/types/`:
- Auth-related → `auth.types.ts`
- Job-related → `job.types.ts`
- Shared → `common.types.ts`

### Q: Can I still use Zod schemas?
**A:** Yes! Keep Zod schemas in `validations/`. Types in `types/` are for TypeScript type checking.

### Q: What if I need a type in multiple places?
**A:** That's the point! Import from `@/types` anywhere you need it.

### Q: Do I have to update everything at once?
**A:** No! Migrate one module at a time. Start with auth, then others.

### Q: Will this break my existing code?
**A:** Not if you update imports. The types are the same, just moved to a central location.

---

## 🔗 Full Documentation

- 📖 **Usage Guide**: `src/types/README.md`
- 🌍 **Industry Comparison**: `docs/TYPES_ORGANIZATION_GUIDE.md`
- 📋 **Migration Steps**: `docs/TYPES_MIGRATION_STEPS.md`
- 📊 **Complete Summary**: `docs/TYPES_COMPLETE_SUMMARY.md`

---

## ✅ Benefits Summary

| Before | After |
|--------|-------|
| ❌ Types scattered everywhere | ✅ All types in one folder |
| ❌ Hard to find definitions | ✅ Easy to find in `types/` |
| ❌ Complex import paths | ✅ Simple: `from "@/types"` |
| ❌ Hard to share types | ✅ Easy to share anywhere |
| ❌ Difficult refactoring | ✅ Easy refactoring |

---

## 🎉 You're Done!

You now have a professional, industry-standard types organization! 

**Next:** Follow the migration checklist above to update your existing files.

**Questions?** Check `src/types/README.md` for detailed examples!
