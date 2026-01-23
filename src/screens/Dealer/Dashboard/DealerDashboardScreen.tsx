/**
 * Dealer Dashboard Screen
 * Role-specific dashboard for dealers
 * Thin screen component - logic is in hooks and services
 * Only assembles reusable components
 */

import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../hooks/useTheme';
import { useAuth } from '../../../hooks/useAuth';
import { AppText, AppButton, AppIcon } from '../../../components';
import { styles as screenStyles } from './styles';

export const DealerDashboardScreen: React.FC = () => {
  const { colors, globalStyles } = useTheme();
  const { user, logout } = useAuth();

  // TODO: Add dealer-specific dashboard content
  // TODO: Add navigation to dealer-specific screens

  return (
    <SafeAreaView style={[globalStyles.container, screenStyles.container]}>
      <ScrollView
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={screenStyles.header}>
          <AppIcon name="user" size={64} color={colors.primary} />
          <AppText variant="title" color="primary" style={screenStyles.title}>
            Dealer Dashboard
          </AppText>
          {user && (
            <AppText variant="body" color="secondary" style={screenStyles.subtitle}>
              Welcome, {user.name}
            </AppText>
          )}
        </View>

        <View style={screenStyles.content}>
          <AppText variant="body" color="primary" style={screenStyles.description}>
            This is the dealer dashboard. Add dealer-specific features here.
          </AppText>

          <AppButton
            title="Logout"
            variant="outline"
            size="md"
            onPress={logout}
            style={screenStyles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

