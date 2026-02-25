# 📝 TODO - Implementation Roadmap

**Project:** Hiring Platform  
**Status:** Phase 1 - Authentication Setup  
**Last Updated:** February 25, 2026

---

## ✅ Completed

### Infrastructure Setup
- [x] Project structure created
- [x] TypeScript configured
- [x] PostgreSQL database connected
- [x] Prisma 7 setup with adapter pattern
- [x] Database schema defined (13 tables)
- [x] Migrations created and applied
- [x] Seed data loaded
- [x] Centralized Prisma client (`src/config/prisma.ts`)
- [x] Environment variables configured
- [x] ESLint 10 configured
- [x] Zod validation setup
- [x] All schemas created (auth, job, application, common)
- [x] Validation middleware (`validate.middleware.ts`)
- [x] Example controller and routes created

### Documentation
- [x] PROJECT_REQUIREMENTS.md - Complete PRD
- [x] QUICK_REFERENCE.md - Quick feature list
- [x] README.md - Project overview
- [x] ZOD_README.md - Zod overview
- [x] ZOD_GUIDE.md - Complete Zod guide
- [x] ZOD_SETUP_SUMMARY.md - Quick Zod reference
- [x] COMPLETE_EXAMPLE.ts - Working example
- [x] ESLINT_GUIDE.md - ESLint guide
- [x] .gitignore properly configured

---

## 🚧 Phase 1: Authentication (In Progress)

### 1.1 Auth Middleware (Priority: High)
- [ ] Create `src/middlewares/auth.middleware.ts`
  - [ ] Extract JWT token from Authorization header
  - [ ] Verify token with jwt.verify()
  - [ ] Decode user info (userId, email, role)
  - [ ] Attach to req.user
  - [ ] Handle expired tokens
  - [ ] Handle invalid tokens

### 1.2 Role Middleware (Priority: High)
- [ ] Update `src/middlewares/role.middleware.ts`
  - [ ] Check if user has required role
  - [ ] Support multiple roles (e.g., ['CANDIDATE', 'ADMIN'])
  - [ ] Return 403 if unauthorized

### 1.3 JWT Utilities (Priority: High)
- [ ] Update `src/utils/jwt.ts`
  - [ ] `generateToken(payload)` - Create JWT
  - [ ] `verifyToken(token)` - Verify JWT
  - [ ] Use JWT_SECRET from env
  - [ ] Set expiry to 24h

### 1.4 Password Utilities (Priority: High)
- [ ] Update `src/utils/password.ts`
  - [ ] `hashPassword(password)` - Hash with bcrypt
  - [ ] `comparePassword(plain, hashed)` - Verify password
  - [ ] Use salt rounds = 10

### 1.5 Auth Service (Priority: High)
- [ ] Create `src/services/auth.service.ts`
  - [ ] `register(data)` - Create user with hashed password
  - [ ] `login(email, password)` - Validate credentials
  - [ ] Return user without password

### 1.6 Auth Controller (Priority: High)
- [ ] Create `src/controllers/auth/auth.controller.ts`
  - [ ] `register(req, res)` - Handle registration
  - [ ] `login(req, res)` - Handle login
  - [ ] Use auth service
  - [ ] Return consistent response format

### 1.7 Auth Routes (Priority: High)
- [ ] Update `src/routes/auth/auth.routes.ts`
  - [ ] POST /register with `validate(registerSchema)`
  - [ ] POST /login with `validate(loginSchema)`
  - [ ] Wire to auth controller
  - [ ] Export router

### 1.8 Main Routes (Priority: High)
- [ ] Update `src/routes/index.ts`
  - [ ] Import auth routes
  - [ ] Mount at `/api/auth`
  - [ ] Export main router

### 1.9 App Integration (Priority: High)
- [ ] Update `src/app.ts`
  - [ ] Import main router
  - [ ] Mount at `/api`
  - [ ] Add error handling middleware

### 1.10 Testing (Priority: High)
- [ ] Test register endpoint
  - [ ] Valid registration (Candidate)
  - [ ] Valid registration (Recruiter)
  - [ ] Duplicate email error
  - [ ] Invalid email format
  - [ ] Weak password error
- [ ] Test login endpoint
  - [ ] Valid credentials
  - [ ] Invalid email
  - [ ] Invalid password
  - [ ] Returns JWT token

---

## 🎯 Phase 2: Recruiter Features

### 2.1 Job Service (Priority: Medium)
- [ ] Create `src/services/job.service.ts`
  - [ ] `createJob(recruiterId, data)` - Create job post
  - [ ] `getRecruiterJobs(recruiterId, pagination)` - Get own jobs
  - [ ] `deleteJob(jobId, recruiterId)` - Delete own job
  - [ ] Include relations (skills, location, applications count)

### 2.2 Job Controller (Priority: Medium)
- [ ] Create `src/controllers/recruiter/job.controller.ts`
  - [ ] `createJob(req, res)` - Create job
  - [ ] `getMyJobs(req, res)` - Get own jobs
  - [ ] `deleteJob(req, res)` - Delete job
  - [ ] Check authorization (can only delete own jobs)

### 2.3 Job Routes (Priority: Medium)
- [ ] Create `src/routes/job/job.routes.ts`
  - [ ] POST /jobs - validate(createJobSchema), auth, role(['RECRUITER'])
  - [ ] GET /jobs/my-jobs - auth, role(['RECRUITER'])
  - [ ] DELETE /jobs/:id - validate(getJobByIdSchema), auth, role(['RECRUITER'])

### 2.4 Testing (Priority: Medium)
- [ ] Test create job
  - [ ] Valid job creation
  - [ ] Missing required fields
  - [ ] Invalid salary range
  - [ ] Non-existent location/skills
  - [ ] Candidate trying to post (should fail)
- [ ] Test view own jobs
  - [ ] Returns only recruiter's jobs
  - [ ] Pagination works
  - [ ] Includes job details
- [ ] Test delete job
  - [ ] Can delete own job
  - [ ] Cannot delete other's job
  - [ ] Job not found error

---

## 🎯 Phase 3: Candidate Features

### 3.1 Application Service (Priority: Medium)
- [ ] Create `src/services/application.service.ts`
  - [ ] `getAllJobs(filters, pagination)` - Get all active jobs
  - [ ] `applyForJob(candidateId, jobId, resumeLink)` - Create application
  - [ ] `checkDuplicate(candidateId, jobId)` - Check if already applied
  - [ ] `getCandidateApplications(candidateId, pagination)` - Get applications

### 3.2 Application Controller (Priority: Medium)
- [ ] Create `src/controllers/candidate/application.controller.ts`
  - [ ] `getAllJobs(req, res)` - View all jobs
  - [ ] `applyForJob(req, res)` - Apply for job
  - [ ] `getMyApplications(req, res)` - View applications

### 3.3 Job Routes (Candidate) (Priority: Medium)
- [ ] Update `src/routes/job/job.routes.ts`
  - [ ] GET /jobs - auth, role(['CANDIDATE'])
  - [ ] Support filters (location, salary)
  - [ ] Support pagination

### 3.4 Application Routes (Priority: Medium)
- [ ] Create `src/routes/application/application.routes.ts`
  - [ ] POST /applications - validate(createApplicationSchema), auth, role(['CANDIDATE'])
  - [ ] GET /applications/my-applications - auth, role(['CANDIDATE'])

### 3.5 Testing (Priority: Medium)
- [ ] Test view all jobs
  - [ ] Returns all active jobs
  - [ ] Pagination works
  - [ ] Shows if candidate already applied
  - [ ] Recruiter cannot access (should fail)
- [ ] Test apply for job
  - [ ] Valid application
  - [ ] Duplicate application (should fail)
  - [ ] Invalid resume link
  - [ ] Non-existent job
  - [ ] Recruiter trying to apply (should fail)
- [ ] Test view applications
  - [ ] Returns only candidate's applications
  - [ ] Includes job details
  - [ ] Shows application status

---

## 🎁 Phase 4: Filters (Bonus)

### 4.1 Location Filter (Priority: Low)
- [ ] Add `locationId` query parameter to GET /jobs
- [ ] Filter jobs by location in service
- [ ] Test location filter

### 4.2 Salary Filter (Priority: Low)
- [ ] Add `salaryMin` and `salaryMax` query parameters
- [ ] Filter jobs by salary range in service
- [ ] Handle null salary values
- [ ] Test salary filter

### 4.3 Combined Filters (Priority: Low)
- [ ] Support multiple filters together
- [ ] Add jobType filter
- [ ] Add experienceLevel filter
- [ ] Add skills filter
- [ ] Test combined filters

---

## 🚀 Phase 5: Additional Features (Future)

### 5.1 Recruiter - View Applications
- [ ] GET /applications/job/:jobId
- [ ] Show all applications for recruiter's job
- [ ] Filter by status
- [ ] Pagination

### 5.2 Recruiter - Update Application Status
- [ ] PUT /applications/:id/status
- [ ] Change status (UNDER_REVIEW, SHORTLISTED, REJECTED, ACCEPTED)
- [ ] Only for own job's applications
- [ ] Send email notification to candidate

### 5.3 Job Post Status Management
- [ ] Add status updates (DRAFT, PUBLISHED, CLOSED)
- [ ] PUT /jobs/:id/status
- [ ] Cannot apply to closed jobs
- [ ] Auto-close after certain period

### 5.4 User Profile Management
- [ ] GET /profile - View own profile
- [ ] PUT /profile - Update profile
- [ ] Different fields for Candidate vs Recruiter
- [ ] Upload profile picture

### 5.5 Email Notifications
- [ ] Welcome email on registration
- [ ] Application confirmation email
- [ ] Status update notifications
- [ ] New job alerts for candidates

### 5.6 Resume File Upload
- [ ] Replace resume link with file upload
- [ ] Use multer for file handling
- [ ] Store in cloud (AWS S3 / Cloudinary)
- [ ] Validate file type (PDF only)
- [ ] Limit file size (5MB)

### 5.7 Admin Panel
- [ ] Admin role and permissions
- [ ] View all users
- [ ] View all jobs
- [ ] View all applications
- [ ] Suspend users
- [ ] Delete inappropriate jobs

---

## 🐛 Bug Fixes Needed

### Current Issues
- [ ] Fix ESLint warning: 'adminRole' unused in seed.ts (line 19)
- [ ] Fix ESLint warning: 'any' type in seed.ts (line 208)
- [ ] Fix ESLint warning: 'any' type in app.ts (line 48)
- [ ] Fix ESLint warning: 'next' unused in app.ts (line 51)
- [ ] Fix ESLint warnings in auth.controller.example.ts (unused vars)

### Improvements
- [ ] Remove `.example.ts` suffix from files once implemented
- [ ] Add input sanitization
- [ ] Add rate limiting
- [ ] Add request logging
- [ ] Add response compression
- [ ] Add CORS configuration
- [ ] Add helmet for security headers

---

## 📊 Progress Tracking

### Overall Progress
```
Phase 1: Authentication        [▓▓▓░░░░░░░] 30%
Phase 2: Recruiter Features    [░░░░░░░░░░] 0%
Phase 3: Candidate Features    [░░░░░░░░░░] 0%
Phase 4: Filters (Bonus)       [░░░░░░░░░░] 0%
Phase 5: Future Features       [░░░░░░░░░░] 0%
```

### Estimated Time
- Phase 1: 1-2 days
- Phase 2: 1 day
- Phase 3: 1-2 days
- Phase 4: 0.5 day
- **Total MVP:** 4-6 days

---

## 🎯 Next Immediate Tasks (Priority Order)

1. **Implement JWT utilities** (`src/utils/jwt.ts`)
2. **Implement password utilities** (`src/utils/password.ts`)
3. **Create auth middleware** (`src/middlewares/auth.middleware.ts`)
4. **Update role middleware** (`src/middlewares/role.middleware.ts`)
5. **Create auth service** (`src/services/auth.service.ts`)
6. **Create auth controller** (copy from example, implement logic)
7. **Setup auth routes** (copy from example, wire everything)
8. **Test registration and login** (use Postman/curl)

---

## 📝 Notes

- All schemas are ready (Zod validation complete)
- Database is setup and seeded
- Middleware structure is in place
- Focus on one phase at a time
- Test each endpoint before moving forward
- Update this TODO as you complete tasks
- Mark items complete with [x]

---

## 🔍 References

- **Full Requirements:** docs/PROJECT_REQUIREMENTS.md
- **Quick Reference:** docs/QUICK_REFERENCE.md
- **Validation Guide:** docs/ZOD_README.md
- **Project Structure:** README.md (project root)

---

**Start with Phase 1, Task 1.1 - Auth Middleware** 🚀

**Last Updated:** February 25, 2026
