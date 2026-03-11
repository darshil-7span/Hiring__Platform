import prisma from "../../src/config/prisma";
import { hashPassword } from "../../src/utils/password";

interface SeedUsersParams {
  roles: {
    admin: any;
    recruiter: any;
    candidate: any;
  };
  countries: {
    india: any;
    usa: any;
  };
}

export async function seedUsers({ roles, countries }: SeedUsersParams) {
  console.log("📌 Seeding users...");

  // Admin User
  let adminUser = await prisma.user.findFirst({
    where: { email: "admin@hiringsystem.com" },
  });

  if (!adminUser) {
    adminUser = await prisma.user.create({
      data: {
        name: "Admin User",
        email: "admin@hiringsystem.com",
        password: await hashPassword("Admin@123"),
        phone_number: "9999999999",
        country_id: countries.india.id,
        role_id: roles.admin.id,
        is_active: true,
      },
    });
  }

  // Recruiter User 1
  let recruiterUser1 = await prisma.user.findFirst({
    where: { email: "alice.recruiter@company.com" },
  });

  if (!recruiterUser1) {
    recruiterUser1 = await prisma.user.create({
      data: {
        name: "Alice Recruiter",
        email: "alice.recruiter@company.com",
        password: await hashPassword("Recruiter@123"),
        phone_number: "9876543210",
        country_id: countries.india.id,
        role_id: roles.recruiter.id,
        is_active: true,
      },
    });
  }

  // Recruiter User 2
  let recruiterUser2 = await prisma.user.findFirst({
    where: { email: "john.recruiter@company.com" },
  });

  if (!recruiterUser2) {
    recruiterUser2 = await prisma.user.create({
      data: {
        name: "John Recruiter",
        email: "john.recruiter@company.com",
        password: await hashPassword("Recruiter@123"),
        phone_number: "9876543211",
        country_id: countries.usa.id,
        role_id: roles.recruiter.id,
        is_active: true,
      },
    });
  }

  // Candidate User 1
  let candidateUser1 = await prisma.user.findFirst({
    where: { email: "bob.candidate@email.com" },
  });

  if (!candidateUser1) {
    candidateUser1 = await prisma.user.create({
      data: {
        name: "Bob Candidate",
        email: "bob.candidate@email.com",
        password: await hashPassword("Candidate@123"),
        phone_number: "1234567890",
        country_id: countries.india.id,
        role_id: roles.candidate.id,
        is_active: true,
      },
    });
  }

  // Candidate User 2
  let candidateUser2 = await prisma.user.findFirst({
    where: { email: "sarah.candidate@email.com" },
  });

  if (!candidateUser2) {
    candidateUser2 = await prisma.user.create({
      data: {
        name: "Sarah Candidate",
        email: "sarah.candidate@email.com",
        password: await hashPassword("Candidate@123"),
        phone_number: "1234567891",
        country_id: countries.india.id,
        role_id: roles.candidate.id,
        is_active: true,
      },
    });
  }

  console.log("✅ Users seeded");

  return {
    admin: adminUser,
    recruiters: [recruiterUser1, recruiterUser2],
    candidates: [candidateUser1, candidateUser2],
  };
}
