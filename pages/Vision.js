import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have this installed

const Vision = () => {
  return (
    <View style={styles.visionSection}>
      {/* Icon */}
      <View style={styles.iconWrapper}>
        <View style={styles.iconContainer}>
          <Icon name="visibility" size={32} color="#2563eb" />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.visionTitle}>Our Vision</Text>

      {/* Description */}
      <Text style={styles.visionText}>
        At LawAI, we aim to bridge the gap between law enforcement and advanced technology,
        empowering officers with tools to uphold justice swiftly and accurately across the nation.
      </Text>

      {/* Cards */}
      <View style={styles.visionCards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Innovative AI Tools</Text>
          <Text style={styles.cardText}>
            Leveraging the latest AI advancements to bring unmatched precision in legal processes.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Empowering Officers</Text>
          <Text style={styles.cardText}>
            Providing law enforcement with resources that make their work efficient and impactful.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Nationwide Impact</Text>
          <Text style={styles.cardText}>
            Reaching every corner of the country to ensure justice is accessible to all.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  visionSection: {
    backgroundColor: '#f9fafb',
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  iconWrapper: {
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#dbeafe',
    padding: 12,
    borderRadius: 9999,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    fontSize: 32,
    color: '#2563eb',
  },
  visionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 12,
  },
  visionText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
    maxWidth: 600,
  },
  visionCards: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    width: '90%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
  },
});

export default Vision;
