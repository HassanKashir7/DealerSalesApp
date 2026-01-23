/**
 * Splash Screen
 * Entry point of the app
 * Shows while app initializes and determines navigation flow
 * Navigates to Login screen after 5 seconds or on tap
 */

import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../hooks/useTheme';
import { AppText, PaginationDots } from '../../components';
import { styles as screenStyles } from './styles';

const CanonLogo = require('../../assets/images/canon-logo.png');

interface SplashScreenProps {
  onFinish?: () => void;
  onNavigate?: () => void; // Legacy prop for backward compatibility
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, onNavigate }) => {
  const { colors, globalStyles } = useTheme();

  const handleFinish = () => {
    onFinish?.() || onNavigate?.();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleFinish();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [onFinish, onNavigate]);

  const handlePress = () => {
    handleFinish();
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handlePress}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={[globalStyles.container, screenStyles.container]}>
        <View style={screenStyles.content}>
          <Image
            source={CanonLogo}
            style={screenStyles.logo}
            resizeMode="contain"
          />
          <AppText 
            variant="body" 
            style={[
              screenStyles.welcomeText, 
              { 
                color: colors.textDarkBlue || '#5B8FC7', 
                fontWeight: '700' as const,
              }
            ]}
          >
            WELCOME to CANON App!
          </AppText>
        </View>
        <View style={screenStyles.footer}>
          <PaginationDots totalDots={3} activeIndex={0} />
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

