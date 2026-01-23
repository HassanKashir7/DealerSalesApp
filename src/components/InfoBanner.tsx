/**
 * Info Banner Component
 * Reusable banner for displaying informational messages
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { AppText } from './AppText';
import { AppIcon } from './AppIcon';
import { spacing } from '../constants/spacing';
import { radius } from '../constants/radius';

export interface InfoBannerProps {
  title: string;
  message: string;
  onViewPress?: () => void;
  visible?: boolean;
}

export const InfoBanner: React.FC<InfoBannerProps> = ({
  title,
  message,
  onViewPress,
  visible = true,
}) => {
  const { colors } = useTheme();

  if (!visible) return null;

  return (
    <View style={[styles.container, { backgroundColor: '#E3F2FD' }]}>
      <View style={styles.iconContainer}>
        <AppIcon name="info" size={20} color={colors.canonBlue} />
      </View>
      <View style={styles.textContainer}>
        <AppText variant="cardTitle" style={[styles.title, { color: colors.textTitle }]}>
          {title}
        </AppText>
        <AppText variant="listItemSupport" style={[styles.message, { color: colors.textBlueGrey }]}>
          {message}
        </AppText>
      </View>
      {onViewPress && (
        <TouchableOpacity onPress={onViewPress} style={styles.viewButton}>
          <AppText variant="buttonSecondary" style={[styles.viewText, { color: colors.canonBlue }]}>
            View
          </AppText>
          <AppIcon name="chevron-right" size={16} color={colors.canonBlue} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radius.md,
    marginBottom: spacing.md,
  },
  iconContainer: {
    marginRight: spacing.sm,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    marginBottom: spacing.xs,
    fontWeight: '600',
  },
  message: {
    lineHeight: 18,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.sm,
  },
  viewText: {
    marginRight: spacing.xs,
    fontWeight: '600',
  },
});

