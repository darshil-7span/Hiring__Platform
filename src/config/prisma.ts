import { PrismaClient } from "../../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { env } from "./env";

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

// Create Prisma adapter
const adapter = new PrismaPg(pool);

// Create Prisma client with adapter
const prisma = new PrismaClient({
  adapter,
  log: env.NODE_ENV === "development" ? ["query", "error"] : ["error"],
});

export default prisma;