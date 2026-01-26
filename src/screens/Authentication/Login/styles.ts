/**
 * Login Screen Styles
 * Screen-specific styles (minimal, as most styling comes from components and constants)
 */

import { StyleSheet } from 'react-native';
import { spacing } from '../../../constants/spacing';
import { radius } from '../../../constants/radius';
import { sizing } from '../../../constants/size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
  },
  content: {
    flex: 1,
    paddingTop: spacing.xl,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.md, // Reduced gap between logo and Login text
  },
  logo: {
    width: sizing.component.logoMediumSize,
    height: sizing.component.logoMediumSize,
  },
  title: {
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: spacing.xxl,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  loginButton: {
    width: '100%',
    paddingVertical: spacing.md,
    borderRadius: radius.lg, // 12px as per specification
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: spacing.md,
    paddingVertical: spacing.xs,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  divider: {
    flex: 1,
    height: sizing.border.medium,
  },
  dividerText: {
    paddingHorizontal: spacing.md,
  },
  signupButton: {
    width: '100%',
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    borderWidth: sizing.border.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
});
