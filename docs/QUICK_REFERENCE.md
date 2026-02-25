# 🎯 Hiring Platform - Quick Reference

## 👥 Two User Types
1. **Candidate** - Applies for jobs
2. **Recruiter** - Posts jobs

---

## ✅ Must-Have Features

### 1️⃣ Authentication
- ✅ Register (choose role: Candidate/Recruiter)
- ✅ Login (get JWT token)

### 2️⃣ Recruiter Can:
- ✅ Post job (title, description, salary, location)
- ✅ View own posted jobs
- ✅ Delete own jobs

### 3️⃣ Candidate Can:
- ✅ View all jobs
- ✅ Apply for job (with resume link)
- ✅ View applied jobs

### 4️⃣ Application Rules
- ✅ No duplicate applications (one per job)
- ✅ Resume as URL string (not file upload)

### 5️⃣ Filters (Bonus)
- ✅ Filter by location
- ✅ Filter by salary range

---

## 🛣️ API Endpoints

### Auth
```
POST /api/auth/register   - Register user
POST /api/auth/login      - Login user
```

### Jobs (Candidate)
```
GET  /api/jobs            - View all jobs (with filters)
```

### Jobs (Recruiter)
```
POST   /api/jobs          - Create job
GET    /api/jobs/my-jobs  - View own jobs
DELETE /api/jobs/:id      - Delete job
```

### Applications (Candidate)
```
POST /api/applications                - Apply for job
GET  /api/applications/my-applications - View my applications
```

---

## 🔒 Who Can Do What?

| Action | Candidate | Recruiter |
|--------|-----------|-----------|
| Register/Login | ✅ | ✅ |
| View Jobs | ✅ | ❌ |
| Apply for Job | ✅ | ❌ |
| View My Applications | ✅ | ❌ |
| Post Job | ❌ | ✅ |
| View My Jobs | ❌ | ✅ |
| Delete Job | ❌ | ✅ |

---

## 📝 Implementation Checklist

### Phase 1: Auth
- [ ] Register endpoint (with role selection)
- [ ] Login endpoint (return JWT)
- [ ] Auth middleware (verify JWT)
- [ ] Role middleware (check Candidate/Recruiter)

### Phase 2: Recruiter Features
- [ ] POST /api/jobs (create job)
- [ ] GET /api/jobs/my-jobs (view own jobs)
- [ ] DELETE /api/jobs/:id (delete own job)

### Phase 3: Candidate Features
- [ ] GET /api/jobs (view all jobs)
- [ ] POST /api/applications (apply for job)
- [ ] GET /api/applications/my-applications (view applied jobs)
- [ ] Duplicate check (prevent re-applying)

### Phase 4: Filters (Bonus)
- [ ] Filter by location (`?locationId=1`)
- [ ] Filter by salary (`?salaryMin=50000&salaryMax=100000`)

---

## 🚀 Quick Start

1. **Read full requirements:** `PROJECT_REQUIREMENTS.md`
2. **Follow Zod validation:** `ZOD_README.md`
3. **Copy examples from:** `src/controllers/auth/auth.controller.example.ts`
4. **Use schemas from:** `src/schemas/`

---

## 📊 Database Tables Needed
- ✅ User (already exists)
- ✅ Role (already exists)
- ✅ JobPost (already exists)
- ✅ Application (already exists)
- ✅ Location tables (already exists)
- ✅ Skill tables (already exists)

---

## 🎯 Success = When All These Work:

1. ✅ Register as Candidate or Recruiter
2. ✅ Login and get JWT token
3. ✅ Recruiter posts job
4. ✅ Candidate views jobs
5. ✅ Candidate applies (cannot apply twice)
6. ✅ Candidate views applied jobs
7. ✅ Recruiter views/deletes own jobs
8. ✅ Filters work (location + salary)

---

**Full Details:** See `PROJECT_REQUIREMENTS.md`
