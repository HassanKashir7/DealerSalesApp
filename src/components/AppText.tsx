/**
 * AppText Component
 * Theme-aware text component with typography system integration
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { typography } from '../constants';

export type TextVariant =
  | 'pageTitle'
  | 'sectionHeader'
  | 'cardTitle'
  | 'cardValue'
  | 'inputLabel'
  | 'inputText'
  | 'buttonPrimary'
  | 'buttonSecondary'
  | 'listItemTitle'
  | 'listItemSupport'
  | 'statusBadge'
  | 'navLabel'
  | 'caption'
  | 'body'
  | 'bodyBold'
  | 'subheading'
  | 'heading'
  | 'title'
  | 'display';

export type TextColor = 'primary' | 'secondary' | 'disabled' | 'inverse' | 'error' | 'success' | 'darkBlue';

export interface AppTextProps extends TextProps {
  variant?: TextVariant;
  color?: TextColor;
  children: React.ReactNode;
}

/**
 * AppText Component
 * Usage: <AppText variant="heading" color="primary">Hello World</AppText>
 */
export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  color = 'primary',
  style,
  children,
  ...props
}) => {
  const { colors } = useTheme();

  const colorMap: Record<TextColor, string> = {
    primary: colors.textPrimary,
    secondary: colors.textSecondary,
    disabled: colors.textDisabled,
    inverse: colors.textInverse,
    error: colors.error,
    success: colors.success,
    darkBlue: colors.textDarkBlue,
  };

  const textStyle = [
    typography.textStyle[variant],
    {
      color: colorMap[color],
    },
    style,
  ];

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

