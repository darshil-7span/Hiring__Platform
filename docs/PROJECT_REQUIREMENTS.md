# 📋 Hiring Platform - Project Requirements Document (PRD)

**Project Name:** Hiring Platform  
**Version:** 1.0.0  
**Last Updated:** February 25, 2026  
**Status:** In Development  

---

## 🎯 Project Overview

A job hiring platform that connects **Recruiters** (who post jobs) with **Candidates** (who apply for jobs). The platform includes authentication, job management, application tracking, and filtering capabilities.

---

## 👥 User Roles

### 1. Candidate
- Can register and login
- Can view all available jobs
- Can apply for jobs
- Can view their application history
- Cannot post jobs

### 2. Recruiter
- Can register and login
- Can post new jobs
- Can view their own posted jobs
- Can delete their own jobs
- Cannot apply for jobs

---

## ✅ Must-Have Features (Core Requirements)

### 1. Authentication 🔐

#### 1.1 User Registration
- **Endpoint:** `POST /api/auth/register`
- **Fields Required:**
  - Email (unique, validated)
  - Password (min 8 characters, hashed)
  - First Name
  - Last Name
  - Role Selection (Candidate or Recruiter)
- **Validation:**
  - Email must be valid format
  - Email must be unique
  - Password must meet security requirements
  - Role must be either "CANDIDATE" or "RECRUITER"
- **Response:**
  - Success: User created, return user details (no password)
  - Error: Validation errors or duplicate email

#### 1.2 User Login
- **Endpoint:** `POST /api/auth/login`
- **Fields Required:**
  - Email
  - Password
- **Authentication:**
  - JWT token-based authentication
  - Token expires in 24 hours (configurable)
  - Token contains: userId, email, role
- **Response:**
  - Success: Return JWT token + user details
  - Error: Invalid credentials

#### 1.3 Authentication Middleware
- **Purpose:** Protect routes that require login
- **Implementation:** Verify JWT token in Authorization header
- **Usage:** Apply to all protected routes

---

### 2. Recruiter Features 💼

#### 2.1 Post Job
- **Endpoint:** `POST /api/jobs`
- **Access:** Recruiters only (protected route)
- **Fields Required:**
  - Title (string, min 3 characters)
  - Description (string, min 10 characters)
  - Job Type (FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP)
  - Experience Level (ENTRY, MID, SENIOR, LEAD)
  - Salary Min (number, optional)
  - Salary Max (number, optional)
  - Currency ID (reference to Currency table)
  - Location ID (reference to City table)
  - Skill IDs (array of skill IDs)
- **Validation:**
  - All required fields present
  - Salary min < salary max (if both provided)
  - Location and skills exist in database
- **Response:**
  - Success: Job created with ID
  - Error: Validation errors

#### 2.2 View Own Posted Jobs
- **Endpoint:** `GET /api/jobs/my-jobs`
- **Access:** Recruiters only (protected route)
- **Query Parameters:**
  - page (default: 1)
  - limit (default: 10)
  - sortBy (default: createdAt)
  - sortOrder (asc/desc, default: desc)
- **Response:**
  - List of jobs posted by logged-in recruiter
  - Include: job details, skills, location, application count
  - Pagination metadata (total, pages, current page)

#### 2.3 Delete Job
- **Endpoint:** `DELETE /api/jobs/:id`
- **Access:** Recruiters only (protected route)
- **Authorization:** Can only delete their own jobs
- **Validation:**
  - Job exists
  - Job belongs to logged-in recruiter
- **Behavior:**
  - Delete job post
  - Associated applications remain (with note that job was deleted)
- **Response:**
  - Success: Job deleted confirmation
  - Error: Not found or unauthorized

---

### 3. Candidate Features 👨‍💼

#### 3.1 View All Jobs
- **Endpoint:** `GET /api/jobs`
- **Access:** Candidates only (protected route)
- **Query Parameters:**
  - page (default: 1)
  - limit (default: 10)
  - sortBy (default: createdAt)
  - sortOrder (asc/desc, default: desc)
- **Response:**
  - List of all active/published jobs
  - Include: job details, company info, skills, location, salary
  - Show if candidate has already applied
  - Pagination metadata

#### 3.2 Apply for Job
- **Endpoint:** `POST /api/applications`
- **Access:** Candidates only (protected route)
- **Fields Required:**
  - Job Post ID (number)
  - Resume Link (string URL)
  - Cover Letter (string, optional)
- **Validation:**
  - Job exists and is active
  - Resume link is valid URL format
  - Candidate has not already applied (duplicate prevention)
- **Duplicate Prevention:**
  - Check if application exists for this candidate + job combination
  - Return error if already applied
- **Response:**
  - Success: Application submitted with ID
  - Error: Duplicate application or validation errors

#### 3.3 View Applied Jobs
- **Endpoint:** `GET /api/applications/my-applications`
- **Access:** Candidates only (protected route)
- **Query Parameters:**
  - page (default: 1)
  - limit (default: 10)
  - status (filter by APPLIED, UNDER_REVIEW, SHORTLISTED, REJECTED, ACCEPTED)
- **Response:**
  - List of all applications by logged-in candidate
  - Include: job details, application status, applied date
  - Pagination metadata

---

### 4. Application Logic 📝

#### 4.1 Duplicate Application Prevention
- **Rule:** One candidate can apply to the same job only once
- **Implementation:**
  - Before creating application, check:
    - `SELECT * FROM Application WHERE candidateId = ? AND jobPostId = ?`
  - If exists, return error: "You have already applied to this job"
- **Database Constraint:**
  - Unique constraint on (candidateId, jobPostId) combination

#### 4.2 Resume Storage
- **Field:** Resume Link (string)
- **Type:** URL string (not file upload)
- **Validation:** Must be valid URL format
- **Examples:**
  - "https://drive.google.com/file/d/xyz/view"
  - "https://dropbox.com/s/abc/resume.pdf"
  - "https://linkedin.com/in/username"
- **Note:** File upload can be added later if needed

#### 4.3 Application Status
- **Statuses:**
  - `APPLIED` - Initial status when candidate applies
  - `UNDER_REVIEW` - Recruiter is reviewing
  - `SHORTLISTED` - Candidate passed initial screening
  - `REJECTED` - Application rejected
  - `ACCEPTED` - Job offer extended
- **Status Changes:**
  - Candidate cannot change status
  - Recruiter can update status (future feature)

---

## 🎁 Optional Bonus Features

### 5. Job Filters 🔍

#### 5.1 Filter by Location
- **Endpoint:** `GET /api/jobs?locationId=1`
- **Implementation:**
  - Add `locationId` query parameter
  - Filter jobs where job.locationId matches
- **Response:**
  - Jobs filtered by specified location
  - Include location name in response

#### 5.2 Filter by Salary Range
- **Endpoint:** `GET /api/jobs?salaryMin=50000&salaryMax=100000`
- **Implementation:**
  - Add `salaryMin` and `salaryMax` query parameters
  - Filter jobs where:
    - `job.salaryMin >= salaryMin` AND
    - `job.salaryMax <= salaryMax`
  - Handle cases where salary is not specified
- **Response:**
  - Jobs within specified salary range
  - Include salary details in response

#### 5.3 Combined Filters
- **Endpoint:** `GET /api/jobs?locationId=1&salaryMin=50000&salaryMax=100000&jobType=FULL_TIME`
- **Implementation:**
  - Support multiple filters simultaneously
  - Filters are additive (AND condition)
- **Additional Filters (Future):**
  - Job Type (FULL_TIME, PART_TIME, etc.)
  - Experience Level (ENTRY, MID, SENIOR, LEAD)
  - Skills (filter by required skills)

---

## 🔒 Authorization Rules

### Role-Based Access Control

| Feature | Candidate | Recruiter | Public |
|---------|-----------|-----------|--------|
| Register | ✅ | ✅ | ✅ |
| Login | ✅ | ✅ | ✅ |
| View All Jobs | ✅ | ❌ | ❌ |
| Apply for Job | ✅ | ❌ | ❌ |
| View My Applications | ✅ | ❌ | ❌ |
| Post Job | ❌ | ✅ | ❌ |
| View My Jobs | ❌ | ✅ | ❌ |
| Delete Job | ❌ | ✅ (own only) | ❌ |

---

## 📊 Database Schema (Reference)

### Key Tables
- **User** - Stores all users (candidates + recruiters)
- **Role** - CANDIDATE, RECRUITER, ADMIN
- **CandidateProfile** - Extended info for candidates
- **RecruiterProfile** - Extended info for recruiters
- **JobPost** - Job listings
- **Application** - Job applications
- **Skill** - Skills catalog
- **JobSkill** - Skills required for each job
- **Currency** - Currency types (USD, EUR, etc.)
- **Country/State/City** - Location hierarchy

### Key Relationships
- User → Role (many-to-one)
- User → CandidateProfile (one-to-one)
- User → RecruiterProfile (one-to-one)
- Recruiter → JobPost (one-to-many)
- Candidate → Application (one-to-many)
- JobPost → Application (one-to-many)
- JobPost → JobSkill → Skill (many-to-many)

---

## 🛣️ API Endpoints Summary

### Authentication
```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - Login user
```

### Jobs (Candidate)
```
GET    /api/jobs               - View all jobs (with filters)
GET    /api/jobs/:id           - View job details
```

### Jobs (Recruiter)
```
POST   /api/jobs               - Create new job
GET    /api/jobs/my-jobs       - View own jobs
PUT    /api/jobs/:id           - Update job (future)
DELETE /api/jobs/:id           - Delete job
```

### Applications (Candidate)
```
POST   /api/applications       - Apply for job
GET    /api/applications/my-applications  - View my applications
```

### Applications (Recruiter - Future)
```
GET    /api/applications/job/:jobId       - View applications for job
PUT    /api/applications/:id/status       - Update application status
```

---

## ✅ Validation Rules Summary

### Registration
- ✅ Email: Valid format, unique
- ✅ Password: Min 8 chars, 1 uppercase, 1 lowercase, 1 number
- ✅ First/Last Name: Required, min 1 character
- ✅ Role: Must be CANDIDATE or RECRUITER

### Job Post
- ✅ Title: Required, min 3 characters
- ✅ Description: Required, min 10 characters
- ✅ Job Type: Must be valid enum value
- ✅ Experience Level: Must be valid enum value
- ✅ Salary: Min < Max (if both provided)
- ✅ Skills: At least 1 skill required

### Application
- ✅ Job Post ID: Must exist and be active
- ✅ Resume Link: Valid URL format
- ✅ Duplicate: Cannot apply to same job twice
- ✅ Cover Letter: Optional

---

## 🚀 Implementation Checklist

### Phase 1: Authentication ✅
- [x] User registration endpoint
- [x] User login endpoint
- [x] JWT token generation
- [x] Auth middleware
- [x] Role middleware
- [ ] Password hashing (bcrypt)
- [ ] Input validation (Zod schemas)

### Phase 2: Recruiter Features
- [ ] Create job endpoint
- [ ] View own jobs endpoint
- [ ] Delete job endpoint
- [ ] Job validation schemas
- [ ] Authorization checks

### Phase 3: Candidate Features
- [ ] View all jobs endpoint
- [ ] Apply for job endpoint
- [ ] View applications endpoint
- [ ] Duplicate application check
- [ ] Application validation schemas

### Phase 4: Filters (Bonus)
- [ ] Location filter
- [ ] Salary range filter
- [ ] Combined filters
- [ ] Job type filter
- [ ] Experience level filter

### Phase 5: Additional Features (Future)
- [ ] Recruiter view job applications
- [ ] Recruiter update application status
- [ ] Job post status (draft/published/closed)
- [ ] Email notifications
- [ ] User profile updates
- [ ] Resume file upload

---

## 📝 Response Format Standards

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data here
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### Pagination Response
```json
{
  "success": true,
  "message": "Jobs retrieved successfully",
  "data": {
    "items": [...],
    "pagination": {
      "total": 50,
      "page": 1,
      "limit": 10,
      "totalPages": 5
    }
  }
}
```

---

## 🔐 Security Requirements

1. **Password Security**
   - Hash passwords with bcrypt (salt rounds: 10)
   - Never return password in API responses
   - Validate password strength on registration

2. **JWT Token**
   - Sign with strong secret key (stored in .env)
   - Token expiry: 24 hours
   - Include: userId, email, role
   - Validate on every protected route

3. **Input Validation**
   - Use Zod schemas for all endpoints
   - Sanitize user inputs
   - Prevent SQL injection (use Prisma ORM)
   - Validate file types (resume links)

4. **Authorization**
   - Check user role for all protected routes
   - Verify ownership for update/delete operations
   - Return 401 for unauthenticated
   - Return 403 for unauthorized

---

## 📚 Related Documents

- **Technical Setup:** Check existing documentation
  - Database: Prisma schema with PostgreSQL
  - Validation: Zod schemas (see `ZOD_README.md`)
  - ESLint: Code quality checks
  - Environment: .env configuration

- **Code Examples:**
  - Auth Controller: `src/controllers/auth/auth.controller.example.ts`
  - Auth Routes: `src/routes/auth/auth.routes.example.ts`
  - Validation: `ZOD_GUIDE.md`, `COMPLETE_EXAMPLE.ts`

---

## 🎯 Success Criteria

The project is complete when:
1. ✅ Users can register as Candidate or Recruiter
2. ✅ Users can login and receive JWT token
3. ✅ Recruiters can post, view, and delete their jobs
4. ✅ Candidates can view all jobs
5. ✅ Candidates can apply for jobs (with duplicate prevention)
6. ✅ Candidates can view their application history
7. ✅ Filters work for location and salary range
8. ✅ All endpoints have proper validation
9. ✅ Authorization works correctly for all roles
10. ✅ API returns consistent response format

---

**Document Version:** 1.0.0  
**Created:** February 25, 2026  
**Next Review:** After Phase 1 completion  

---

## 📞 Notes

- This is a **living document** - update as requirements change
- Mark features as complete in the checklist
- Add new requirements in separate sections
- Keep track of API changes
- Document any deviations from original plan
