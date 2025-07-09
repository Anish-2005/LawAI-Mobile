import React, { useState, useEffect, useRef } from 'react';
import { View, Text,TextInput, ScrollView, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Landing = () => {
  const navigation = useNavigation();
  const [showButton, setShowButton] = useState(false);
  const scrollViewRef = useRef(null); // Use useRef here to reference ScrollView

  const handleDownload = () => {
    navigation.navigate('Download');
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowButton(offsetY > 300); // Show the back-to-top button after scrolling 300px
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true }); // Use scrollViewRef correctly
  };

  const handleSmoothScroll = (target) => {
    scrollViewRef.current?.scrollTo({ y: target, animated: true }); // Use scrollViewRef correctly
  };
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleInputChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = () => {
      console.log('Form submitted:', formData);
    };
  return (
    <ScrollView
      style={styles.container}
      ref={scrollViewRef} // Assign scrollViewRef here
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={require('../images/indian-emblem.png')} style={styles.emblem} />
          <View>
            <Text style={styles.headerTitle}>LawAI Portal</Text>
            <Text style={styles.headerSubtitle}>Enforcing Law & Justice for Government of India</Text>
          </View>
        </View>
       
      </View>
      <View style={styles.navLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={styles.navText}>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Key Features')}><Text style={styles.navText}>Features</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Vision')}><Text style={styles.navText}>Vision</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}><Text style={styles.navText}>Contact</Text></TouchableOpacity>
        </View>

      {/* Back to Top Button */}
      {showButton && (
        <TouchableOpacity style={styles.backToTop} onPress={scrollToTop}>
          <Text style={styles.backToTopText}>↑</Text>
        </TouchableOpacity>
      )}

      {/* Hero Section */}
      <View style={styles.hero}>
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

        <TouchableOpacity
          style={[styles.ctaButton, styles.learnMoreButton]}
          onPress={() => handleSmoothScroll(600)}
        >
          <Text style={styles.ctaButtonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
 

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
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navLinks: {
    flexDirection: 'row',  // Align the items horizontally
    justifyContent: 'space-around', // Space them evenly across the container
    alignItems: 'center', // Center the items vertically
    padding: 10, // Optional: adds space around the nav links
    backgroundColor: 'darkblue', // Optional: background color for the nav bar
  },
  navText: {
    color: '#fff', // Text color
    fontSize: 16, // Font size for the text
    fontWeight: 'bold', // Optional: bold font style
    padding: 10, // Adds space around the text for better clickability
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#1E3A8A',
    padding: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emblem: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 12,
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
    backgroundColor: '#514FEC', // Simulating gradient
    paddingVertical: 40,
    paddingHorizontal: 16,
    textAlign: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 32,
    maxWidth: 600,
  },
  heroButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  ctaButton: {
    borderRadius: 9999,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  getStartedButton: {
    backgroundColor: '#facc15',
  },
  learnMoreButton: {
    backgroundColor: '#ffffff',
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1d4ed8', // Adjust for the button text color (blue for both buttons)
  },
  imageSection: {
    padding: 24,
  },
  landingImage: {
    width: '100%',
    height: 300,
    borderRadius: 16,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 16,
    overflow: 'hidden', // Ensures the overlay and image stay within the border radius
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  imageDescription: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 24,
    marginTop: 16,
    maxWidth: 800,
  },
  
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    width: '90%', // Makes the card take up most of the width
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1d4ed8',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },

  backToTop: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1E3A8A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backToTopText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Landing;
