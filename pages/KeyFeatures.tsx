import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package if not already done

const KeyFeatures = () => {
  return (
    <View style={styles.keyFeaturesContainer}>
      {/* Heading */}
      <Text style={styles.keyFeaturesHeading}>Key Features</Text>

      {/* Feature Cards */}
      <View style={styles.keyFeaturesCardsContainer}>
        {/* Feature Card 1 */}
        <View style={styles.keyFeaturesCard}>
          <View style={[styles.keyFeaturesIconContainer, { backgroundColor: '#3b82f6' }]}>
            <Icon name="library-books" size={32} color="#ffffff" />
          </View>
          <Text style={styles.keyFeaturesCardTitle}>NLP & Legal Database</Text>
          <Text style={styles.keyFeaturesCardText}>
            Interprets incident details and connects to legal databases for relevant laws.
          </Text>
        </View>

        {/* Feature Card 2 */}
        <View style={styles.keyFeaturesCard}>
          <View style={[styles.keyFeaturesIconContainer, { backgroundColor: '#10b981' }]}>
            <Icon name="sync" size={32} color="#ffffff" />
          </View>
          <Text style={styles.keyFeaturesCardTitle}>Unified Platform</Text>
          <Text style={styles.keyFeaturesCardText}>
            Centralized repository of updated laws with easy search by act, section, or keyword.
          </Text>
        </View>

        {/* Feature Card 3 */}
        <View style={styles.keyFeaturesCard}>
          <View style={[styles.keyFeaturesIconContainer, { backgroundColor: '#ef4444' }]}>
            <Icon name="assignment-turned-in" size={32} color="#ffffff" />
          </View>
          <Text style={styles.keyFeaturesCardTitle}>Case Database for Monitoring</Text>
          <Text style={styles.keyFeaturesCardText}>
            Monitor ongoing and past cases seamlessly with real-time updates and case tracking.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyFeaturesContainer: {
    backgroundColor: '#f9fafb',
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  keyFeaturesHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 24,
  },
  keyFeaturesCardsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  keyFeaturesCard: {
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
  keyFeaturesIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  keyFeaturesCardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 8,
    textAlign: 'center',
  },
  keyFeaturesCardText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
  },
});

export default KeyFeatures;
