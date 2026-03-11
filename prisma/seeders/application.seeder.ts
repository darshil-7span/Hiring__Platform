import prisma from "../../src/config/prisma";

interface SeedApplicationsParams {
  users: {
    candidates: any[];
  };
  jobs: {
    jobs: any[];
  };
  skills: {
    react: any;
    node: any;
    python: any;
    typescript: any;
  };
}

export async function seedApplications({ users, jobs, skills }: SeedApplicationsParams) {
  console.log("📌 Seeding applications and candidate skills...");

  // Candidate 1 Skills
  await prisma.candidateSkill.createMany({
    data: [
      { candidate_id: users.candidates[0].id, skill_id: skills.react!.id },
      { candidate_id: users.candidates[0].id, skill_id: skills.node!.id },
      { candidate_id: users.candidates[0].id, skill_id: skills.typescript!.id },
    ],
    skipDuplicates: true,
  });

  // Candidate 2 Skills
  await prisma.candidateSkill.createMany({
    data: [
      { candidate_id: users.candidates[1].id, skill_id: skills.react!.id },
      { candidate_id: users.candidates[1].id, skill_id: skills.python!.id },
      { candidate_id: users.candidates[1].id, skill_id: skills.node!.id },
    ],
    skipDuplicates: true,
  });

  // Applications - Candidate 1
  await prisma.application.create({
    data: {
      job_id: jobs.jobs[0].id, // Full Stack Developer
      candidate_id: users.candidates[0].id,
      status: "Applied",
      applied_at: new Date(),
    },
  });

  await prisma.application.create({
    data: {
      job_id: jobs.jobs[1].id, // Backend Developer
      candidate_id: users.candidates[0].id,
      status: "Shortlisted",
      applied_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
  });

  // Applications - Candidate 2
  await prisma.application.create({
    data: {
      job_id: jobs.jobs[0].id, // Full Stack Developer
      candidate_id: users.candidates[1].id,
      status: "Applied",
      applied_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    },
  });

  await prisma.application.create({
    data: {
      job_id: jobs.jobs[3].id, // Frontend Intern
      candidate_id: users.candidates[1].id,
      status: "Rejected",
      applied_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    },
  });

  console.log("✅ Applications and candidate skills seeded");
}
