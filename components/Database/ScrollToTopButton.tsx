import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ScrollToTopButtonProps {
  visible: boolean;
  onPress: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ visible, onPress }) => {
  if (!visible) return null;

  return (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.8}>
      <Text style={styles.buttonText}>↑</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#1e3a8a',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScrollToTopButton;