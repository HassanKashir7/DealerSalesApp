/**
 * Global Styles Generator
 * Creates global styles based on theme colors and design system constants
 * This function generates theme-aware styles that can be used across the app
 */

import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, ThemeColors } from '../constants/colors';
import { typography } from '../constants/typography';
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
      ...typography.textStyle.body,
      color: themeColors.text.primary,
    },
    heading: {
      ...typography.textStyle.heading,
      color: themeColors.text.primary,
    },
    subheading: {
      ...typography.textStyle.subheading,
      color: themeColors.text.primary,
    },
    body: {
      ...typography.textStyle.body,
      color: themeColors.text.primary,
    },
    caption: {
      ...typography.textStyle.caption,
      color: themeColors.text.secondary,
    },
  });
};

// Export spacing and typography for direct use in components
export { spacing, typography };

