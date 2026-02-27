# 📋 Profile Management - Complete Guide

## 🎯 **What We Built**

When a user registers:
1. **User created** → `users` table
2. **Profile auto-created** → 
   - If `candidate` → Entry in `candidate_profile` table
   - If `recruiter` → Entry in `recruiter_profile` table
3. **Update profile later** → User can add more details via API

---

## 🏗️ **Architecture - Simple & Clean**

```
Repository (DAO) → Service (Business Logic) → Controller (HTTP) → Routes
```

---

## 📁 **Files Created**

### **1. Repositories (Database Layer)**
- ✅ `src/repositories/candidate.repository.ts` - Candidate profile DB operations
- ✅ `src/repositories/recruiter.repository.ts` - Recruiter profile DB operations

### **2. Services (Business Logic)**
- ✅ `src/services/candidate.service.ts` - Candidate profile logic
- ✅ `src/services/recruiter.service.ts` - Recruiter profile logic

### **3. Controllers (HTTP Layer)**
- ✅ `src/controllers/candidate/candidate.controller.ts` - Added profile methods
- ✅ `src/controllers/recruiter/recruiter.controller.ts` - New recruiter controller

### **4. Schemas (Validation)**
- ✅ `src/schemas/candidate.schema.ts` - Candidate profile validation
- ✅ `src/schemas/recruiter.schema.ts` - Recruiter profile validation

### **5. Routes**
- ✅ `src/routes/candidate/candidate.routes.ts` - Updated with profile routes
- ✅ `src/routes/recruiter/recruiter.routes.ts` - New recruiter routes
- ✅ `src/routes/index.ts` - Updated main router

---

## 🚀 **API Endpoints**

### **Candidate Profile APIs**

#### **1. Get Candidate Profile**
```
GET /api/candidate/profile
Authorization: Bearer <JWT_TOKEN>
```

**Response:**
```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "user": {
      "id": 3,
      "name": "John Candidate",
      "email": "john@example.com",
      "phone_number": "1234567890"
    },
    "profile": {
      "state_id": 1,
      "state_name": "Gujarat",
      "city_id": 1,
      "city_name": "Ahmedabad",
      "qualification": "B.Tech Computer Science",
      "experience_years": 3,
      "resume_url": "https://example.com/resume.pdf",
      "created_at": "2026-02-26T...",
      "updated_at": "2026-02-26T..."
    }
  }
}
```

#### **2. Update Candidate Profile**
```
PATCH /api/candidate/profile
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Body:**
```json
{
  "state_id": 1,
  "city_id": 1,
  "qualification": "B.Tech Computer Science",
  "experience_years": 3,
  "resume_url": "https://example.com/resume.pdf"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": { ... },
    "profile": { ... }
  }
}
```

---

### **Recruiter Profile APIs**

#### **1. Get Recruiter Profile**
```
GET /api/recruiter/profile
Authorization: Bearer <JWT_TOKEN>
```

**Response:**
```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "user": {
      "id": 2,
      "name": "Alice Recruiter",
      "email": "alice@example.com",
      "phone_number": "9876543210"
    },
    "profile": {
      "designation": "Senior HR Manager",
      "state_id": 1,
      "state_name": "Gujarat",
      "city_id": 1,
      "city_name": "Ahmedabad",
      "created_at": "2026-02-26T...",
      "updated_at": "2026-02-26T..."
    }
  }
}
```

#### **2. Update Recruiter Profile**
```
PATCH /api/recruiter/profile
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Body:**
```json
{
  "designation": "Senior HR Manager",
  "state_id": 1,
  "city_id": 1
}
```

**Response:**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": { ... },
    "profile": { ... }
  }
}
```

---

## 🧪 **Testing with cURL**

### **Step 1: Register as Candidate**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Candidate",
    "email": "testcandidate@example.com",
    "password": "Password123",
    "phone_number": "1234567890",
    "country_id": 1,
    "role_name": "candidate"
  }'
```
**Save the `token` from response!**

### **Step 2: Get Candidate Profile**
```bash
curl -X GET http://localhost:3000/api/candidate/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### **Step 3: Update Candidate Profile**
```bash
curl -X PATCH http://localhost:3000/api/candidate/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "state_id": 1,
    "city_id": 1,
    "qualification": "B.Tech Computer Science",
    "experience_years": 3,
    "resume_url": "https://example.com/resume.pdf"
  }'
```

### **Step 4: Register as Recruiter**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Recruiter",
    "email": "testrecruiter@example.com",
    "password": "Password123",
    "phone_number": "9876543210",
    "country_id": 1,
    "role_name": "recruiter"
  }'
```

### **Step 5: Update Recruiter Profile**
```bash
curl -X PATCH http://localhost:3000/api/recruiter/profile \
  -H "Authorization: Bearer RECRUITER_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "designation": "Senior HR Manager",
    "state_id": 1,
    "city_id": 1
  }'
```

---

## 🔄 **How It Works - Step by Step**

### **Registration Flow:**
```
1. User registers with role_name: "candidate" or "recruiter"
   ↓
2. Auth Service creates user in users table
   ↓
3. Auth Service auto-creates profile:
   - candidate → candidate_profile table (empty fields)
   - recruiter → recruiter_profile table (empty fields)
   ↓
4. User gets JWT token
```

### **Profile Update Flow:**
```
1. User sends PATCH request with JWT token
   ↓
2. Auth middleware verifies token, extracts user_id
   ↓
3. Validation middleware checks data
   ↓
4. Controller extracts user_id from req.user
   ↓
5. Service calls repository to update profile
   ↓
6. Repository updates database
   ↓
7. Updated profile returned to user
```

---

## 🛡️ **Security Features**

1. ✅ **JWT Authentication** - Must be logged in to access/update profile
2. ✅ **User Isolation** - Can only access own profile (from JWT token)
3. ✅ **Validation** - All fields validated with Zod
4. ✅ **Type Safety** - Full TypeScript type checking

---

## 📊 **Database Structure**

### **users table**
- id (Primary Key)
- name, email, password
- country_id (Foreign Key)
- role_id (Foreign Key)
- is_active

### **candidate_profile table**
- user_id (Primary Key + Foreign Key to users)
- state_id, city_id
- qualification
- experience_years
- resume_url
- created_at, updated_at

### **recruiter_profile table**
- user_id (Primary Key + Foreign Key to users)
- designation
- state_id, city_id
- created_at, updated_at

---

## ✅ **What's Done**

- ✅ Auto-create profile on registration
- ✅ Get candidate profile API
- ✅ Update candidate profile API
- ✅ Get recruiter profile API
- ✅ Update recruiter profile API
- ✅ JWT authentication
- ✅ Zod validation
- ✅ Clean layered architecture
- ✅ Type-safe with TypeScript

---

## 🎯 **Summary**

**Simple & Clean:**
1. User registers → Profile auto-created (empty)
2. User logs in → Gets JWT token
3. User updates profile → Fills in details

**No complex code! Just:**
- Repository → Database operations
- Service → Business logic
- Controller → HTTP handling
- Routes → API endpoints

**Easy to test, easy to maintain!** 🚀
