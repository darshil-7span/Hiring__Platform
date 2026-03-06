import prisma from "../config/prisma";
import type { User, Role } from "../../generated/prisma";
import { getLogger } from "../utils/logger";

const logger = getLogger("AuthDAO");

/**
 * Auth Repository (DAO Layer)
 * All database operations related to authentication
 */

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
  phone_number?: string;
  country_id: number;
  role_id: number;
  is_active: boolean;
}

/**
 * Find user by email
 */
const findUserByEmail = async (email: string): Promise<(User & { role: Role }) | null> => {
  logger.info(`Querying user by email: ${email}`);
  const user = await prisma.user.findUnique({
    where: { email },
    include: { role: true },
  });
  logger.info(`User ${user ? "found" : "not found"} for email: ${email}`);
  return user;
};

/**
 * Find user by ID
 */
const findUserById = async (userId: number): Promise<(User & { role: Role }) | null> => {
  logger.info(`Querying user by ID: ${userId}`);
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { role: true },
  });
  logger.info(`User ${user ? "found" : "not found"} for ID: ${userId}`);
  return user;
};

/**
 * Create new user
 */
const createUser = async (data: CreateUserData): Promise<User & { role: Role }> => {
  logger.info(`Creating user: ${data.email}`);
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      phone_number: data.phone_number,
      country_id: data.country_id,
      role_id: data.role_id,
      is_active: data.is_active,
    },
    include: { role: true },
  });
  logger.info(`User created successfully: ${data.email}`);
  return user;
};

/**
 * Ensure candidate profile exists for a user
 */
const upsertCandidateProfile = async (userId: bigint) => {
  logger.info(`Upserting candidate profile for user: ${userId}`);
  const profile = await prisma.candidateProfile.upsert({
    where: { user_id: userId },
    update: {},
    create: {
      user_id: userId,
    },
  });
  logger.info(`Candidate profile upserted for user: ${userId}`);
  return profile;
};

/**
 * Ensure recruiter profile exists for a user
 */
const upsertRecruiterProfile = async (userId: bigint) => {
  logger.info(`Upserting recruiter profile for user: ${userId}`);
  const profile = await prisma.recruiterProfile.upsert({
    where: { user_id: userId },
    update: {},
    create: {
      user_id: userId,
    },
  });
  logger.info(`Recruiter profile upserted for user: ${userId}`);
  return profile;
};

/**
 * Find role by name
 */
const findRoleByName = async (roleName: string): Promise<Role | null> => {
  logger.info(`Querying role by name: ${roleName}`);
  const role = await prisma.role.findFirst({
    where: { role_name: roleName.toLowerCase() },
  });
  logger.info(`Role ${role ? "found" : "not found"}: ${roleName}`);
  return role;
};

/**
 * Check if email exists
 */
const emailExists = async (email: string): Promise<boolean> => {
  logger.info(`Checking if email exists: ${email}`);
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });
  const exists = !!user;
  logger.info(`Email ${exists ? "exists" : "does not exist"}: ${email}`);
  return exists;
};

export const authRepository = {
  findUserByEmail,
  findUserById,
  createUser,
  upsertCandidateProfile,
  upsertRecruiterProfile,
  findRoleByName,
  emailExists,
};
