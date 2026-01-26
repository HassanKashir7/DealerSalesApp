/**
 * Design System - Colors
 * Centralized color definitions for the entire application
 * Supports light and dark mode with organized color structure
 */

/**
 * Color palette structure following the reference pattern
 */
export interface ColorPalette {
  primary: {
    main: string;
    light: string;
    dark: string;
    darker: string;
    contrast: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    variant: string;
    contrast: string;
  };
  neutral: {
    black: string;
    white: string;
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    gray950: string;
    gray975: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
    onDark: string;
    // Additional text colors from original
    title: string;
    sectionHeader: string;
    subtitle: string;
    subtitleLight: string;
    disabled: string;
    placeholder: string;
    secondaryLink: string;
    timer: string;
    blueGrey: string;
    darkBlue: string;
  };
  status: {
    error: string;
    success: string;
    successDark: string;
    warning: string;
    info: string;
    infoDark: string;
    commissionGreen: string;
    pendingOrange: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    gray: string;
    otpIcon: string;
  };
  border: {
    default: string;
    light: string;
    dark: string;
    input: string;
    divider: string;
  };
  brand: {
    canonBlue: string;
  };
  ui: {
    iconPassword: string;
    overlay: string;
    overlayLight: string;
  };
  social?: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

/**
 * Light theme color palette
 */
const light: ColorPalette = {
  primary: {
    main: '#007AFF',
    light: '#5AC8FA',
    dark: '#0051D5',
    darker: '#003A9B',
    contrast: '#FFFFFF',
  },
  secondary: {
    main: '#5856D6',
    light: '#AF52DE',
    dark: '#3634A3',
    variant: '#7C7CE0',
    contrast: '#FFFFFF',
  },
  neutral: {
    black: '#000000',
    white: '#FFFFFF',
    gray50: '#FAF9F9',
    gray100: '#F2F2F7',
    gray200: '#E5E5EA',
    gray300: '#C7C7CC',
    gray400: '#A0A0A0',
    gray500: '#8E8E93',
    gray600: '#757575',
    gray700: '#595959',
    gray800: '#4A4A4A',
    gray900: '#2B2B2B',
    gray950: '#1A1A1A',
    gray975: '#000000',
  },
  text: {
    primary: '#000000',
    secondary: '#8E8E93',
    muted: '#A0A0A0',
    inverse: '#FFFFFF',
    onDark: '#E5E5EA',
    // Additional text colors
    title: '#1A1A1A', // Main Title (Almost black)
    sectionHeader: '#2B2B2B', // Section Headers (Dark gray)
    subtitle: '#595959', // Subtitle (Medium gray)
    subtitleLight: '#5B8FC7', // Same color as welcome text on splash screen
    disabled: '#C7C7CC',
    placeholder: '#A0A0A0', // Input Placeholder (Light gray)
    secondaryLink: '#4A4A4A', // Secondary Links (Neutral dark gray)
    timer: '#A0A0A0', // Timer text color (lighter gray)
    blueGrey: '#4A5568', // Dark blue-grey shade for small text
    darkBlue: '#5B8FC7', // Light blue for welcome text
  },
  status: {
    error: '#FF3B30',
    success: '#34C759',
    successDark: '#16A34A',
    warning: '#FF9500',
    info: '#007AFF',
    infoDark: '#0051D5',
    commissionGreen: '#16A34A', // Darker green for commission earned
    pendingOrange: '#FF9500', // Orange for pending approval
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F2F2F7',
    tertiary: '#FFFFFF',
    gray: '#F2F2F7',
    otpIcon: '#E3F2FD', // Light blue background for security icon
  },
  border: {
    default: '#C7C7CC',
    light: '#E5E5EA',
    dark: '#8E8E93',
    input: '#D9D9D9', // Input Field Border (Light gray)
    divider: '#D9D9D9', // Divider Line (More prominent - same as input border)
  },
  brand: {
    canonBlue: '#0B4DA2', // Primary Canon Blue (Button, Brand Logo, Header Text)
  },
  ui: {
    iconPassword: '#8C8C8C', // Password Toggle Icon
    overlay: 'rgba(0, 0, 0, 0.4)',
    overlayLight: 'rgba(0, 0, 0, 0.2)',
  },
  social: {
    facebook: '#1877F2',
    instagram: '#E1306C',
    youtube: '#FF0000',
  },
};

/**
 * Dark theme color palette
 */
const dark: ColorPalette = {
  primary: {
    main: '#0A84FF',
    light: '#64B5F6',
    dark: '#409CFF',
    darker: '#0051D5',
    contrast: '#FFFFFF',
  },
  secondary: {
    main: '#7C7CE0',
    light: '#C77DF2',
    dark: '#5856D6',
    variant: '#9B9BF5',
    contrast: '#FFFFFF',
  },
  neutral: {
    black: '#000000',
    white: '#FFFFFF',
    gray50: '#1C1C1E',
    gray100: '#2C2C2E',
    gray200: '#38383A',
    gray300: '#48484A',
    gray400: '#636366',
    gray500: '#8E8E93',
    gray600: '#AEAEB2',
    gray700: '#C7C7CC',
    gray800: '#E5E5EA',
    gray900: '#F2F2F7',
    gray950: '#FFFFFF',
    gray975: '#FFFFFF',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#8E8E93',
    muted: '#636366',
    inverse: '#000000',
    onDark: '#E5E5EA',
    // Additional text colors
    title: '#FFFFFF', // White for titles in dark mode
    sectionHeader: '#E5E5EA', // Light gray for section headers
    subtitle: '#AEAEB2', // Lighter gray for subtitles
    subtitleLight: '#64B5F6', // Light blue for welcome text
    disabled: '#636366',
    placeholder: '#636366', // Darker placeholder
    secondaryLink: '#AEAEB2', // Lighter for dark mode
    timer: '#636366',
    blueGrey: '#AEAEB2', // Lighter blue-grey
    darkBlue: '#64B5F6', // Lighter blue
  },
  status: {
    error: '#FF453A',
    success: '#30D158',
    successDark: '#32D74B',
    warning: '#FF9F0A',
    info: '#0A84FF',
    infoDark: '#409CFF',
    commissionGreen: '#32D74B', // Brighter green
    pendingOrange: '#FF9F0A', // Brighter orange
  },
  background: {
    primary: '#000000',
    secondary: '#1C1C1E',
    tertiary: '#2C2C2E',
    gray: '#1C1C1E',
    otpIcon: '#1E3A5F', // Darker blue background
  },
  border: {
    default: '#38383A',
    light: '#2C2C2E',
    dark: '#48484A',
    input: '#38383A', // Darker border
    divider: '#38383A', // Darker divider
  },
  brand: {
    canonBlue: '#4A9EFF', // Lighter blue for dark mode
  },
  ui: {
    iconPassword: '#8E8E93', // Lighter for visibility
    overlay: 'rgba(0, 0, 0, 0.6)',
    overlayLight: 'rgba(0, 0, 0, 0.4)',
  },
  social: {
    facebook: '#1877F2',
    instagram: '#E1306C',
    youtube: '#FF0000',
  },
};

/**
 * Color palettes for light and dark themes
 */
export const colorPalettes = {
  light,
  dark,
} as const;

/**
 * Default colors (light theme)
 * This is exported for backward compatibility and direct usage
 */
export const colors = light;

/**
 * Theme colors type
 */
export type ThemeColors = ColorPalette;

/**
 * Color key type
 */
export type ColorKey = keyof ColorPalette;
