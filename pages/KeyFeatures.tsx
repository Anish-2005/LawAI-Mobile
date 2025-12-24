import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type KeyFeaturesNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Key Features'>;

const KeyFeatures = () => {
  const navigation = useNavigation<KeyFeaturesNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      

      {/* Hero Section */}
      <LinearGradient
        colors={['#0047AB', '#6B46C1']}
        style={styles.hero}
      >
        <Text style={styles.heroTitle}>Powerful Features for Modern Law Enforcement</Text>
        <Text style={styles.heroSubtitle}>
          Discover the cutting-edge tools that revolutionize how law enforcement agencies operate
        </Text>
      </LinearGradient>

      {/* Features Grid */}
      <View style={styles.featuresContainer}>
        {/* Feature Card 1 */}
        <View style={styles.featureCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.featureIconContainer}
          >
            <Ionicons name="document-text" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.featureTitle}>AI-Powered FIR Generation</Text>
          <Text style={styles.featureDescription}>
            Intelligent FIR document creation with legal compliance and automated formatting for faster case processing.
          </Text>
        </View>

        {/* Feature Card 2 */}
        <View style={styles.featureCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.featureIconContainer}
          >
            <Ionicons name="library" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.featureTitle}>Comprehensive Legal Database</Text>
          <Text style={styles.featureDescription}>
            Access to updated laws, acts, and legal precedents with advanced search by section, keyword, or case type.
          </Text>
        </View>

        {/* Feature Card 3 */}
        <View style={styles.featureCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.featureIconContainer}
          >
            <Ionicons name="chatbubbles" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.featureTitle}>AI Legal Assistant</Text>
          <Text style={styles.featureDescription}>
            Get instant answers to legal queries with our advanced AI assistant powered by natural language processing.
          </Text>
        </View>

        {/* Feature Card 4 */}
        <View style={styles.featureCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.featureIconContainer}
          >
            <Ionicons name="shield-checkmark" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.featureTitle}>Secure & Compliant</Text>
          <Text style={styles.featureDescription}>
            Enterprise-grade security with data encryption, audit trails, and full compliance with legal standards.
          </Text>
        </View>

        {/* Feature Card 5 */}
        <View style={styles.featureCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.featureIconContainer}
          >
            <Ionicons name="analytics" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.featureTitle}>Case Analytics & Reporting</Text>
          <Text style={styles.featureDescription}>
            Comprehensive analytics dashboard with case trends, performance metrics, and automated report generation.
          </Text>
        </View>

        {/* Feature Card 6 */}
        <View style={styles.featureCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.featureIconContainer}
          >
            <Ionicons name="people" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.featureTitle}>Multi-Agency Collaboration</Text>
          <Text style={styles.featureDescription}>
            Seamless collaboration between different law enforcement agencies with shared case databases and updates.
          </Text>
        </View>
      </View>

      {/* Call to Action */}
      <LinearGradient
        colors={['#0047AB', '#6B46C1']}
        style={styles.ctaSection}
      >
        <Text style={styles.ctaTitle}>Ready to Transform Law Enforcement?</Text>
        <Text style={styles.ctaSubtitle}>Join the future of digital policing with LawAI</Text>
        <View style={styles.ctaButtons}>
          <TouchableOpacity
            style={[styles.ctaButton, styles.primaryButton]}
            onPress={() => navigation.navigate('Utilities')}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.ctaButton, styles.secondaryButton]}
            onPress={() => navigation.navigate('Contact')}
          >
            <Text style={styles.secondaryButtonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 40,
  },
  hero: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 36,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  featuresContainer: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: '48%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  featureIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 22,
  },
  featureDescription: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 20,
  },
  ctaSection: {
    margin: 20,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  ctaButton: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 120,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#facc15',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e3a8a',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default KeyFeatures;
