/**
 * USER TYPES
 * User-related interfaces (shared between candidate and recruiter)
 */

// =====================
// PROFILE TYPES
// =====================

export interface CandidateProfile {
  user_id: bigint;
  state_id?: number;
  city_id?: number;
  qualification?: string;
  experience_years?: number;
  resume_url?: string;
  created_at: Date;
  updated_at: Date;
}

export interface RecruiterProfile {
  user_id: bigint;
  designation?: string;
  state_id?: number;
  city_id?: number;
  created_at: Date;
  updated_at: Date;
}

// =====================
// UPDATE TYPES (Input)
// =====================

export interface UpdateCandidateProfileData {
  state_id?: number;
  city_id?: number;
  qualification?: string;
  experience_years?: number;
  resume_url?: string;
}

export interface UpdateRecruiterProfileData {
  designation?: string;
  state_id?: number;
  city_id?: number;
}

// =====================
// RESPONSE TYPES (Output)
// =====================

export interface CandidateProfileResponse {
  user: {
    id: number;
    name: string | null;
    email: string;
    phone_number: string | null;
  };
  profile: {
    state_id: number | null;
    state_name: string | undefined;
    city_id: number | null;
    city_name: string | undefined;
    qualification: string | null;
    experience_years: number | null;
    resume_url: string | null;
    created_at: Date;
    updated_at: Date;
  };
}

export interface RecruiterProfileResponse {
  user: {
    id: number;
    name: string | null;
    email: string;
    phone_number: string | null;
  };
  profile: {
    designation: string | null;
    state_id: number | null;
    state_name: string | undefined;
    city_id: number | null;
    city_name: string | undefined;
    created_at: Date;
    updated_at: Date;
  };
}
