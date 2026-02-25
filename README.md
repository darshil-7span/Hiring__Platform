# 🚀 Hiring Platform

A full-stack job hiring platform connecting Recruiters with Candidates, built with Node.js, TypeScript, Express, Prisma, and PostgreSQL.

---

## 📚 Documentation Index

All documentation is organized in the **`docs/`** folder:

### 🎯 Start Here
1. **[docs/PROJECT_REQUIREMENTS.md](./docs/PROJECT_REQUIREMENTS.md)** - Complete project requirements (PRD)
2. **[docs/QUICK_REFERENCE.md](./docs/QUICK_REFERENCE.md)** - Quick feature checklist
3. **[docs/TODO.md](./docs/TODO.md)** - Implementation roadmap & task list

### 🛡️ Validation (Zod)
4. **[docs/ZOD_README.md](./docs/ZOD_README.md)** - Start with this for Zod overview
5. **[docs/ZOD_GUIDE.md](./docs/ZOD_GUIDE.md)** - Complete Zod guide with examples
6. **[docs/ZOD_SETUP_SUMMARY.md](./docs/ZOD_SETUP_SUMMARY.md)** - Quick Zod reference

### 🔧 Technical Setup
7. **[docs/ESLINT_GUIDE.md](./docs/ESLINT_GUIDE.md)** - ESLint configuration and usage
8. **[docs/PRISMA_CLIENT_USAGE.md](./docs/PRISMA_CLIENT_USAGE.md)** - Prisma client guide

---

## 🎯 Project Goals

### User Types
- **Candidate** - Can view and apply for jobs
- **Recruiter** - Can post and manage jobs

### Core Features
1. ✅ **Authentication** - Register, Login with JWT
2. ✅ **Recruiter Features** - Post, view, delete jobs
3. ✅ **Candidate Features** - View jobs, apply, track applications
4. ✅ **Application Logic** - Prevent duplicates, resume links
5. ✅ **Filters (Bonus)** - Filter by location and salary

---

## 🏗️ Tech Stack

- **Runtime:** Node.js v22.18.0
- **Language:** TypeScript
- **Framework:** Express.js 5.2.1
- **Database:** PostgreSQL 17.0
- **ORM:** Prisma 7.4.1 (with adapter pattern)
- **Validation:** Zod
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcryptjs
- **Linting:** ESLint 10.0.2
- **Dev Tools:** tsx, nodemon

---

## 📁 Project Structure

```
Hiring__Platform/
├── prisma/
│   ├── schema.prisma              # Database schema
│   ├── seed.ts                    # Seed data
│   └── migrations/                # Database migrations
│
├── src/
│   ├── config/
│   │   ├── env.ts                 # Environment variables
│   │   └── prisma.ts              # Centralized Prisma client
│   │
│   ├── schemas/                   # Zod validation schemas (DTOs)
│   │   ├── auth.schema.ts         # Auth validation
│   │   ├── job.schema.ts          # Job validation
│   │   ├── application.schema.ts  # Application validation
│   │   └── common.schema.ts       # Reusable schemas
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.ts     # JWT authentication
│   │   ├── role.middleware.ts     # Role-based access
│   │   └── validate.middleware.ts # Request validation
│   │
│   ├── controllers/               # Business logic
│   │   ├── auth/
│   │   ├── candidate/
│   │   └── recruiter/
│   │
│   ├── services/                  # Database operations
│   │   ├── auth.service.ts
│   │   ├── job.service.ts
│   │   └── application.service.ts
│   │
│   ├── repositories/              # Data access layer
│   │   ├── auth.repository.ts
│   │   ├── job.repository.ts
│   │   └── application.repository.ts
│   │
│   ├── routes/                    # API routes
│   │   ├── index.ts
│   │   ├── auth/
│   │   ├── job/
│   │   └── application/
│   │
│   ├── utils/
│   │   ├── jwt.ts                 # JWT utilities
│   │   └── password.ts            # Password hashing
│   │
│   ├── app.ts                     # Express app setup
│   └── server.ts                  # Server entry point
│
├── docs/                          # 📚 All documentation
│   ├── PROJECT_REQUIREMENTS.md   # Complete PRD
│   ├── QUICK_REFERENCE.md        # Quick checklist
│   ├── TODO.md                   # Implementation roadmap
│   ├── ZOD_README.md            # Zod overview
│   ├── ZOD_GUIDE.md             # Zod complete guide
│   ├── ZOD_SETUP_SUMMARY.md     # Zod quick reference
│   ├── ESLINT_GUIDE.md          # ESLint guide
│   └── PRISMA_CLIENT_USAGE.md   # Prisma guide
│
├── .env                           # Environment variables
├── .gitignore                     # Git ignore rules
├── eslint.config.mjs              # ESLint configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
```bash
# .env file already configured
DATABASE_URL="postgresql://postgres@localhost:5434/Hiring_Platform?schema=public"
JWT_SECRET="your-secret-key"
PORT=3000
```

### 3. Database Setup
```bash
# Run migrations
npx prisma migrate dev

# Seed database
npx prisma db seed
```

### 4. Start Development Server
```bash
npm run dev
```

Server runs on: `http://localhost:3000`

---

## 📝 Available Scripts

```bash
npm run dev        # Start development server with auto-reload
npm run build      # Compile TypeScript to JavaScript
npm start          # Run production server
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint errors automatically
```

---

## 🛣️ API Endpoints

### Authentication
```
POST /api/auth/register   - Register new user (Candidate/Recruiter)
POST /api/auth/login      - Login and get JWT token
```

### Jobs (Candidate)
```
GET  /api/jobs            - View all jobs (with filters)
GET  /api/jobs/:id        - View job details
```

### Jobs (Recruiter)
```
POST   /api/jobs          - Create new job
GET    /api/jobs/my-jobs  - View own jobs
DELETE /api/jobs/:id      - Delete own job
```

### Applications (Candidate)
```
POST /api/applications                - Apply for job
GET  /api/applications/my-applications - View my applications
```

**Full API documentation:** See [docs/PROJECT_REQUIREMENTS.md](./docs/PROJECT_REQUIREMENTS.md)

---

## 🔐 Authentication Flow

1. User registers with role (Candidate/Recruiter)
2. User logs in → receives JWT token
3. Token included in `Authorization: Bearer <token>` header
4. Middleware validates token and role for protected routes

---

## 🛡️ Request Validation (Zod)

All endpoints use Zod schemas for validation:

```typescript
// Define schema
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(1),
  }),
});

// Use in route
router.post("/login", validate(loginSchema), authController.login);

// Controller receives validated data
async login(req: Request, res: Response) {
  const { email, password } = req.body; // Already validated!
}
```

**Full Zod guide:** See [docs/ZOD_README.md](./docs/ZOD_README.md)

---

## 🗄️ Database Schema

### Key Tables
- **User** - All users (candidates + recruiters)
- **Role** - User roles (CANDIDATE, RECRUITER, ADMIN)
- **CandidateProfile** - Candidate-specific data
- **RecruiterProfile** - Recruiter-specific data
- **JobPost** - Job listings
- **Application** - Job applications
- **Skill** - Skills catalog
- **JobSkill** - Job-skill relationships
- **Currency** - Currency types
- **Country/State/City** - Location hierarchy

**Full schema:** See `prisma/schema.prisma`

---

## ✅ Implementation Status

### Phase 1: Authentication
- [x] Prisma setup with PostgreSQL
- [x] Database migrations
- [x] Seed data
- [x] Zod validation schemas
- [ ] Register endpoint
- [ ] Login endpoint
- [ ] JWT middleware

### Phase 2: Recruiter Features
- [ ] Create job endpoint
- [ ] View own jobs endpoint
- [ ] Delete job endpoint

### Phase 3: Candidate Features
- [ ] View all jobs endpoint
- [ ] Apply for job endpoint
- [ ] View applications endpoint

### Phase 4: Filters (Bonus)
- [ ] Location filter
- [ ] Salary range filter

**Full checklist:** See [docs/PROJECT_REQUIREMENTS.md](./docs/PROJECT_REQUIREMENTS.md)

---

## 🔧 Development Guidelines

### Code Quality
- ✅ ESLint configured for TypeScript
- ✅ Zod validation on all endpoints
- ✅ Centralized Prisma client
- ✅ Consistent error responses

### Git Workflow
```bash
# Current branch: darshil
git add .
git commit -m "feat: your feature description"
git push origin darshil
```

### Ignored Files
- `node_modules/` - Dependencies
- `generated/` - Prisma client
- `dist/` - Build output
- `.env` - Environment variables

---

## 📖 Learning Resources

### Internal Documentation
1. Start with [docs/QUICK_REFERENCE.md](./docs/QUICK_REFERENCE.md) for overview
2. Read [docs/PROJECT_REQUIREMENTS.md](./docs/PROJECT_REQUIREMENTS.md) for full requirements
3. Follow [docs/TODO.md](./docs/TODO.md) for implementation roadmap
4. Check [docs/ZOD_README.md](./docs/ZOD_README.md) for validation patterns
5. See example files in `src/controllers/auth/` and `src/routes/auth/`

### External Resources
- **Prisma Docs:** https://www.prisma.io/docs/
- **Zod Docs:** https://zod.dev/
- **Express Docs:** https://expressjs.com/
- **JWT Docs:** https://jwt.io/

---

## 🎯 Success Criteria

Project is complete when:
1. ✅ Users can register as Candidate or Recruiter
2. ✅ Users can login and receive JWT token
3. ✅ Recruiters can post, view, and delete jobs
4. ✅ Candidates can view all jobs
5. ✅ Candidates can apply (with duplicate prevention)
6. ✅ Candidates can view their application history
7. ✅ Filters work for location and salary
8. ✅ All endpoints validated with Zod
9. ✅ Authorization works for all roles
10. ✅ API returns consistent response format

---

## 🐛 Troubleshooting

### Common Issues

**1. Database Connection Error**
```bash
# Check PostgreSQL is running
# Verify DATABASE_URL in .env
# Port should be 5434 (not default 5432)
```

**2. Prisma Client Not Found**
```bash
npx prisma generate
```

**3. ESLint Errors**
```bash
npm run lint:fix
```

**4. Port Already in Use**
```bash
# Change PORT in .env
# Or kill process using port 3000
lsof -ti:3000 | xargs kill
```

---

## 📞 Project Info

- **Repository:** https://github.com/darshil-7span/Hiring__Platform
- **Branch:** darshil
- **Node Version:** 22.18.0
- **Database:** PostgreSQL 17.0 on localhost:5434

---

## 📝 Notes

- All documentation files are in the `docs/` folder
- Example files have `.example.ts` suffix (copy and rename to use)
- Schemas are in `src/schemas/` (like DTOs)
- Centralized Prisma client at `src/config/prisma.ts`
- JWT utilities in `src/utils/jwt.ts`

---

**Last Updated:** February 25, 2026  
**Status:** In Development - Phase 1  
**Next Steps:** Implement authentication endpoints

---

## 🙏 Credits

Built with ❤️ using modern TypeScript best practices.
