/**
 * Home Screen
 * Thin screen component - logic is in hooks
 * Only assembles reusable components
 */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../hooks/useAuth';
import { spacing } from '../../constants';
import { AppButton, AppText, AppIcon } from '../../components';
import { styles as screenStyles } from './styles';

export const HomeScreen: React.FC = () => {
  const { colors, globalStyles } = useTheme();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <SafeAreaView style={[globalStyles.container, screenStyles.container]}>
      <ScrollView
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={screenStyles.header}>
          <AppIcon name="home" size={64} color={colors.primary} />
          <AppText variant="title" color="primary" style={screenStyles.title}>
            Home
          </AppText>
          {user && (
            <AppText variant="body" color="secondary" style={screenStyles.subtitle}>
              Welcome, {user.email}
            </AppText>
          )}
        </View>

        <View style={screenStyles.content}>
          <AppText variant="body" color="primary" style={screenStyles.description}>
            This is your home screen. The architecture follows best practices with
            centralized components, constants, and services.
          </AppText>

          <AppButton
            title="Logout"
            variant="outline"
            size="md"
            onPress={handleLogout}
            leftIcon={<AppIcon name="logout" size={20} color={colors.primary} />}
            style={screenStyles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

