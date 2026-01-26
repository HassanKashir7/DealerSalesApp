/**
 * Auth Context
 * Provides authentication state and methods throughout the application
 * Centralized authentication management with role-based access
 */

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { User, UserRole } from '../data/users';
import * as authService from '../services/authService';

interface AuthContextType {
  user: User | null;
  role: UserRole | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (phone: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (data: authService.SignupData) => Promise<void>;
  requestOTP: (phone: string) => Promise<{ success: boolean; message?: string }>;
  verifyOTP: (phone: string, otp: string) => Promise<{ success: boolean; message?: string }>;
  resetPassword: (phone: string, newPassword: string) => Promise<{ success: boolean; message?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Auth Provider Component
 * Wraps the app and provides authentication context
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (phone: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authService.login({ phone, password });
      setUser(response.user);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(async (data: authService.SignupData) => {
    setIsLoading(true);
    try {
      const response = await authService.signup(data);
      setUser(response.user);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const requestOTP = useCallback(async (phone: string) => {
    setIsLoading(true);
    try {
      const result = await authService.requestOTP(phone);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const verifyOTP = useCallback(async (phone: string, otp: string) => {
    setIsLoading(true);
    try {
      const result = await authService.verifyOTP(phone, otp);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetPassword = useCallback(async (phone: string, newPassword: string) => {
    setIsLoading(true);
    try {
      const result = await authService.resetPassword(phone, newPassword);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value: AuthContextType = {
    user,
    role: user?.role || null,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    signup,
    requestOTP,
    verifyOTP,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Hook to access auth context
 * @throws Error if used outside AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

