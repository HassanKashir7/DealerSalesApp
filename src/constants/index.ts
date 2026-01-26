export const fontSize = {
    sm: 16,
    md: 18,
    lg: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
  } as const;
  // Font families
 export const fontFamily = {
    regular: 'System', // Will use Inter/Roboto/SF Pro on respective platforms
    medium: 'System',
    semibold: 'System',
    bold: 'System', 
  } as const;

  // Font weights
  export const fontWeight = {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  } as const;

  // Line heights (calculated for readability)
  export const lineHeight = {
    pageTitle: 32, // 24px * 1.33
    sectionHeader: 24, // 18px * 1.33
    cardTitle: 20, // 14px * 1.43
    cardValue: 28, // 20px * 1.4
    inputLabel: 20, // 14px * 1.43
    inputText: 24, // 16px * 1.5
    buttonPrimary: 24, // 16px * 1.5
    buttonSecondary: 20, // 14px * 1.43
    listItemTitle: 22, // 15px * 1.47
    listItemSupport: 18, // 13px * 1.38
    statusBadge: 14, // 11px * 1.27
    navLabel: 14, // 10px * 1.4
  } as const;

  export const borderSize = {
    none: 0,
    thin: 1,
    medium: 2,
    thick: 3,
  } as const;
  
  export const borderRadius = {
      none: 0,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      xxl: 24,
      round: 9999, // Full circle
    } as const;

    export const spacing = {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48,
        xxxl: 64,
      } as const;

/**
 * Component sizing constants
 * Standard sizes for UI components
 */
export const componentSizes = {
  // Logo sizes
  logoSmallWidth: 80,
  logoSmallHeight: 80,
  logoMediumSize: 120,
  
  // Profile and avatar sizes
  profileImage: 48,
  
  // Input sizes
  inputHeight: 48,
  otpInputSize: 56,
  
  // Icon container sizes
  iconContainer: 40,
  
  // Badge and notification sizes
  notificationBadge: 8,
  
  // Button sizes
  quickActionButton: 64,
  
  // Progress and bar sizes
  progressBarHeight: 8,
} as const;

/**
 * Responsive sizing constants
 * Values that adapt to screen sizes
 */
export const responsiveSizes = {
  logoMaxWidth: 200,
} as const;

/**
 * Icon sizing constants
 * Standard sizes for icons throughout the app
 */
export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

/**
 * Main sizing export
 * Combines all sizing constants into a single object
 */
export const sizing = {
  border: borderSize,
  component: componentSizes,
  responsive: responsiveSizes,
  icon: iconSizes,
} as const;

/**
 * Export borderRadius as radius for convenience
 */
export const radius = borderRadius;

/**
 * Typography text styles
 * Pre-combined styles for common text variants
 */
export const textStyle = {
  pageTitle: {
    fontSize: fontSize.xxl,
    fontFamily: fontFamily.bold,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.pageTitle,
  },
  sectionHeader: {
    fontSize: fontSize.lg,
    fontFamily: fontFamily.semibold,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.sectionHeader,
  },
  cardTitle: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.semibold,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.cardTitle,
  },
  cardValue: {
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bold,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.cardValue,
  },
  inputLabel: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.inputLabel,
  },
  inputText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.inputText,
  },
  buttonPrimary: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.bold,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.buttonPrimary,
  },
  buttonSecondary: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.semibold,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.buttonSecondary,
  },
  listItemTitle: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.listItemTitle,
  },
  listItemSupport: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.listItemSupport,
  },
  statusBadge: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.statusBadge,
  },
  navLabel: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.medium,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.navLabel,
  },
  caption: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.statusBadge,
  },
  body: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.regular,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.inputText,
  },
  bodyBold: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.bold,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.inputText,
  },
  subheading: {
    fontSize: fontSize.lg,
    fontFamily: fontFamily.semibold,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.sectionHeader,
  },
  heading: {
    fontSize: fontSize.xl,
    fontFamily: fontFamily.bold,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.pageTitle,
  },
  title: {
    fontSize: fontSize.xxl,
    fontFamily: fontFamily.bold,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.pageTitle + 4,
  },
  display: {
    fontSize: fontSize.xxxl,
    fontFamily: fontFamily.bold,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.pageTitle + 8,
  },
} as const;

/**
 * Typography export
 * Combines all typography-related constants
 */
export const typography = {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textStyle,
} as const;

export * from './colors';