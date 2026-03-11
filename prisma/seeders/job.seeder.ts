import prisma from "../../src/config/prisma";

interface SeedJobsParams {
  users: {
    recruiters: any[];
  };
  locations: {
    states: any;
    cities: any;
  };
  currencies: {
    inr: any;
    usd: any;
  };
  skills: {
    react: any;
    node: any;
    python: any;
    typescript: any;
  };
}

export async function seedJobs({ users, locations, currencies, skills }: SeedJobsParams) {
  console.log("📌 Seeding jobs...");

  // Job 1: Full Stack Developer
  const job1 = await prisma.jobPost.create({
    data: {
      recruiter_id: users.recruiters[0].id,
      job_title: "Full Stack Developer",
      description:
        "We are looking for an experienced Full Stack Developer with expertise in React and Node.js. You will work on building scalable web applications.",
      employment_type: "fulltime",
      job_type: "Hybrid",
      salary_min: BigInt(800000),
      salary_max: BigInt(1500000),
      currency_id: currencies.inr?.id,
      min_exp: BigInt(2),
      max_exp: BigInt(5),
      state_id: locations.states.gujarat.id,
      city_id: locations.cities.ahmedabad.id,
      benefits: "Health Insurance, Flexible Hours, Work From Home",
      openings_count: 3,
      application_deadline: new Date("2026-06-30"),
      job_status: "Active",
    },
  });

  await prisma.jobSkill.createMany({
    data: [
      { job_id: job1.id, skill_id: skills.react!.id },
      { job_id: job1.id, skill_id: skills.node!.id },
      { job_id: job1.id, skill_id: skills.typescript!.id },
    ],
  });

  // Job 2: Backend Developer
  const job2 = await prisma.jobPost.create({
    data: {
      recruiter_id: users.recruiters[0].id,
      job_title: "Backend Developer - Node.js",
      description:
        "Join our team as a Backend Developer specializing in Node.js. Build robust APIs and microservices.",
      employment_type: "fulltime",
      job_type: "Remote",
      salary_min: BigInt(700000),
      salary_max: BigInt(1200000),
      currency_id: currencies.inr?.id,
      min_exp: BigInt(1),
      max_exp: BigInt(4),
      state_id: locations.states.maharashtra.id,
      city_id: locations.cities.mumbai.id,
      benefits: "Health Insurance, Remote Work, Learning Budget",
      openings_count: 2,
      application_deadline: new Date("2026-07-15"),
      job_status: "Active",
    },
  });

  await prisma.jobSkill.createMany({
    data: [
      { job_id: job2.id, skill_id: skills.node!.id },
      { job_id: job2.id, skill_id: skills.typescript!.id },
    ],
  });

  // Job 3: Python Developer
  const job3 = await prisma.jobPost.create({
    data: {
      recruiter_id: users.recruiters[1].id,
      job_title: "Senior Python Developer",
      description:
        "We need a Senior Python Developer to work on data engineering and backend systems.",
      employment_type: "fulltime",
      job_type: "OnSite",
      salary_min: BigInt(90000),
      salary_max: BigInt(150000),
      currency_id: currencies.usd?.id,
      min_exp: BigInt(5),
      max_exp: BigInt(8),
      state_id: locations.states.california.id,
      city_id: locations.cities.sanFrancisco.id,
      benefits: "401k, Health Insurance, Stock Options",
      openings_count: 1,
      application_deadline: new Date("2026-08-01"),
      job_status: "Active",
    },
  });

  await prisma.jobSkill.createMany({
    data: [{ job_id: job3.id, skill_id: skills.python!.id }],
  });

  // Job 4: Frontend Intern
  const job4 = await prisma.jobPost.create({
    data: {
      recruiter_id: users.recruiters[0].id,
      job_title: "Frontend Developer Intern",
      description: "Internship opportunity for frontend developers. Learn React and modern web development.",
      employment_type: "internship",
      job_type: "Hybrid",
      salary_min: BigInt(15000),
      salary_max: BigInt(25000),
      currency_id: currencies.inr?.id,
      min_exp: BigInt(0),
      max_exp: BigInt(1),
      state_id: locations.states.gujarat.id,
      city_id: locations.cities.ahmedabad.id,
      benefits: "Stipend, Certificate, Mentorship",
      openings_count: 5,
      application_deadline: new Date("2026-05-31"),
      job_status: "Active",
    },
  });

  await prisma.jobSkill.createMany({
    data: [{ job_id: job4.id, skill_id: skills.react!.id }],
  });

  console.log("✅ Jobs seeded");

  return {
    jobs: [job1, job2, job3, job4],
  };
}
