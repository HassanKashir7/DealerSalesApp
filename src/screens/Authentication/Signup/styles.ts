/**
 * Signup Screen Styles
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
    paddingTop: spacing.lg,
  },
  infoText: {
    textAlign: 'center',
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  form: {
    width: '100%',
    marginBottom: spacing.md,
  },
  submitButton: {
    width: '100%',
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  disclaimer: {
    textAlign: 'center',
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
  },
  footer: {
    alignItems: 'center',
    marginTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  canonLogo: {
    width: sizing.component.logoSmallWidth,
    height: sizing.component.logoSmallHeight,
  },
});
