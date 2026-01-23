/**
 * Theme Context
 * Provides theme-aware colors and styles throughout the application
 * Supports light/dark mode and centralized theme management
 */

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { colors, ThemeColors } from '../constants/colors';
import { createGlobalStyle, GlobalStyles } from '../styles/globalStyle';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  colors: ThemeColors;
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  globalStyles: GlobalStyles;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialMode?: ThemeMode;
}

/**
 * Theme Provider Component
 * Wraps the app and provides theme context
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialMode,
}) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    initialMode || (systemColorScheme === 'dark' ? 'dark' : 'light')
  );

  // Theme colors based on current mode
  // In a real app, you'd have separate dark/light color palettes
  const themeColors = useMemo<ThemeColors>(() => {
    if (themeMode === 'dark') {
      // Dark theme colors (can be extended with actual dark palette)
      return {
        ...colors,
        background: '#000000',
        backgroundSecondary: '#1C1C1E',
        textPrimary: '#FFFFFF',
        textSecondary: '#8E8E93',
        border: '#38383A',
      };
    }
    return colors;
  }, [themeMode]);

  const globalStyles = useMemo(
    () => createGlobalStyle(themeColors),
    [themeColors]
  );

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
  };

  const value = useMemo(
    () => ({
      colors: themeColors,
      mode: themeMode,
      toggleTheme,
      setTheme,
      globalStyles,
    }),
    [themeColors, themeMode, globalStyles]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * Hook to access theme context
 * @throws Error if used outside ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

