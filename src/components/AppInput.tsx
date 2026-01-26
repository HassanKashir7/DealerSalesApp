/**
 * AppInput Component
 * Reusable text input component with consistent styling
 * Uses constants for all styling - no hardcoded values
 */

import React, { useState } from 'react';
import { View, TextInput, TextInputProps, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { AppText } from './AppText';
import { AppIcon } from './AppIcon';
import { spacing, radius, sizing, typography } from '../constants';

export interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

/**
 * AppInput Component
 * Usage: <AppInput label="Phone Number" placeholder="Enter your phone number" />
 */
export const AppInput: React.FC<AppInputProps> = ({
  label,
  error,
  rightIcon,
  onRightIconPress,
  style,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {label && (
        <AppText variant="inputLabel" style={[styles.label, { color: colors.textSectionHeader }]}>
          {label}
        </AppText>
      )}
      <View style={[styles.inputContainer, { borderColor: error ? colors.error : colors.inputBorder }]}>
        <TextInput
          style={[
            styles.input,
            {
              color: colors.textPrimary,
            },
            style,
          ]}
          placeholderTextColor={colors.textPlaceholder}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <AppText variant="caption" color="error" style={styles.error}>
          {error}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    marginBottom: spacing.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: sizing.border.thin,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    minHeight: sizing.component.inputHeight,
  },
  input: {
    flex: 1,
    ...typography.textStyle.inputText,
    paddingVertical: spacing.sm,
  },
  rightIcon: {
    padding: spacing.xs,
  },
  error: {
    marginTop: spacing.xs,
  },
});

