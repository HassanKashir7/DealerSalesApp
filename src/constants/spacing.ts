/**
 * Design System - Spacing
 * Centralized spacing scale for consistent margins, paddings, and gaps
 */

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export type SpacingKey = keyof typeof spacing;

export type SpacingValue = typeof spacing[SpacingKey];

