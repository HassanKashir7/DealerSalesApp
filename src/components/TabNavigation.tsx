/**
 * Tab Navigation Component
 * Reusable tab navigation for switching between views
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { AppText } from './AppText';
import { spacing, radius, typography } from '../constants';

export interface Tab {
  label: string;
  value: string;
}

export interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { borderBottomColor: colors.borderLight }]}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;
        return (
          <TouchableOpacity
            key={tab.value}
            style={[
              styles.tab,
              isActive && { borderBottomWidth: 2, borderBottomColor: colors.canonBlue },
            ]}
            onPress={() => onTabChange(tab.value)}
            activeOpacity={0.7}
          >
            <AppText
              variant="sectionHeader"
              style={[
                styles.tabText,
                {
                  color: isActive ? colors.canonBlue : colors.textSecondary,
                  fontWeight: isActive ? '700' : '400',
                },
              ]}
            >
              {tab.label}
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
    borderBottomWidth: 1,
    marginBottom: spacing.md,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: typography.fontSize.inputText,
  },
});

