import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FormButtonProps {
  title: string;
  loadingTitle: string;
  isLoading: boolean;
  onPress: () => void;
  iconName: keyof typeof Ionicons.glyphMap;
  backgroundColor?: string;
}

const FormButton: React.FC<FormButtonProps> = ({
  title,
  loadingTitle,
  isLoading,
  onPress,
  iconName,
  backgroundColor = '#059669'
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isLoading && styles.buttonDisabled]}
      onPress={onPress}
      disabled={isLoading}
    >
      <View style={[styles.buttonContent, isLoading && styles.buttonContentDisabled, { backgroundColor }]}>
        {isLoading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Ionicons name={iconName} size={20} color="#fff" />
        )}
        <Text style={styles.buttonText}>
          {isLoading ? loadingTitle : title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonContentDisabled: {
    backgroundColor: '#9ca3af',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default FormButton;