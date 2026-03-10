import prisma from "../src/config/prisma";
import "dotenv/config";

async function main() {
  console.log("🌱 Seeding database...");

  /* =====================
     1. ROLES
  ===================== */
  await prisma.role.createMany({
    data: [
      { role_name: "admin" },
      { role_name: "recruiter" },
      { role_name: "candidate" },
    ],
    skipDuplicates: true,
  });

  const adminRole = await prisma.role.findFirst({ where: { role_name: "admin" } });
  const recruiterRole = await prisma.role.findFirst({ where: { role_name: "recruiter" } });
  const candidateRole = await prisma.role.findFirst({ where: { role_name: "candidate" } });

  if (!recruiterRole || !candidateRole) {
    throw new Error("Roles not seeded correctly");
  }

  /* =====================
     2. SKILLS
  ===================== */
  await prisma.skill.createMany({
    data: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Python" },
    ],
    skipDuplicates: true,
  });

  const skillReact = await prisma.skill.findFirst({ where: { name: "React" } });
  const skillNode = await prisma.skill.findFirst({ where: { name: "Node.js" } });
  const skillPython = await prisma.skill.findFirst({ where: { name: "Python" } });

  /* =====================
     3. CURRENCY (ENUM-BASED MODEL)
  ===================== */
  await prisma.currency.createMany({
    data: [
      { name: "Indian", code: "INR", symbol: "RUPEE" },
      { name: "USA", code: "USD", symbol: "DOLLAR" },
    ],
    skipDuplicates: true,
  });

  const inrCurrency = await prisma.currency.findFirst({
    where: { code: "INR" },
  });

  /* =====================
     4. LOCATION
  ===================== */
  let countryIndia = await prisma.country.findFirst({
    where: { iso_code: "IN" },
  });

  if (!countryIndia) {
    countryIndia = await prisma.country.create({
      data: { name: "India", iso_code: "IN" },
    });
  }

  let stateGujarat = await prisma.state.findFirst({
    where: { name: "Gujarat", country_id: countryIndia.id },
  });

  if (!stateGujarat) {
    stateGujarat = await prisma.state.create({
      data: { name: "Gujarat", country_id: countryIndia.id },
    });
  }

  let cityAhmedabad = await prisma.city.findFirst({
    where: { name: "Ahmedabad", state_id: stateGujarat.id },
  });

  if (!cityAhmedabad) {
    cityAhmedabad = await prisma.city.create({
      data: { name: "Ahmedabad", state_id: stateGujarat.id },
    });
  }

  /* =====================
     5. USERS
  ===================== */
  let recruiterUser = await prisma.user.findFirst({
    where: { email: "alice@example.com" },
  });

  if (!recruiterUser) {
    recruiterUser = await prisma.user.create({
      data: {
        name: "Alice Recruiter",
        email: "alice@example.com",
        password: "hashedpassword123",
        phone_number: "9876543210",
        country_id: countryIndia.id,
        role_id: recruiterRole.id,
        is_active: true,
      },
    });
  }

  let candidateUser = await prisma.user.findFirst({
    where: { email: "bob@example.com" },
  });

  if (!candidateUser) {
    candidateUser = await prisma.user.create({
      data: {
        name: "Bob Candidate",
        email: "bob@example.com",
        password: "hashedpassword456",
        phone_number: "1234567890",
        country_id: countryIndia.id,
        role_id: candidateRole.id,
        is_active: true,
      },
    });
  }

  /* =====================
     6. PROFILES
  ===================== */
  await prisma.recruiterProfile.upsert({
    where: { user_id: recruiterUser.id },
    update: {},
    create: {
      user_id: recruiterUser.id,
      designation: "Senior Talent Acquisition",
      state_id: stateGujarat.id,
      city_id: cityAhmedabad.id,
    },
  });

  await prisma.candidateProfile.upsert({
    where: { user_id: candidateUser.id },
    update: {},
    create: {
      user_id: candidateUser.id,
      state_id: stateGujarat.id,
      city_id: cityAhmedabad.id,
      qualification: "B.Tech in Computer Science",
      experience_years: 3,
      resume_url: "https://example.com/resume.pdf",
    },
  });

  /* =====================
     7. JOB
  ===================== */
  const jobPost = await prisma.jobPost.create({
    data: {
      recruiter_id: recruiterUser.id,
      job_title: "Full Stack Developer",
      description: "Looking for an experienced full stack developer.",
      employment_type: "fulltime",
      job_type: "Hybrid",
      salary_min: BigInt(800000),
      salary_max: BigInt(1500000),
      currency_id: inrCurrency?.id,
      state_id: stateGujarat.id,
      city_id: cityAhmedabad.id,
      benefits: "Health Insurance, Flexible Hours",
      openings_count: 3,
      application_deadline: new Date("2026-12-31"),
      job_status: "Active",
    },
  });

  await prisma.jobSkill.createMany({
    data: [
      { job_id: jobPost.id, skill_id: skillReact!.id },
      { job_id: jobPost.id, skill_id: skillNode!.id },
    ],
  });

  await prisma.candidateSkill.createMany({
    data: [
      { candidate_id: candidateUser.id, skill_id: skillReact!.id },
      { candidate_id: candidateUser.id, skill_id: skillNode!.id },
      { candidate_id: candidateUser.id, skill_id: skillPython!.id },
    ],
  });

  await prisma.application.create({
    data: {
      job_id: jobPost.id,
      candidate_id: candidateUser.id,
      status: "Applied",
    },
  });

  console.log("✅ Database seeded successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    (globalThis as any).process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });