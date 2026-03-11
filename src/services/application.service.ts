import { applicationRepository } from "../dao/application.dao";
import { getLogger } from "../utils/logger";
import {
  CandidateApplicationResponse,
  JobApplicationResponse,
  UserApplicationResponse,
  formatCandidateApplicationResponse,
  formatJobApplicationResponse,
  formatUserApplicationResponse,
} from "../types";

const logger = getLogger("ApplicationService");
const getAllCandidateApplications = async (): Promise<CandidateApplicationResponse[]> => {
  logger.info(`[GET_ALL_APPLICATIONS] Fetching all candidate applications`);
  const applications = await applicationRepository.getCandidateApplications();
  
  const response = applications.map(formatCandidateApplicationResponse);
  
  logger.info(`[GET_ALL_APPLICATIONS] Transformed ${response.length} applications for response`);
  return response;
};

const getApplicationsByJob = async (jobId: bigint): Promise<JobApplicationResponse[]> => {
  logger.info(`[GET_APPLICATIONS_BY_JOB] Fetching applications for job: ${jobId}`);
  const applications = await applicationRepository.getApplicationsByJobId(jobId);
  
  const response = applications.map(formatJobApplicationResponse);
  
  logger.info(`[GET_APPLICATIONS_BY_JOB] Transformed ${response.length} applications for job: ${jobId}`);
  return response;
};

const getApplicationsByCandidate = async (candidateId: bigint): Promise<UserApplicationResponse[]> => {
  logger.info(`[GET_APPLICATIONS_BY_CANDIDATE] Fetching applications for candidate: ${candidateId}`);
  const applications = await applicationRepository.getApplicationsByCandidateId(candidateId);
  
  const response = applications.map(formatUserApplicationResponse);
  
  logger.info(`[GET_APPLICATIONS_BY_CANDIDATE] Transformed ${response.length} applications for candidate: ${candidateId}`);
  return response;
};

export const applicationService = {
  getAllCandidateApplications,
  getApplicationsByJob,
  getApplicationsByCandidate,
};
