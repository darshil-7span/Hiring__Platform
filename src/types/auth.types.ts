/**
 * AUTH TYPES
 * All authentication-related interfaces and types
 */

// =====================
// REQUEST TYPES (Input)
// =====================

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

// =====================
// RESPONSE TYPES (Output)
// =====================

export interface AuthResponse {
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  token: string;
}

// =====================
// DAO TYPES (Database Layer)
// =====================

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
  phone_number?: string;
  country_id?: number;
  role_id: number;
  is_active: boolean;
}

// =====================
// JWT TYPES
// =====================

export interface JWTPayload {
  userId: number;
  email: string;
  role: string;
}
