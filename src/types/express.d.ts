/**
 * Express Type Extensions
 * Extends Express Request interface to include custom properties
 */

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string | number;
        email: string;
        role: string;
      };
    }
  }
}

export {};
