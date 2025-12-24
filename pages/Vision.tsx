import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type VisionNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Vision'>;

const Vision = () => {
  const navigation = useNavigation<VisionNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      

      {/* Hero Section */}
      <LinearGradient
        colors={['#0047AB', '#6B46C1']}
        style={styles.hero}
      >
        <View style={styles.visionIconContainer}>
          <Ionicons name="eye" size={48} color="#ffffff" />
        </View>
        <Text style={styles.heroTitle}>Shaping the Future of Law Enforcement</Text>
        <Text style={styles.heroSubtitle}>
          We envision a world where technology empowers justice, where every officer has the tools
          to serve their community with unprecedented efficiency and accuracy.
        </Text>
      </LinearGradient>

      {/* Mission Section */}
      <View style={styles.missionSection}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.missionText}>
          To revolutionize law enforcement through cutting-edge AI technology, creating a more
          efficient, transparent, and just legal system that serves citizens and upholds the rule of law.
        </Text>
      </View>

      {/* Vision Pillars */}
      <View style={styles.pillarsContainer}>
        <Text style={styles.sectionTitle}>Vision Pillars</Text>

        <View style={styles.pillarCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.pillarIconContainer}
          >
            <Ionicons name="bulb" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.pillarTitle}>Innovation First</Text>
          <Text style={styles.pillarDescription}>
            Leveraging the latest AI advancements to bring unmatched precision and efficiency
            to legal processes and law enforcement operations.
          </Text>
        </View>

        <View style={styles.pillarCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.pillarIconContainer}
          >
            <Ionicons name="people" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.pillarTitle}>Officer Empowerment</Text>
          <Text style={styles.pillarDescription}>
            Providing law enforcement professionals with powerful tools that enhance their
            effectiveness and enable them to serve their communities better.
          </Text>
        </View>

        <View style={styles.pillarCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.pillarIconContainer}
          >
            <Ionicons name="shield-checkmark" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.pillarTitle}>Justice for All</Text>
          <Text style={styles.pillarDescription}>
            Ensuring that justice is accessible, fair, and efficient across every corner of our nation,
            bridging the gap between technology and public service.
          </Text>
        </View>

        <View style={styles.pillarCard}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.pillarIconContainer}
          >
            <Ionicons name="analytics" size={32} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.pillarTitle}>Data-Driven Excellence</Text>
          <Text style={styles.pillarDescription}>
            Utilizing comprehensive analytics and insights to continuously improve law enforcement
            practices and outcomes for better community safety.
          </Text>
        </View>
      </View>

      {/* Impact Section */}
      <LinearGradient
        colors={['#0047AB', '#6B46C1']}
        style={styles.impactSection}
      >
        <Text style={styles.impactTitle}>Our Impact Goal</Text>
        <Text style={styles.impactText}>
          To reduce case processing time by 60%, improve accuracy in legal documentation by 80%,
          and enhance officer productivity through intelligent automation.
        </Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>60%</Text>
            <Text style={styles.statLabel}>Faster Processing</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>80%</Text>
            <Text style={styles.statLabel}>Higher Accuracy</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Nationwide Coverage</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Call to Action */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Join Us in Shaping the Future</Text>
        <Text style={styles.ctaSubtitle}>
          Be part of the revolution that's transforming law enforcement for the digital age.
        </Text>
        <View style={styles.ctaButtons}>
          <TouchableOpacity
            style={[styles.ctaButton, styles.primaryButton]}
            onPress={() => navigation.navigate('Key Features')}
          >
            <Text style={styles.primaryButtonText}>Explore Features</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.ctaButton, styles.secondaryButton]}
            onPress={() => navigation.navigate('Contact')}
          >
            <Text style={styles.secondaryButtonText}>Get in Touch</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  visionIconContainer: {
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  missionSection: {
    padding: 24,
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 16,
  },
  missionText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 24,
  },
  pillarsContainer: {
    padding: 20,
  },
  pillarCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  pillarIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  pillarTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 24,
  },
  pillarDescription: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 20,
  },
  impactSection: {
    margin: 20,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  impactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  impactText: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#facc15',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#e5e7eb',
    textAlign: 'center',
    fontWeight: '600',
  },
  ctaSection: {
    padding: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#4b5563',
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
    backgroundColor: '#0047AB',
  },
  secondaryButton: {
    backgroundColor: '#6B46C1',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default Vision;
