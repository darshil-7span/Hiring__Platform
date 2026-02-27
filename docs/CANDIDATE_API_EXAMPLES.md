# 📋 Candidate Profile API - Complete Examples

## 🚀 **Base URL**
```
http://localhost:5004/api/candidate
```

---

## 1️⃣ **Get Candidate Profile**

### **Request**
```http
GET http://localhost:5004/api/candidate/profile
Authorization: Bearer YOUR_JWT_TOKEN
```

### **cURL**
```bash
curl -X GET http://localhost:5004/api/candidate/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### **Response - Success (200)**
```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "user": {
      "id": 7,
      "name": "John Candidate",
      "email": "john@example.com",
      "phone_number": "1234567890"
    },
    "profile": {
      "state_id": 1,
      "state_name": "Gujarat",
      "city_id": 1,
      "city_name": "Ahmedabad",
      "qualification": "B.Tech CS",
      "experience_years": 3,
      "resume_url": "https://example.com/resume.pdf",
      "created_at": "2026-02-26T18:02:30.000Z",
      "updated_at": "2026-02-26T18:45:20.000Z"
    }
  }
}
```

---

## 2️⃣ **Update Candidate Profile**

### **Request**
```http
PATCH http://localhost:5004/api/candidate/profile
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

### **Body - Update All Fields**
```json
{
  "state_id": 1,
  "city_id": 1,
  "qualification": "B.Tech Computer Science",
  "experience_years": 3,
  "resume_url": "https://example.com/resume.pdf"
}
```

### **Body - Update Only Qualification**
```json
{
  "qualification": "M.Tech Computer Science"
}
```

### **Body - Update Only Experience**
```json
{
  "experience_years": 5
}
```

### **Body - Update Only Location**
```json
{
  "state_id": 1,
  "city_id": 1
}
```

### **Body - Update Resume**
```json
{
  "resume_url": "https://drive.google.com/myresume.pdf"
}
```

### **cURL - Full Update**
```bash
curl -X PATCH http://localhost:5004/api/candidate/profile \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "state_id": 1,
    "city_id": 1,
    "qualification": "B.Tech Computer Science",
    "experience_years": 3,
    "resume_url": "https://example.com/resume.pdf"
  }'
```

### **Response - Success (200)**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": 7,
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
      "updated_at": "2026-02-26T19:00:15.000Z"
    }
  }
}
```

---

## 🧪 **Complete Testing Flow**

### **Step 1: Register as Candidate**
```bash
curl -X POST http://localhost:5004/api/auth/register \
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

### **Step 2: Get Profile (Empty Initially)**
```bash
curl -X GET http://localhost:5004/api/candidate/profile \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### **Step 3: Update Profile**
```bash
curl -X PATCH http://localhost:5004/api/candidate/profile \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "state_id": 1,
    "city_id": 1,
    "qualification": "B.Tech Computer Science",
    "experience_years": 3,
    "resume_url": "https://example.com/resume.pdf"
  }'
```

---

## 📋 **Postman Examples**

### **1. Register Candidate**
```
POST http://localhost:5004/api/auth/register
Body:
{
  "name": "John Candidate",
  "email": "john@example.com",
  "password": "Password123",
  "phone_number": "1234567890",
  "country_id": 1,
  "role_name": "candidate"
}
```

### **2. Get Profile**
```
GET http://localhost:5004/api/candidate/profile
Headers:
  Authorization: Bearer {{token}}
```

### **3. Update Complete Profile**
```
PATCH http://localhost:5004/api/candidate/profile
Headers:
  Authorization: Bearer {{token}}
Body:
{
  "state_id": 1,
  "city_id": 1,
  "qualification": "B.Tech Computer Science",
  "experience_years": 3,
  "resume_url": "https://example.com/resume.pdf"
}
```

---

## 🎯 **Field Validations**

### **state_id**
- Type: `number` (integer)
- Optional
- Must be positive
- Examples: ✅ 1, ❌ 0, ❌ "1"

### **city_id**
- Type: `number` (integer)
- Optional
- Must be positive
- Examples: ✅ 1, ❌ -1, ❌ "1"

### **qualification**
- Type: `string`
- Optional
- Min: 1 character
- Max: 255 characters
- Examples:
  - ✅ "B.Tech Computer Science"
  - ✅ "M.Tech CS"
  - ❌ "" (empty)

### **experience_years**
- Type: `number` (integer)
- Optional
- Range: 0-50
- Examples:
  - ✅ 0 (Fresher)
  - ✅ 3
  - ✅ 10
  - ❌ -1
  - ❌ 100
  - ❌ "3" (string)

### **resume_url**
- Type: `string` (URL)
- Optional
- Must be valid URL format
- Examples:
  - ✅ "https://example.com/resume.pdf"
  - ✅ "https://drive.google.com/file/123"
  - ❌ "not-a-url"
  - ❌ "resume.pdf"

---

## 🔒 **Authentication Required**

All endpoints need JWT token:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## ✅ **Ready to Test!**

**Postman Body (Copy-Paste):**
```json
{
  "state_id": 1,
  "city_id": 1,
  "qualification": "B.Tech Computer Science",
  "experience_years": 3,
  "resume_url": "https://example.com/resume.pdf"
}
```

🚀 **All set!**
