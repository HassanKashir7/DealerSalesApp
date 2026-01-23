/**
 * Design System - Typography
 * Centralized typography definitions matching Canon brand specifications
 * Font Family: Inter, Roboto, or San Francisco (Clean, professional sans-serif)
 */

export const typography = {
  // Font families
  fontFamily: {
    regular: 'System', // Will use Inter/Roboto/SF Pro on respective platforms
    medium: 'System',
    semibold: 'System',
    bold: 'System',
  },

  // Font sizes (exact specifications)
  fontSize: {
    // Headers & Branding
    pageTitle: 24, // "Dealer Login", "Dealer Dashboard"
    sectionHeader: 18, // "Salespersons", "Summary"
    
    // Dashboard Cards
    cardTitle: 14, // "Current Stock", "Ledger Balance"
    cardValue: 20, // "Rs. 450,000", "24 Units"
    
    // Form Inputs
    inputLabel: 14, // "Phone Number", "Email"
    inputText: 16, // Input text and placeholder
    
    // Buttons
    buttonPrimary: 16, // "Login", "Send Request"
    buttonSecondary: 14, // "Forgot Password?"
    
    // Lists & Data Tables
    listItemTitle: 15, // Salesperson Name, Product Name
    listItemSupport: 13, // Phone numbers, Date, Invoice #
    statusBadge: 11, // "Active", "Pending"
    
    // Footer Navigation
    navLabel: 10, // "Dashboard", "Stock"
    
    // Legacy sizes (for backward compatibility)
    xs: 11,
    sm: 13,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    display: 40,
  },

  // Font weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },

  // Line heights (calculated for readability)
  lineHeight: {
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
  },

  // Text styles matching exact specifications
  textStyle: {
    // Headers & Branding
    pageTitle: {
      fontSize: 32, // Even larger for Login text
      lineHeight: 40,
      fontWeight: '700' as const, // Bold
    },
    sectionHeader: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '600' as const, // Semi-bold
    },
    
    // Dashboard Cards
    cardTitle: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500' as const, // Medium
    },
    cardValue: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '700' as const, // Bold
    },
    
    // Form Inputs
    inputLabel: {
      fontSize: 16, // Larger for Phone Number and Password labels
      lineHeight: 22,
      fontWeight: '600' as const, // Semi-bold
    },
    inputText: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400' as const, // Regular
    },
    
    // Buttons
    buttonPrimary: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600' as const, // Semi-bold
      letterSpacing: 0.5, // Premium feel
    },
    buttonSecondary: {
      fontSize: 16, // Larger for Forgot Password
      lineHeight: 22,
      fontWeight: '500' as const, // Medium
    },
    
    // Lists & Data Tables
    listItemTitle: {
      fontSize: 15,
      lineHeight: 22,
      fontWeight: '600' as const, // Semi-bold
    },
    listItemSupport: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '400' as const, // Regular
    },
    statusBadge: {
      fontSize: 11,
      lineHeight: 14,
      fontWeight: '700' as const, // Bold
      textTransform: 'uppercase' as const,
    },
    
    // Footer Navigation
    navLabel: {
      fontSize: 10,
      lineHeight: 14,
      fontWeight: '500' as const, // Medium
    },
    
    // Legacy styles (for backward compatibility)
    caption: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '400' as const,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400' as const,
    },
    bodyBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600' as const,
    },
    subheading: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '600' as const,
    },
    heading: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '700' as const,
    },
    title: {
      fontSize: 32,
      lineHeight: 44,
      fontWeight: '700' as const,
    },
    display: {
      fontSize: 40,
      lineHeight: 48,
      fontWeight: '700' as const,
    },
  },
} as const;

export type TypographyKey = keyof typeof typography;

