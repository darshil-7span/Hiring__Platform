# Job API Documentation

## Overview

Complete API documentation for job posting, filtering, and searching functionality. The API supports two roles: **Recruiters** (post/manage jobs) and **Candidates** (search/filter jobs).

---

## Base URL

```
http://localhost:3000/api/jobs
```

---

## 📋 Table of Contents

1. [Recruiter Features](#recruiter-features)
2. [Common Filters](#common-filters)
3. [Response Format](#response-format)
4. [Error Handling](#error-handling)

---

## 🎯 Recruiter Features

### 1. POST - Create Job

**Endpoint:** `POST /api/jobs`

**Authentication:** Required (Recruiter Role)

**Description:** Create and post a new job listing.

**Request Body:**

```json
{
  "title": "Senior Node.js Developer",
  "description": "We are looking for an experienced Node.js developer with strong SQL knowledge...",
  "employmentType": "fulltime",
  "jobType": "Remote",
  "salaryMin": 800000,
  "salaryMax": 1500000,
  "currencyId": 1,
  "minExperience": 3,
  "maxExperience": 7,
  "stateId": 1,
  "cityId": 5,
  "benefits": "Health insurance, Stock options, Flexible working hours",
  "openingsCount": 2,
  "applicationDeadline": "2026-03-31T23:59:59Z",
  "skillIds": [1, 2, 3]
}
```

**Field Validation:**

- `title` (string, required): 3-255 characters
- `description` (string, required): 10-5000 characters
- `employmentType` (enum, required): fulltime | parttime | internship
- `jobType` (enum, required): Remote | OnSite | Hybrid
- `salaryMin` (number, optional): Must be positive
- `salaryMax` (number, optional): Must be positive
- `currencyId` (number, optional): Default 1 (INR)
- `minExperience` (number, optional): Non-negative integer
- `maxExperience` (number, optional): Non-negative integer
- `stateId` (number, required): Valid state ID
- `cityId` (number, required): Valid city ID
- `benefits` (string, optional): Up to 1000 characters
- `openingsCount` (number, optional): Default 1
- `applicationDeadline` (string, optional): ISO datetime format
- `skillIds` (array, required): At least 1 skill ID

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Job posted successfully",
  "data": {
    "jobId": "12345",
    "title": "Senior Node.js Developer",
    "description": "We are looking for an experienced Node.js developer...",
    "salaryRange": {
      "min": "800000",
      "max": "1500000"
    },
    "createdAt": "2026-02-26T10:30:00Z"
  }
}
```

---

### 2. GET - Get My Jobs

**Endpoint:** `GET /api/jobs/my-jobs`

**Authentication:** Required (Recruiter Role)

**Description:** Retrieve all jobs posted by the authenticated recruiter.

**Query Parameters:** None

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Jobs retrieved successfully",
  "data": {
    "total": 5,
    "jobs": [
      {
        "jobId": "12345",
        "title": "Senior Node.js Developer",
        "location": "Bengaluru, Karnataka",
        "salaryRange": {
          "min": "800000",
          "max": "1500000"
        },
        "status": "Active",
        "applicationsCount": 12,
        "createdAt": "2026-02-26T10:30:00Z"
      },
      {
        "jobId": "12346",
        "title": "React Developer",
        "location": "Mumbai, Maharashtra",
        "salaryRange": {
          "min": "600000",
          "max": "1200000"
        },
        "status": "Active",
        "applicationsCount": 8,
        "createdAt": "2026-02-25T15:45:00Z"
      }
    ]
  }
}
```

---

### 3. GET - Get Job Details

**Endpoint:** `GET /api/jobs/:id`

**Authentication:** Optional

**Description:** Retrieve detailed information about a specific job including recruiter info, skills, and applications.

**Path Parameters:**

- `id` (string, required): Job ID

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Job retrieved successfully",
  "data": {
    "jobId": "12345",
    "title": "Senior Node.js Developer",
    "description": "We are looking for an experienced Node.js developer...",
    "recruiter": {
      "name": "John Doe",
      "email": "john@company.com"
    },
    "location": {
      "state": "Karnataka",
      "city": "Bengaluru"
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
    "benefits": "Health insurance, Stock options, Flexible working hours",
    "openingsCount": 2,
    "status": "Active",
    "skills": [
      { "id": 1, "name": "Node.js" },
      { "id": 2, "name": "PostgreSQL" },
      { "id": 3, "name": "TypeScript" }
    ],
    "applicationsCount": 12,
    "createdAt": "2026-02-26T10:30:00Z",
    "updatedAt": "2026-02-26T10:30:00Z"
  }
}
```

---

### 4. PATCH - Update Job

**Endpoint:** `PATCH /api/jobs/:id`

**Authentication:** Required (Recruiter - Owner Only)

**Description:** Update an existing job posting. Only the recruiter who created the job can update it.

**Path Parameters:**

- `id` (string, required): Job ID

**Request Body:** (All fields optional)

```json
{
  "title": "Senior Node.js Developer - Updated",
  "description": "Updated description...",
  "salaryMin": 850000,
  "salaryMax": 1600000,
  "openingsCount": 3,
  "jobStatus": "Active",
  "skillIds": [1, 2, 3, 4]
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Job updated successfully",
  "data": {
    "jobId": "12345",
    "title": "Senior Node.js Developer - Updated",
    "description": "Updated description...",
    "salaryRange": {
      "min": "850000",
      "max": "1600000"
    },
    "status": "Active",
    "updatedAt": "2026-02-26T11:45:00Z"
  }
}
```

---

### 5. DELETE - Delete Job

**Endpoint:** `DELETE /api/jobs/:id`

**Authentication:** Required (Recruiter - Owner Only)

**Description:** Delete a job posting. This will also delete all related applications.

**Path Parameters:**

- `id` (string, required): Job ID

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Job deleted successfully",
  "data": {
    "deletedJobId": "12345"
  }
}
```

---

## 🔍 Common Filters

### 1. GET - Filter Jobs by Location & Salary

**Endpoint:** `GET /api/jobs/browse/all`

**Authentication:** Not Required

**Description:** Search and filter jobs using multiple criteria including location, salary range, employment type, and job type.

**Query Parameters:**
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `stateId` | number | Filter by state | `?stateId=1` |
| `cityId` | number | Filter by city | `?cityId=5` |
| `salaryMin` | number | Minimum salary range | `?salaryMin=500000` |
| `salaryMax` | number | Maximum salary range | `?salaryMax=1500000` |
| `employmentType` | string | fulltime, parttime, internship | `?employmentType=fulltime` |
| `jobType` | string | Remote, OnSite, Hybrid | `?jobType=Remote` |
| `limit` | number | Results per page (default: 10) | `?limit=20` |
| `offset` | number | Pagination offset (default: 0) | `?offset=0` |

**Example Requests:**

**A. Filter by Location (State)**

```
GET /api/jobs/browse/all?stateId=1&limit=10
```

**B. Filter by Location (State + City)**

```
GET /api/jobs/browse/all?stateId=1&cityId=5&limit=10
```

**C. Filter by Salary Range**

```
GET /api/jobs/browse/all?salaryMin=500000&salaryMax=1500000&limit=10
```

**D. Filter by Employment Type**

```
GET /api/jobs/browse/all?employmentType=fulltime&limit=10
```

**E. Filter by Job Type (Remote, OnSite, Hybrid)**

```
GET /api/jobs/browse/all?jobType=Remote&limit=10
```

**F. Combined Filters (Location + Salary + Job Type)**

```
GET /api/jobs/browse/all?stateId=1&cityId=5&salaryMin=600000&salaryMax=1500000&jobType=Remote&limit=20&offset=0
```

**Response (200 OK):**

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
        "jobId": "12345",
        "title": "Senior Node.js Developer",
        "description": "We are looking for an experienced Node.js developer...",
        "recruiter": {
          "name": "John Doe"
        },
        "location": {
          "state": "Karnataka",
          "city": "Bengaluru"
        },
        "salaryRange": {
          "min": "800000",
          "max": "1500000"
        },
        "employmentType": "fulltime",
        "jobType": "Remote",
        "skills": ["Node.js", "PostgreSQL", "TypeScript"],
        "openingsCount": 2,
        "createdAt": "2026-02-26T10:30:00Z"
      },
      {
        "jobId": "12346",
        "title": "React Developer",
        "description": "Looking for a React specialist...",
        "recruiter": {
          "name": "Jane Smith"
        },
        "location": {
          "state": "Karnataka",
          "city": "Bengaluru"
        },
        "salaryRange": {
          "min": "700000",
          "max": "1300000"
        },
        "employmentType": "fulltime",
        "jobType": "OnSite",
        "skills": ["React", "JavaScript", "CSS"],
        "openingsCount": 1,
        "createdAt": "2026-02-25T15:45:00Z"
      }
    ]
  }
}
```

---

### 2. GET - Search Jobs

**Endpoint:** `GET /api/jobs/search/jobs`

**Authentication:** Not Required

**Description:** Search for jobs by keyword (title or description).

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | Search term (minimum 2 characters) |

**Example Requests:**

```
GET /api/jobs/search/jobs?q=developer
GET /api/jobs/search/jobs?q=node.js
GET /api/jobs/search/jobs?q=remote
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Found 15 jobs matching \"developer\"",
  "data": {
    "total": 15,
    "jobs": [
      {
        "jobId": "12345",
        "title": "Senior Developer",
        "description": "We are looking for a senior developer...",
        "recruiter": {
          "name": "John Doe"
        },
        "location": {
          "state": "Karnataka",
          "city": "Bengaluru"
        },
        "salaryRange": {
          "min": "800000",
          "max": "1500000"
        },
        "createdAt": "2026-02-26T10:30:00Z"
      }
    ]
  }
}
```

---

### 3. GET - Get All Jobs

**Endpoint:** `GET /api/jobs`

**Authentication:** Not Required

**Description:** Retrieve all active jobs with pagination.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | number | 10 | Results per page |
| `offset` | number | 0 | Pagination offset |

**Example Requests:**

```
GET /api/jobs                        // Default: 10 jobs, offset 0
GET /api/jobs?limit=20&offset=0      // First 20 jobs
GET /api/jobs?limit=20&offset=20     // Next 20 jobs (page 2)
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "All jobs retrieved successfully",
  "data": {
    "total": 125,
    "limit": 10,
    "offset": 0,
    "jobs": [...]
  }
}
```

---

## 📝 Response Format

### Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response-specific data
  }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error description"
}
```

---

## ⚠️ Error Handling

### Common HTTP Status Codes

| Status | Meaning                        | Example                        |
| ------ | ------------------------------ | ------------------------------ |
| 200    | OK - Request successful        | GET job details                |
| 201    | Created - Resource created     | POST new job                   |
| 400    | Bad Request - Invalid input    | Missing required fields        |
| 401    | Unauthorized - Auth required   | No token provided              |
| 403    | Forbidden - Not authorized     | Update another recruiter's job |
| 404    | Not Found - Resource not found | Job ID doesn't exist           |
| 500    | Internal Server Error          | Database error                 |

### Example Error Responses

**Missing Required Field:**

```json
{
  "success": false,
  "message": "Validation error: title is required"
}
```

**Unauthorized:**

```json
{
  "success": false,
  "message": "Unauthorized - User ID not found"
}
```

**Job Not Found:**

```json
{
  "success": false,
  "message": "Job not found"
}
```

**Not Authorized to Update:**

```json
{
  "success": false,
  "message": "You are not authorized to update this job"
}
```

---

## 📚 Data Types & Enums

### Employment Types

- `fulltime` - Full-time position
- `parttime` - Part-time position
- `internship` - Internship position

### Job Types

- `Remote` - Work from home
- `OnSite` - On-site office work
- `Hybrid` - Mix of remote and on-site

### Job Status

- `Active` - Job is actively recruiting
- `Deactive` - Job is no longer open

---

## 🔐 Authentication & Authorization

### Recruiter-Only Endpoints

- `POST /api/jobs` - Create job
- `GET /api/jobs/my-jobs` - Get own jobs
- `PATCH /api/jobs/:id` - Update own job
- `DELETE /api/jobs/:id` - Delete own job

**Requirements:**

- Valid JWT token in Authorization header
- Role must be "recruiter"
- For PATCH/DELETE: Must own the job

### Public Endpoints

- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get job details
- `GET /api/jobs/browse/all` - Filter jobs
- `GET /api/jobs/search/jobs` - Search jobs

---

## 📌 Important Notes

1. **Salary Range:** Both `salaryMin` and `salaryMax` should be provided together for better filtering results.

2. **Location Filtering:**
   - Provide `stateId` to filter by state
   - Provide both `stateId` and `cityId` for more specific results

3. **Pagination:**
   - Default page size is 10 results
   - Use `limit` and `offset` for pagination

4. **Skills:**
   - At least one skill is required when creating/updating jobs
   - Skill IDs must already exist in the database

5. **Currency:**
   - Default currency ID is 1 (INR)
   - Make sure currency ID exists in database

6. **Dates:**
   - All timestamps should be in ISO 8601 format (e.g., `2026-03-31T23:59:59Z`)

---

## 🧪 Testing with cURL

### Create Job

```bash
curl -X POST http://localhost:3000/api/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Senior Node.js Developer",
    "description": "We are looking for an experienced Node.js developer...",
    "employmentType": "fulltime",
    "jobType": "Remote",
    "salaryMin": 800000,
    "salaryMax": 1500000,
    "stateId": 1,
    "cityId": 5,
    "skillIds": [1, 2, 3]
  }'
```

### Get All Jobs

```bash
curl -X GET http://localhost:3000/api/jobs
```

### Filter Jobs by Location & Salary

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?stateId=1&cityId=5&salaryMin=500000&salaryMax=1500000&limit=20"
```

### Search Jobs

```bash
curl -X GET "http://localhost:3000/api/jobs/search/jobs?q=developer"
```

### Get My Jobs (Recruiter)

```bash
curl -X GET http://localhost:3000/api/jobs/my-jobs \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 📞 Support

For issues or questions, please contact the development team.
