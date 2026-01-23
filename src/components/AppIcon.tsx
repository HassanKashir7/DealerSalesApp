/**
 * AppIcon Component
 * Centralized icon component that abstracts the icon library
 * Changing icon libraries requires ZERO screen changes
 * Screens must NEVER import icon libraries directly
 * 
 * Currently using react-native-vector-icons/Ionicons
 * To switch libraries, update only this file - no screen changes needed
 */

import React from 'react';
import { TextProps } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../hooks/useTheme';

export type IconName =
  | 'home'
  | 'user'
  | 'settings'
  | 'search'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'plus'
  | 'minus'
  | 'close'
  | 'check'
  | 'star'
  | 'heart'
  | 'share'
  | 'edit'
  | 'delete'
  | 'menu'
  | 'bell'
  | 'camera'
  | 'image'
  | 'mail'
  | 'phone'
  | 'lock'
  | 'unlock'
  | 'shield'
  | 'info'
  | 'eye'
  | 'eye-off'
  | 'calendar'
  | 'clock'
  | 'map-pin'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'logout'
  | 'refresh'
  | 'shopping-cart'
  | 'wallet'
  | 'bar-chart'
  | 'box'
  | 'receipt'
  | 'people'
  | 'download'
  | 'grid'
  | 'trending-up'
  | 'document';

export interface AppIconProps extends Omit<TextProps, 'children'> {
  name: IconName;
  size?: number;
  color?: string;
}

/**
 * Icon name mapping to Ionicons
 * Maps our abstract IconName types to actual Ionicons icon names
 * To change icon style (outline vs filled), modify the icon names here
 * Example: 'home' -> 'home-outline' for outline style
 */
const iconMap: Record<IconName, string> = {
  home: 'home',
  user: 'person',
  settings: 'settings',
  search: 'search',
  'chevron-left': 'chevron-back',
  'chevron-right': 'chevron-forward',
  'chevron-up': 'chevron-up',
  'chevron-down': 'chevron-down',
  plus: 'add',
  minus: 'remove',
  close: 'close',
  check: 'checkmark',
  star: 'star',
  heart: 'heart',
  share: 'share',
  edit: 'create',
  delete: 'trash',
  menu: 'menu',
  bell: 'notifications',
  camera: 'camera',
  image: 'image',
  mail: 'mail',
  phone: 'call',
  lock: 'lock-closed',
  unlock: 'lock-open',
  shield: 'shield-checkmark',
  info: 'information-circle',
  eye: 'eye',
  'eye-off': 'eye-off',
  calendar: 'calendar',
  clock: 'time',
  'map-pin': 'location',
  'arrow-left': 'arrow-back',
  'arrow-right': 'arrow-forward',
  'arrow-up': 'arrow-up',
  'arrow-down': 'arrow-down',
  logout: 'log-out',
  refresh: 'refresh',
  'shopping-cart': 'cart',
  wallet: 'wallet',
  'bar-chart': 'bar-chart',
  box: 'cube',
  receipt: 'receipt',
  people: 'people',
  download: 'download',
  grid: 'grid',
  'trending-up': 'trending-up',
  document: 'document-text',
};

/**
 * AppIcon Component
 * Usage: <AppIcon name="home" size={24} color={colors.primary} />
 * 
 * Uses react-native-vector-icons/Ionicons under the hood
 * Screens never need to know which icon library is being used
 * 
 * To switch icon libraries (e.g., MaterialIcons, FontAwesome):
 * 1. Install your preferred library
 * 2. Update the import and iconMap in this file
 * 3. NO screen files need to change
 */
export const AppIcon: React.FC<AppIconProps> = ({
  name,
  size = 24,
  color,
  style,
  ...props
}) => {
  const { colors } = useTheme();
  const iconColor = color || colors.textPrimary;
  const iconName = iconMap[name] || 'help-circle'; // Fallback icon

  return (
    <Ionicons
      name={iconName}
      size={size}
      color={iconColor}
      style={style}
      {...props}
    />
  );
};

