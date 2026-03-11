# Postman API Collection - Hiring Platform

## 📦 Quick Setup

### Step 1: Import Collection
1. Open Postman
2. Click **Import** button (top left)
3. Drag and drop or browse to: `postman/Hiring_Platform_API.postman_collection.json`
4. Click **Import**

### Step 2: Import Environment
1. Click **Import** again
2. Import: `postman/Hiring_Platform_Development.postman_environment.json`
3. Select **Hiring Platform - Development** environment from dropdown (top right)

---

## 🚀 Getting Started

### 1. Start Your Server
```bash
npm run dev
```

### 2. Test Health Check
Run: `Health Check` request
- Should return: `{ "success": true, "message": "Server is running" }`

### 3. Login to Get Token
Run: `Auth → Login User`
- Uses seeded credentials: `bob.candidate@email.com` / `Candidate@123`
- **Token auto-saves** to collection variables! 🎉
- All authenticated requests will now work

---

## 📋 API Endpoints Overview

### 🔐 Auth (2 endpoints)
- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login (auto-saves token)

### 💼 Jobs (8 endpoints)
- **POST** `/api/jobs` - Create job (Recruiter)
- **GET** `/api/jobs` - Get all jobs (paginated)
- **GET** `/api/jobs/:id` - Get job details
- **GET** `/api/jobs/my-jobs` - Get my posted jobs (Recruiter)
- **PATCH** `/api/jobs/:id` - Update job (Recruiter)
- **DELETE** `/api/jobs/:id` - Delete job (Recruiter)
- **GET** `/api/jobs/search?q=` - Search jobs
- **GET** `/api/jobs/filter?...` - Filter jobs

### 👤 Candidate (3 endpoints)
- **GET** `/api/candidate/profile` - Get my profile
- **PATCH** `/api/candidate/profile` - Update my profile
- **POST** `/api/candidate/apply` - Apply to job

### 🎯 Recruiter (2 endpoints)
- **GET** `/api/recruiter/profile` - Get my profile
- **PATCH** `/api/recruiter/profile` - Update my profile

### 📝 Applications (3 endpoints)
- **GET** `/api/applications/candidates` - All applications (Admin)
- **GET** `/api/applications/job/:jobId` - Job applications (Recruiter)
- **GET** `/api/applications/my-applications` - My applications (Candidate)

---

## 👥 Seeded Test Users

### Candidate
```
Email: bob.candidate@email.com
Password: Candidate@123
```

### Recruiter
```
Email: alice.recruiter@company.com
Password: Recruiter@123
```

### Admin
```
Email: admin@hiringsystem.com
Password: Admin@123
```

---

## 🎯 Testing Flow

### Scenario 1: Candidate Flow
1. **Login** as candidate → Token saved
2. **Get Profile** → See candidate details
3. **Get All Jobs** → Browse available jobs
4. **Apply to Job** → Submit application
5. **Get My Applications** → Check application status

### Scenario 2: Recruiter Flow
1. **Login** as recruiter → Token saved
2. **Get Profile** → See recruiter details
3. **Create Job** → Post new job
4. **Get My Jobs** → View posted jobs
5. **Get Applications for Job** → See who applied

### Scenario 3: Admin Flow
1. **Login** as admin → Token saved
2. **Get All Applications** → View all applications across platform

---

## ⚡ Auto-Save Token Feature

The Login request has a **test script** that automatically saves the JWT token:

```javascript
if (pm.response.code === 200) {
    const response = pm.response.json();
    if (response.data && response.data.token) {
        pm.collectionVariables.set("auth_token", response.data.token);
    }
}
```

**Benefits:**
- ✅ No manual copy-paste of tokens
- ✅ All authenticated requests use `{{auth_token}}` automatically
- ✅ Just login and start testing!

---

## 🔧 Configuration

### Change Base URL
**Option 1:** Edit collection variable
- Click collection → Variables tab
- Change `base_url` value

**Option 2:** Edit environment
- Select environment → Edit
- Change `base_url` value

### Production Environment
Create new environment file:
```json
{
  "name": "Hiring Platform - Production",
  "values": [
    {
      "key": "base_url",
      "value": "https://api.yourcompany.com"
    }
  ]
}
```

---

## 📊 Example Requests

### Filter Jobs Example
```
GET /api/jobs/filter?employment_type=fulltime&job_type=Hybrid&min_salary=800000&max_salary=1500000&state_id=1&page=1&limit=10
```

### Search Jobs Example
```
GET /api/jobs/search?q=developer&page=1&limit=10
```

### Create Job Example
```json
POST /api/jobs
{
  "job_title": "Senior Full Stack Developer",
  "description": "Looking for experienced developer",
  "employment_type": "fulltime",
  "job_type": "Hybrid",
  "salary_min": 1000000,
  "salary_max": 1800000,
  "currency_id": 1,
  "min_exp": 3,
  "max_exp": 7,
  "state_id": 1,
  "city_id": 1,
  "skill_ids": [1, 2, 4]
}
```

---

## 🎨 Collection Features

✅ **19 API Endpoints** - Complete coverage  
✅ **Auto Token Management** - Login saves token automatically  
✅ **Bearer Auth Pre-configured** - All protected routes ready  
✅ **Environment Variables** - Easy server switching  
✅ **Detailed Descriptions** - Every endpoint documented  
✅ **Sample Request Bodies** - Ready-to-use examples  
✅ **Query Parameters** - Pagination, filters, search  

---

## 🐛 Troubleshooting

### "Unauthorized" Error
- Make sure you've logged in (token saved)
- Check token in Variables tab
- Token might be expired - login again

### "404 Not Found"
- Verify server is running on `http://localhost:3000`
- Check `base_url` in environment/collection variables

### "Network Error"
- Server not started? Run `npm run dev`
- Port conflict? Check if port 3000 is available

---

## 📝 Tips

1. **Use Folders** - Requests organized by feature (Auth, Jobs, etc.)
2. **Check Descriptions** - Each request has usage notes
3. **Test Scripts** - Login auto-saves token
4. **Variables** - Use `{{base_url}}` and `{{auth_token}}`
5. **Environments** - Switch between dev/staging/production easily

---

## 🎉 Ready to Test!

1. ✅ Import collection
2. ✅ Import environment
3. ✅ Start server (`npm run dev`)
4. ✅ Login (token auto-saves)
5. ✅ Start testing endpoints!

**Happy Testing! 🚀**
