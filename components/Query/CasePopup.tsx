import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CasePopupProps {
  visible: boolean;
  onPress: () => void;
}

const CasePopup: React.FC<CasePopupProps> = ({ visible, onPress }) => {
  if (!visible) return null;

  return (
    <TouchableOpacity style={styles.popup} onPress={onPress} activeOpacity={0.9}>
      <Ionicons name="document-text" size={20} color="#fff" />
      <Text style={styles.popupText}>New Case Identified — Tap to Review</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: '#1e3a8a',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  popupText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 12,
    flex: 1,
  },
});

export default CasePopup;