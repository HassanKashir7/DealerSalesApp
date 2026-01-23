/**
 * Validation Utilities
 * Centralized validation functions for forms and inputs
 */

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validate password strength
 * @param password - Password to validate
 * @param minLength - Minimum length (default: 8)
 * @returns Object with isValid and error message
 */
export const validatePassword = (
  password: string,
  minLength: number = 8
): { isValid: boolean; error?: string } => {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }

  if (password.length < minLength) {
    return {
      isValid: false,
      error: `Password must be at least ${minLength} characters`,
    };
  }

  return { isValid: true };
};

/**
 * Validate required field
 */
export const isRequired = (value: string | null | undefined): boolean => {
  return value !== null && value !== undefined && value.trim().length > 0;
};

/**
 * Validate phone number (basic validation)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone.trim()) && phone.replace(/\D/g, '').length >= 10;
};

/**
 * Validate URL format
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate numeric value
 */
export const isNumeric = (value: string): boolean => {
  return /^\d+$/.test(value.trim());
};

/**
 * Validate min/max length
 */
export const validateLength = (
  value: string,
  min?: number,
  max?: number
): { isValid: boolean; error?: string } => {
  const length = value.trim().length;

  if (min !== undefined && length < min) {
    return { isValid: false, error: `Must be at least ${min} characters` };
  }

  if (max !== undefined && length > max) {
    return { isValid: false, error: `Must be no more than ${max} characters` };
  }

  return { isValid: true };
};

