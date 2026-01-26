/**
 * Commission Metric Card Component
 * Specialized metric card for commission tracking with colored background
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { AppText } from './AppText';
import { AppIcon } from './AppIcon';
import { spacing, radius, sizing, typography } from '../constants';

export interface CommissionMetricCardProps {
  title: string;
  value: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}

export const CommissionMetricCard: React.FC<CommissionMetricCardProps> = ({
  title,
  value,
  icon,
  backgroundColor,
  iconColor,
}) => {
  const { colors } = useTheme();

  // Create lighter shade of background color for icon container
  const getLighterColor = (color: string) => {
    // Lighten by increasing RGB values towards white
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      // Lighten by 30% (move towards white)
      const lighterR = Math.min(255, Math.floor(r + (255 - r) * 0.3));
      const lighterG = Math.min(255, Math.floor(g + (255 - g) * 0.3));
      const lighterB = Math.min(255, Math.floor(b + (255 - b) * 0.3));
      return `#${lighterR.toString(16).padStart(2, '0')}${lighterG.toString(16).padStart(2, '0')}${lighterB.toString(16).padStart(2, '0')}`;
    }
    return color;
  };

  const iconContainerColor = getLighterColor(backgroundColor);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.iconContainer, { backgroundColor: iconContainerColor }]}>
        <AppIcon name={icon as any} size={sizing.icon.lg} color={colors.white} />
      </View>
      <View style={styles.valueContainer}>
        <AppText variant="cardValue" style={[styles.value, { color: colors.white }]}>
          {value}
        </AppText>
      </View>
      <AppText variant="cardTitle" style={[styles.title, { color: colors.white }]}>
        {title}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    aspectRatio: 1.1, // Height slightly more than width (taller)
    borderRadius: radius.lg,
    marginHorizontal: spacing.xs,
    marginBottom: spacing.md,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: sizing.component.iconContainer + spacing.sm,
    height: sizing.component.iconContainer + spacing.sm,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  valueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  value: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: '#FFFFFF',
  },
  title: {
    color: '#FFFFFF',
    opacity: 0.95,
    fontSize: typography.fontSize.cardTitle,
    alignSelf: 'flex-start',
  },
});

