/**
 * Bottom Navigation Bar Component
 * Reusable bottom navigation for dashboard screens
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { AppText } from './AppText';
import { AppIcon } from './AppIcon';
import { spacing, sizing } from '../constants';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
}

export interface BottomNavBarProps {
  items: NavItem[];
  activeRoute: string;
  onNavigate: (route: string) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  items,
  activeRoute,
  onNavigate,
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.white, borderTopColor: colors.borderLight }]}>
      {items.map((item) => {
        const isActive = activeRoute === item.route;
        const iconColor = isActive ? colors.canonBlue : colors.textSecondary;
        const labelColor = isActive ? colors.canonBlue : colors.textSecondary;

        return (
          <TouchableOpacity
            key={item.route}
            style={styles.item}
            onPress={() => onNavigate(item.route)}
            activeOpacity={0.7}
          >
            <AppIcon name={item.icon as any} size={24} color={iconColor} />
            <AppText variant="navLabel" style={[styles.label, { color: labelColor }]}>
              {item.label}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderTopWidth: sizing.border.thin,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: spacing.xs,
    textAlign: 'center',
  },
});

