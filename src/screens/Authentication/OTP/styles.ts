/**
 * OTP Screen Styles
 * Screen-specific styles (minimal, as most styling comes from components and constants)
 */

import { StyleSheet } from 'react-native';
import { spacing, radius, sizing, typography } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    position: 'relative',
  },
  backButton: {
    padding: spacing.xs,
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: typography.fontSize.pageTitle,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.xl,
  },
  iconContainer: {
    width: sizing.component.logoMediumSize,
    height: sizing.component.logoMediumSize,
    borderRadius: radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    fontSize: typography.fontSize.sectionHeader,
    marginBottom: spacing.xxl,
    paddingHorizontal: spacing.md,
  },
  phoneNumber: {
    fontSize: typography.fontSize.inputText,
    fontWeight: typography.fontWeight.semibold,
  },
  otpContainer: {
    width: '100%',
    marginBottom: spacing.xxl,
    paddingHorizontal: spacing.md,
  },
  verifyButton: {
    width: '100%',
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  resendQuestion: {
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  resendIcon: {
    marginRight: spacing.xs,
  },
  timerText: {
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
