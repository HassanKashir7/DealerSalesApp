/**
 * Splash Screen Styles
 * Screen-specific styles (minimal, as most styling comes from components and constants)
 */

import { StyleSheet } from 'react-native';
import { spacing } from '../../constants/spacing';
import { sizing } from '../../constants/size';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '60%',
    maxWidth: sizing.responsive.logoMaxWidth,
    aspectRatio: 1,
    marginBottom: spacing.xl,
  },
  welcomeText: {
    textAlign: 'center',
  },
  footer: {
    paddingBottom: spacing.xxl,
    alignItems: 'center',
  },
});

