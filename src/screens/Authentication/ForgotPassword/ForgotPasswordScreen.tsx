/**
 * Forgot Password Screen
 * Allows users to request OTP for password reset
 * Thin screen component - logic is in hooks and services
 * Only assembles reusable components
 */

import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../hooks/useTheme';
import { AppText, AppInput, AppIcon } from '../../../components';
import { styles as screenStyles } from './styles';

export interface ForgotPasswordScreenProps {
  onBack?: () => void;
  onSendOTP?: (phone: string) => void;
  onContactSupport?: () => void;
}

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  onBack,
  onSendOTP,
  onContactSupport,
}) => {
  const { colors, globalStyles } = useTheme();
  const [phone, setPhone] = useState('');

  const handleSendOTP = () => {
    const phoneStr = phone?.trim() || '1234567890'; // Default phone if empty
    onSendOTP?.(phoneStr);
  };

  const handleContactSupport = () => {
    // TODO: Navigate to support or handle contact
    onContactSupport?.();
  };

  return (
    <SafeAreaView style={[globalStyles.container, screenStyles.container]}>
      <ScrollView
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={screenStyles.header}>
          <TouchableOpacity onPress={onBack} style={screenStyles.backButton}>
              <AppIcon name="chevron-left" size={24} color={colors.text.primary} />
          </TouchableOpacity>
        </View>

        <View style={screenStyles.content}>
          <AppText 
            variant="pageTitle" 
            style={[screenStyles.title, { color: colors.text.primary }]}
          >
            Forgot Password
          </AppText>

          <AppText 
            variant="inputText" 
            style={[screenStyles.instructions, { color: colors.text.subtitleLight }]}
          >
            Enter your registered phone number to receive a one-time password (OTP).
          </AppText>

          <View style={screenStyles.form}>
            <AppInput
              label="Phone Number"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <TouchableOpacity
              style={[
                screenStyles.sendOTPButton,
                { backgroundColor: colors.brand.canonBlue },
              ]}
              onPress={handleSendOTP}
              activeOpacity={0.8}
            >
              <AppText variant="buttonPrimary" style={{ color: colors.primary.contrast }}>
                Send OTP
              </AppText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={screenStyles.supportContainer}>
          <AppText variant="inputText" style={[screenStyles.supportText, { color: colors.text.sectionHeader }]}>
            Having trouble?{' '}
          </AppText>
          <TouchableOpacity onPress={handleContactSupport}>
            <AppText 
              variant="inputText" 
              style={{ color: colors.brand.canonBlue }}
            >
              Contact Support
            </AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
