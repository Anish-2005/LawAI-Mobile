import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DatabaseHeaderProps {
  title?: string;
}

const DatabaseHeader: React.FC<DatabaseHeaderProps> = ({ title = "Case Database" }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Ionicons name="server" size={40} color="#fff" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Manage and view legal case records</Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default DatabaseHeader;