# 📋 Recruiter Profile API - Complete Examples

## 🚀 **Base URL**
```
http://localhost:5004/api/recruiter
```

---

## 1️⃣ **Get Recruiter Profile**

### **Request**
```http
GET http://localhost:5004/api/recruiter/profile
Authorization: Bearer YOUR_JWT_TOKEN
```

### **cURL**
```bash
curl -X GET http://localhost:5004/api/recruiter/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### **Response - Success (200)**
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
      "created_at": "2026-02-25T16:22:45.000Z",
      "updated_at": "2026-02-26T18:30:15.000Z"
    }
  }
}
```

### **Response - Profile Not Found (404)**
```json
{
  "success": false,
  "message": "Recruiter profile not found"
}
```

### **Response - Unauthorized (401)**
```json
{
  "success": false,
  "message": "Unauthorized"
}
```

---

## 2️⃣ **Update Recruiter Profile**

### **Request**
```http
PATCH http://localhost:5004/api/recruiter/profile
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

### **Body - Update All Fields**
```json
{
  "designation": "Senior HR Manager",
  "state_id": 1,
  "city_id": 1
}
```

### **Body - Update Only Designation**
```json
{
  "designation": "VP of Talent Acquisition"
}
```

### **Body - Update Only Location**
```json
{
  "state_id": 1,
  "city_id": 2
}
```

### **cURL - Full Update**
```bash
curl -X PATCH http://localhost:5004/api/recruiter/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "designation": "Senior HR Manager",
    "state_id": 1,
    "city_id": 1
  }'
```

### **Response - Success (200)**
```json
{
  "success": true,
  "message": "Profile updated successfully",
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
      "updated_at": "2026-02-26T18:45:30.000Z"
    }
  }
}
```

### **Response - Validation Error (400)**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "body.state_id",
      "message": "Expected number, received string"
    },
    {
      "field": "body.designation",
      "message": "String must contain at least 1 character(s)"
    }
  ]
}
```

### **Response - Profile Not Found (400)**
```json
{
  "success": false,
  "message": "Recruiter profile not found"
}
```

---

## 🧪 **Complete Testing Flow**

### **Step 1: Register as Recruiter**
```bash
curl -X POST http://localhost:5004/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Recruiter",
    "email": "johnrecruiter@example.com",
    "password": "Password123",
    "phone_number": "1234567890",
    "country_id": 1,
    "role_name": "recruiter"
  }'
```

**Save the `token` from response!**

### **Step 2: Get Profile (Empty Initially)**
```bash
curl -X GET http://localhost:5004/api/recruiter/profile \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### **Step 3: Update Profile**
```bash
curl -X PATCH http://localhost:5004/api/recruiter/profile \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "designation": "Senior Talent Acquisition Manager",
    "state_id": 1,
    "city_id": 1
  }'
```

### **Step 4: Get Updated Profile**
```bash
curl -X GET http://localhost:5004/api/recruiter/profile \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 📋 **Postman Collection**

### **1. Register Recruiter**
```
POST http://localhost:5004/api/auth/register
Body (JSON):
{
  "name": "Test Recruiter",
  "email": "testrecruiter@example.com",
  "password": "Password123",
  "phone_number": "9876543210",
  "country_id": 1,
  "role_name": "recruiter"
}
```

### **2. Login Recruiter**
```
POST http://localhost:5004/api/auth/login
Body (JSON):
{
  "email": "testrecruiter@example.com",
  "password": "Password123"
}
```

### **3. Get Profile**
```
GET http://localhost:5004/api/recruiter/profile
Headers:
  Authorization: Bearer {{token}}
```

### **4. Update Profile - Full**
```
PATCH http://localhost:5004/api/recruiter/profile
Headers:
  Authorization: Bearer {{token}}
  Content-Type: application/json
Body (JSON):
{
  "designation": "Senior HR Manager",
  "state_id": 1,
  "city_id": 1
}
```

### **5. Update Profile - Designation Only**
```
PATCH http://localhost:5004/api/recruiter/profile
Headers:
  Authorization: Bearer {{token}}
  Content-Type: application/json
Body (JSON):
{
  "designation": "VP of Human Resources"
}
```

### **6. Update Profile - Location Only**
```
PATCH http://localhost:5004/api/recruiter/profile
Headers:
  Authorization: Bearer {{token}}
  Content-Type: application/json
Body (JSON):
{
  "state_id": 1,
  "city_id": 2
}
```

---

## 🎯 **Field Validations**

### **designation**
- Type: `string`
- Required: No (optional)
- Min Length: 1 character
- Max Length: 255 characters
- Examples: 
  - ✅ "HR Manager"
  - ✅ "Senior Talent Acquisition Specialist"
  - ✅ "VP of Human Resources"
  - ❌ "" (empty string)

### **state_id**
- Type: `number` (integer)
- Required: No (optional)
- Must be: Positive integer
- Examples:
  - ✅ 1
  - ✅ 5
  - ❌ 0
  - ❌ -1
  - ❌ "1" (string)

### **city_id**
- Type: `number` (integer)
- Required: No (optional)
- Must be: Positive integer
- Examples:
  - ✅ 1
  - ✅ 10
  - ❌ 0
  - ❌ -5
  - ❌ "2" (string)

---

## 🗺️ **Location IDs (From Seed Data)**

### **States**
```
Gujarat: state_id = 1
```

### **Cities**
```
Ahmedabad: city_id = 1 (state_id: 1)
```

---

## 🔒 **Authentication**

All recruiter profile endpoints require:
1. **JWT Token** - Get from login/register response
2. **Recruiter Role** - User must be registered as recruiter
3. **Active Account** - User account must be active

**Token Format:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoi...
```

---

## ❌ **Common Errors**

### **Missing Authorization**
```json
{
  "success": false,
  "message": "Unauthorized"
}
```
**Fix:** Add `Authorization: Bearer YOUR_TOKEN` header

### **Invalid Token**
```json
{
  "success": false,
  "message": "Invalid token"
}
```
**Fix:** Login again to get fresh token

### **Wrong Data Type**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "body.state_id",
      "message": "Expected number, received string"
    }
  ]
}
```
**Fix:** Send `state_id: 1` not `state_id: "1"`

### **Profile Not Found**
```json
{
  "success": false,
  "message": "Recruiter profile not found"
}
```
**Fix:** Profile is auto-created on registration. Re-register if missing.

---

## 📊 **Response Structure**

### **Success Response**
```typescript
{
  success: true,
  message: string,
  data: {
    user: {
      id: number,
      name: string,
      email: string,
      phone_number: string
    },
    profile: {
      designation: string | null,
      state_id: number | null,
      state_name: string | null,
      city_id: number | null,
      city_name: string | null,
      created_at: Date,
      updated_at: Date
    }
  }
}
```

### **Error Response**
```typescript
{
  success: false,
  message: string,
  errors?: Array<{
    field: string,
    message: string
  }>
}
```

---

## 🎯 **Testing Checklist**

- [ ] Register as recruiter
- [ ] Login and get token
- [ ] Get empty profile (designation, state_id, city_id all null)
- [ ] Update profile with all fields
- [ ] Verify database has correct values
- [ ] Get updated profile and verify response
- [ ] Update only designation
- [ ] Update only location (state_id, city_id)
- [ ] Test with invalid data (string instead of number)
- [ ] Test without token (should fail)
- [ ] Test with candidate token (should work if they're recruiter)

---

## 💡 **Tips**

1. **Partial Updates** - You can update any field independently
2. **Location** - Both state_id and city_id should be from same state
3. **Token Expiry** - JWT expires in 7 days (set in .env)
4. **Profile Auto-Created** - No need to manually create profile
5. **No Delete** - To "delete" profile, just set fields to null

---

**Ready to test! 🚀**
