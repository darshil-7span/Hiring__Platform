import prisma from "../../src/config/prisma";

export async function seedSkills() {
  console.log("📌 Seeding skills...");

  await prisma.skill.createMany({
    data: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Git" },
    ],
    skipDuplicates: true,
  });

  const skills = {
    react: await prisma.skill.findFirst({ where: { name: "React" } }),
    node: await prisma.skill.findFirst({ where: { name: "Node.js" } }),
    python: await prisma.skill.findFirst({ where: { name: "Python" } }),
    typescript: await prisma.skill.findFirst({ where: { name: "TypeScript" } }),
  };

  console.log("✅ Skills seeded");
  return skills;
}
