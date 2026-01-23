/**
 * Design System - Sizing
 * Centralized sizing values for icons, components, and UI elements
 * All dimensions use this system for consistency and responsiveness
 */

export const sizing = {
  // Icon sizes
  icon: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40,
    xxl: 48,
  },

  // Component dimensions
  component: {
    // Input fields
    inputHeight: 48,
    otpInputSize: 48,
    
    // Buttons
    quickActionButton: 64,
    
    // Cards & Containers
    iconContainer: 40,
    profileImage: 40,
    logoSmallWidth: 80,
    logoSmallHeight: 30,
    logoMediumSize: 120,
    
    // Badges & Indicators
    notificationBadge: 8,
    progressBarHeight: 8,
  },

  // Border widths
  border: {
    none: 0,
    thin: 1,
    medium: 1.5,
    thick: 2,
  },
  
  // Responsive constraints
  responsive: {
    logoMaxWidth: 200,
  },
} as const;

export type SizingKey = keyof typeof sizing;
export type IconSizeKey = keyof typeof sizing.icon;
export type ComponentSizeKey = keyof typeof sizing.component;

