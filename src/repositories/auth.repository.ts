import prisma from "../config/prisma";
import type { User, Role } from "../../generated/prisma";

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
}

/**
 * Find user by email
 */
const findUserByEmail = async (email: string): Promise<(User & { role: Role }) | null> => {
  return await prisma.user.findUnique({
    where: { email },
    include: { role: true },
  });
};

/**
 * Find user by ID
 */
const findUserById = async (userId: number): Promise<(User & { role: Role }) | null> => {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: { role: true },
  });
};

/**
 * Create new user
 */
const createUser = async (data: CreateUserData): Promise<User & { role: Role }> => {
  return await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      phone_number: data.phone_number,
      country_id: data.country_id,
      role_id: data.role_id,
      is_active: true,
    },
    include: { role: true },
  });
};

/**
 * Ensure candidate profile exists for a user
 */
const upsertCandidateProfile = async (userId: bigint) => {
  return await prisma.candidateProfile.upsert({
    where: { user_id: userId },
    update: {},
    create: {
      user_id: userId,
    },
  });
};

/**
 * Ensure recruiter profile exists for a user
 */
const upsertRecruiterProfile = async (userId: bigint) => {
  return await prisma.recruiterProfile.upsert({
    where: { user_id: userId },
    update: {},
    create: {
      user_id: userId,
    },
  });
};

/**
 * Find role by name
 */
const findRoleByName = async (roleName: string): Promise<Role | null> => {
  return await prisma.role.findFirst({
    where: { role_name: roleName.toLowerCase() },
  });
};

/**
 * Check if email exists
 */
const emailExists = async (email: string): Promise<boolean> => {
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return !!user;
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
