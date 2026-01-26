/**
 * Commission Tracking Screen
 * Screen for viewing commission tracking with monthly/quarterly tabs
 * Thin screen component - logic is in hooks and services
 * Only assembles reusable components
 */

import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../hooks/useTheme';
import {
  AppText,
  AppIcon,
  InfoBanner,
  TabNavigation,
  CommissionMetricCard,
  ProductBreakdownItem,
  BottomNavBar,
} from '../../../components';
import { spacing } from '../../../constants';
import { styles as screenStyles } from './styles';

export interface CommissionTrackingScreenProps {
  onBack?: () => void;
}

export const CommissionTrackingScreen: React.FC<CommissionTrackingScreenProps> = ({
  onBack,
}) => {
  const { colors, globalStyles } = useTheme();
  const [activeTab, setActiveTab] = useState<'monthly' | 'quarterly'>('monthly');
  const [activeNavRoute, setActiveNavRoute] = useState('commission');

  // Mock data - in production, this would come from a service/hook
  const monthlyData = {
    totalCommission: 'Rs. 345,600',
    paidCommission: 'Rs. 210,000',
    products: [
      {
        id: '1',
        productName: 'imageRUNNER ADVANCE',
        productModel: 'DX C3835i',
        unitsSold: 4,
        pricePerUnit: 'Rs. 4,500',
        status: 'PAID' as const,
        commissionAmount: 'Rs. 54,000',
      },
      {
        id: '2',
        productName: 'imagePRESS C170',
        productModel: 'C170',
        unitsSold: 2,
        pricePerUnit: 'Rs. 22,600',
        status: 'PENDING' as const,
        commissionAmount: 'Rs. 135,600',
      },
      {
        id: '3',
        productName: 'imagePROGRAF PRO',
        productModel: 'PRO-6100',
        unitsSold: 1,
        pricePerUnit: 'Rs. 39,000',
        status: 'PAID' as const,
        commissionAmount: 'Rs. 156,000',
      },
    ],
  };

  const quarterlyData = {
    totalCommission: 'Rs. 345,600',
    paidCommission: 'Rs. 210,000',
    products: [
      {
        id: '1',
        productName: 'imageRUNNER ADVANCE',
        productModel: 'DX C3835i',
        unitsSold: 12,
        pricePerUnit: 'Rs. 4,500',
        status: 'PAID' as const,
        commissionAmount: 'Rs. 54,000',
      },
      {
        id: '2',
        productName: 'imagePRESS C170',
        productModel: 'C170',
        unitsSold: 6,
        pricePerUnit: 'Rs. 22,600',
        status: 'PENDING' as const,
        commissionAmount: 'Rs. 135,600',
      },
      {
        id: '3',
        productName: 'imagePROGRAF PRO',
        productModel: 'PRO-6100',
        unitsSold: 4,
        pricePerUnit: 'Rs. 39,000',
        status: 'PAID' as const,
        commissionAmount: 'Rs. 156,000',
      },
    ],
  };

  const currentData = activeTab === 'monthly' ? monthlyData : quarterlyData;

  const tabs = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quarterly', value: 'quarterly' },
  ];

  const navItems = [
    { label: 'Dashboard', icon: 'grid', route: 'dashboard' },
    { label: 'Commission Tracking', icon: 'trending-up', route: 'commission' },
    { label: 'Dealer Management', icon: 'people', route: 'dealers' },
    { label: 'Export Reports', icon: 'document', route: 'reports' },
    { label: 'Profile', icon: 'user', route: 'profile' },
  ];

  const handleNavNavigate = (route: string) => {
    setActiveNavRoute(route);
    if (route === 'dashboard' && onBack) {
      onBack();
    }
    // TODO: Navigate to other screens
    console.log('Navigate to:', route);
  };

  const handleViewBanner = () => {
    // TODO: Navigate to commission details
    console.log('View commission details');
  };

  return (
    <SafeAreaView style={[globalStyles.container, screenStyles.container, { backgroundColor: colors.grayBackground }]}>
      {/* Header */}
      <View style={[screenStyles.header, { backgroundColor: colors.grayDark }]}>
        <TouchableOpacity onPress={onBack} style={screenStyles.backButton}>
          <AppIcon name="arrow-left" size={24} color={colors.white} />
        </TouchableOpacity>
        <AppText variant="sectionHeader" style={[screenStyles.headerTitle, { color: colors.white }]}>
          Commission Tracking
        </AppText>
        <View style={screenStyles.headerRight} />
      </View>

      <ScrollView
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Info Banner */}
        <InfoBanner
          title="New commission added"
          message="A new entry has been recorded."
          onViewPress={handleViewBanner}
        />

        {/* Tab Navigation */}
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab as 'monthly' | 'quarterly')} />

        {/* Commission Metric Cards */}
        <View style={screenStyles.metricsContainer}>
          <CommissionMetricCard
            title="Total Commission"
            value={currentData.totalCommission}
            icon="document"
            backgroundColor={colors.canonBlue}
            iconColor={colors.white}
          />
          <CommissionMetricCard
            title="Paid Commission"
            value={currentData.paidCommission}
            icon="check"
            backgroundColor={colors.commissionGreen}
            iconColor={colors.white}
          />
        </View>

        {/* Product Breakdown Section */}
        <View style={screenStyles.productBreakdownSection}>
          <View style={screenStyles.sectionHeader}>
            <AppText variant="sectionHeader" style={[screenStyles.sectionTitle, { color: colors.textTitle }]}>
              Product Breakdown
            </AppText>
            <TouchableOpacity>
              <AppText variant="buttonSecondary" style={[screenStyles.sortText, { color: colors.canonBlue }]}>
                Sort: Recent
              </AppText>
            </TouchableOpacity>
          </View>

          {currentData.products.map((product) => (
            <ProductBreakdownItem
              key={product.id}
              productName={product.productName}
              productModel={product.productModel}
              unitsSold={product.unitsSold}
              pricePerUnit={product.pricePerUnit}
              status={product.status}
              commissionAmount={product.commissionAmount}
            />
          ))}
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

