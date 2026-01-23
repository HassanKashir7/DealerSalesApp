/**
 * OTP Verification Screen
 * Part of Authentication module
 * Used for both signup and forgot password flows
 * Thin screen component - logic is in hooks and services
 * Only assembles reusable components
 */

import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../hooks/useTheme';
import { AppText, AppIcon, OTPInput } from '../../../components';
import { spacing } from '../../../constants/spacing';
import { radius } from '../../../constants/radius';
import { styles as screenStyles } from './styles';

export interface OTPScreenProps {
  phone?: string;
  flow?: 'forgot-password' | 'signup';
  onBack?: () => void;
  onVerify?: (otp: string) => void;
  onResendOTP?: () => void;
}

export const OTPScreen: React.FC<OTPScreenProps> = ({
  phone = '****5678',
  flow = 'forgot-password',
  onBack,
  onVerify,
  onResendOTP,
}) => {
  const { colors, globalStyles } = useTheme();
  const [otp, setOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(60); // 60 seconds countdown
  const [canResend, setCanResend] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [resendTimer]);

  const handleOTPComplete = (value: string) => {
    onVerify?.(value);
  };

  const handleResend = () => {
    if (canResend) {
      setResendTimer(60);
      setCanResend(false);
      onResendOTP?.();
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const buttonText = flow === 'forgot-password' ? 'Verify & Reset Password' : 'Verify';

  return (
    <SafeAreaView style={[globalStyles.container, screenStyles.container]}>
      <ScrollView
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={screenStyles.header}>
          <TouchableOpacity onPress={onBack} style={screenStyles.backButton}>
            <AppIcon name="chevron-left" size={24} color={colors.textTitle} />
          </TouchableOpacity>
          <AppText
            variant="pageTitle"
            style={[screenStyles.headerTitle, { color: colors.textTitle }]}
          >
            Verify OTP
          </AppText>
        </View>

        <View style={screenStyles.content}>
          {/* Security Icon */}
          <View style={[screenStyles.iconContainer, { backgroundColor: colors.otpIconBackground }]}>
            <AppIcon name="shield" size={56} color={colors.canonBlue} />
          </View>

          {/* Title */}
          <AppText
            variant="pageTitle"
            style={[screenStyles.title, { color: colors.textTitle }]}
          >
            Verify OTP
          </AppText>

          {/* Instructions */}
          <AppText
            variant="inputText"
            style={[screenStyles.instructions, { color: colors.textSectionHeader }]}
          >
            Please enter the 6-digit verification code sent to your registered dealer mobile number ending in{' '}
            <AppText
              variant="inputText"
              style={[screenStyles.phoneNumber, { color: colors.canonBlue, fontWeight: '600' }]}
            >
              {phone}.
            </AppText>
          </AppText>

          {/* OTP Input */}
          <View style={screenStyles.otpContainer}>
            <OTPInput
              length={6}
              value={otp}
              onChangeText={setOtp}
              onComplete={handleOTPComplete}
            />
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            style={[
              screenStyles.verifyButton,
              { backgroundColor: colors.canonBlue },
            ]}
            onPress={() => handleOTPComplete(otp)}
            activeOpacity={0.8}
          >
            <AppText variant="buttonPrimary" color="inverse">
              {buttonText}
            </AppText>
          </TouchableOpacity>

          {/* Resend Section */}
          <View style={screenStyles.resendContainer}>
            <AppText
              variant="inputText"
              style={[screenStyles.resendQuestion, { color: colors.textSectionHeader }]}
            >
              Didn't receive the code?
            </AppText>

            <TouchableOpacity
              style={screenStyles.resendButton}
              onPress={handleResend}
              disabled={!canResend}
            >
              <AppIcon
                name="refresh"
                size={16}
                color={canResend ? colors.canonBlue : colors.textTimer}
                style={screenStyles.resendIcon}
              />
              <AppText
                variant="inputText"
                style={{
                  color: canResend ? colors.canonBlue : colors.textTimer,
                  fontWeight: '600',
                }}
              >
                Resend OTP
              </AppText>
            </TouchableOpacity>

            {!canResend && (
              <AppText
                variant="inputText"
                style={[screenStyles.timerText, { color: colors.textTimer }]}
              >
                Resend in {formatTimer(resendTimer)}
              </AppText>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
