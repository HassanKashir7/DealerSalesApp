/**
 * Design System - Border Radius
 * Centralized border radius values for consistent rounded corners
 */

export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  round: 9999, // Full circle
} as const;

export type RadiusKey = keyof typeof radius;

export type RadiusValue = typeof radius[RadiusKey];

