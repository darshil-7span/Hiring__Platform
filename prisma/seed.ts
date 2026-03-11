import prisma from "../src/config/prisma";
import "dotenv/config";

// Import all seeders
import { seedRoles } from "./seeders/role.seeder";
import { seedSkills } from "./seeders/skill.seeder";
import { seedCurrencies } from "./seeders/currency.seeder";
import { seedLocations } from "./seeders/location.seeder";
import { seedUsers } from "./seeders/user.seeder";
import { seedProfiles } from "./seeders/profile.seeder";
import { seedJobs } from "./seeders/job.seeder";
import { seedApplications } from "./seeders/application.seeder";

async function main() {
  console.log("🌱 Starting database seeding...\n");

  try {
    // Step 1: Seed master/lookup tables
    const roles = await seedRoles();
    const skills = await seedSkills();
    const currencies = await seedCurrencies();
    const locations = await seedLocations();

    console.log("\n📊 Master data seeded successfully\n");

    // Step 2: Seed users
    const users = await seedUsers({
      roles,
      countries: locations.countries,
    });

    console.log("\n👥 Users seeded successfully\n");

    // Step 3: Seed profiles
    await seedProfiles({
      users,
      locations,
    });

    console.log("\n📋 Profiles seeded successfully\n");

    // Step 4: Seed jobs
    const jobs = await seedJobs({
      users,
      locations,
      currencies,
      skills,
    });

    console.log("\n💼 Jobs seeded successfully\n");

    // Step 5: Seed applications and candidate skills
    await seedApplications({
      users,
      jobs,
      skills,
    });

    console.log("\n📝 Applications seeded successfully\n");

    console.log("✅ Database seeding completed successfully! 🎉\n");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("❌ Fatal seed error:", e);
    (globalThis as any).process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("🔌 Database disconnected");
  });