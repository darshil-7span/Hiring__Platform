# Postman Quick Reference

## 🚀 One-Minute Setup

1. **Import Collection**: `postman/Hiring_Platform_API.postman_collection.json`
2. **Import Environment**: `postman/Hiring_Platform_Development.postman_environment.json`
3. **Select Environment**: "Hiring Platform - Development" (top right dropdown)
4. **Start Server**: `npm run dev`
5. **Login**: Run "Auth → Login User" (token auto-saves ✨)
6. **Done!** All endpoints ready to test

---

## 📋 Endpoint Cheatsheet

| Method | Endpoint | Auth | Role | Description |
|--------|----------|------|------|-------------|
| **POST** | `/api/auth/register` | ❌ | Public | Register user |
| **POST** | `/api/auth/login` | ❌ | Public | Login (saves token) |
| **POST** | `/api/jobs` | ✅ | Recruiter | Create job |
| **GET** | `/api/jobs` | ❌ | Public | Get all jobs |
| **GET** | `/api/jobs/:id` | ❌ | Public | Get job details |
| **GET** | `/api/jobs/my-jobs` | ✅ | Recruiter | Get my jobs |
| **PATCH** | `/api/jobs/:id` | ✅ | Recruiter | Update job |
| **DELETE** | `/api/jobs/:id` | ✅ | Recruiter | Delete job |
| **GET** | `/api/jobs/search` | ❌ | Public | Search jobs |
| **GET** | `/api/jobs/filter` | ❌ | Public | Filter jobs |
| **GET** | `/api/candidate/profile` | ✅ | Candidate | Get profile |
| **PATCH** | `/api/candidate/profile` | ✅ | Candidate | Update profile |
| **POST** | `/api/candidate/apply` | ✅ | Candidate | Apply to job |
| **GET** | `/api/recruiter/profile` | ✅ | Recruiter | Get profile |
| **PATCH** | `/api/recruiter/profile` | ✅ | Recruiter | Update profile |
| **GET** | `/api/applications/candidates` | ✅ | Admin | All applications |
| **GET** | `/api/applications/job/:id` | ✅ | Recruiter | Job applications |
| **GET** | `/api/applications/my-applications` | ✅ | Candidate | My applications |

---

## 👥 Test Credentials

| Role | Email | Password |
|------|-------|----------|
| **Candidate** | `bob.candidate@email.com` | `Candidate@123` |
| **Recruiter** | `alice.recruiter@company.com` | `Recruiter@123` |
| **Admin** | `admin@hiringsystem.com` | `Admin@123` |

---

## 🎯 Common Use Cases

### Create and Get Job
```
1. Login as Recruiter
2. POST /api/jobs (create job)
3. GET /api/jobs/my-jobs (view your jobs)
```

### Apply to Job
```
1. Login as Candidate
2. GET /api/jobs (find job)
3. POST /api/candidate/apply (apply)
4. GET /api/applications/my-applications (check status)
```

### View Applications
```
1. Login as Recruiter
2. GET /api/applications/job/1 (see applicants)
```

---

## 🔧 Variables

- `{{base_url}}` - Server URL (default: `http://localhost:3000`)
- `{{auth_token}}` - JWT Token (auto-saved on login)

---

## ✨ Features

✅ 19 Complete Endpoints  
✅ Auto Token Management  
✅ Bearer Auth Pre-configured  
✅ Sample Data Included  
✅ Pagination Support  
✅ Filter & Search Ready  

---

**Need Help?** Check `postman/README.md` for detailed guide! 📚
