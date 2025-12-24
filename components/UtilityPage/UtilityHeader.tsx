import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface UtilityHeaderProps {
  title?: string;
  subtitle?: string;
}

const UtilityHeader: React.FC<UtilityHeaderProps> = ({
  title = "LawAI Tools",
  subtitle = "Access all your legal tools and resources in one place"
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Ionicons name="construct" size={40} color="#fff" />
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    marginTop: 4,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default UtilityHeader;