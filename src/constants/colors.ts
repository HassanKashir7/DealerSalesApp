/**
 * Design System - Colors
 * Centralized color definitions for the entire application
 * Colors are theme-agnostic and used by ThemeContext
 */

export const colors = {
  // Primary colors
  primary: '#007AFF',
  primaryDark: '#0051D5',
  primaryLight: '#5AC8FA',
  // Canon brand colors (exact specifications)
  canonBlue: '#0B4DA2', // Primary Canon Blue (Button, Brand Logo, Header Text)
  textTitle: '#1A1A1A', // Main Title (Almost black)
  textSectionHeader: '#2B2B2B', // Section Headers (Dark gray)
  textSubtitle: '#595959', // Subtitle (Medium gray)
  textSubtitleLight: '#5B8FC7', // Same color as welcome text on splash screen
  textPlaceholder: '#A0A0A0', // Input Placeholder (Light gray)
  textSecondaryLink: '#4A4A4A', // Secondary Links (Neutral dark gray)
  inputBorder: '#D9D9D9', // Input Field Border (Light gray)
  iconPassword: '#8C8C8C', // Password Toggle Icon
  dividerLine: '#D9D9D9', // Divider Line (More prominent - same as input border)
  otpIconBackground: '#E3F2FD', // Light blue background for security icon
  textTimer: '#A0A0A0', // Timer text color (lighter gray)
  textBlueGrey: '#4A5568', // Dark blue-grey shade for small text

  // Secondary colors
  secondary: '#5856D6',
  secondaryDark: '#3634A3',
  secondaryLight: '#AF52DE',

  // Neutral colors
  black: '#000000',
  white: '#FFFFFF',
  gray: '#8E8E93',
  grayLight: '#C7C7CC',
  grayDark: '#48484A',
  grayBackground: '#F2F2F7',

  // Semantic colors
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#007AFF',
  
  // Dashboard colors
  commissionGreen: '#16A34A', // Darker green for commission earned
  pendingOrange: '#FF9500', // Orange for pending approval

  // Text colors
  textPrimary: '#000000',
  textSecondary: '#8E8E93',
  textDisabled: '#C7C7CC',
  textInverse: '#FFFFFF',
  textDarkBlue: '#5B8FC7', // Light blue for welcome text

  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F2F2F7',
  backgroundTertiary: '#FFFFFF',

  // Border colors
  border: '#C7C7CC',
  borderLight: '#E5E5EA',
  borderDark: '#8E8E93',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.4)',
  overlayLight: 'rgba(0, 0, 0, 0.2)',
} as const;

export type ColorKey = keyof typeof colors;

