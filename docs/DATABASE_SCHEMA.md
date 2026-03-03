# Database Schema – Hiring Platform

This document summarizes the **logical database schema** for the Hiring Platform based on `prisma/schema.prisma`.

Underlying database: **PostgreSQL**  
ORM: **Prisma**

---

## 1. Enums

- **`CurrencyName`**: `Indian`, `USA`
- **`CurrencyCode`**: `INR`, `USD`
- **`CurrencySymbol`**: `RUPEE` (`₹`), `DOLLAR` (`$`)
- **`EmploymentType`**: `fulltime`, `parttime`, `internship`
- **`JobType`**: `Remote`, `OnSite`, `Hybrid`
- **`JobStatus`**: `Active`, `Deactive`
- **`ApplicationStatus`**: `Applied`, `Shortlisted`, `Rejected`, `Hired`

These enums must stay in sync with any frontend filters and Zod enums.

---

## 2. Core Tables

### 2.1 `roles` (`Role` model)

- `id` – `Int`, PK, auto-increment
- `role_name` – `String`, unique (e.g. `"candidate"`, `"recruiter"`)
- `created_at`, `updated_at` – timestamps
- Relations:
  - `users` – one-to-many with `users.role_id`

### 2.2 `users` (`User` model)

- `id` – `BigInt`, PK, auto-increment
- `name` – `String?`
- `email` – `String`, unique
- `password` – `String?` (hashed)
- `phone_number` – `String?` (`VARCHAR(15)`)
- `country_id` – `Int?` FK → `countries.id`
- `role_id` – `Int` FK → `roles.id`
- `is_active` – `Boolean?`, default `true`
- `created_at`, `updated_at` – timestamps

Relations:

- `role` – many-to-one `roles`
- `country` – many-to-one `countries`
- `candidate_profile` – optional one-to-one `candidate_profile.user_id`
- `recruiter_profile` – optional one-to-one `recruiter_profile.user_id`
- `job_posts` – one-to-many `job_post.recruiter_id`
- `applications` – one-to-many `applications.candidate_id`
- `candidate_skills` – one-to-many `candidate_skills.candidate_id`

---

## 3. Location & Currency Tables

### 3.1 `countries` (`Country` model)

- `id` – `Int`, PK, auto-increment
- `name` – `String`, unique
- `iso_code` – `String?`, unique, up to 10 chars
- `created_at`, `updated_at` – timestamps
- Relations:
  - `states` – one-to-many `states.country_id`
  - `users` – one-to-many `users.country_id`

### 3.2 `states` (`State` model)

- `id` – `Int`, PK, auto-increment
- `country_id` – `Int` FK → `countries.id`
- `name` – `String`
- `created_at`, `updated_at` – timestamps

Relations:

- `country` – many-to-one `countries`
- `cities` – one-to-many `cities.state_id`
- `candidate_profiles` – one-to-many `candidate_profile.state_id`
- `recruiter_profiles` – one-to-many `recruiter_profile.state_id`
- `job_posts` – one-to-many `job_post.state_id`

### 3.3 `cities` (`City` model)

- `id` – `Int`, PK, auto-increment
- `state_id` – `Int` FK → `states.id`
- `name` – `String`
- `created_at`, `updated_at` – timestamps

Relations:

- `state` – many-to-one `states`
- `candidate_profiles` – one-to-many `candidate_profile.city_id`
- `recruiter_profiles` – one-to-many `recruiter_profile.city_id`
- `job_posts` – one-to-many `job_post.city_id`

### 3.4 `currencies` (`Currency` model)

- `id` – `Int`, PK, auto-increment
- `name` – `CurrencyName` enum
- `code` – `CurrencyCode` enum
- `symbol` – `CurrencySymbol` enum
- `created_at`, `updated_at` – timestamps
- Relations:
  - `job_posts` – one-to-many `job_post.currency_id`

---

## 4. Skills & Profiles

### 4.1 `skills` (`Skill` model)

- `id` – `Int`, PK, auto-increment
- `name` – `String`, unique
- `created_at`, `updated_at` – timestamps
- Relations:
  - `job_skills` – one-to-many `job_skills.skill_id`
  - `candidate_skills` – one-to-many `candidate_skills.skill_id`

### 4.2 `candidate_profile` (`CandidateProfile` model)

- `user_id` – `BigInt`, PK, FK → `users.id`
- `state_id` – `Int?` FK → `states.id`
- `city_id` – `Int?` FK → `cities.id`
- `qualification` – `String?`
- `experience_years` – `Int?`
- `resume_url` – `String?` (`TEXT`)
- `created_at`, `updated_at` – timestamps

Relations:

- `user` – one-to-one back to `users`
- `state` – many-to-one `states`
- `city` – many-to-one `cities`

### 4.3 `recruiter_profile` (`RecruiterProfile` model)

- `user_id` – `BigInt`, PK, FK → `users.id`
- `designation` – `String?`
- `state_id` – `Int?` FK → `states.id`
- `city_id` – `Int?` FK → `cities.id`
- `created_at`, `updated_at` – timestamps

Relations:

- `user` – one-to-one back to `users`
- `state` – many-to-one `states`
- `city` – many-to-one `cities`

---

## 5. Job Domain

### 5.1 `job_post` (`JobPost` model)

- `id` – `BigInt`, PK, auto-increment
- `recruiter_id` – `BigInt?` FK → `users.id`
- `job_title` – `String?`
- `description` – `String?` (`TEXT`)
- `employment_type` – `EmploymentType?` enum
- `job_type` – `JobType?` enum
- `salary_min` – `BigInt?`
- `salary_max` – `BigInt?`
- `currency_id` – `Int?` FK → `currencies.id`
- `min_exp` – `BigInt?`
- `max_exp` – `BigInt?`
- `currency` – `String?`, default `"INR"` (legacy DB field kept alongside `currency_id`)
- `state_id` – `Int?` FK → `states.id`
- `city_id` – `Int?` FK → `cities.id`
- `benefits` – `String?` (`TEXT`)
- `openings_count` – `Int?`
- `application_deadline` – `DateTime?` (`DATE`)
- `job_status` – `JobStatus?` enum
- `created_at`, `updated_at` – timestamps

Relations:

- `recruiter` – many-to-one `users` (relation name `"RecruiterJobs"`)
- `currency_rel` – many-to-one `currencies`
- `state` – many-to-one `states`
- `city` – many-to-one `cities`
- `job_skills` – one-to-many `job_skills.job_id`
- `applications` – one-to-many `applications.job_id`

### 5.2 `job_skills` (`JobSkill` model)

Junction table for many-to-many between jobs and skills.

- `job_id` – `BigInt` FK → `job_post.id`
- `skill_id` – `Int` FK → `skills.id`

Composite primary key:

- `@@id([job_id, skill_id])`

---

## 6. Candidate Skills & Applications

### 6.1 `candidate_skills` (`CandidateSkill` model)

Junction table mapping candidates (users with candidate role) to skills.

- `candidate_id` – `BigInt` FK → `users.id`
- `skill_id` – `Int` FK → `skills.id`

Composite primary key:

- `@@id([candidate_id, skill_id])`

### 6.2 `applications` (`Application` model)

- `id` – `BigInt`, PK, auto-increment
- `job_id` – `BigInt?` FK → `job_post.id`
- `candidate_id` – `BigInt?` FK → `users.id`
- `applied_at` – `DateTime?`
- `status` – `ApplicationStatus?` enum
- `created_at`, `updated_at` – timestamps

Relations:

- `job` – many-to-one `job_post`
- `candidate` – many-to-one `users` (relation name `"CandidateApplications"`)

Constraint:

- `@@unique([candidate_id, job_id], name: "unique_candidate_job_application")`
  - Ensures a candidate can apply to a specific job **only once**.

---

## 7. High-Level ER Summary

- A `User` has **one role** and optionally one `CandidateProfile` or `RecruiterProfile`.
- A `Recruiter` (`User` with recruiter role) owns many `JobPost` records.
- A `Candidate` (`User` with candidate role) can:
  - Have many `CandidateSkill` links.
  - Have many `Application` records.
- Each `JobPost`:
  - Belongs to one recruiter.
  - Has one currency, one state, one city.
  - Has many skills through `job_skills`.
  - Has many applications.

For detailed query patterns and performance considerations, see `ARCHITECTURE_GUIDE.md` and `PRISMA_CLIENT_USAGE.md`.

