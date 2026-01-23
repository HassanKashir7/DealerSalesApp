/**
 * Date Formatting Utilities
 * Centralized date formatting functions for consistent date display
 */

/**
 * Format date to readable string
 * @param date - Date object or ISO string
 * @param format - Format pattern (default: 'MM/DD/YYYY')
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string,
  format: string = 'MM/DD/YYYY'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return '';
  }

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  const pad = (num: number) => num.toString().padStart(2, '0');

  return format
    .replace('DD', pad(day))
    .replace('MM', pad(month))
    .replace('YYYY', year.toString())
    .replace('HH', pad(hours))
    .replace('mm', pad(minutes))
    .replace('ss', pad(seconds));
};

/**
 * Format date to relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  }

  return formatDate(dateObj);
};

/**
 * Format date to time string (HH:mm)
 */
export const formatTime = (date: Date | string): string => {
  return formatDate(date, 'HH:mm');
};

