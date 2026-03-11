/**
 * USER TYPES
 * User-related interfaces (shared between candidate and recruiter)
 */

import { Prisma } from "../../generated/prisma";

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
// DAO RELATION TYPES (Used in database queries)
// =====================

export type CandidateProfileWithRelations = Prisma.CandidateProfileGetPayload<{
  include: {
    user: { select: { id: true; name: true; email: true; phone_number: true } };
    state: true;
    city: true;
  };
}>;

export type RecruiterProfileWithRelations = Prisma.RecruiterProfileGetPayload<{
  include: {
    user: { select: { id: true; name: true; email: true; phone_number: true } };
    state: true;
    city: true;
  };
}>

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

// =====================
// FORMATTER FUNCTIONS
// =====================

export const formatCandidateProfileResponse = (profile: any): CandidateProfileResponse => ({
  user: {
    id: Number(profile.user.id),
    name: profile.user.name,
    email: profile.user.email,
    phone_number: profile.user.phone_number,
  },
  profile: {
    state_id: profile.state_id,
    state_name: profile.state?.name,
    city_id: profile.city_id,
    city_name: profile.city?.name,
    qualification: profile.qualification,
    experience_years: profile.experience_years,
    resume_url: profile.resume_url,
    created_at: profile.created_at,
    updated_at: profile.updated_at,
  },
});

export const formatRecruiterProfileResponse = (profile: any): RecruiterProfileResponse => ({
  user: {
    id: Number(profile.user.id),
    name: profile.user.name,
    email: profile.user.email,
    phone_number: profile.user.phone_number,
  },
  profile: {
    designation: profile.designation,
    state_id: profile.state_id,
    state_name: profile.state?.name,
    city_id: profile.city_id,
    city_name: profile.city?.name,
    created_at: profile.created_at,
    updated_at: profile.updated_at,
  },
});
