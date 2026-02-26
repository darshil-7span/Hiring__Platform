# Job API - Quick Testing Reference

## 🚀 Quick Start Examples

### Base URL

```
http://localhost:3000/api/jobs
```

---

## 1️⃣ Create Job (Recruiter)

```bash
curl -X POST http://localhost:3000/api/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Senior Node.js Developer",
    "description": "We are looking for an experienced Node.js developer with strong SQL knowledge. You will work on building scalable backend services.",
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
    "skillIds": [1, 2, 3]
  }'
```

**Expected Response (201):**

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

## 2️⃣ View My Jobs (Recruiter)

```bash
curl -X GET http://localhost:3000/api/jobs/my-jobs \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Jobs retrieved successfully",
  "data": {
    "total": 3,
    "jobs": [
      {
        "jobId": "12345",
        "title": "Senior Node.js Developer",
        "location": "Bengaluru, Karnataka",
        "salaryRange": { "min": "800000", "max": "1500000" },
        "status": "Active",
        "applicationsCount": 12,
        "createdAt": "2026-02-26T10:30:00Z"
      },
      {
        "jobId": "12346",
        "title": "React Developer",
        "location": "Mumbai, Maharashtra",
        "salaryRange": { "min": "600000", "max": "1200000" },
        "status": "Active",
        "applicationsCount": 8,
        "createdAt": "2026-02-25T15:45:00Z"
      }
    ]
  }
}
```

---

## 3️⃣ Get Job Details

```bash
curl -X GET http://localhost:3000/api/jobs/12345
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Job retrieved successfully",
  "data": {
    "jobId": "12345",
    "title": "Senior Node.js Developer",
    "description": "We are looking for an experienced Node.js developer with strong SQL knowledge...",
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
    "createdAt": "2026-02-26T10:30:00Z"
  }
}
```

---

## 4️⃣ Update Job (Recruiter)

```bash
curl -X PATCH http://localhost:3000/api/jobs/12345 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Senior Node.js Developer - Updated",
    "salaryMin": 900000,
    "salaryMax": 1600000,
    "openingsCount": 3
  }'
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Job updated successfully",
  "data": {
    "jobId": "12345",
    "title": "Senior Node.js Developer - Updated",
    "salaryRange": {
      "min": "900000",
      "max": "1600000"
    },
    "status": "Active",
    "updatedAt": "2026-02-26T11:45:00Z"
  }
}
```

---

## 5️⃣ Delete Job (Recruiter)

```bash
curl -X DELETE http://localhost:3000/api/jobs/12345 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Expected Response (200):**

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

## 6️⃣ Filter Jobs by Location

### Filter by State Only

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?stateId=1&limit=10"
```

### Filter by State & City

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?stateId=1&cityId=5&limit=10"
```

### Filter by Multiple Cities in Same State

```bash
# Make multiple requests or add multiple cityId filters
curl -X GET "http://localhost:3000/api/jobs/browse/all?stateId=1&cityId=5&limit=10"
curl -X GET "http://localhost:3000/api/jobs/browse/all?stateId=1&cityId=6&limit=10"
```

**Expected Response (200):**

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
        "recruiter": { "name": "John Doe" },
        "location": {
          "state": "Karnataka",
          "city": "Bengaluru"
        },
        "salaryRange": { "min": "800000", "max": "1500000" },
        "employmentType": "fulltime",
        "jobType": "Remote",
        "skills": ["Node.js", "PostgreSQL", "TypeScript"],
        "openingsCount": 2,
        "createdAt": "2026-02-26T10:30:00Z"
      }
    ]
  }
}
```

---

## 7️⃣ Filter Jobs by Salary Range

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?salaryMin=500000&salaryMax=1500000&limit=20"
```

### Filter: Salary + Location

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?stateId=1&cityId=5&salaryMin=600000&salaryMax=1500000&limit=20"
```

### Filter: Salary + Job Type (Remote)

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?salaryMin=600000&salaryMax=1500000&jobType=Remote&limit=20"
```

### Filter: Salary + Employment Type (Full-time)

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?salaryMin=500000&salaryMax=1500000&employmentType=fulltime&limit=20"
```

---

## 8️⃣ Search Jobs by Keyword

```bash
# Search for "developer"
curl -X GET "http://localhost:3000/api/jobs/search/jobs?q=developer"

# Search for "node"
curl -X GET "http://localhost:3000/api/jobs/search/jobs?q=node"

# Search for "remote"
curl -X GET "http://localhost:3000/api/jobs/search/jobs?q=remote"
```

**Expected Response (200):**

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
        "recruiter": { "name": "John Doe" },
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

## 9️⃣ Get All Jobs (Paginated)

### First Page (10 jobs)

```bash
curl -X GET "http://localhost:3000/api/jobs?limit=10&offset=0"
```

### Second Page (Next 10 jobs)

```bash
curl -X GET "http://localhost:3000/api/jobs?limit=10&offset=10"
```

### Get 20 jobs per page

```bash
curl -X GET "http://localhost:3000/api/jobs?limit=20&offset=0"
```

**Expected Response (200):**

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
        "jobId": "12345",
        "title": "Senior Node.js Developer",
        "description": "We are looking for an experienced Node.js developer...",
        "recruiter": { "name": "John Doe" },
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
        "createdAt": "2026-02-26T10:30:00Z"
      }
    ]
  }
}
```

---

## 🔗 Complex Filtering Examples

### 1. Remote Jobs in Bangalore within Budget

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?stateId=1&cityId=5&jobType=Remote&salaryMin=600000&salaryMax=1200000&limit=20"
```

### 2. Full-time Jobs in North India with Specific Salary

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?stateId=3&employmentType=fulltime&salaryMin=800000&salaryMax=1500000&limit=20"
```

### 3. Hybrid Jobs Across States

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?jobType=Hybrid&salaryMin=500000&salaryMax=1200000&limit=20"
```

### 4. On-site Internships (Lower Salary)

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?jobType=OnSite&employmentType=internship&salaryMin=0&salaryMax=300000&limit=20"
```

---

## 📊 Query Parameter Cheat Sheet

| Parameter        | Values                         | Example                    |
| ---------------- | ------------------------------ | -------------------------- |
| `stateId`        | number                         | `?stateId=1`               |
| `cityId`         | number                         | `?cityId=5`                |
| `salaryMin`      | number                         | `?salaryMin=500000`        |
| `salaryMax`      | number                         | `?salaryMax=1500000`       |
| `employmentType` | fulltime, parttime, internship | `?employmentType=fulltime` |
| `jobType`        | Remote, OnSite, Hybrid         | `?jobType=Remote`          |
| `limit`          | number (default: 10)           | `?limit=20`                |
| `offset`         | number (default: 0)            | `?offset=20`               |

---

## ❌ Error Examples

### Missing Required Field

```bash
curl -X POST http://localhost:3000/api/jobs \
  -H "Content-Type: application/json" \
  -d '{"title": "Developer"}' # Missing description and other required fields
```

**Response (400):**

```json
{
  "success": false,
  "message": "Validation error: description is required"
}
```

### Invalid Job Type

```bash
curl -X POST http://localhost:3000/api/jobs \
  -d '{"jobType": "InvalidType"}'
```

**Response (400):**

```json
{
  "success": false,
  "message": "Validation error: Invalid job type"
}
```

### Job Not Found

```bash
curl -X GET http://localhost:3000/api/jobs/99999
```

**Response (404):**

```json
{
  "success": false,
  "message": "Job not found"
}
```

### Unauthorized (Missing Token)

```bash
curl -X GET http://localhost:3000/api/jobs/my-jobs
```

**Response (401):**

```json
{
  "success": false,
  "message": "Unauthorized - User ID not found"
}
```

### Not Authorized to Update

```bash
# A recruiter trying to update another recruiter's job
curl -X PATCH http://localhost:3000/api/jobs/12345 \
  -H "Authorization: Bearer ANOTHER_RECRUITER_TOKEN" \
  -d '{"title": "Updated"}'
```

**Response (403):**

```json
{
  "success": false,
  "message": "You are not authorized to update this job"
}
```

---

## 🧪 Test Scenario: Complete Job Lifecycle

### Step 1: Create a Job

```bash
JOB_ID=$(curl -X POST http://localhost:3000/api/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{...}' | jq '.data.jobId')
```

### Step 2: View Job

```bash
curl -X GET "http://localhost:3000/api/jobs/$JOB_ID"
```

### Step 3: Update Job

```bash
curl -X PATCH "http://localhost:3000/api/jobs/$JOB_ID" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"salaryMax": 2000000}'
```

### Step 4: Search for Job

```bash
curl -X GET "http://localhost:3000/api/jobs/search/jobs?q=developer"
```

### Step 5: Filter Jobs

```bash
curl -X GET "http://localhost:3000/api/jobs/browse/all?stateId=1&salaryMin=500000"
```

### Step 6: Delete Job

```bash
curl -X DELETE "http://localhost:3000/api/jobs/$JOB_ID" \
  -H "Authorization: Bearer TOKEN"
```

---

## 💡 Tips

1. **Use `jq` for pretty JSON:**

   ```bash
   curl ... | jq .
   ```

2. **Save token to variable:**

   ```bash
   TOKEN="your_jwt_token"
   curl -H "Authorization: Bearer $TOKEN" ...
   ```

3. **Test in Postman:**
   - Create a collection
   - Add collection variables: `baseUrl`, `token`
   - Use `{{baseUrl}}/jobs` and `{{token}}` in requests

4. **Salary filtering logic:**
   - Returns jobs where: `job.salary_max >= searchMin AND job.salary_min <= searchMax`
   - This ensures salary ranges overlap with search criteria

---

## 📞 Common Issues & Solutions

**Issue:** 401 Unauthorized  
**Solution:** Make sure to include valid JWT token in Authorization header

**Issue:** 403 Forbidden  
**Solution:** You can only update/delete your own jobs. Check that you're logged in as the job creator

**Issue:** Job not found  
**Solution:** Double-check the job ID and ensure it exists

**Issue:** Validation error  
**Solution:** Ensure all required fields are present and valid. Check JOB_API_GUIDE.md for schema details
