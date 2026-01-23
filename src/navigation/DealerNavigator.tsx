/**
 * Dealer Navigator
 * Handles navigation for dealer role
 * Contains: Dealer Dashboard and dealer-specific screens
 * Screens must never import this directly - use AppNavigator
 */

import React from 'react';
import { DealerDashboardScreen } from '../screens/Dealer/Dashboard/DealerDashboardScreen';

export type DealerStackParamList = {
  DealerDashboard: undefined;
  // Add more dealer screens here as needed
};

/**
 * Dealer Navigator Component
 * Handles navigation for dealer role
 * 
 * NOTE: Simple conditional rendering for now
 * In production, use React Navigation stack navigator
 */
export const DealerNavigator: React.FC = () => {
  return <DealerDashboardScreen />;
};

