# System Flow – Hiring Platform

This document describes the **end-to-end flows** for the main user journeys in the Hiring Platform:

- Authentication
- Recruiter job lifecycle
- Candidate job discovery & applications

For detailed architecture and component responsibilities, see `ARCHITECTURE_GUIDE.md`.

---

## 1. Authentication Flow

### 1.1 Register

```mermaid
sequenceDiagram
  participant C as Client
  participant API as /api/auth/register
  participant DB as PostgreSQL

  C->>API: POST /api/auth/register (name, email, password, role, country)
  API->>API: Zod validate request
  API->>DB: Create user + role + optional profiles
  DB-->>API: New user row
  API-->>C: 201 { success, message, data: { user, token } }
```

### 1.2 Login

```mermaid
sequenceDiagram
  participant C as Client
  participant API as /api/auth/login
  participant DB as PostgreSQL

  C->>API: POST /api/auth/login (email, password)
  API->>API: Zod validate request
  API->>DB: Look up user, verify password
  DB-->>API: User row
  API-->>C: 200 { success, message, data: { user, token } }
```

---

## 2. Recruiter Job Lifecycle

### 2.1 Post a Job

```mermaid
sequenceDiagram
  participant R as Recruiter Client
  participant API as /api/jobs
  participant DB as PostgreSQL

  R->>API: POST /api/jobs (job details, skillIds) + JWT
  API->>API: Validate JWT (role = recruiter)
  API->>API: Zod validate body
  API->>DB: Insert job_post + job_skills
  DB-->>API: Created job + relations
  API-->>R: 201 { success, message, data: { jobId, ... } }
```

### 2.2 View Own Jobs

```mermaid
sequenceDiagram
  participant R as Recruiter Client
  participant API as /api/jobs/my-jobs
  participant DB as PostgreSQL

  R->>API: GET /api/jobs/my-jobs + JWT
  API->>API: Validate JWT (recruiter)
  API->>DB: Query job_post by recruiter_id
  DB-->>API: List of jobs
  API-->>R: 200 { success, data: { total, jobs[] } }
```

### 2.3 Update / Delete Job

```mermaid
sequenceDiagram
  participant R as Recruiter Client
  participant API as /api/jobs/:id
  participant DB as PostgreSQL

  R->>API: PATCH/DELETE /api/jobs/:id + JWT
  API->>API: Validate JWT (recruiter)
  API->>API: Zod validate params/body
  API->>DB: Load job_post by id
  DB-->>API: Job with recruiter_id
  API->>API: Check ownership (job.recruiter_id === req.user.id)
  alt Not owner
    API-->>R: 403 { success: false, message: "You are not authorized..." }
  else Owner
    API->>DB: Update/Delete job_post (+ cascade on job_skills/applications)
    DB-->>API: Updated/deleted record
    API-->>R: 200 { success: true, data: { ... } }
  end
```

---

## 3. Candidate Job Discovery & Applications

### 3.1 Browse & Search Jobs

```mermaid
sequenceDiagram
  participant C as Candidate/Anonymous
  participant API as /api/jobs, /browse/all, /search/jobs
  participant DB as PostgreSQL

  C->>API: GET with query params (pagination, filters, search term)
  API->>API: Zod validate & coerce query
  API->>DB: Query job_post with filters & relations
  DB-->>API: Jobs + related data
  API-->>C: 200 { success, data: { total, jobs[] } }
```

### 3.2 Apply to a Job

```mermaid
sequenceDiagram
  participant C as Candidate Client
  participant API as /api/candidate/apply
  participant DB as PostgreSQL

  C->>API: POST /api/candidate/apply (jobPostId, coverLetter?) + JWT
  API->>API: Validate JWT (role = candidate)
  API->>API: Zod validate body
  API->>DB: Check job exists and is Active
  API->>DB: Check no existing application for (candidate, job)
  alt Duplicate or invalid
    API-->>C: 400 { success: false, message: "Job not found or not active" / "You have already applied..." }
  else OK
    API->>DB: Insert into applications
    DB-->>API: New application row
    API-->>C: 201 { success, message, data: { applicationId, ... } }
  end
```

---

## 4. Health & Observability

- **Health check**:
  - `GET /api/health` → simple `success` + `timestamp`.
- **Logging**:
  - HTTP logs via Express middleware.
  - Prisma logs for database queries during development.

---

## 5. Where to Go Next

- Detailed architecture, layers, and repository patterns → `ARCHITECTURE_GUIDE.md`
- Route-by-route details (inputs/outputs) → `API_ROUTES_REFERENCE.md`
- Validation rules → `ZOD_REQUIREMENTS.md`
- Standard envelopes & errors → `API_REQUEST_RESPONSE_STRUCTURE.md`

