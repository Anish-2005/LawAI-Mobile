import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OriginalDocumentsHeaderProps {
  title?: string;
  subtitle?: string;
}

const OriginalDocumentsHeader: React.FC<OriginalDocumentsHeaderProps> = ({
  title = "Original Documents",
  subtitle = "Internet required for downloading PDFs"
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1D4ED8',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default OriginalDocumentsHeader;