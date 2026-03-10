import { defineConfig } from "prisma/config";
import { env } from "./src/config/env";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    // Use 'npx tsx' to run the TypeScript file directly
    seed: "npx tsx prisma/seed.ts", 
  },
  datasource: {
    url: env.DATABASE_URL,
  },
});