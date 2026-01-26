export const fontSize = {
    sm: 12,
    md: 16,
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

export * from './colors';