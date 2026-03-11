# Seed Data Refactoring - Industry Standard Structure

## 📁 New Folder Structure

```
prisma/
├── seed.ts                           # Main orchestrator (imports all seeders)
└── seeders/
    ├── role.seeder.ts               # Master data: User roles
    ├── skill.seeder.ts              # Master data: Technical skills
    ├── currency.seeder.ts           # Master data: Currencies
    ├── location.seeder.ts           # Master data: Countries, States, Cities
    ├── user.seeder.ts               # Core data: Users (admin, recruiters, candidates)
    ├── profile.seeder.ts            # Core data: Candidate & Recruiter profiles
    ├── job.seeder.ts                # Core data: Job postings with skills
    └── application.seeder.ts        # Transactional data: Applications & candidate skills
```

---

## ✅ What Was Done

### 1. **Schema Change**
- Changed `role_name` → `name` in Role model
- Database column name remains the same (no migration needed yet)

### 2. **Code Updates**
- Updated `auth.dao.ts`: `role_name` → `name`
- Updated `auth.service.ts`: All references to `role.role_name` → `role.name`

### 3. **Seed Refactoring** (Industry Standard)
**Before:** One monolithic `seed.ts` file (212 lines)

**After:** Modular seeder files with:
- ✅ **Separation of Concerns** - Each seeder handles one entity
- ✅ **Dependency Injection** - Seeders receive required data as parameters
- ✅ **Reusability** - Individual seeders can be run independently
- ✅ **Maintainability** - Easy to add/modify seed data
- ✅ **Clear Flow** - Main seed.ts orchestrates the process

---

## 📊 Seeding Flow

```
1. Master/Lookup Data (No Dependencies)
   ├── Roles (admin, recruiter, candidate)
   ├── Skills (React, Node.js, Python, etc.)
   ├── Currencies (INR, USD)
   └── Locations (Countries → States → Cities)

2. Core User Data (Depends on Roles + Locations)
   └── Users (admin, 2 recruiters, 2 candidates)

3. Profile Data (Depends on Users + Locations)
   ├── Recruiter Profiles
   └── Candidate Profiles

4. Job Data (Depends on Users + Locations + Currencies + Skills)
   └── Job Posts (4 jobs with different types)

5. Transactional Data (Depends on Users + Jobs + Skills)
   ├── Candidate Skills
   └── Applications
```

---

## 🎯 Seeded Data Summary

### Users:
- **1 Admin** - `admin@hiringsystem.com` (password: `Admin@123`)
- **2 Recruiters** 
  - `alice.recruiter@company.com` (Ahmedabad, India)
  - `john.recruiter@company.com` (San Francisco, USA)
- **2 Candidates**
  - `bob.candidate@email.com` (3 years exp, Ahmedabad)
  - `sarah.candidate@email.com` (5 years exp, Mumbai)

### Jobs:
1. **Full Stack Developer** (Hybrid, Ahmedabad) - ₹8-15 LPA
2. **Backend Developer** (Remote, Mumbai) - ₹7-12 LPA  
3. **Senior Python Developer** (OnSite, San Francisco) - $90k-150k
4. **Frontend Developer Intern** (Hybrid, Ahmedabad) - ₹15k-25k/month

### Applications:
- Bob applied to: Full Stack (Applied), Backend (Shortlisted)
- Sarah applied to: Full Stack (Applied), Frontend Intern (Rejected)

---

## 🚀 How to Run Seed

### Step 1: Make sure database is running
```bash
# Example: docker-compose up -d
```

### Step 2: Reset database and run migrations
```bash
npx prisma migrate reset
```

This will:
1. Drop database
2. Run migrations
3. **Automatically run seed** (defined in package.json)
4. Generate Prisma Client

### Step 3: (Optional) Run seed manually
```bash
npx prisma db seed
```

---

## 📝 Commands Summary

```bash
# 1. Reset database (includes seeding)
npx prisma migrate reset

# 2. Only run seed (without reset)
npx prisma db seed

# 3. Open Prisma Studio to verify data
npx prisma studio

# 4. Create new migration (for role_name → name)
npx prisma migrate dev --name rename_role_name_to_name
```

---

## 🎨 Benefits of New Structure

### ✅ Before (Single File - 212 lines)
```typescript
// Everything in one file
async function main() {
  // Roles (20 lines)
  // Skills (15 lines)
  // Currencies (10 lines)
  // Locations (40 lines)
  // Users (60 lines)
  // Profiles (30 lines)
  // Jobs (50 lines)
  // Applications (20 lines)
}
```

**Problems:**
- Hard to read and maintain
- Difficult to test individual parts
- Can't reuse seeders
- Merge conflicts in teams

### ✅ After (Modular - 8 files)
```typescript
// seed.ts (main orchestrator)
import { seedRoles } from "./seeders/role.seeder";
import { seedSkills } from "./seeders/skill.seeder";
// ... other imports

async function main() {
  const roles = await seedRoles();
  const skills = await seedSkills();
  const currencies = await seedCurrencies();
  const locations = await seedLocations();
  
  const users = await seedUsers({ roles, countries: locations.countries });
  await seedProfiles({ users, locations });
  const jobs = await seedJobs({ users, locations, currencies, skills });
  await seedApplications({ users, jobs, skills });
}
```

**Benefits:**
- ✅ **Readable** - Clear separation of concerns
- ✅ **Maintainable** - Easy to update one entity
- ✅ **Testable** - Can test individual seeders
- ✅ **Reusable** - Import seeders in tests
- ✅ **Scalable** - Easy to add more seeders
- ✅ **Team-Friendly** - Minimal merge conflicts

---

## 🔄 Next Steps

1. ✅ **Schema updated** - `role_name` → `name`
2. ✅ **Code updated** - All references fixed
3. ✅ **Seeders refactored** - Modular structure
4. ✅ **Build successful** - No TypeScript errors
5. ⏳ **Ready to seed** - Run `npx prisma migrate reset`

---

## 💡 Tips

### Adding New Seed Data
1. Edit the appropriate seeder file (e.g., `user.seeder.ts` to add users)
2. Run `npx prisma db seed` to re-seed

### Testing Individual Seeders
```typescript
// test/seeders/role.seeder.test.ts
import { seedRoles } from "../../prisma/seeders/role.seeder";

it("should seed roles", async () => {
  const roles = await seedRoles();
  expect(roles.admin).toBeDefined();
  expect(roles.recruiter).toBeDefined();
});
```

### Environment-Specific Seeds
```typescript
// seeders/user.seeder.ts
if (env.NODE_ENV === "production") {
  // Seed only essential data
} else {
  // Seed test/demo data
}
```

---

## 🎉 Summary

✅ Refactored from **monolithic** to **modular** seed structure  
✅ Follows **industry standard** practices  
✅ **212 lines** split into **8 focused files**  
✅ Easy to **maintain**, **test**, and **scale**  
✅ Ready for **team collaboration**  

**Now run:** `npx prisma migrate reset` to seed the database! 🚀
