# Job Management System - Architecture & Data Flow

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         EXPRESS APP                              │
│  (src/app.ts - Configured with CORS, JSON parser, Morgan)       │
└─────────────────────────────────────────────────────────────────┘
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│                      ROUTE AGGREGATOR                            │
│  (src/routes/index.ts - Mounts /api prefix)                     │
└─────────────────────────────────────────────────────────────────┘
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│                      JOB ROUTES                                  │
│  (src/routes/jobs/job.routes.ts - 8 endpoints)                  │
│                                                                  │
│  POST   /api/jobs              - Create job                     │
│  GET    /api/jobs              - Get paginated jobs             │
│  GET    /api/jobs/my-jobs      - Get recruiter's jobs           │
│  GET    /api/jobs/:id          - Get job details                │
│  PATCH  /api/jobs/:id          - Update job                     │
│  DELETE /api/jobs/:id          - Delete job                     │
│  GET    /api/jobs/browse/all   - Filter jobs                    │
│  GET    /api/jobs/search/jobs  - Search jobs                    │
└─────────────────────────────────────────────────────────────────┘
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│                    VALIDATION LAYER (Zod)                       │
│  (src/schemas/job.schema.ts)                                    │
│                                                                  │
│  ✓ Input validation                                             │
│  ✓ Type coercion                                                │
│  ✓ Custom error messages                                        │
│  ✓ Schema enforcement                                           │
└─────────────────────────────────────────────────────────────────┘
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│              AUTHENTICATION & AUTHORIZATION                      │
│  (Middleware - Ready to implement)                              │
│                                                                  │
│  ✓ JWT token verification                                       │
│  ✓ User role checking                                           │
│  ✓ Resource ownership verification                              │
└─────────────────────────────────────────────────────────────────┘
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│               CONTROLLER LAYER (Business Logic)                  │
│  (src/controllers/recruiter/recruiterpost.controller.ts)        │
│                                                                  │
│  - Request processing                                           │
│  - Business rules enforcement                                   │
│  - Error handling                                               │
│  - Response formatting                                          │
└─────────────────────────────────────────────────────────────────┘
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│              REPOSITORY LAYER (Data Access)                      │
│  (src/repositories/job.repository.ts)                           │
│                                                                  │
│  - Database query building                                      │
│  - Query optimization                                           │
│  - Data transformation                                          │
│  - Relation loading                                             │
└─────────────────────────────────────────────────────────────────┘
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│              PRISMA ORM LAYER                                    │
│  (src/config/prisma.ts)                                         │
│                                                                  │
│  - Query compilation                                            │
│  - SQL generation                                               │
│  - Type safety                                                  │
│  - Relation handling                                            │
└─────────────────────────────────────────────────────────────────┘
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│              PostgreSQL DATABASE                                 │
│  (Tables: job_post, job_skills, users, currencies, etc.)       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 Database Schema

```sql
-- Main Job Post Table
CREATE TABLE job_post (
  id BIGINT PRIMARY KEY,
  recruiter_id BIGINT REFERENCES users(id),
  job_title VARCHAR(255),
  description TEXT,
  employment_type ENUM('fulltime', 'parttime', 'internship'),
  job_type ENUM('Remote', 'OnSite', 'Hybrid'),
  salary_min BIGINT,
  salary_max BIGINT,
  currency_id INT REFERENCES currencies(id),
  min_exp BIGINT,
  max_exp BIGINT,
  state_id INT REFERENCES states(id),
  city_id INT REFERENCES cities(id),
  benefits TEXT,
  openings_count INT,
  application_deadline DATE,
  job_status ENUM('Active', 'Deactive'),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Junction Table for Job Skills
CREATE TABLE job_skills (
  job_id BIGINT REFERENCES job_post(id),
  skill_id INT REFERENCES skills(id),
  PRIMARY KEY (job_id, skill_id)
);

-- Related Tables (Pre-existing)
users(id, name, email, role_id, country_id, ...)
skills(id, name, ...)
currencies(id, name, code, symbol)
states(id, country_id, name, ...)
cities(id, state_id, name, ...)
```

---

## 🔄 Data Flow Diagrams

### 1️⃣ CREATE JOB FLOW

```
CLIENT (Recruiter)
       ↓
POST /api/jobs
{title, description, employmentType, jobType, salaryMin, salaryMax, stateId, cityId, skillIds}
       ↓
Validation (Zod Schema)
  - Check all required fields
  - Validate field types
  - Validate enum values
  - Check salary numbers
  - Check skill IDs exist
       ↓
Authentication
  - Verify JWT token
  - Extract recruiterId
       ↓
Controller.createJob()
  - Prepare data
  - Call repository
  - Handle errors
       ↓
Repository.createJob()
  - Build Prisma create query
  - Include nested skillIds
  - Execute transaction
       ↓
Database
  - INSERT into job_post
  - INSERT into job_skills (multiple rows)
       ↓
Response
{
  success: true,
  data: { jobId, title, salaryRange, createdAt }
}
       ↓
CLIENT receives 201 Created
```

### 2️⃣ FILTER JOBS FLOW

```
CLIENT (Any user)
       ↓
GET /api/jobs/browse/all?stateId=1&cityId=5&salaryMin=500000&salaryMax=1500000
       ↓
Validation (Zod)
  - Validate query params
  - Convert strings to numbers
  - Validate enum values
       ↓
Controller.filterJobs()
  - Build filter object
  - Call repository
       ↓
Repository.filterJobs()
  - Create WHERE conditions:
    * state_id = 1
    * city_id = 5
    * salary_max >= 500000
    * salary_min <= 1500000
  - Execute Prisma query with includes
       ↓
Database
  - SELECT * FROM job_post WHERE ...
  - JOIN with job_skills
  - JOIN with recruiter (users)
  - JOIN with currency, state, city
       ↓
Response
{
  success: true,
  data: {
    total: 15,
    jobs: [ ... ]
  }
}
       ↓
CLIENT receives 200 OK with filtered jobs
```

### 3️⃣ UPDATE JOB FLOW

```
CLIENT (Recruiter)
       ↓
PATCH /api/jobs/12345
{title?, description?, salary?, ...}
       ↓
Validation
  - Validate job ID format
  - Validate update fields (all optional)
       ↓
Authentication
  - Extract recruiter ID from token
       ↓
Controller.updateJob()
  - Fetch job by ID
  - Check recruiterId matches
       ↓
Authorization Check
  - Is job.recruiter_id === req.user.id?
  - If NO → Return 403 Forbidden
  - If YES → Proceed
       ↓
Repository.updateJob()
  - Delete old job_skills
  - Update job_post record
  - Insert new job_skills
       ↓
Database
  - DELETE FROM job_skills WHERE job_id = 12345
  - UPDATE job_post SET ... WHERE id = 12345
  - INSERT INTO job_skills ... (if skillIds provided)
       ↓
Response
{
  success: true,
  data: { jobId, title, salaryRange, updatedAt }
}
       ↓
CLIENT receives 200 OK
```

### 4️⃣ DELETE JOB FLOW

```
CLIENT (Recruiter)
       ↓
DELETE /api/jobs/12345
       ↓
Validation
  - Validate job ID format
       ↓
Authentication
  - Extract recruiter ID from token
       ↓
Controller.deleteJob()
  - Fetch job by ID
  - Check recruiterId matches
       ↓
Authorization Check
  - Is job.recruiter_id === req.user.id?
  - If NO → Return 403 Forbidden
  - If YES → Proceed
       ↓
Repository.deleteJob()
  - Delete job_skills records
  - Delete applications records
  - Delete job_post record
       ↓
Database
  - DELETE FROM job_skills WHERE job_id = 12345
  - DELETE FROM applications WHERE job_id = 12345
  - DELETE FROM job_post WHERE id = 12345
       ↓
Response
{
  success: true,
  data: { deletedJobId: 12345 }
}
       ↓
CLIENT receives 200 OK
```

---

## 🔄 REQUEST/RESPONSE CYCLE

### Successful Request

```
Client Request
    ↓
Route Matching ✓
    ↓
Validation ✓
    ↓
Authentication ✓
    ↓
Authorization ✓
    ↓
Business Logic ✓
    ↓
Database Query ✓
    ↓
Response Formatting ✓
    ↓
HTTP 200/201 Response ✓
    ↓
Client Receives Data ✓
```

### Failed Request with Validation Error

```
Client Request with Bad Data
    ↓
Route Matching ✓
    ↓
Validation ✗ (e.g., missing required field)
    ↓
Error Handler catches
    ↓
HTTP 400 Bad Request
{
  success: false,
  message: "Validation error: title is required"
}
    ↓
Client Receives Error
```

### Failed Request with Authorization Error

```
Client Request (Using Another Recruiter's Token)
    ↓
Route Matching ✓
    ↓
Validation ✓
    ↓
Authentication ✓
    ↓
Authorization ✗ (job.recruiter_id !== req.user.id)
    ↓
Error Handler catches
    ↓
HTTP 403 Forbidden
{
  success: false,
  message: "You are not authorized to update this job"
}
    ↓
Client Receives Error
```

---

## 📋 Controller Methods Flow

```
JobController
│
├─ createJob()
│  └─ Extract recruiterId from token
│     └─ Validate request body
│     └─ Call repository.createJob()
│     └─ Return 201 with job ID
│
├─ getMyJobs()
│  └─ Extract recruiterId from token
│     └─ Call repository.getRecruiterJobs()
│     └─ Format and return jobs
│
├─ getJobById()
│  └─ Parse job ID from params
│     └─ Call repository.getJobById()
│     └─ Return full job details
│
├─ updateJob()
│  └─ Extract recruiterId and jobId
│     └─ Fetch job from repository
│     └─ Authorize (check ownership)
│     └─ Call repository.updateJob()
│     └─ Return 200 with updated data
│
├─ deleteJob()
│  └─ Extract recruiterId and jobId
│     └─ Fetch job from repository
│     └─ Authorize (check ownership)
│     └─ Call repository.deleteJob()
│     └─ Return 200 confirmation
│
├─ filterJobs()
│  └─ Parse and validate filters
│     └─ Call repository.filterJobs()
│     └─ Return paginated results
│
├─ searchJobs()
│  └─ Validate search term (min 2 chars)
│     └─ Call repository.searchJobs()
│     └─ Return matching jobs
│
└─ getAllJobs()
   └─ Parse pagination params
      └─ Call repository.filterJobs() (no filters)
      └─ Return paginated results
```

---

## 🗂️ Repository Methods Documentation

```
JobRepository

├─ createJob(recruiterId, jobData)
│  Returns: Full job object with skills
│  Prisma: create() with nested create for skills
│
├─ getJobById(jobId)
│  Returns: Job with relations (recruiter, skills, currency, location)
│  Prisma: findUnique() with include
│
├─ getRecruiterJobs(recruiterId)
│  Returns: Array of jobs for recruiter (sorted by newest)
│  Prisma: findMany() with where clause
│
├─ updateJob(jobId, updateData)
│  Returns: Updated job object
│  Prisma: deleteMany (skills), update, create (skills)
│
├─ deleteJob(jobId)
│  Returns: Deleted job object
│  Prisma: deleteMany (skills), deleteMany (applications), delete
│
├─ filterJobs(filters)
│  Filters: {stateId?, cityId?, salaryMin?, salaryMax?, employmentType?, jobType?, limit?, offset?}
│  Returns: Filtered and paginated jobs
│  Prisma: findMany() with complex WHERE and pagination
│
├─ searchJobs(searchTerm)
│  Returns: Jobs matching title or description
│  Prisma: findMany() with OR conditions and contains
│
└─ getTotalActiveJobs()
   Returns: Count of active jobs
   Prisma: count() with Active status
```

---

## 🔍 Query Examples

### CREATE JOB WITH SKILLS

```typescript
const job = await prisma.jobPost.create({
  data: {
    recruiter_id: 123,
    job_title: "Senior Developer",
    description: "...",
    state_id: 1,
    city_id: 5,
    job_skills: {
      create: [{ skill_id: 1 }, { skill_id: 2 }, { skill_id: 3 }],
    },
  },
  include: {
    job_skills: { include: { skill: true } },
  },
});
```

### FILTER WITH LOCATION & SALARY

```typescript
const jobs = await prisma.jobPost.findMany({
  where: {
    job_status: "Active",
    state_id: 1,
    city_id: 5,
    AND: [{ salary_max: { gte: 500000 } }, { salary_min: { lte: 1500000 } }],
  },
  include: {
    recruiter: true,
    job_skills: { include: { skill: true } },
    currency_rel: true,
    state: true,
    city: true,
  },
  take: 10,
  skip: 0,
});
```

### SEARCH BY TITLE OR DESCRIPTION

```typescript
const jobs = await prisma.jobPost.findMany({
  where: {
    job_status: "Active",
    OR: [
      { job_title: { contains: "developer", mode: "insensitive" } },
      { description: { contains: "developer", mode: "insensitive" } },
    ],
  },
});
```

---

## 📱 Response Structure

### Success Response

```typescript
{
  success: true,
  message: string,           // Human-readable message
  data: {                    // Response-specific data
    // Varies by endpoint
  }
}
```

### Error Response

```typescript
{
  success: false,
  message: string            // Error description
}
```

### Status Codes

```
200 OK              - Successful GET/PATCH
201 Created         - Successful POST
400 Bad Request     - Validation failed
401 Unauthorized    - Auth required but missing
403 Forbidden       - Not authorized to resource
404 Not Found       - Resource doesn't exist
500 Server Error    - Unexpected error
```

---

## 🔐 Authorization Matrix

```
                    | Anonymous | Candidate | Recruiter | Admin
--------------------|-----------|-----------|-----------|--------
POST /api/jobs      |     ✗     |     ✗     |  ✓ Own   |   ✓
GET /api/jobs       |     ✓     |     ✓     |  ✓ All   |   ✓
GET /api/jobs/my    |     ✗     |     ✗     |  ✓ Own   |   ✓
GET /api/jobs/:id   |     ✓     |     ✓     |  ✓ All   |   ✓
PATCH /api/jobs/:id |     ✗     |     ✗     |  ✓ Own   |   ✓
DELETE /api/jobs/:id|     ✗     |     ✗     |  ✓ Own   |   ✓
GET /browse/all     |     ✓     |     ✓     |  ✓       |   ✓
GET /search/jobs    |     ✓     |     ✓     |  ✓       |   ✓
```

**Legend:**

- ✓ = Allowed
- ✗ = Not Allowed
- Own = Can only access own resources
- All = Can access all resources

---

## 🎯 Type Flow

```
Client Input
    ↓
Zod Schema Validation
    ↓
Zod inferred TypeScript Type
    ↓
Controller receives typed data
    ↓
Repository receives typed data
    ↓
Prisma generates SQL
    ↓
Database returns rows
    ↓
Prisma maps to TypeScript models
    ↓
Controller formats response
    ↓
JSON serialization
    ↓
Client receives strongly-typed data
```

---

## 💾 Data Persistence

```
Create Job
    ↓
Validate all inputs ✓
    ↓
Check recruiter exists ✓
    ↓
Check state/city exist ✓
    ↓
Check skills exist ✓
    ↓
BEGIN TRANSACTION
    ↓
INSERT job_post record
    ↓
INSERT job_skills records (1-N)
    ↓
COMMIT TRANSACTION
    ↓
Return created job with inserted data
```

---

## 🚀 Performance Considerations

### Optimized Queries:

- ✓ Eager loading with `include` to prevent N+1
- ✓ Pagination with `take` and `skip`
- ✓ Efficient filters using WHERE conditions
- ✓ Case-insensitive search with proper indexing

### Index Recommendations:

```sql
CREATE INDEX idx_job_recruiter ON job_post(recruiter_id);
CREATE INDEX idx_job_state_city ON job_post(state_id, city_id);
CREATE INDEX idx_job_salary ON job_post(salary_min, salary_max);
CREATE INDEX idx_job_status ON job_post(job_status);
CREATE INDEX idx_job_title ON job_post USING GIN(job_title);
CREATE INDEX idx_job_desc ON job_post USING GIN(description);
```

---

## 🔗 Relationship Diagram

```
         ┌─────────┐
         │  users  │  (Recruiter)
         │         │
         └────┬────┘
              │ recruiter_id (1:N)
              │
         ┌────▼────────────┐
         │   job_post      │
         │                 │
         │ • job_title     │
         │ • description   │
         │ • salary_min    │
         │ • salary_max    │
         │ • state_id      │
         │ • city_id       │
         └────┬────┬───────┘
              │    │
      ┌───────┘    └──────────┐
      │ (M:N)      (1:N)      │
      │                       │
   ┌──▼──────────┐     ┌──────▼──┐
   │ job_skills  │     │ cities   │
   ├─────────────┤     │          │
   │ job_id (FK) │     └──────────┘
   │ skill_id(FK)│
   └──┬──────────┘
      │ skill_id (M:1)
      │
   ┌──▼───────┐
   │  skills  │
   │          │
   └──────────┘

Also related to:
- currencies (salary currency)
- states (job location state)
- applications (job applications)
```

---

## 🧪 Testing Strategy

```
Unit Tests (Schemas)
    └─ Zod validation for each schema
    └─ Test valid inputs pass
    └─ Test invalid inputs fail
    └─ Test error messages

Integration Tests (Repository)
    └─ Test database operations
    └─ Test record creation
    └─ Test filtering logic
    └─ Test cascade deletes

E2E Tests (API Endpoints)
    └─ Test full request/response cycle
    └─ Test authorization
    └─ Test error scenarios
    └─ Test complex queries
```

---

This architecture provides:

- **Type Safety** with TypeScript + Zod
- **Security** with authorization checks
- **Maintainability** with clean separation of concerns
- **Scalability** with optimized queries
- **Testability** with layered structure
- **Documentation** with clear code comments
