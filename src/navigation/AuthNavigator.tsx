/**
 * Auth Navigator
 * Handles navigation for authentication flow
 * Contains: Login, Signup, ForgotPassword, OTP screens
 * Screens must never import this directly - use AppNavigator
 */

import React from 'react';
import { LoginScreen } from '../screens/Authentication/Login/LoginScreen';
import { SignupScreen } from '../screens/Authentication/Signup/SignupScreen';
import { ForgotPasswordScreen } from '../screens/Authentication/ForgotPassword/ForgotPasswordScreen';
import { OTPScreen } from '../screens/Authentication/OTP/OTPScreen';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  OTP: { phone: string; flow: 'forgot-password' | 'signup' };
};

/**
 * Auth Navigator Component
 * Handles authentication-related screens
 * 
 * NOTE: Simple conditional rendering for now
 * In production, use React Navigation stack navigator
 */
export const AuthNavigator: React.FC = () => {
  // For now, show Login as default
  // In production, this would be a proper stack navigator
  return <LoginScreen />;
};

