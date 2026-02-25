import { PrismaClient } from "./generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function checkData() {
  console.log("🔍 Checking database data...\n");

  const roles = await prisma.role.findMany();
  console.log(`✅ Roles: ${roles.length}`);
  console.log(roles);

  const skills = await prisma.skill.findMany();
  console.log(`\n✅ Skills: ${skills.length}`);
  console.log(skills);

  const currencies = await prisma.currency.findMany();
  console.log(`\n✅ Currencies: ${currencies.length}`);
  console.log(currencies);

  const countries = await prisma.country.findMany();
  console.log(`\n✅ Countries: ${countries.length}`);
  console.log(countries);

  const states = await prisma.state.findMany();
  console.log(`\n✅ States: ${states.length}`);
  console.log(states);

  const cities = await prisma.city.findMany();
  console.log(`\n✅ Cities: ${cities.length}`);
  console.log(cities);

  const users = await prisma.user.findMany();
  console.log(`\n✅ Users: ${users.length}`);
  console.log(users);

  const jobPosts = await prisma.jobPost.findMany();
  console.log(`\n✅ Job Posts: ${jobPosts.length}`);
  console.log(jobPosts);

  const applications = await prisma.application.findMany();
  console.log(`\n✅ Applications: ${applications.length}`);
  console.log(applications);

  await prisma.$disconnect();
  await pool.end();
}

checkData()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  });
