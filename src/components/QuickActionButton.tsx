/**
 * Quick Action Button Component
 * Reusable circular button for quick actions on dashboard
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { AppText } from './AppText';
import { AppIcon } from './AppIcon';
import { spacing } from '../constants/spacing';
import { radius } from '../constants/radius';
import { sizing } from '../constants/sizing';

export interface QuickActionButtonProps {
  label: string;
  icon: string;
  iconColor: string;
  backgroundColor: string;
  onPress: () => void;
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  label,
  icon,
  iconColor,
  backgroundColor,
  onPress,
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor }]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <AppIcon name={icon as any} size={24} color={colors.white} />
      </TouchableOpacity>
      <AppText variant="navLabel" style={[styles.label, { color: colors.textSectionHeader }]}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: spacing.sm,
  },
  button: {
    width: sizing.component.quickActionButton,
    height: sizing.component.quickActionButton,
    borderRadius: radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  label: {
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});

