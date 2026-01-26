/**
 * OTP Input Component
 * Reusable 6-digit OTP input with individual square fields
 * Auto-focuses next field on input, handles backspace navigation
 */

import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { spacing, radius, sizing, typography } from '../constants';

export interface OTPInputProps {
  length?: number;
  value: string;
  onChangeText: (value: string) => void;
  onComplete?: (value: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value,
  onChangeText,
  onComplete,
}) => {
  const { colors } = useTheme();
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    // Auto-focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    // Auto-focus next empty input when value changes
    const currentLength = value.length;
    if (currentLength < length && inputRefs.current[currentLength]) {
      inputRefs.current[currentLength].focus();
    }
    // Call onComplete when all fields are filled
    if (currentLength === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);

  const handleChangeText = (text: string, index: number) => {
    // Only allow single digit
    if (text.length > 1) {
      text = text.slice(-1);
    }
    
    // Only allow numbers
    if (text && !/^\d+$/.test(text)) {
      return;
    }

    const newValue = value.split('');
    newValue[index] = text;
    const updatedValue = newValue.join('').slice(0, length);
    onChangeText(updatedValue);
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      // Move to previous field on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => {
        const isFocused = focusedIndex === index;
        const hasValue = value[index] !== undefined && value[index] !== '';
        const isActive = isFocused || hasValue;

        return (
          <TextInput
            key={index}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
            style={[
              styles.input,
              {
                borderColor: isActive ? colors.brand.canonBlue : colors.border.input,
                color: colors.text.primary,
              },
            ]}
            value={value[index] || ''}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            keyboardType="number-pad"
            maxLength={1}
            selectTextOnFocus
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    gap: spacing.sm,
  },
  input: {
    width: sizing.component.otpInputSize,
    height: sizing.component.otpInputSize,
    borderWidth: sizing.border.medium,
    borderRadius: radius.md,
    textAlign: 'center',
    ...typography.textStyle.inputText,
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.semibold,
  },
});

