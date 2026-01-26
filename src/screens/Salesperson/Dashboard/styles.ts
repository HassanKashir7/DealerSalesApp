/**
 * Salesperson Dashboard Screen Styles
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
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    backgroundColor: '#FFFFFF',
    marginHorizontal: -spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: sizing.component.profileImage,
    height: sizing.component.profileImage,
    borderRadius: radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  notificationButton: {
    position: 'relative',
    padding: spacing.xs,
  },
  notificationBadge: {
    position: 'absolute',
    top: spacing.xs,
    right: spacing.xs,
    width: sizing.component.notificationBadge,
    height: sizing.component.notificationBadge,
    borderRadius: radius.round,
  },
  welcomeSection: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  metricsContainer: {
    marginBottom: spacing.xl,
  },
  metricsRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  snapshotSection: {
    marginBottom: spacing.xl,
  },
  snapshotCard: {
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  targetCard: {
    marginTop: spacing.sm,
  },
  targetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  progressBarContainer: {
    height: sizing.component.progressBarHeight,
    borderRadius: radius.sm,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: radius.sm,
  },
  progressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  viewReportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    marginTop: spacing.sm,
  },
  quickActionsSection: {
    marginBottom: spacing.xl,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
