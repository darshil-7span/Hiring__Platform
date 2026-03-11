import prisma from "../../src/config/prisma";

export async function seedRoles() {
  console.log("📌 Seeding roles...");

  await prisma.role.createMany({
    data: [
      { name: "admin" },
      { name: "recruiter" },
      { name: "candidate" },
    ],
    skipDuplicates: true,
  });

  const roles = {
    admin: await prisma.role.findFirst({ where: { name: "admin" } }),
    recruiter: await prisma.role.findFirst({ where: { name: "recruiter" } }),
    candidate: await prisma.role.findFirst({ where: { name: "candidate" } }),
  };

  if (!roles.admin || !roles.recruiter || !roles.candidate) {
    throw new Error("Failed to seed roles");
  }

  console.log("✅ Roles seeded");
  return roles;
}
