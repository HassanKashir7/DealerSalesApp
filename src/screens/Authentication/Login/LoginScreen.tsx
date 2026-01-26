/**
 * Login Screen
 * Dealer Login screen with phone and password inputs
 * Thin screen component - logic is in hooks and services
 * Only assembles reusable components
 */

import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../hooks/useTheme';
import { useAuth } from '../../../hooks/useAuth';
import { AppButton, AppText, AppInput, AppIcon } from '../../../components';
import { spacing, sizing, fontWeight } from '../../../constants';
import { styles as screenStyles } from './styles';

const CanonLogo = require('../../../assets/images/canon-logo.png');

export interface LoginScreenProps {
  onForgotPassword?: () => void;
  onSignup?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onForgotPassword,
  onSignup,
}) => {
  const { colors, globalStyles } = useTheme();
  const { login, isLoading } = useAuth();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignupPressed, setIsSignupPressed] = useState(false);

  const handleLogin = async () => {
    if (!phone.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter phone number and password');
      return;
    }

    try {
      await login(phone.trim(), password);
      // Navigation will happen automatically via AppNavigator based on role
    } catch (error: any) {
      Alert.alert('Login Failed', error?.message || 'Invalid credentials');
    }
  };

  const handleSignupPress = () => {
    setIsSignupPressed(true);
    onSignup?.();
    setTimeout(() => setIsSignupPressed(false), 200);
  };

  const handleForgotPassword = () => {
    onForgotPassword?.();
  };

  return (
    <SafeAreaView style={[globalStyles.container, screenStyles.container]}>
      <ScrollView
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={screenStyles.content}>
          <View style={screenStyles.logoContainer}>
            <Image
              source={CanonLogo}
              style={screenStyles.logo}
              resizeMode="contain"
            />
          </View>

          <AppText 
            variant="pageTitle" 
            style={[screenStyles.title, { color: colors.primary.main }]}
          >
            Login
          </AppText>

          <AppText 
            variant="inputLabel" 
            style={[screenStyles.subtitle, { color: colors.text.primary }]}
          >
            Access your professional appliance dashboard.
          </AppText>

          <View style={screenStyles.form}>
            <AppInput
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <AppInput
              label="Password"
              placeholder="Enter your password"
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

            <TouchableOpacity
              style={[
                screenStyles.loginButton,
                { backgroundColor: colors.brand.canonBlue },
              ]}
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <AppText variant="buttonPrimary" style={{ color: colors.primary.contrast }}>
                Login
              </AppText>
            </TouchableOpacity>

            <TouchableOpacity 
              style={screenStyles.forgotPassword}
              onPress={handleForgotPassword}
            >
              <AppText variant="buttonSecondary" style={{ color: colors.brand.canonBlue }}>
                Forgot Password?
              </AppText>
            </TouchableOpacity>
          </View>

          <View style={screenStyles.dividerContainer}>
            <View style={[screenStyles.divider, { backgroundColor: colors.border.divider }]} />
            <AppText variant="buttonSecondary" style={[screenStyles.dividerText, { color: colors.brand.canonBlue, fontWeight: '600' }]}>
              Not registered yet?
            </AppText>
              <View style={[screenStyles.divider, { backgroundColor: colors.border.divider }]} />
          </View>

          <TouchableOpacity
            style={[
              screenStyles.signupButton,
              {
                backgroundColor: isSignupPressed ? colors.brand.canonBlue : colors.neutral.white,
                borderColor: colors.brand.canonBlue,
                borderWidth: sizing.border.medium,
              },
            ]}
            onPress={handleSignupPress}
            activeOpacity={0.8}
          >
            <AppText
              variant="buttonPrimary"
              style={{
                color: isSignupPressed ? colors.neutral.white : colors.brand.canonBlue,
                fontWeight: fontWeight.bold,
              }}
            >
              Send Signup Request
            </AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
