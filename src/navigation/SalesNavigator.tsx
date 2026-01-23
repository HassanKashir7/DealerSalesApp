/**
 * Sales Navigator
 * Handles navigation for salesperson role
 * Contains: Salesperson Dashboard and salesperson-specific screens
 * Screens must never import this directly - use AppNavigator
 */

import React, { useState } from 'react';
import { SalespersonDashboardScreen } from '../screens/Salesperson/Dashboard/SalespersonDashboardScreen';
import { CommissionTrackingScreen } from '../screens/Salesperson/CommissionTracking/CommissionTrackingScreen';

export type SalesStackParamList = {
  SalespersonDashboard: undefined;
  CommissionTracking: undefined;
  // Add more salesperson screens here as needed
};

type SalesScreen = 'dashboard' | 'commission' | 'dealers' | 'reports' | 'profile';

/**
 * Sales Navigator Component
 * Handles navigation for salesperson role
 * 
 * NOTE: Simple conditional rendering for now
 * In production, use React Navigation stack navigator
 */
export const SalesNavigator: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<SalesScreen>('dashboard');

  const handleNavigate = (screen: SalesScreen) => {
    setCurrentScreen(screen);
  };

  const handleBack = () => {
    setCurrentScreen('dashboard');
  };

  if (currentScreen === 'commission') {
    return <CommissionTrackingScreen onBack={handleBack} />;
  }

  return <SalespersonDashboardScreen onNavigate={handleNavigate} />;
};

