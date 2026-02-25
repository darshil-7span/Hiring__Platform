import { PrismaClient } from "../../generated/prisma";
import { env } from "./env";

const prisma = new PrismaClient({
  log: env.NODE_ENV === "development" ? ["query", "error"] : ["error"],
});

export default prisma;