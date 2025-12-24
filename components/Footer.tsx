import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        {/* Logo and copyright section */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>LawAI - Government of India</Text>
          <Text style={styles.copyrightText}>
            &copy; 2024{' '}
            <TouchableOpacity onPress={() => Linking.openURL('https://your-team-link.com')}>
              <Text style={styles.linkText}>CODE-A-COLA</Text>
            </TouchableOpacity>
            . All rights reserved.
          </Text>
        </View>

        {/* Footer Navigation Links */}
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://your-privacy-policy-link.com')}>
            <Text style={styles.navLink}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://your-terms-link.com')}>
            <Text style={styles.navLink}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://your-accessibility-link.com')}>
            <Text style={styles.navLink}>Accessibility</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Bottom Section */}
      <View style={styles.footerBottom}>
        <Text style={styles.bottomText}>
          Made with ❤️ by{' '}
          <TouchableOpacity onPress={() => Linking.openURL('https://your-team-link.com')}>
            <Text style={styles.linkText}>CODE-A-COLA</Text>
          </TouchableOpacity>{' '}
          for a smarter tomorrow.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#1E3A8A', // Blue color
    paddingVertical: 20,
    marginTop: 20,
  },
  footerContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F59E0B', // Yellow color
    marginBottom: 10,
  },
  copyrightText: {
    fontSize: 16,
    color: 'white',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  navLink: {
    color: '#F59E0B', // Yellow color
    marginHorizontal: 10,
    fontSize: 14,
  },
  footerBottom: {
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 12,
    color: '#D1D5DB', // Light gray color
  },
  linkText: {
    color: '#F59E0B',
    textDecorationLine: 'underline',
  },
});

export default Footer;
