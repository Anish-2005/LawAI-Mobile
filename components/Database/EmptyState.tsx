import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EmptyStateProps {
  message?: string;
  subMessage?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message = "No cases available",
  subMessage = "Cases will appear here once they are added to the database."
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>📋</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.subMessage}>{subMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 48,
    marginBottom: 16,
  },
  message: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
  },
  subMessage: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default EmptyState;