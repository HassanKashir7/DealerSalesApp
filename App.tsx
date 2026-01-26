/**
 * Main App Component
 * Entry point that sets up providers and navigation
 * Follows enterprise architecture with centralized providers
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { AuthProvider } from './src/contexts/AuthContext';
import { AppNavigator } from './src/navigation/AppNavigator';

/**
 * AppContent - Internal component that uses theme
 * Must be inside ThemeProvider to access theme
 */
const AppContent: React.FC = () => {
  const { colors, mode } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <AppNavigator />
    </>
  );
};

/**
 * App - Root component
 * Wraps app with all necessary providers
 */
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider initialMode="light">
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
