import { authRepository } from "../../repositories/auth.repository";
import { hashPassword, comparePassword } from "../../utils/password";
import { generateToken } from "../../utils/jwt";
import { getLogger } from "../../utils/logger";

const logger = getLogger("AuthService");

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

/**
 * Register new user
 */
const register = async (input: RegisterInput): Promise<AuthResponse> => {
  logger.info(`Registration started`, { email: input.email, role: input.role_name });

  // Check if email already exists
  const emailExists = await authRepository.emailExists(input.email);
  if (emailExists) {
    logger.warn(`Registration failed: Email already exists - ${input.email}`);
    throw new Error("Email already registered");
  }

  // Find role
  const role = await authRepository.findRoleByName(input.role_name);
  if (!role) {
    logger.error(`Role not found: ${input.role_name}`);
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
    is_active: true,
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

  logger.info(`Registration completed`, { userId: user.id, email: user.email });

  return {
    user: {
      id: Number(user.id),
      name: user.name || "",
      email: user.email,
      role: user.role.role_name,
    },
    token,
  };
};

/**
 * Login user
 */
const login = async (input: LoginInput): Promise<AuthResponse> => {
  logger.info(`Login started`, { email: input.email });

  // Find user by email
  const user = await authRepository.findUserByEmail(input.email);
  if (!user) {
    logger.warn(`Login failed: User not found - ${input.email}`);
    throw new Error("Invalid credentials");
  }

  // Check if user is active
  if (!user.is_active) {
    logger.warn(`Login failed: Account inactive - ${input.email}`);
    throw new Error("Account is inactive");
  }

  // Compare password
  const isPasswordValid = await comparePassword(input.password, user.password || "");
  if (!isPasswordValid) {
    logger.warn(`Login failed: Invalid password - ${input.email}`);
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const token = generateToken({
    userId: Number(user.id),
    email: user.email,
    role: user.role.role_name,
  });

  logger.info(`Login completed`, { userId: user.id, email: user.email });

  return {
    user: {
      id: Number(user.id),
      name: user.name || "",
      email: user.email,
      role: user.role.role_name,
    },
    token,
  };
};

export const authService = {
  register,
  login,
};
