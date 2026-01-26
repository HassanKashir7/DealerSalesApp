/**
 * Global Styles Generator
 * Creates global styles based on theme colors and design system constants
 * This function generates theme-aware styles that can be used across the app
 */

import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, ThemeColors } from '../constants/colors';
import { fontSize, fontFamily, fontWeight, lineHeight } from '../constants';
import { spacing } from '../constants';

export interface GlobalStyles {
  container: ViewStyle;
  centerContent: ViewStyle;
  row: ViewStyle;
  column: ViewStyle;
  flex1: ViewStyle;
  text: TextStyle;
  heading: TextStyle;
  subheading: TextStyle;
  body: TextStyle;
  caption: TextStyle;
}

/**
 * Creates global styles based on theme colors
 * @param themeColors - Color theme object
 * @returns Generated global styles
 */
export const createGlobalStyle = (
  themeColors: ThemeColors = colors
): GlobalStyles => {
  return StyleSheet.create<GlobalStyles>({
    container: {
      flex: 1,
      backgroundColor: themeColors.background.primary,
      padding: spacing.md,
    },
    centerContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
    flex1: {
      flex: 1,
    },
    text: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.regular,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.inputText,
      color: themeColors.text.primary,
    },
    heading: {
      fontSize: fontSize.xl,
      fontFamily: fontFamily.bold,
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.pageTitle,
      color: themeColors.text.primary,
    },
    subheading: {
      fontSize: fontSize.lg,
      fontFamily: fontFamily.semibold,
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.sectionHeader,
      color: themeColors.text.primary,
    },
    body: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.regular,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.inputText,
      color: themeColors.text.primary,
    },
    caption: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.regular,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.statusBadge,
      color: themeColors.text.secondary,
    },
  });
};
