import { authRepository } from "../../repositories/auth.repository";
import { hashPassword, comparePassword } from "../../utils/password";
import { generateToken } from "../../utils/jwt";

/**
 * Auth Service (Business Logic Layer)
 * Handles authentication business logic
 */

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  phone_number?: string;
  country_id: number;
  role_name: "candidate" | "recruiter";
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  token: string;
}

export class AuthService {
  /**
   * Register new user
   */
  async register(input: RegisterInput): Promise<AuthResponse> {
    // Check if email already exists
    const emailExists = await authRepository.emailExists(input.email);
    if (emailExists) {
      throw new Error("Email already registered");
    }

    // Find role
    const role = await authRepository.findRoleByName(input.role_name);
    if (!role) {
      throw new Error(`Role '${input.role_name}' not found`);
    }

    // Hash password
    const hashedPassword = await hashPassword(input.password);

    // Create user
    const user = await authRepository.createUser({
      name: input.name,
      email: input.email,
      password: hashedPassword,
      phone_number: input.phone_number,
      country_id: input.country_id,
      role_id: role.id,
    });

    // Create appropriate profile based on role
    if (role.role_name === "candidate") {
      await authRepository.upsertCandidateProfile(user.id);
    } else if (role.role_name === "recruiter") {
      await authRepository.upsertRecruiterProfile(user.id);
    }

    // Generate JWT token
    const token = generateToken({
      userId: Number(user.id),
      email: user.email,
      role: user.role.role_name,
    });

    return {
      user: {
        id: Number(user.id),
        name: user.name || "",
        email: user.email,
        role: user.role.role_name,
      },
      token,
    };
  }

  /**
   * Login user
   */
  async login(input: LoginInput): Promise<AuthResponse> {
    // Find user by email
    const user = await authRepository.findUserByEmail(input.email);
    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Check if user is active
    if (!user.is_active) {
      throw new Error("Account is inactive");
    }

    // Compare password
    const isPasswordValid = await comparePassword(input.password, user.password || "");
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = generateToken({
      userId: Number(user.id),
      email: user.email,
      role: user.role.role_name,
    });

    return {
      user: {
        id: Number(user.id),
        name: user.name || "",
        email: user.email,
        role: user.role.role_name,
      },
      token,
    };
  }
}

// Export singleton instance
export const authService = new AuthService();
