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

export class AuthRepository {
  /**
   * Find user by email
   */
  async findUserByEmail(email: string): Promise<(User & { role: Role }) | null> {
    return await prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });
  }

  /**
   * Find user by ID
   */
  async findUserById(userId: number): Promise<(User & { role: Role }) | null> {
    return await prisma.user.findUnique({
      where: { id: userId },
      include: { role: true },
    });
  }

  /**
   * Create new user
   */
  async createUser(data: CreateUserData): Promise<User & { role: Role }> {
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
  }

  /**
   * Find role by name
   */
  async findRoleByName(roleName: string): Promise<Role | null> {
    return await prisma.role.findFirst({
      where: { role_name: roleName.toLowerCase() },
    });
  }

  /**
   * Check if email exists
   */
  async emailExists(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });
    return !!user;
  }
}

// Export singleton instance
export const authRepository = new AuthRepository();
