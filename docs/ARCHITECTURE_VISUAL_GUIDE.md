# 3-Layer Architecture: Visual Flow Diagram

## 🎯 Your Perfect Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         HTTP REQUEST                            │
│            POST /api/auth/register                              │
│            { name, email, password, role_name }                 │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  LAYER 1: CONTROLLER (HTTP Handler)                          ┃
┃  File: src/controllers/auth/auth.controller.ts               ┃
┃                                                               ┃
┃  const register = async (req, res) => {                      ┃
┃    logger.info(`[REGISTER] API request received`);           ┃
┃                                                               ┃
┃    // 1. Extract HTTP data                                   ┃
┃    const { name, email, password, role_name } = req.body;    ┃
┃                                                               ┃
┃    // 2. Call service layer                                  ┃
┃    const result = await authService.register({               ┃
┃      name, email, password, role_name                        ┃
┃    });                                                        ┃
┃                                                               ┃
┃    // 3. Send HTTP response                                  ┃
┃    logger.info(`[REGISTER] API response sent`);              ┃
┃    sendResponse(res, {                                        ┃
┃      statusCode: 201,                                         ┃
┃      message: "User registered successfully",                ┃
┃      data: result                                             ┃
┃    });                                                        ┃
┃  };                                                           ┃
┃                                                               ┃
┃  ✅ Responsibilities:                                         ┃
┃     • Extract req.body                                        ┃
┃     • Call service                                            ┃
┃     • Send response                                           ┃
┃     • Log API events                                          ┃
┃                                                               ┃
┃  ❌ Does NOT:                                                 ┃
┃     • Check business rules                                    ┃
┃     • Query database                                          ┃
┃     • Transform data                                          ┃
┃     • Hash passwords                                          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                            │
                            ▼
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  LAYER 2: SERVICE (Business Logic)                           ┃
┃  File: src/services/auth/auth.service.ts                     ┃
┃                                                               ┃
┃  const register = async (input) => {                         ┃
┃    logger.info(`Registration started`, { email, role });     ┃
┃                                                               ┃
┃    // 1. Business Rule: Check email uniqueness               ┃
┃    const emailExists = await authRepository.emailExists(     ┃
┃      input.email                                              ┃
┃    );                                                         ┃
┃    if (emailExists) {                                         ┃
┃      throw new Error("Email already registered");            ┃
┃    }                                                          ┃
┃                                                               ┃
┃    // 2. Business Rule: Validate role                        ┃
┃    const role = await authRepository.findRoleByName(         ┃
┃      input.role_name                                          ┃
┃    );                                                         ┃
┃    if (!role) {                                               ┃
┃      throw new Error("Role not found");                      ┃
┃    }                                                          ┃
┃                                                               ┃
┃    // 3. Business Logic: Hash password                       ┃
┃    const hashedPassword = await hashPassword(                ┃
┃      input.password                                           ┃
┃    );                                                         ┃
┃                                                               ┃
┃    // 4. Business Decision: New users are active             ┃
┃    const user = await authRepository.createUser({            ┃
┃      name: input.name,                                        ┃
┃      email: input.email,                                      ┃
┃      password: hashedPassword,                                ┃
┃      country_id: input.country_id,                            ┃
┃      role_id: role.id,                                        ┃
┃      is_active: true  // ✅ Business decision here            ┃
┃    });                                                        ┃
┃                                                               ┃
┃    // 5. Business Workflow: Create profile by role           ┃
┃    if (role.role_name === "candidate") {                     ┃
┃      await authRepository.upsertCandidateProfile(user.id);   ┃
┃    } else if (role.role_name === "recruiter") {              ┃
┃      await authRepository.upsertRecruiterProfile(user.id);   ┃
┃    }                                                          ┃
┃                                                               ┃
┃    // 6. Business Logic: Generate token                      ┃
┃    const token = generateToken({                             ┃
┃      userId: Number(user.id),                                 ┃
┃      email: user.email,                                       ┃
┃      role: user.role.role_name                                ┃
┃    });                                                        ┃
┃                                                               ┃
┃    logger.info(`Registration completed`, { userId });        ┃
┃                                                               ┃
┃    // 7. Transform for API (DTO)                             ┃
┃    return {                                                   ┃
┃      user: {                                                  ┃
┃        id: Number(user.id),                                   ┃
┃        name: user.name || "",                                 ┃
┃        email: user.email,                                     ┃
┃        role: user.role.role_name                              ┃
┃      },                                                       ┃
┃      token                                                    ┃
┃    };                                                         ┃
┃  };                                                           ┃
┃                                                               ┃
┃  ✅ Responsibilities:                                         ┃
┃     • Validate business rules (email exists, role valid)     ┃
┃     • Orchestrate workflow (multiple DAO calls)              ┃
┃     • Make business decisions (is_active: true)              ┃
┃     • Hash passwords                                          ┃
┃     • Generate tokens                                         ┃
┃     • Transform data (DTO)                                    ┃
┃     • Log business events                                     ┃
┃                                                               ┃
┃  ❌ Does NOT:                                                 ┃
┃     • Access req/res                                          ┃
┃     • Direct Prisma queries                                   ┃
┃     • Send HTTP responses                                     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                            │
                            ▼
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  LAYER 3: DAO (Database Access)                              ┃
┃  File: src/repositories/auth.repository.ts                   ┃
┃                                                               ┃
┃  // Function 1: Check email exists                           ┃
┃  const emailExists = async (email: string) => {              ┃
┃    try {                                                      ┃
┃      logger.info(`Checking email exists: ${email}`);         ┃
┃      const user = await prisma.user.findUnique({             ┃
┃        where: { email }                                       ┃
┃      });                                                      ┃
┃      logger.info(`Email ${user ? "exists" : "available"}`);  ┃
┃      return !!user;  // Return raw boolean                   ┃
┃    } catch (error) {                                          ┃
┃      logger.error(`Failed to check email`, { error });       ┃
┃      throw error;                                             ┃
┃    }                                                          ┃
┃  };                                                           ┃
┃                                                               ┃
┃  // Function 2: Find role by name                            ┃
┃  const findRoleByName = async (role_name: string) => {       ┃
┃    try {                                                      ┃
┃      logger.info(`Querying role: ${role_name}`);             ┃
┃      const role = await prisma.role.findUnique({             ┃
┃        where: { role_name }                                   ┃
┃      });                                                      ┃
┃      logger.info(`Role ${role ? "found" : "not found"}`);    ┃
┃      return role;  // Return raw data                        ┃
┃    } catch (error) {                                          ┃
┃      logger.error(`Failed to find role`, { error });         ┃
┃      throw error;                                             ┃
┃    }                                                          ┃
┃  };                                                           ┃
┃                                                               ┃
┃  // Function 3: Create user                                  ┃
┃  export interface CreateUserData {                           ┃
┃    name: string;                                              ┃
┃    email: string;                                             ┃
┃    password: string;  // Already hashed by service           ┃
┃    phone_number?: string;                                     ┃
┃    country_id: number;                                        ┃
┃    role_id: number;                                           ┃
┃    is_active: boolean;  // ✅ Service provides this          ┃
┃  }                                                            ┃
┃                                                               ┃
┃  const createUser = async (data: CreateUserData) => {        ┃
┃    try {                                                      ┃
┃      logger.info(`Creating user: ${data.email}`);            ┃
┃      const user = await prisma.user.create({                 ┃
┃        data: {                                                ┃
┃          name: data.name,                                     ┃
┃          email: data.email,                                   ┃
┃          password: data.password,                             ┃
┃          phone_number: data.phone_number,                     ┃
┃          country_id: data.country_id,                         ┃
┃          role_id: data.role_id,                               ┃
┃          is_active: data.is_active  // ✅ Use service value   ┃
┃        },                                                     ┃
┃        include: { role: true }                                ┃
┃      });                                                      ┃
┃      logger.info(`User created: ${data.email}`);             ┃
┃      return user;  // Return raw database result             ┃
┃    } catch (error) {                                          ┃
┃      logger.error(`Failed to create user`, { error });       ┃
┃      throw error;                                             ┃
┃    }                                                          ┃
┃  };                                                           ┃
┃                                                               ┃
┃  // Function 4: Create candidate profile                     ┃
┃  const upsertCandidateProfile = async (userId: number) => {  ┃
┃    try {                                                      ┃
┃      logger.info(`Creating candidate profile: ${userId}`);   ┃
┃      const profile = await prisma.candidateProfile.upsert({  ┃
┃        where: { user_id: userId },                            ┃
┃        update: {},                                            ┃
┃        create: { user_id: userId }                            ┃
┃      });                                                      ┃
┃      logger.info(`Candidate profile created: ${userId}`);    ┃
┃      return profile;                                          ┃
┃    } catch (error) {                                          ┃
┃      logger.error(`Failed to create profile`, { error });    ┃
┃      throw error;                                             ┃
┃    }                                                          ┃
┃  };                                                           ┃
┃                                                               ┃
┃  ✅ Responsibilities:                                         ┃
┃     • Execute Prisma queries                                  ┃
┃     • Return raw database data                                ┃
┃     • Log database operations                                 ┃
┃     • Handle database errors                                  ┃
┃                                                               ┃
┃  ❌ Does NOT:                                                 ┃
┃     • Validate business rules                                 ┃
┃     • Transform data                                           ┃
┃     • Set business defaults (like is_active: true)           ┃
┃     • Hash passwords                                           ┃
┃     • Make decisions                                           ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                            │
                            ▼
                    DATABASE (PostgreSQL)
                    Table: users
                    ┌────────────────────┐
                    │ id                 │
                    │ name               │
                    │ email              │
                    │ password (hashed)  │
                    │ is_active: true    │
                    │ role_id            │
                    └────────────────────┘

```

## 🔄 Complete Flow Example

### User Registration Flow:

```
1. HTTP Request arrives
   └─> POST /api/auth/register
       Body: { name, email, password, role_name }

2. CONTROLLER receives request
   └─> Extracts req.body
   └─> Calls authService.register(data)
   └─> Waits for result...

3. SERVICE starts business logic
   └─> Calls authRepository.emailExists(email)
       └─> DAO queries: SELECT * FROM users WHERE email = ?
       └─> Returns: false (email available)
   
   └─> Calls authRepository.findRoleByName(role_name)
       └─> DAO queries: SELECT * FROM roles WHERE role_name = ?
       └─> Returns: { id: 2, role_name: "candidate" }
   
   └─> Hashes password: bcrypt.hash(password)
   
   └─> Decides: is_active = true (business rule)
   
   └─> Calls authRepository.createUser({...data, is_active: true})
       └─> DAO queries: INSERT INTO users (name, email, password, is_active, role_id)
       └─> Returns: User object with role
   
   └─> Checks role and calls authRepository.upsertCandidateProfile(userId)
       └─> DAO queries: INSERT INTO candidate_profiles (user_id)
       └─> Returns: Profile object
   
   └─> Generates JWT token
   
   └─> Transforms data to DTO:
       {
         user: { id, name, email, role },
         token
       }
   
   └─> Returns to controller

4. CONTROLLER receives result
   └─> Calls sendResponse(res, { statusCode: 201, data: result })
   └─> Sends HTTP response

5. HTTP Response sent
   └─> Status: 201 Created
       Body: {
         success: true,
         message: "User registered successfully",
         data: {
           user: { id, name, email, role },
           token: "eyJhbGc..."
         }
       }
```

## 🎯 Key Takeaways

### Controller
```
HTTP → Extract → Call Service → Send Response
```

### Service
```
Business Rules → Orchestrate → Transform → Return DTO
```

### DAO
```
Database Query → Return Raw Data
```

---

## ✅ What Makes This Architecture Good?

1. **Separation of Concerns**
   - Each layer has ONE job
   - No mixing of responsibilities

2. **Testability**
   - Mock DAO to test Service
   - Mock Service to test Controller
   - Easy unit testing

3. **Maintainability**
   - Change business logic? → Only edit Service
   - Change database? → Only edit DAO
   - Change API format? → Only edit Controller

4. **Reusability**
   - Service can be used by multiple controllers
   - DAO can be used by multiple services
   - No duplication

5. **Single Responsibility**
   - Controller = HTTP
   - Service = Business
   - DAO = Database

---

## 🚀 Your Code Follows This Pattern Perfectly!

**Congratulations!** 🎉

Your implementation demonstrates excellent understanding of clean architecture principles.
