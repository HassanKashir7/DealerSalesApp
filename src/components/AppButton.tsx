/**
 * AppButton Component
 * Theme-aware button component with consistent styling
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { spacing, radius, sizing } from '../constants';
import { typography } from '../constants/typography';
import { AppText } from './AppText';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface AppButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
}

/**
 * AppButton Component
 * Usage: <AppButton title="Submit" variant="primary" onPress={handlePress} />
 */
export const AppButton: React.FC<AppButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  onPress,
  ...props
}) => {
  const { colors } = useTheme();
  const isDisabled = disabled || loading;

  const sizeConfig = {
    sm: {
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      fontSize: typography.fontSize.sm,
    },
    md: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      fontSize: typography.fontSize.md,
    },
    lg: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      fontSize: typography.fontSize.lg,
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: colors.primary,
      borderWidth: sizing.border.none || 0,
      borderColor: 'transparent',
      textColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.secondary,
      borderWidth: sizing.border.none || 0,
      borderColor: 'transparent',
      textColor: colors.white,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: sizing.border.thin,
      borderColor: colors.primary,
      textColor: colors.primary,
    },
    text: {
      backgroundColor: 'transparent',
      borderWidth: sizing.border.none || 0,
      borderColor: 'transparent',
      textColor: colors.primary,
    },
  };

  const currentSize = sizeConfig[size];
  const currentVariant = variantStyles[variant];

  const buttonStyle: ViewStyle = {
    ...currentSize,
    backgroundColor: isDisabled
      ? colors.grayLight
      : currentVariant.backgroundColor,
    borderWidth: currentVariant.borderWidth,
    borderColor: isDisabled ? colors.grayLight : currentVariant.borderColor,
    borderRadius: radius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isDisabled ? 0.5 : 1,
  };

  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={currentVariant.textColor}
          style={styles.loader}
        />
      ) : (
        <>
          {leftIcon && <>{leftIcon}</>}
          <AppText
            variant="bodyBold"
            color={variant === 'text' || variant === 'outline' ? 'primary' : 'inverse'}
            style={[
              styles.text,
              { fontSize: currentSize.fontSize },
              leftIcon && styles.textWithLeftIcon,
              rightIcon && styles.textWithRightIcon,
            ]}
          >
            {title}
          </AppText>
          {rightIcon && <>{rightIcon}</>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginRight: 0,
  },
  text: {
    textAlign: 'center',
  },
  textWithLeftIcon: {
    marginLeft: spacing.xs,
  },
  textWithRightIcon: {
    marginRight: spacing.xs,
  },
});

