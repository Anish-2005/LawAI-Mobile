import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FIRHeaderProps {
  title: string;
  subtitle: string;
}

const FIRHeader: React.FC<FIRHeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Ionicons name="document-text" size={40} color="#fff" />
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default FIRHeader;