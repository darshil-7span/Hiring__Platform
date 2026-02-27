## Hiring Platform API Routes Reference

This document lists all API routes currently implemented in the backend, including:

- **Base path**: `/api`
- **Request body/query structure**
- **Response structure (shape, not every field)**
- **Required headers and authentication rules**

All responses follow the standard format:

```json
{
  "success": true,
  "message": "Human‑readable message",
  "data": { /* route‑specific payload */ }
}
```

Error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "optional.field.name",
      "message": "Validation or domain error message"
    }
  ]
}
```

---

## Common Headers & Authentication

- **Content-Type**:  
  - For all JSON requests:  
    - `Content-Type: application/json`

- **Authorization (JWT)**:
  - For protected routes (login not required, but registration, job create, my‑jobs, apply, etc.):
    - `Authorization: Bearer <JWT_TOKEN>`
  - Token payload (generated on login/register):
    - `userId`: numeric user id
    - `email`: user email
    - `role`: `"candidate"` or `"recruiter"`

If the `Authorization` header is missing or invalid on a protected route:

- `401 Unauthorized` with `message: "No token provided"` or `message: "Invalid or expired token"`.

Role checks (where applicable) are based on `req.user.role`.

---

## Authentication Routes

### POST /api/auth/register

- **Purpose**: Register a new user as candidate or recruiter.
- **Auth**: **Not required**
- **Headers**:
  - `Content-Type: application/json`
- **Request body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "StrongPass123",
  "phone_number": "9876543210",
  "country_id": 1,
  "role_name": "candidate" // or "recruiter"
}
```

- **Response (201)**:

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "candidate"
    },
    "token": "JWT_TOKEN_HERE"
  }
}
```

- **Side effects**:
  - Always creates a `users` row.
  - Automatically upserts a matching profile:
    - `candidate_profile` when role is `"candidate"`.
    - `recruiter_profile` when role is `"recruiter"`.

---

### POST /api/auth/login

- **Purpose**: Authenticate user and return JWT.
- **Auth**: **Not required**
- **Headers**:
  - `Content-Type: application/json`
- **Request body**:

```json
{
  "email": "john@example.com",
  "password": "StrongPass123"
}
```

- **Response (200)**:

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "candidate"
    },
    "token": "JWT_TOKEN_HERE"
  }
}
```

---

## Job Routes

**Base**: `/api/jobs`

### POST /api/jobs

- **Purpose**: Create a new job post (recruiter).
- **Auth**: **Required** (JWT, typically recruiter)
- **Headers**:
  - `Content-Type: application/json`
  - `Authorization: Bearer <JWT_TOKEN>`
- **Request body** (simplified from `createJobSchema`):

```json
{
  "title": "Senior Node.js Developer",
  "description": "We are looking for an experienced Node.js developer...",
  "employmentType": "fulltime",
  "jobType": "Remote",
  "salaryMin": 800000,
  "salaryMax": 1500000,
  "currencyId": 1,
  "minExperience": 3,
  "maxExperience": 7,
  "stateId": 1,
  "cityId": 5,
  "benefits": "Health insurance, Flexible working hours",
  "openingsCount": 2,
  "applicationDeadline": "2026-03-31T23:59:59Z",
  "skillIds": [1, 2, 3]
}
```

- **Response (201)**:

```json
{
  "success": true,
  "message": "Job posted successfully",
  "data": {
    "jobId": 123,
    "title": "Senior Node.js Developer",
    "description": "We are looking for an experienced Node.js developer...",
    "salaryRange": {
      "min": "800000",
      "max": "1500000"
    },
    "createdAt": "2026-02-26T10:30:00.000Z"
  }
}
```

---

### GET /api/jobs/my-jobs

- **Purpose**: Get jobs posted by the authenticated recruiter.
- **Auth**: **Required** (JWT, recruiter)
- **Headers**:
  - `Authorization: Bearer <JWT_TOKEN>`
- **Query**: none
- **Response (200)** (shape):

```json
{
  "success": true,
  "message": "Jobs retrieved successfully",
  "data": {
    "total": 5,
    "jobs": [
      {
        "jobId": 123,
        "title": "Senior Node.js Developer",
        "location": "Ahmedabad, Gujarat",
        "salaryRange": {
          "min": "800000",
          "max": "1500000"
        },
        "status": "Active",
        "applicationsCount": 12,
        "createdAt": "2026-02-26T10:30:00.000Z"
      }
    ]
  }
}
```

---

### GET /api/jobs/:id

- **Purpose**: Get full details for a single job.
- **Auth**: **Not required**
- **Headers**: none required
- **Path params**:
  - `id` (string/number): job id
- **Response (200)** (shape):

```json
{
  "success": true,
  "message": "Job retrieved successfully",
  "data": {
    "jobId": 123,
    "title": "Senior Node.js Developer",
    "description": "Long description...",
    "recruiter": {
      "name": "Alice Recruiter",
      "email": "alice@example.com"
    },
    "location": {
      "state": "Gujarat",
      "city": "Ahmedabad"
    },
    "salary": {
      "min": "800000",
      "max": "1500000",
      "currency": "INR"
    },
    "experience": {
      "min": "3",
      "max": "7"
    },
    "employmentType": "fulltime",
    "jobType": "Remote",
    "benefits": "Health insurance, Flexible hours",
    "openingsCount": 2,
    "status": "Active",
    "skills": [
      { "id": 1, "name": "Node.js" },
      { "id": 2, "name": "PostgreSQL" }
    ],
    "applicationsCount": 12,
    "createdAt": "2026-02-26T10:30:00.000Z",
    "updatedAt": "2026-02-26T11:00:00.000Z"
  }
}
```

---

### PATCH /api/jobs/:id

- **Purpose**: Update an existing job (owner recruiter only).
- **Auth**: **Required** (JWT, recruiter & owner)
- **Headers**:
  - `Content-Type: application/json`
  - `Authorization: Bearer <JWT_TOKEN>`
- **Path params**:
  - `id`: job id
- **Request body** (all fields optional):

```json
{
  "title": "Updated title",
  "description": "Updated description...",
  "salaryMin": 900000,
  "salaryMax": 1600000,
  "employmentType": "fulltime",
  "jobType": "Hybrid",
  "jobStatus": "Active",
  "skillIds": [1, 4, 5]
}
```

- **Response (200)**:

```json
{
  "success": true,
  "message": "Job updated successfully",
  "data": {
    "jobId": 123,
    "title": "Updated title",
    "description": "Updated description...",
    "salaryRange": {
      "min": "900000",
      "max": "1600000"
    },
    "status": "Active",
    "updatedAt": "2026-02-26T12:00:00.000Z"
  }
}
```

---

### DELETE /api/jobs/:id

- **Purpose**: Delete a job (owner recruiter only).
- **Auth**: **Required** (JWT, recruiter & owner)
- **Headers**:
  - `Authorization: Bearer <JWT_TOKEN>`
- **Path params**:
  - `id`: job id
- **Response (200)**:

```json
{
  "success": true,
  "message": "Job deleted successfully",
  "data": {
    "deletedJobId": 123
  }
}
```

---

### GET /api/jobs/browse/all

- **Purpose**: Filter jobs by location, salary, employment type, etc.
- **Auth**: **Not required**
- **Headers**: none required
- **Query params** (all optional):
  - `stateId` (string/number)
  - `cityId` (string/number)
  - `salaryMin` (string/number)
  - `salaryMax` (string/number)
  - `employmentType` (`fulltime`, `parttime`, `internship`)
  - `jobType` (`Remote`, `OnSite`, `Hybrid`)
  - `limit` (string/number, default `10`)
  - `offset` (string/number, default `0`)

- **Response (200)** (shape):

```json
{
  "success": true,
  "message": "Jobs filtered successfully",
  "data": {
    "total": 45,
    "limit": 10,
    "offset": 0,
    "jobs": [
      {
        "jobId": 123,
        "title": "Senior Node.js Developer",
        "description": "Short description...",
        "recruiter": { "name": "Alice Recruiter" },
        "location": { "state": "Gujarat", "city": "Ahmedabad" },
        "salaryRange": { "min": "800000", "max": "1500000" },
        "employmentType": "fulltime",
        "jobType": "Remote",
        "skills": ["Node.js", "PostgreSQL", "TypeScript"],
        "openingsCount": 2,
        "createdAt": "2026-02-26T10:30:00.000Z"
      }
    ]
  }
}
```

---

### GET /api/jobs/search/jobs

- **Purpose**: Text search on job title and description.
- **Auth**: **Not required**
- **Headers**: none required
- **Query params**:
  - `q` (string, min length 2) – search term
- **Response (200)** (shape):

```json
{
  "success": true,
  "message": "Found 15 jobs matching \"developer\"",
  "data": {
    "total": 15,
    "jobs": [
      {
        "jobId": 123,
        "title": "Senior Developer",
        "description": "Short description...",
        "recruiter": { "name": "Alice Recruiter" },
        "location": { "state": "Gujarat", "city": "Ahmedabad" },
        "salaryRange": { "min": "800000", "max": "1500000" },
        "createdAt": "2026-02-26T10:30:00.000Z"
      }
    ]
  }
}
```

---

### GET /api/jobs

- **Purpose**: Get all active jobs with simple pagination.
- **Auth**: **Not required**
- **Headers**: none required
- **Query params**:
  - `limit` (string/number, default `10`)
  - `offset` (string/number, default `0`)
- **Response (200)** (shape):

```json
{
  "success": true,
  "message": "All jobs retrieved successfully",
  "data": {
    "total": 125,
    "limit": 10,
    "offset": 0,
    "jobs": [
      {
        "jobId": 123,
        "title": "Senior Node.js Developer",
        "description": "Short description...",
        "recruiter": { "name": "Alice Recruiter" },
        "location": { "state": "Gujarat", "city": "Ahmedabad" },
        "salaryRange": { "min": "800000", "max": "1500000" },
        "employmentType": "fulltime",
        "jobType": "Remote",
        "createdAt": "2026-02-26T10:30:00.000Z"
      }
    ]
  }
}
```

---

## Candidate Routes

**Base**: `/api/candidate`

### POST /api/candidate/apply

- **Purpose**: Apply to a job using the authenticated candidate’s user id.
- **Auth**: **Required** (JWT, candidate)
- **Headers**:
  - `Content-Type: application/json`
  - `Authorization: Bearer <JWT_TOKEN>`
- **Request body** (validated by `createApplicationSchema`):

```json
{
  "jobPostId": 123,
  "coverLetter": "Optional cover letter text with at least 50 characters"
}
```

- **Response (201)**:

```json
{
  "success": true,
  "message": "Job application submitted successfully",
  "data": {
    "applicationId": 1,
    "jobPostId": 123,
    "candidateId": 10,
    "status": "Applied",
    "appliedAt": "2026-02-26T10:00:00.000Z"
  }
}
```

- **Failure cases**:
  - Job not found or not active → `400` with `message: "Job not found or not active"`.
  - Duplicate application (same candidate + job) → `400` with `message: "You have already applied for this job"`.

---

## Health Check Route

### GET /api/health

- **Purpose**: Simple health check for the API.
- **Auth**: **Not required**
- **Headers**: none required
- **Response (200)**:

```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2026-02-26T10:30:00.000Z"
}
```

