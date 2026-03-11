import prisma from "../config/prisma";
import type { User, Role } from "../../generated/prisma";
import { getLogger } from "../utils/logger";
import { CreateUserData } from "../types";

const logger = getLogger("AuthDAO");

// ============================================
// HELPER FUNCTIONS
// ============================================

const buildUserCreateData = (data: CreateUserData) => ({
  name: data.name,
  email: data.email,
  password: data.password,
  phone_number: data.phone_number,
  country_id: data.country_id,
  role_id: data.role_id,
  is_active: data.is_active,
});

const USER_WITH_ROLE_INCLUDE = {
  role: true,
};

// ============================================
// DAO FUNCTIONS
// ============================================

const findUserByEmail = async (email: string): Promise<(User & { role: Role }) | null> => {
  logger.info(`Querying user by email: ${email}`);
  const user = await prisma.user.findUnique({
    where: { email },
    include: USER_WITH_ROLE_INCLUDE,
  });
  logger.info(`User ${user ? "found" : "not found"} for email: ${email}`);
  return user;
};

const createUser = async (data: CreateUserData): Promise<User & { role: Role }> => {
  logger.info(`Creating user: ${data.email}`);
  const user = await prisma.user.create({
    data: buildUserCreateData(data),
    include: USER_WITH_ROLE_INCLUDE,
  });
  logger.info(`User created successfully: ${data.email}`);
  return user;
};

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

const findRoleByName = async (roleName: string): Promise<Role | null> => {
  logger.info(`Querying role by name: ${roleName}`);
  const role = await prisma.role.findFirst({
    where: { name: roleName.toLowerCase() },
  });
  logger.info(`Role ${role ? "found" : "not found"}: ${roleName}`);
  return role;
};

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
  createUser,
  upsertCandidateProfile,
  upsertRecruiterProfile,
  findRoleByName,
  emailExists,
};
