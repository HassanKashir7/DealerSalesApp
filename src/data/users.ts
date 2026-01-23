/**
 * Temporary Local User Data
 * This file contains mock user data for authentication
 * Later, this can be replaced with API calls without touching screens
 * 
 * User structure:
 * - name: string
 * - phone: string
 * - password: string
 * - role: 'dealer' | 'salesperson'
 */

export type UserRole = 'dealer' | 'salesperson';

export interface User {
  id: string;
  name: string;
  phone: string;
  password: string;
  email?: string;
  role: UserRole;
}

/**
 * Temporary users database
 * In production, this will be replaced with API service
 */
export const users: User[] = [
  {
    id: '1',
    name: 'Hassan Kashir',
    phone: '03204865001',
    password: '1234',
    email: 'hssnkashir@gmail.com',
    role: 'salesperson',
  },
];

/**
 * Find user by phone and password
 * Returns user if credentials match, null otherwise
 */
export const findUserByCredentials = (
  phone: string,
  password: string
): User | null => {
  // Normalize phone for comparison (remove spaces, dashes, etc.)
  const normalizedPhone = phone.replace(/\s+/g, '').replace(/[-()]/g, '');
  return (
    users.find(
      (user) => {
        const normalizedUserPhone = user.phone.replace(/\s+/g, '').replace(/[-()]/g, '');
        return normalizedUserPhone === normalizedPhone && user.password === password;
      }
    ) || null
  );
};

/**
 * Find user by phone
 * Useful for signup and forgot password flows
 */
export const findUserByPhone = (phone: string): User | null => {
  return users.find((user) => user.phone === phone) || null;
};

/**
 * Check if phone already exists
 */
export const phoneExists = (phone: string): boolean => {
  return users.some((user) => user.phone === phone);
};

