/**
 * Salesperson Dashboard Screen
 * Role-specific dashboard for salespersons
 * Thin screen component - logic is in hooks and services
 * Only assembles reusable components
 */

import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../hooks/useTheme';
import { useAuth } from '../../../hooks/useAuth';
import { AppText, AppIcon, MetricCard, QuickActionButton, BottomNavBar } from '../../../components';
import { spacing, radius } from '../../../constants';
import { styles as screenStyles } from './styles';

export interface SalespersonDashboardScreenProps {
  onNavigate?: (screen: string) => void;
}

export const SalespersonDashboardScreen: React.FC<SalespersonDashboardScreenProps> = ({
  onNavigate,
}) => {
  const { colors, globalStyles } = useTheme();
  const { user } = useAuth();
  const [activeNavRoute, setActiveNavRoute] = useState('dashboard');

  // Mock data - in production, this would come from a service/hook
  const metrics = {
    totalSales: { value: 'Rs. 1.2M', title: 'Total Sales (45 Units)', icon: 'shopping-cart', iconColor: colors.canonBlue },
    commissionEarned: { value: 'Rs. 45,000', title: 'Commission Earned', icon: 'wallet', iconColor: colors.commissionGreen, valueColor: colors.commissionGreen },
    targetReached: { value: '78%', title: 'Target Reached', icon: 'bar-chart', iconColor: colors.canonBlue },
    pendingApproval: { value: 'Rs. 12,500', title: 'Pending Approval', icon: 'clock', iconColor: colors.pendingOrange, valueColor: colors.pendingOrange },
  };

  const quickActions = [
    { label: 'New Order', icon: 'shopping-cart', backgroundColor: colors.canonBlue },
    { label: 'New Dealer', icon: 'plus', backgroundColor: colors.commissionGreen },
    { label: 'Check Stock', icon: 'box', backgroundColor: '#AF52DE' },
    { label: 'Invoices', icon: 'receipt', backgroundColor: colors.pendingOrange },
  ];

  const navItems = [
    { label: 'Dashboard', icon: 'grid', route: 'dashboard' },
    { label: 'Commission Tracking', icon: 'trending-up', route: 'commission' },
    { label: 'Dealer Management', icon: 'people', route: 'dealers' },
    { label: 'Export Reports', icon: 'document', route: 'reports' },
    { label: 'Profile', icon: 'user', route: 'profile' },
  ];

  const handleQuickAction = (action: string) => {
    // TODO: Navigate to respective screen
    console.log('Quick action:', action);
  };

  const handleNavNavigate = (route: string) => {
    setActiveNavRoute(route);
    if (onNavigate) {
      onNavigate(route);
    }
  };

  return (
    <SafeAreaView style={[globalStyles.container, screenStyles.container, { backgroundColor: colors.grayBackground }]}>
      <ScrollView
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={screenStyles.header}>
          <View style={screenStyles.headerLeft}>
            <View style={[screenStyles.profileImage, { backgroundColor: colors.grayLight }]}>
              <AppIcon name="user" size={32} color={colors.textSecondary} />
            </View>
            <AppText variant="sectionHeader" style={{ color: colors.canonBlue }}>
              Dashboard
            </AppText>
          </View>
          <TouchableOpacity style={screenStyles.notificationButton}>
            <AppIcon name="bell" size={24} color={colors.textTitle} />
            <View style={[screenStyles.notificationBadge, { backgroundColor: colors.error }]} />
          </TouchableOpacity>
        </View>

        {/* Welcome Section */}
        <View style={screenStyles.welcomeSection}>
          <AppText variant="inputText" style={{ color: colors.textBlueGrey }}>
            Welcome back,
          </AppText>
          <AppText variant="pageTitle" style={{ color: colors.textTitle, marginTop: spacing.xs }}>
            {user?.name || 'Ahmed Hassan'}
          </AppText>
        </View>

        {/* Metrics Cards */}
        <View style={screenStyles.metricsContainer}>
          <View style={screenStyles.metricsRow}>
            <MetricCard
              title={metrics.totalSales.title}
              value={metrics.totalSales.value}
              icon={metrics.totalSales.icon}
              iconColor={metrics.totalSales.iconColor}
            />
            <MetricCard
              title={metrics.commissionEarned.title}
              value={metrics.commissionEarned.value}
              icon={metrics.commissionEarned.icon}
              iconColor={metrics.commissionEarned.iconColor}
              valueColor={metrics.commissionEarned.valueColor}
            />
          </View>
          <View style={screenStyles.metricsRow}>
            <MetricCard
              title={metrics.targetReached.title}
              value={metrics.targetReached.value}
              icon={metrics.targetReached.icon}
              iconColor={metrics.targetReached.iconColor}
            />
            <MetricCard
              title={metrics.pendingApproval.title}
              value={metrics.pendingApproval.value}
              icon={metrics.pendingApproval.icon}
              iconColor={metrics.pendingApproval.iconColor}
              valueColor={metrics.pendingApproval.valueColor}
            />
          </View>
        </View>

        {/* Performance Snapshot */}
        <View style={screenStyles.snapshotSection}>
          <AppText variant="sectionHeader" style={{ color: colors.textTitle, fontWeight: '700' }}>
            Performance Snapshot
          </AppText>
          <View style={[screenStyles.snapshotCard, { backgroundColor: colors.white }]}>
            <View style={screenStyles.targetCard}>
              <View style={screenStyles.targetHeader}>
                <AppText variant="cardTitle" style={{ color: colors.textTitle, fontWeight: '700' }}>
                  Monthly Sales Target
                </AppText>
                <AppText variant="cardValue" style={{ color: colors.textBlueGrey }}>
                  78%
                </AppText>
              </View>
              <AppText variant="listItemSupport" style={{ color: colors.textBlueGrey, marginTop: spacing.xs }}>
                Target: 60 Units
              </AppText>
              <View style={[screenStyles.progressBarContainer, { backgroundColor: colors.grayBackground }]}>
                <View style={[screenStyles.progressBar, { backgroundColor: colors.canonBlue, width: '78%' }]} />
              </View>
            <View style={screenStyles.progressInfo}>
              <AppIcon name="info" size={16} color={colors.textBlueGrey} />
              <AppText variant="listItemSupport" style={{ color: colors.textBlueGrey, marginLeft: spacing.xs }}>
                78% of this month's target achieved
              </AppText>
            </View>
              <TouchableOpacity style={[screenStyles.viewReportButton, { backgroundColor: colors.canonBlue }]}>
                <AppText variant="buttonPrimary" color="inverse">
                  View Detailed Report
                </AppText>
                <AppIcon name="arrow-right" size={16} color={colors.white} style={{ marginLeft: spacing.xs }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={screenStyles.quickActionsSection}>
          <AppText variant="sectionHeader" style={{ color: colors.textTitle, marginBottom: spacing.md }}>
            QUICK ACTIONS
          </AppText>
          <View style={screenStyles.quickActionsContainer}>
            {quickActions.map((action, index) => (
              <QuickActionButton
                key={index}
                label={action.label}
                icon={action.icon}
                iconColor={colors.white}
                backgroundColor={action.backgroundColor}
                onPress={() => handleQuickAction(action.label)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar
        items={navItems}
        activeRoute={activeNavRoute}
        onNavigate={handleNavNavigate}
      />
    </SafeAreaView>
  );
};
