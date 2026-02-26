# 📋 Candidate Applications API - Complete Guide

## 🎯 **What This API Does**
Shows which candidates applied for which jobs with complete details!

## 🔗 **Database Flow**
```
User Table (id)
    ↓
CandidateProfile Table (user_id = User.id)
    ↓
Application Table (candidate_id = CandidateProfile.user_id)
    ↓
JobPost Table (job_id)
```

---

## 🚀 **API Endpoints**

### **1. Get All Candidate Applications**

Shows all candidates who applied for jobs with complete details.

```http
GET http://localhost:5004/api/applications/candidates
Authorization: Bearer YOUR_JWT_TOKEN
```

#### **cURL:**
```bash
curl -X GET http://localhost:5004/api/applications/candidates \
  -H "Authorization: Bearer YOUR_TOKEN"
```

#### **Response (200):**
```json
{
  "success": true,
  "message": "Candidate applications retrieved successfully",
  "count": 2,
  "data": [
    {
      "application_id": 1,
      "status": "Applied",
      "applied_at": "2026-02-26T10:30:00.000Z",
      "candidate": {
        "id": 7,
        "name": "John Candidate",
        "email": "john@example.com",
        "phone_number": "1234567890",
        "profile": {
          "qualification": "B.Tech CS",
          "experience_years": 3,
          "resume_url": "https://example.com/resume.pdf",
          "location": {
            "state": "Gujarat",
            "city": "Ahmedabad"
          }
        }
      },
      "job": {
        "id": 5,
        "title": "Senior Software Engineer",
        "description": "Looking for experienced developer...",
        "employment_type": "fulltime",
        "job_type": "Remote",
        "salary": {
          "min": 80000,
          "max": 120000,
          "currency": "INR"
        },
        "status": "Active",
        "recruiter": {
          "id": 2,
          "name": "Alice Recruiter",
          "email": "alice@example.com"
        }
      }
    },
    {
      "application_id": 2,
      "status": "Shortlisted",
      "applied_at": "2026-02-25T15:20:00.000Z",
      "candidate": {
        "id": 8,
        "name": "Jane Developer",
        "email": "jane@example.com",
        "phone_number": "9876543210",
        "profile": {
          "qualification": "M.Tech CS",
          "experience_years": 5,
          "resume_url": "https://example.com/jane-resume.pdf",
          "location": {
            "state": "Gujarat",
            "city": "Ahmedabad"
          }
        }
      },
      "job": {
        "id": 5,
        "title": "Senior Software Engineer",
        "description": "Looking for experienced developer...",
        "employment_type": "fulltime",
        "job_type": "Remote",
        "salary": {
          "min": 80000,
          "max": 120000,
          "currency": "INR"
        },
        "status": "Active",
        "recruiter": {
          "id": 2,
          "name": "Alice Recruiter",
          "email": "alice@example.com"
        }
      }
    }
  ]
}
```

---

### **2. Get Applications for Specific Job**

Shows all candidates who applied for a specific job.

```http
GET http://localhost:5004/api/applications/job/:jobId
Authorization: Bearer YOUR_JWT_TOKEN
```

#### **Example:**
```http
GET http://localhost:5004/api/applications/job/5
Authorization: Bearer YOUR_TOKEN
```

#### **cURL:**
```bash
curl -X GET http://localhost:5004/api/applications/job/5 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

#### **Response (200):**
```json
{
  "success": true,
  "message": "Job applications retrieved successfully",
  "count": 3,
  "data": [
    {
      "application_id": 1,
      "status": "Applied",
      "applied_at": "2026-02-26T10:30:00.000Z",
      "candidate": {
        "id": 7,
        "name": "John Candidate",
        "email": "john@example.com",
        "phone_number": "1234567890",
        "profile": {
          "qualification": "B.Tech CS",
          "experience_years": 3,
          "resume_url": "https://example.com/resume.pdf",
          "location": {
            "state": "Gujarat",
            "city": "Ahmedabad"
          }
        }
      }
    },
    {
      "application_id": 2,
      "status": "Shortlisted",
      "applied_at": "2026-02-25T15:20:00.000Z",
      "candidate": {
        "id": 8,
        "name": "Jane Developer",
        "email": "jane@example.com",
        "phone_number": "9876543210",
        "profile": {
          "qualification": "M.Tech CS",
          "experience_years": 5,
          "resume_url": "https://example.com/jane-resume.pdf",
          "location": {
            "state": "Gujarat",
            "city": "Ahmedabad"
          }
        }
      }
    }
  ]
}
```

---

### **3. Get My Applications (Candidate)**

Shows all jobs the logged-in candidate applied for.

```http
GET http://localhost:5004/api/applications/my-applications
Authorization: Bearer YOUR_JWT_TOKEN
```

#### **cURL:**
```bash
curl -X GET http://localhost:5004/api/applications/my-applications \
  -H "Authorization: Bearer YOUR_TOKEN"
```

#### **Response (200):**
```json
{
  "success": true,
  "message": "Your applications retrieved successfully",
  "count": 2,
  "data": [
    {
      "application_id": 1,
      "status": "Applied",
      "applied_at": "2026-02-26T10:30:00.000Z",
      "job": {
        "id": 5,
        "title": "Senior Software Engineer",
        "description": "Looking for experienced developer...",
        "employment_type": "fulltime",
        "job_type": "Remote",
        "salary": {
          "min": 80000,
          "max": 120000,
          "currency": "INR"
        },
        "recruiter": {
          "name": "Alice Recruiter",
          "email": "alice@example.com"
        }
      }
    },
    {
      "application_id": 3,
      "status": "Rejected",
      "applied_at": "2026-02-24T09:15:00.000Z",
      "job": {
        "id": 6,
        "title": "Frontend Developer",
        "description": "React developer needed...",
        "employment_type": "fulltime",
        "job_type": "Hybrid",
        "salary": {
          "min": 60000,
          "max": 90000,
          "currency": "INR"
        },
        "recruiter": {
          "name": "Bob Recruiter",
          "email": "bob@example.com"
        }
      }
    }
  ]
}
```

---

## 🧪 **Testing Flow**

### **Step 1: Get All Candidate Applications**
```bash
curl -X GET http://localhost:5004/api/applications/candidates \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### **Step 2: Get Applications for Specific Job**
```bash
curl -X GET http://localhost:5004/api/applications/job/5 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### **Step 3: Get My Applications (as Candidate)**
```bash
curl -X GET http://localhost:5004/api/applications/my-applications \
  -H "Authorization: Bearer CANDIDATE_TOKEN"
```

---

## 📊 **What Data You Get**

### **Application Information:**
- Application ID
- Status (Applied, Shortlisted, Rejected, Hired)
- Applied Date/Time

### **Candidate Information:**
- User ID, Name, Email, Phone
- Qualification (B.Tech, M.Tech, etc.)
- Experience (years)
- Resume URL
- Location (State, City)

### **Job Information:**
- Job ID, Title, Description
- Employment Type (fulltime, parttime, internship)
- Job Type (Remote, OnSite, Hybrid)
- Salary Range (min, max, currency)
- Job Status (Active, Deactive)
- Recruiter Details (Name, Email)

---

## 🔒 **Authentication**

All endpoints require JWT token:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

Get token from login/register API.

---

## ❌ **Error Responses**

### **Unauthorized (401)**
```json
{
  "success": false,
  "message": "Unauthorized"
}
```

### **Invalid Job ID (400)**
```json
{
  "success": false,
  "message": "Invalid Job ID"
}
```

### **Server Error (500)**
```json
{
  "success": false,
  "message": "Failed to fetch applications"
}
```

---

## 💡 **Use Cases**

1. **Recruiter wants to see all applications** → `/api/applications/candidates`
2. **Recruiter wants to see who applied for specific job** → `/api/applications/job/:jobId`
3. **Candidate wants to see their application history** → `/api/applications/my-applications`

---

## 🎯 **Summary**

✅ **Simple & Clean API**
- Repository → Service → Controller → Routes
- Complete candidate + job details
- Easy to understand response

✅ **Flexible**
- Get all applications
- Filter by job
- Filter by candidate

✅ **Secure**
- JWT authentication required
- User-specific data for candidates

**Ready to use! 🚀**
