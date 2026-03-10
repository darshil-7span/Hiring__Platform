import type { Response } from "express";
import { ApiResponseOptions, ApiResponse } from "../types";

export const sendResponse = (
  res: Response,
  options: ApiResponseOptions = {}
): Response => {
  const {
    statusCode = 200,
    success = true,
    message = "Success",
    data = null,
  } = options;

  const response: ApiResponse = {
    success,
    message,
    data,
  };

  return res.status(statusCode).json(response);
};

export const sendSuccess = (
  res: Response,
  message: string = "Success",
  data: any = null,
  statusCode: number = 200
): Response => {
  return sendResponse(res, {
    statusCode,
    success: true,
    message,
    data,
  });
};

export const sendError = (
  res: Response,
  message: string = "Error",
  statusCode: number = 500,
  data: any = null
): Response => {
  res.setHeader("Content-Type", "application/json");
  
  return sendResponse(res, {
    statusCode,
    success: false,
    message,
    data,
  });
};

export const sendPaginatedResponse = (
  res: Response,
  data: any,
  meta: {
    page: number;
    limit: number;
    total: number;
  }
) => {
  return res.status(200).json({
    success: true,
    data,
    meta,
  });
};
