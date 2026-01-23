/**
 * App Navigator
 * Centralized navigation configuration with role-based routing
 * Entry point for all navigation decisions
 * 
 * Flow: Splash → Authentication → Role-based Dashboard
 * 
 * NOTE: This implementation uses basic conditional rendering.
 * For production apps, install and use React Navigation:
 * npm install @react-navigation/native @react-navigation/native-stack react-native-screens
 */

import React, { useState, useEffect } from 'react';
import { SplashScreen } from '../screens/Splash/SplashScreen';
import { LoginScreen } from '../screens/Authentication/Login/LoginScreen';
import { ForgotPasswordScreen } from '../screens/Authentication/ForgotPassword/ForgotPasswordScreen';
import { OTPScreen } from '../screens/Authentication/OTP/OTPScreen';
import { SignupScreen } from '../screens/Authentication/Signup/SignupScreen';
import { SalesNavigator } from './SalesNavigator';
import { useAuth } from '../hooks/useAuth';

type AuthScreen = 'login' | 'forgot-password' | 'otp' | 'signup';

/**
 * App Navigator Component
 * Handles navigation from Splash to Login screen and authentication flow
 * 
 * Production: Replace with React Navigation for proper navigation stack
 */
export const AppNavigator: React.FC = () => {
  const { isAuthenticated, role } = useAuth();
  const [showSplash, setShowSplash] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>('login');
  const [otpPhone, setOtpPhone] = useState('****5678');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5 seconds for splash screen

    return () => clearTimeout(timer);
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  const handleForgotPassword = () => {
    setCurrentScreen('forgot-password');
  };

  const handleBackToLogin = () => {
    setCurrentScreen('login');
  };

  const handleSendOTP = (phone: string) => {
    // Extract last 4 digits for display
    const phoneStr = phone || '';
    const lastFour = phoneStr.length >= 4 ? phoneStr.slice(-4) : '5678';
    setOtpPhone(`****${lastFour}`);
    setCurrentScreen('otp');
  };

  const handleBackToForgotPassword = () => {
    setCurrentScreen('forgot-password');
  };

  const handleSignup = () => {
    setCurrentScreen('signup');
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  // If authenticated, show role-based dashboard
  if (isAuthenticated) {
    if (role === 'salesperson') {
      return <SalesNavigator />;
    }
    // TODO: Add dealer navigator when dealer dashboard is created
    // if (role === 'dealer') {
    //   return <DealerNavigator />;
    // }
  }

  if (currentScreen === 'otp') {
    return (
      <OTPScreen
        phone={otpPhone}
        flow="forgot-password"
        onBack={handleBackToForgotPassword}
      />
    );
  }

  if (currentScreen === 'signup') {
    return (
      <SignupScreen
        onBack={handleBackToLogin}
      />
    );
  }

  if (currentScreen === 'forgot-password') {
    return (
      <ForgotPasswordScreen
        onBack={handleBackToLogin}
        onSendOTP={handleSendOTP}
      />
    );
  }

  return <LoginScreen onForgotPassword={handleForgotPassword} onSignup={handleSignup} />;
};

