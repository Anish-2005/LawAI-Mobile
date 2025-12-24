import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type LandingNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Landing = () => {
  const navigation = useNavigation<LandingNavigationProp>();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <LinearGradient
        colors={['#0047AB', '#6B46C1']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Image source={require('../images/indian-emblem.png')} style={styles.emblem} />
          <View>
            <Text style={styles.headerTitle}>LawAI Portal</Text>
            <Text style={styles.headerSubtitle}>Enforcing Law & Justice for Government of India</Text>
          </View>
        </View>
      </LinearGradient>
<LinearGradient
        colors={['#6B46C1', '#6B46C1']}
        style={styles.navLinks}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
          <Ionicons name="home" size={18} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Key Features')} style={styles.navItem}>
          <Ionicons name="star" size={18} color="#fff" />
          <Text style={styles.navText}>Features</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Vision')} style={styles.navItem}>
          <Ionicons name="eye" size={18} color="#fff" />
          <Text style={styles.navText}>Vision</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.navItem}>
          <Ionicons name="call" size={18} color="#fff" />
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Hero Section */}
      <LinearGradient
        colors={['#0047AB', '#6B46C1']}
        style={styles.hero}
      >
      {/* Main Heading */}
      <Text style={styles.heroTitle}>Empowering Law Enforcement with AI</Text>

      {/* Subtext */}
      <Text style={styles.heroSubtitle}>
        Revolutionize law enforcement with AI-powered tools. Streamline FIR filing, access legal
        resources, and enhance operational efficiency with cutting-edge technology.
      </Text>

      {/* Call-to-Action Buttons */}
      <View style={styles.heroButtons}>
        <TouchableOpacity
          style={[styles.ctaButton, styles.getStartedButton]}
          onPress={() => navigation.navigate('Utilities')}
        >
          <Text style={styles.ctaButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
 

      {/* Image Section */}
      <View style={styles.imageSection}>
      {/* Image with Overlay */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/Landing.jpg')}
          style={styles.landingImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>
            An initiative representing trust and authority abiding by the constitution.
          </Text>
        </View>
      </View>

      {/* Additional Description */}
      <Text style={styles.imageDescription}>
        This initiative is designed to bring the power of technology to law enforcement agencies,
        providing them with the resources they need to uphold justice and maintain public trust.
      </Text>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    minHeight: 40,
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    minWidth: 60,
  },
  navText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emblem: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 10,
    color: '#d1d5db',
  },
  headerButtons: {
    flexDirection: 'row',
    marginTop: 16,
  },
  downloadButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginRight: 8,
  },
  visitButton: {
    backgroundColor: '#2563EB',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#1E3A8A',
    fontWeight: 'bold',
  },
  hero: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 32,
    paddingHorizontal: 10,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  heroButtons: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 12,
  },
  ctaButton: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    minWidth: 200,
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#f1a605ff',
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
  },
  imageSection: {
    padding: 15,
    flex: 1.5,
    justifyContent: 'center',
  },
  landingImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 12,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlayText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
  imageDescription: {
    fontSize: 12,
    color: '#374151',
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default Landing;
