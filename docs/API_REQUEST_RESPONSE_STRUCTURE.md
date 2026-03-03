# API Request & Response Structure – Hiring Platform

This document defines the **standard request/response and error format** that must be followed by every API endpoint in the Hiring Platform.

It is the single source of truth for:

- Response envelope structure
- Error structure and fields
- Status code usage

---

## 1. Standard Success Response

Every successful API must return a JSON object with this envelope:

```json
{
  "success": true,
  "message": "Human‑readable message",
  "data": { }
}
```

- **`success`**: `true` on success.
- **`message`**: short, human-readable description (suitable for UI display).
- **`data`**: route-specific payload.

Route-specific docs in `API_ROUTES_REFERENCE.md` define the exact `data` shape per endpoint.

---

## 2. Standard Error Response

All errors must return:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "optional.path",
      "message": "Validation or domain error message"
    }
  ]
}
```

Fields:

- **`success`**: always `false` for errors.
- **`message`**:
  - High-level description (e.g. `"Validation failed"`, `"Unauthorized"`, `"Job not found"`).
- **`errors`** (optional):
  - Present for validation or field-level problems.
  - Each item:
    - `field`: string path to the failing field (e.g. `"body.email"`, `"params.id"`, `"query.page"`).
    - `message`: clear, user-friendly explanation.

For errors that are purely global (e.g. `"Unauthorized"`), `errors` may be omitted.

---

## 3. Status Codes & Expected Shapes

### 3.1 200 OK

- Usage:
  - Successful `GET`, `PATCH`, or other non-creation operations.
- Shape:

```json
{
  "success": true,
  "message": "Resource retrieved/updated successfully",
  "data": { }
}
```

### 3.2 201 Created

- Usage:
  - Successful `POST` that creates a resource (e.g. register, create job, apply for job).
- Shape:

```json
{
  "success": true,
  "message": "Resource created successfully",
  "data": {
    "id": 123,
    "...": "..."
  }
}
```

### 3.3 400 Bad Request (Validation / Domain Errors)

- Usage:
  - Zod validation failures.
  - Business-rule failures (e.g. duplicate application, job inactive).
- Shape:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "body.email",
      "message": "Invalid email format"
    }
  ]
}
```

For domain errors:

```json
{
  "success": false,
  "message": "You have already applied for this job"
}
```

### 3.4 401 Unauthorized

- Usage:
  - Missing or invalid JWT token on protected routes.
- Typical messages:
  - `"No token provided"`
  - `"Invalid or expired token"`
  - `"Unauthorized"`
- Shape:

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

### 3.5 403 Forbidden

- Usage:
  - Authenticated user lacks permission or ownership (e.g. recruiter updating another recruiter’s job).
- Example message:
  - `"You are not authorized to update this job"`
- Shape:

```json
{
  "success": false,
  "message": "You are not authorized to perform this action"
}
```

### 3.6 404 Not Found

- Usage:
  - Resource not found (job, profile, application, etc.).
- Example messages:
  - `"Job not found"`
  - `"Recruiter profile not found"`
- Shape:

```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 3.7 409 Conflict (Optional)

- Usage:
  - Conflicting state (e.g. duplicate constraints that should be surfaced to client).
- Example:
  - Duplicate application if modeled as conflict.

```json
{
  "success": false,
  "message": "You have already applied for this job"
}
```

### 3.8 500 Internal Server Error

- Usage:
  - Unexpected server error.
- Shape:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

Stack traces or internal details **must not** be exposed.

---

## 4. Request Structure Conventions

Although Express accepts anything, our APIs follow these conventions:

- **JSON only** for request bodies:
  - `Content-Type: application/json`
- **JWT Auth**:
  - Header: `Authorization: Bearer <JWT_TOKEN>`
  - Payload fields: `userId`, `email`, `role`
- **Query parameters**:
  - Received as strings, coerced/validated via Zod (e.g. `page`, `limit`, `offset`, filters).
- **URL params**:
  - Exposed as strings but validated as numeric IDs when needed.

All of the above must be validated using Zod schemas as specified in `ZOD_REQUIREMENTS.md`.

---

## 5. Mapping Zod Errors to API Errors

When `validate(schema)` catches Zod errors:

- Combine them into the standard error structure:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "body.email",
      "message": "Invalid email format"
    },
    {
      "field": "body.password",
      "message": "Password is required"
    }
  ]
}
```

Rules:

- Use human-friendly `message` text (no raw Zod internals).
- `field` must match the logical path so frontend can highlight fields correctly.

---

## 6. Relationship to Other Docs

- **Route-specific payloads** (what goes into `data`) are described in `API_ROUTES_REFERENCE.md`.
- **Validation rules** for requests are governed by `ZOD_REQUIREMENTS.md` and the schemas under `src/schemas/`.

