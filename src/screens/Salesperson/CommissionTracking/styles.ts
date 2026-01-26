/**
 * Commission Tracking Screen Styles
 * Screen-specific styles (minimal, as most styling comes from components and constants)
 */

import { StyleSheet } from 'react-native';
import { spacing } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  backButton: {
    padding: spacing.xs,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    marginHorizontal: spacing.md,
  },
  headerRight: {
    width: 40,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  metricsContainer: {
    flexDirection: 'row',
    marginBottom: spacing.xl,
  },
  productBreakdownSection: {
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontWeight: '700',
  },
  sortText: {
    fontWeight: '600',
  },
});

