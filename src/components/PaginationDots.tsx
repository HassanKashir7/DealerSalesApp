/**
 * PaginationDots Component
 * Reusable component for displaying pagination indicators
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { spacing } from '../constants/spacing';
import { radius } from '../constants/radius';

export interface PaginationDotsProps {
  totalDots?: number;
  activeIndex?: number;
  style?: ViewStyle;
}

/**
 * PaginationDots Component
 * Usage: <PaginationDots totalDots={3} activeIndex={0} />
 */
export const PaginationDots: React.FC<PaginationDotsProps> = ({
  totalDots = 3,
  activeIndex = 0,
  style,
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: totalDots }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor:
                index === activeIndex ? colors.primary : colors.grayLight,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  dot: {
    width: spacing.xs,
    height: spacing.xs,
    borderRadius: radius.round,
  },
});

