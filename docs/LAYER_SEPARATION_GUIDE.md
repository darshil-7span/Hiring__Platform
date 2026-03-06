# 3-Layer Architecture: Layer Separation Guide

## 🎯 Golden Rule

**Each layer should only do its job. No mixing!**

```
Controller = HTTP Handler
Service = Business Brain
DAO = Database Worker
```

---

## 📋 Controller Layer (HTTP Handler)

### ✅ Controller SHOULD Do:
1. **Extract data from HTTP request**
   ```typescript
   const { name, email, password } = req.body;
   const userId = req.params.id;
   const token = req.headers.authorization;
   ```

2. **Basic input validation** (type checking, required fields)
   ```typescript
   if (!email || !password) {
     return sendError(res, "Email and password required", 400);
   }
   ```

3. **Call service layer**
   ```typescript
   const result = await authService.register(data);
   ```

4. **Send HTTP response**
   ```typescript
   sendResponse(res, {
     statusCode: 201,
     message: "User registered",
     data: result
   });
   ```

5. **Log API events**
   ```typescript
   logger.info(`[REGISTER] API request received`);
   logger.info(`[REGISTER] API response sent`);
   ```

### ❌ Controller SHOULD NOT Do:
1. ❌ **Business logic**
   ```typescript
   // ❌ WRONG - checking business rules
   if (user.age < 18) {
     throw new Error("Must be 18+");
   }
   ```

2. ❌ **Database queries**
   ```typescript
   // ❌ WRONG - directly accessing database
   const user = await prisma.user.findUnique({ where: { email } });
   ```

3. ❌ **Data transformation**
   ```typescript
   // ❌ WRONG - transforming data
   const fullName = user.firstName + " " + user.lastName;
   ```

4. ❌ **Password hashing**
   ```typescript
   // ❌ WRONG - crypto operations
   const hashedPassword = await bcrypt.hash(password, 10);
   ```

5. ❌ **Token generation**
   ```typescript
   // ❌ WRONG - JWT logic
   const token = jwt.sign({ userId: user.id }, SECRET);
   ```

### ✅ Perfect Controller Example:
```typescript
const register = async (req: Request, res: Response) => {
  logger.info(`[REGISTER] API request received`);
  
  // 1. Extract data
  const { name, email, password, role_name } = req.body;
  
  // 2. Call service (no business logic here)
  const result = await authService.register({
    name, email, password, role_name
  });
  
  // 3. Send response
  logger.info(`[REGISTER] API response sent`);
  sendResponse(res, {
    statusCode: 201,
    message: "User registered successfully",
    data: result,
  });
};
```

---

## 🧠 Service Layer (Business Brain)

### ✅ Service SHOULD Do:

1. **Validate business rules**
   ```typescript
   // ✅ Check email is not already registered
   const emailExists = await authRepository.emailExists(input.email);
   if (emailExists) {
     throw new Error("Email already registered");
   }
   
   // ✅ Check user is active
   if (!user.is_active) {
     throw new Error("Account is inactive");
   }
   ```

2. **Orchestrate workflow** (coordinate multiple DAO calls)
   ```typescript
   // ✅ Multi-step business process
   const role = await authRepository.findRoleByName(input.role_name);
   const hashedPassword = await hashPassword(input.password);
   const user = await authRepository.createUser({...});
   await authRepository.upsertCandidateProfile(user.id);
   ```

3. **Transform data for presentation** (DTO - Data Transfer Objects)
   ```typescript
   // ✅ Convert database model to API response
   return {
     user: {
       id: Number(user.id),           // bigint → number
       name: user.name || "",          // nullable → string
       email: user.email,
       role: user.role.role_name,      // Extract nested
     },
     token,
   };
   ```

4. **Handle encryption/hashing**
   ```typescript
   // ✅ Password operations
   const hashedPassword = await hashPassword(input.password);
   const isValid = await comparePassword(input.password, user.password);
   ```

5. **Generate tokens**
   ```typescript
   // ✅ JWT generation
   const token = generateToken({
     userId: Number(user.id),
     email: user.email,
     role: user.role.role_name,
   });
   ```

6. **Decide business values**
   ```typescript
   // ✅ Set business defaults
   const user = await authRepository.createUser({
     name: input.name,
     email: input.email,
     password: hashedPassword,
     is_active: true,  // ✅ Business decision: new users are active
   });
   ```

7. **Log business events**
   ```typescript
   logger.info(`Registration started`, { email: input.email });
   logger.info(`Registration completed`, { userId: user.id });
   ```

### ❌ Service SHOULD NOT Do:

1. ❌ **Access req/res objects**
   ```typescript
   // ❌ WRONG - HTTP concerns
   const email = req.body.email;
   res.status(200).json({ success: true });
   ```

2. ❌ **Direct database queries**
   ```typescript
   // ❌ WRONG - Prisma in service
   const user = await prisma.user.findUnique({ where: { email } });
   ```

3. ❌ **Send HTTP responses**
   ```typescript
   // ❌ WRONG - HTTP response
   return res.json({ message: "Success" });
   ```

### ✅ Perfect Service Example:
```typescript
const register = async (input: RegisterInput) => {
  logger.info(`Registration started`, { email: input.email, role: input.role_name });

  // 1. Validate business rule: unique email
  const emailExists = await authRepository.emailExists(input.email);
  if (emailExists) {
    throw new Error("Email already registered");
  }

  // 2. Validate business rule: valid role
  const role = await authRepository.findRoleByName(input.role_name);
  if (!role) {
    throw new Error(`Role '${input.role_name}' not found`);
  }

  // 3. Business logic: hash password
  const hashedPassword = await hashPassword(input.password);

  // 4. Business decision: new users are active
  const user = await authRepository.createUser({
    name: input.name,
    email: input.email,
    password: hashedPassword,
    phone_number: input.phone_number,
    country_id: input.country_id,
    role_id: role.id,
    is_active: true,  // ✅ Business decision in service
  });

  // 5. Business workflow: create profile based on role
  if (role.role_name === "candidate") {
    await authRepository.upsertCandidateProfile(user.id);
  } else if (role.role_name === "recruiter") {
    await authRepository.upsertRecruiterProfile(user.id);
  }

  // 6. Business logic: generate token
  const token = generateToken({
    userId: Number(user.id),
    email: user.email,
    role: user.role.role_name,
  });

  logger.info(`Registration completed`, { userId: user.id });

  // 7. Transform for presentation (DTO)
  return {
    user: {
      id: Number(user.id),
      name: user.name || "",
      email: user.email,
      role: user.role.role_name,
    },
    token,
  };
};
```

---

## 💾 DAO Layer (Database Worker)

### ✅ DAO SHOULD Do:

1. **Execute database queries**
   ```typescript
   // ✅ Pure Prisma query
   const user = await prisma.user.findUnique({
     where: { email },
     include: { role: true },
   });
   ```

2. **Return raw data** (no transformation)
   ```typescript
   // ✅ Return what database gives
   return user;  // Don't transform
   ```

3. **Log database operations**
   ```typescript
   logger.info(`Querying user by email: ${email}`);
   logger.info(`User ${user ? "found" : "not found"}`);
   ```

4. **Handle database errors**
   ```typescript
   try {
     const user = await prisma.user.create({ data });
     return user;
   } catch (error) {
     logger.error(`Failed to create user`, { error });
     throw error;  // ✅ Let service handle
   }
   ```

### ❌ DAO SHOULD NOT Do:

1. ❌ **Business logic**
   ```typescript
   // ❌ WRONG - business rule in DAO
   if (!user.is_active) {
     throw new Error("User is inactive");
   }
   ```

2. ❌ **Validation**
   ```typescript
   // ❌ WRONG - validation in DAO
   if (user.age < 18) {
     throw new Error("Must be 18+");
   }
   ```

3. ❌ **Data transformation**
   ```typescript
   // ❌ WRONG - transforming in DAO
   return {
     ...user,
     fullName: user.firstName + " " + user.lastName,
   };
   ```

4. ❌ **Set business defaults**
   ```typescript
   // ❌ WRONG - business decision in DAO
   const user = await prisma.user.create({
     data: {
       ...data,
       is_active: true,  // ❌ DAO should not decide this
     }
   });
   ```

5. ❌ **Password hashing**
   ```typescript
   // ❌ WRONG - crypto in DAO
   const hashedPassword = await bcrypt.hash(data.password, 10);
   ```

### ✅ Perfect DAO Example:
```typescript
const createUser = async (data: CreateUserData): Promise<User & { role: Role }> => {
  try {
    logger.info(`Creating user: ${data.email}`);
    
    // ✅ Just execute the query with provided data
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,  // Already hashed by service
        phone_number: data.phone_number,
        country_id: data.country_id,
        role_id: data.role_id,
        is_active: data.is_active,  // ✅ Service provides this
      },
      include: { role: true },
    });
    
    logger.info(`User created successfully: ${data.email}`);
    return user;  // ✅ Return raw data
  } catch (error) {
    logger.error(`Failed to create user: ${data.email}`, { error });
    throw error;  // ✅ Propagate error
  }
};
```

---

## 🔍 How to Check if Code is in Right Layer

### Ask These Questions:

| Question | Layer |
|----------|-------|
| "Does this code handle HTTP request/response?" | **Controller** |
| "Does this code check a business rule?" | **Service** |
| "Does this code make decisions based on data?" | **Service** |
| "Does this code orchestrate multiple operations?" | **Service** |
| "Does this code transform data for API response?" | **Service** |
| "Does this code hash/encrypt data?" | **Service** |
| "Does this code generate tokens?" | **Service** |
| "Does this code query the database?" | **DAO** |
| "Does this code just save/fetch data?" | **DAO** |

---

## 🚫 Common Mistakes

### Mistake 1: Business Logic in DAO
```typescript
// ❌ WRONG
const createUser = async (data: CreateUserData) => {
  const user = await prisma.user.create({
    data: {
      ...data,
      is_active: true,  // ❌ Business decision in DAO
    }
  });
};

// ✅ CORRECT
// Service
const user = await authRepository.createUser({
  ...data,
  is_active: true,  // ✅ Business decision in Service
});

// DAO
const createUser = async (data: CreateUserData) => {
  return prisma.user.create({
    data  // ✅ Just save what's given
  });
};
```

### Mistake 2: Database Query in Service
```typescript
// ❌ WRONG
const register = async (input: RegisterInput) => {
  const user = await prisma.user.findUnique({  // ❌ Prisma in service
    where: { email: input.email }
  });
};

// ✅ CORRECT
const register = async (input: RegisterInput) => {
  const user = await authRepository.findUserByEmail(input.email);  // ✅ Use DAO
};
```

### Mistake 3: Business Logic in Controller
```typescript
// ❌ WRONG
const register = async (req: Request, res: Response) => {
  const { email } = req.body;
  
  const user = await authService.findByEmail(email);
  if (user) {  // ❌ Business check in controller
    return sendError(res, "Email exists", 400);
  }
  
  await authService.createUser(req.body);
};

// ✅ CORRECT
const register = async (req: Request, res: Response) => {
  const result = await authService.register(req.body);  // ✅ Service handles logic
  sendResponse(res, { statusCode: 201, data: result });
};
```

---

## 📝 Quick Checklist

### Before Committing Code:

- [ ] Controller has no business logic
- [ ] Controller has no database queries
- [ ] Service has no `req`/`res` access
- [ ] Service has no direct Prisma queries
- [ ] DAO has no business rules
- [ ] DAO has no validation
- [ ] DAO has no default business values
- [ ] Each function is in the right layer
- [ ] No code duplication
- [ ] Proper error propagation

---

## 🎯 Summary Table

| What | Where | Example |
|------|-------|---------|
| Extract `req.body` | Controller | `const { email } = req.body;` |
| Send `res.json()` | Controller | `sendResponse(res, {...})` |
| Validate "email exists" | Service | `if (emailExists) throw Error` |
| Check "user active" | Service | `if (!user.is_active) throw Error` |
| Hash password | Service | `await hashPassword(password)` |
| Generate JWT | Service | `generateToken({...})` |
| Orchestrate workflow | Service | Multiple DAO calls |
| Transform DTO | Service | Convert DB model to API format |
| Execute Prisma query | DAO | `prisma.user.findUnique({...})` |
| Return raw data | DAO | `return user;` |
| Set `is_active: true` | Service | Business decision |
| Log "API request" | Controller | Request/response logs |
| Log "Registration started" | Service | Business event logs |
| Log "Querying user" | DAO | Database operation logs |

---

**Remember:** When in doubt, ask "Is this an HTTP concern? A business rule? Or just data access?" That tells you which layer it belongs to! 🎯
