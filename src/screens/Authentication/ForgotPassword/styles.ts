/**
 * Forgot Password Screen Styles
 * Screen-specific styles (minimal, as most styling comes from components and constants)
 */

import { StyleSheet } from 'react-native';
import { spacing } from '../../../constants/spacing';
import { radius } from '../../../constants/radius';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
  },
  header: {
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  backButton: {
    padding: spacing.xs,
    alignSelf: 'flex-start',
  },
  content: {
    flex: 1,
    paddingTop: spacing.xl,
  },
  title: {
    marginBottom: spacing.md,
    textAlign: 'left',
  },
  instructions: {
    marginBottom: spacing.xxl,
    textAlign: 'left',
  },
  form: {
    width: '100%',
    marginBottom: spacing.xl,
  },
  sendOTPButton: {
    width: '100%',
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  supportContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xxl,
    paddingBottom: spacing.xxl,
  },
  supportText: {
    textAlign: 'center',
  },
});
