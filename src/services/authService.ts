/**
 * Auth Service
 * Handles authentication business logic
 * Currently uses local data file, but designed to be easily replaceable with API
 * Screens never directly access data/users.ts - they only use this service
 */

import { users, findUserByCredentials, findUserByPhone, phoneExists, User, UserRole } from '../data/users';

export interface LoginCredentials {
  phone: string;
  password: string;
}

export interface SignupData {
  name: string;
  phone: string;
  password: string;
  role: UserRole;
}

export interface AuthResponse {
  user: User;
  token?: string; // For future API integration
}

export interface AuthError {
  message: string;
  code?: string;
}

/**
 * Login user with phone and password
 * Returns user if credentials are valid
 * Throws error if credentials are invalid
 */
export const login = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Normalize phone number (remove spaces, dashes, etc.)
  const normalizedPhone = credentials.phone.replace(/\s+/g, '').replace(/[-()]/g, '');
  const user = findUserByCredentials(normalizedPhone, credentials.password);

  if (!user) {
    const error: AuthError = {
      message: 'Invalid phone number or password',
      code: 'INVALID_CREDENTIALS',
    };
    throw error;
  }

  // In production, this would return a token from API
  return {
    user,
    token: 'mock-token-' + user.id, // Temporary mock token
  };
};

/**
 * Register a new user
 * Returns user if registration is successful
 * Throws error if phone already exists
 */
export const signup = async (data: SignupData): Promise<AuthResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (phoneExists(data.phone)) {
    const error: AuthError = {
      message: 'Phone number already registered',
      code: 'PHONE_EXISTS',
    };
    throw error;
  }

  // In production, this would create user via API
  // For now, we'll just verify the data is valid
  const newUser: User = {
    id: String(users.length + 1),
    name: data.name,
    phone: data.phone,
    password: data.password,
    role: data.role,
  };

  // In a real app, this would be an API call
  // For local data, we're not persisting new users (as per temporary data requirement)

  return {
    user: newUser,
    token: 'mock-token-' + newUser.id,
  };
};

/**
 * Logout current user
 * In production, this would invalidate token on server
 */
export const logout = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // Clear token, etc.
};

/**
 * Request OTP for phone number
 * Returns success status
 */
export const requestOTP = async (phone: string): Promise<{ success: boolean; message?: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const user = findUserByPhone(phone);
  if (!user) {
    return {
      success: false,
      message: 'Phone number not found',
    };
  }

  // In production, send OTP via SMS service
  // For now, return success
  return {
    success: true,
    message: 'OTP sent successfully',
  };
};

/**
 * Verify OTP
 * Returns success status
 */
export const verifyOTP = async (
  phone: string,
  otp: string
): Promise<{ success: boolean; message?: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  // In production, verify OTP with backend
  // For temporary implementation, accept any 6-digit code
  if (otp.length === 6 && /^\d+$/.test(otp)) {
    return {
      success: true,
    };
  }

  return {
    success: false,
    message: 'Invalid OTP',
  };
};

/**
 * Reset password
 * Returns success status
 */
export const resetPassword = async (
  phone: string,
  newPassword: string
): Promise<{ success: boolean; message?: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const user = findUserByPhone(phone);
  if (!user) {
    return {
      success: false,
      message: 'Phone number not found',
    };
  }

  // In production, update password via API
  // For temporary data, we're not persisting changes

  return {
    success: true,
    message: 'Password reset successfully',
  };
};
