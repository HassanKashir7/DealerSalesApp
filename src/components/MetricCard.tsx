/**
 * Metric Card Component
 * Reusable card for displaying key metrics on dashboard
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { AppText } from './AppText';
import { AppIcon } from './AppIcon';
import { spacing } from '../constants/spacing';
import { radius } from '../constants/radius';
import { typography } from '../constants/typography';
import { sizing } from '../constants/sizing';

export interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: string;
  iconColor: string;
  valueColor?: string;
  onPress?: () => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  iconColor,
  valueColor,
  onPress,
}) => {
  const { colors } = useTheme();
  const cardValueColor = valueColor || colors.textTitle;

  const CardContent = (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <View style={[styles.iconContainer, { backgroundColor: `${iconColor}15` }]}>
        <AppIcon name={icon as any} size={24} color={iconColor} />
      </View>
      <AppText
        variant="cardValue"
        style={[styles.value, { color: cardValueColor }]}
      >
        {value}
      </AppText>
      <AppText variant="cardTitle" style={[styles.title, { color: colors.textBlueGrey }]}>
        {title}
      </AppText>
      {subtitle && (
        <AppText variant="listItemSupport" style={[styles.subtitle, { color: colors.textBlueGrey }]}>
          {subtitle}
        </AppText>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {CardContent}
      </TouchableOpacity>
    );
  }

  return CardContent;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    borderRadius: radius.md,
    marginHorizontal: spacing.xs,
    marginBottom: spacing.md,
  },
  iconContainer: {
    width: sizing.component.iconContainer,
    height: sizing.component.iconContainer,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  value: {
    marginBottom: spacing.xs,
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
});

