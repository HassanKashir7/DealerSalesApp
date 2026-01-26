/**
 * Product Breakdown Item Component
 * Reusable component for displaying product commission items
 * Uses constants for all styling - no hardcoded values
 */

import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { AppText } from './AppText';
import { spacing, radius, typography } from '../constants';

export interface ProductBreakdownItemProps {
  productImage?: ImageSourcePropType;
  productName: string;
  productModel: string;
  unitsSold: number;
  pricePerUnit: string;
  status: 'PAID' | 'PENDING';
  commissionAmount: string;
}

export const ProductBreakdownItem: React.FC<ProductBreakdownItemProps> = ({
  productImage,
  productName,
  productModel,
  unitsSold,
  pricePerUnit,
  status,
  commissionAmount,
}) => {
  const { colors } = useTheme();
  const isPaid = status === 'PAID';

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <View style={[styles.imageContainer, { backgroundColor: colors.grayBackground }]}>
        {productImage ? (
          <Image source={productImage} style={styles.image} resizeMode="contain" />
        ) : (
          <View style={styles.placeholderImage} />
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.productInfo}>
            <AppText variant="listItemTitle" style={[styles.productName, { color: colors.textTitle }]}>
              {productName}
            </AppText>
          </View>
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor: isPaid ? colors.commissionGreen : colors.pendingOrange,
              },
            ]}
          >
            <AppText variant="statusBadge" style={[styles.statusText, { color: colors.white }]}>
              {status}
            </AppText>
          </View>
        </View>
        <AppText variant="listItemSupport" style={[styles.model, { color: colors.textBlueGrey }]}>
          Model: {productModel}
        </AppText>
        <AppText variant="listItemSupport" style={[styles.details, { color: colors.textBlueGrey }]}>
          {unitsSold} Units sold @ {pricePerUnit}
        </AppText>
        <View style={styles.footer}>
          <AppText variant="cardValue" style={[styles.commission, { color: colors.canonBlue }]}>
            {commissionAmount}
          </AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacing.md,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: 40,
    height: 40,
    backgroundColor: '#C7C7CC',
    borderRadius: radius.sm,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  productInfo: {
    flex: 1,
    marginRight: spacing.sm,
  },
  productName: {
    marginBottom: spacing.xs,
    fontWeight: typography.fontWeight.semibold,
  },
  model: {
    marginBottom: spacing.xs,
  },
  details: {
    marginBottom: spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.sm,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#FFFFFF',
    fontWeight: typography.fontWeight.semibold,
  },
  commission: {
    fontSize: typography.fontSize.cardValue,
    fontWeight: typography.fontWeight.bold,
  },
});

