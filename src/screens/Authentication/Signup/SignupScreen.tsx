/**
 * Signup/Registration Request Screen
 * Allows users to submit registration request
 * Thin screen component - logic is in hooks and services
 * Only assembles reusable components
 */

import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../hooks/useTheme';
import { AppText, AppInput, AppIcon } from '../../../components';
import { styles as screenStyles } from './styles';

const CanonLogo = require('../../../assets/images/canon-logo.png');

export interface SignupScreenProps {
  onBack?: () => void;
  onSubmit?: (data: {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

export const SignupScreen: React.FC<SignupScreenProps> = ({
  onBack,
  onSubmit,
}) => {
  const { colors, globalStyles } = useTheme();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (fullName && email && phone && password && confirmPassword) {
      onSubmit?.({
        fullName,
        email,
        phone,
        password,
        confirmPassword,
      });
    }
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
          <AppText
            variant="pageTitle"
            style={[screenStyles.headerTitle, { color: colors.text.primary }]}
          >
            Registration Request
          </AppText>
        </View>

        <View style={screenStyles.content}>
          <AppText
            variant="inputText"
            style={[screenStyles.infoText, { color: colors.brand.canonBlue }]}
          >
            Submit your details. Your account will be activated after approval by Canon.
          </AppText>

          <View style={screenStyles.form}>
            <AppInput
              label="Full Name"
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={setFullName}
            />

            <AppInput
              label="Email Address"
              placeholder="name@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <AppInput
              label="Phone Number"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <AppInput
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              rightIcon={
                <AppIcon
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color={colors.ui.iconPassword}
                />
              }
              onRightIconPress={() => setShowPassword(!showPassword)}
            />

            <AppInput
              label="Confirm Password"
              placeholder="Repeat your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              rightIcon={
                <AppIcon
                  name={showConfirmPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color={colors.ui.iconPassword}
                />
              }
              onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />

            <TouchableOpacity
              style={[
                screenStyles.submitButton,
                { backgroundColor: colors.brand.canonBlue },
              ]}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <AppText variant="buttonPrimary" style={{ color: colors.primary.contrast }}>
                Send Request
              </AppText>
            </TouchableOpacity>
          </View>

          <AppText
            variant="caption"
            style={[screenStyles.disclaimer, { color: colors.text.sectionHeader }]}
          >
            Registration is subject to approval by Canon Admin.
          </AppText>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
