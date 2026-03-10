# Zod Requirements – Hiring Platform

This document defines the **required validation rules and patterns** for all APIs in the Hiring Platform.  
Use it as the single source of truth when creating or updating schemas in `src/schemas/`.

---

## 1. Where Zod Schemas Live

- **Location**: `src/schemas/*.schema.ts`
- **Common files**:
  - `auth.schema.ts` – auth endpoints
  - `job.schema.ts` – job CRUD and browsing
  - `application.schema.ts` – candidate applications
  - `common.schema.ts` – shared patterns (pagination, ids, standard responses)

All new endpoints **must** add or reuse a schema in this folder.

---

## 2. Required Zod Schema Shape for Routes

Every route must use one top-level Zod object that matches the Express `req` structure:

- `body` – JSON body
- `params` – URL params (e.g. `:id`)
- `query` – query string values

Example pattern (not tied to any specific route):

```ts
export const someRouteSchema = z.object({
  body: z
    .object({
      // body fields here
    })
    .optional(),
  params: z
    .object({
      // params here
    })
    .optional(),
  query: z
    .object({
      // query here
    })
    .optional(),
});
```

**Requirements**:

- If a part of `req` is used (`body`, `params`, or `query`), it **must** be present in the schema.
- All required fields must be explicitly marked as required (no implicit assumptions in controllers).
- For optional fields, use `.optional()`/`.nullable()` instead of relying on `any` in controllers.

---

## 3. Validation Middleware Usage

- All routes must use `validate(schema)` from `src/middlewares/validate.middleware.ts`.
- Controllers **must not** read from `req.body`, `req.params`, or `req.query` unless the route passed through validation.
- If a route cannot use validation (rare), the controller must document why in code comments and should be treated as temporary.

Route usage pattern:

```ts
router.post(
  "/some-path",
  validate(someRouteSchema),
  someController.handler,
);
```

---

## 4. Standard Patterns to Reuse

Prefer reusing patterns from `common.schema.ts`:

- **IDs**:
  - Use a shared `idParamSchema` for `:id` routes (numeric IDs only).
- **Pagination**:
  - Use a shared `paginationSchema` (`page`, `limit`, `offset`) for list endpoints.
- **Enums**:
  - Align with Prisma enums for:
    - `EmploymentType` → `["fulltime", "parttime", "internship"]`
    - `JobType` → `["Remote", "OnSite", "Hybrid"]`
    - `JobStatus` → `["Active", "Deactive"]`
    - `ApplicationStatus` → `["Applied", "Shortlisted", "Rejected", "Hired"]`

When Prisma enums change, this document and the corresponding Zod enums must be updated together.

---

## 5. Error Message Requirements

Validation errors must follow the API error structure defined in `API_REQUEST_RESPONSE_STRUCTURE.md`:

- Top-level:
  - `success: false`
  - `message: "Validation failed"`
  - `errors: Array<{ field: string; message: string }>`

Zod schemas should:

- Provide **clear, user-friendly messages** (no raw regex or technical wording).
- Map nested paths to `field` names like:
  - `body.email`
  - `query.page`
  - `params.id`

---

## 6. Rules for New Endpoints

When adding a new endpoint:

1. **Add/extend schema** in the correct `*.schema.ts` file.
2. **Wire validation** into the route with `validate(schema)`.
3. **Never** trust raw `req` data in controllers; rely on validated, typed input.
4. Ensure:
   - All input types match database and business rules.
   - Optional fields are truly optional in business logic.
   - Enum fields use the canonical enums from this document.

---

## 7. Relationship to Other Docs

- For a full tutorial-style explanation and examples, see `ZOD_GUIDE.md`.
- For the standard API error/response envelope, see `API_REQUEST_RESPONSE_STRUCTURE.md`.

