import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <LinearGradient
        colors={['#0047AB', '#6B46C1']}
        style={styles.hero}
      >
        <View style={styles.contactIconContainer}>
          <Ionicons name="mail" size={48} color="#ffffff" />
        </View>
        <Text style={styles.heroTitle}>Get in Touch</Text>
        <Text style={styles.heroSubtitle}>
          Have questions, feedback, or just want to say hello? We're here to help you navigate the legal landscape.
        </Text>
      </LinearGradient>

      {/* Contact Details Section */}
      <View style={styles.contactDetailsSection}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.contactDetails}>
          <View style={styles.contactItem}>
            <LinearGradient
              colors={['#0047AB', '#6B46C1']}
              style={styles.contactIconBackground}
            >
              <Ionicons name="mail" size={24} color="#ffffff" />
            </LinearGradient>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactText}>code.a.cola.01@gmail.com</Text>
            </View>
          </View>
          <View style={styles.contactItem}>
            <LinearGradient
              colors={['#0047AB', '#6B46C1']}
              style={styles.contactIconBackground}
            >
              <Ionicons name="call" size={24} color="#ffffff" />
            </LinearGradient>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactText}>+91-123-456-7890</Text>
            </View>
          </View>
          <View style={styles.contactItem}>
            <LinearGradient
              colors={['#0047AB', '#6B46C1']}
              style={styles.contactIconBackground}
            >
              <Ionicons name="location" size={24} color="#ffffff" />
            </LinearGradient>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Address</Text>
              <Text style={styles.contactText}>Ministry of Law & Justice, Madhya Pradesh, India</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Contact Form Section */}
      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>Send us a Message</Text>
        <View style={styles.formField}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#9CA3AF"
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="youremail@example.com"
            placeholderTextColor="#9CA3AF"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Your message here..."
            placeholderTextColor="#9CA3AF"
            value={formData.message}
            onChangeText={(text) => handleInputChange('message', text)}
            multiline
            textAlignVertical="top"
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <LinearGradient
            colors={['#0047AB', '#6B46C1']}
            style={styles.submitButtonGradient}
          >
            <Ionicons name="send" size={20} color="#ffffff" />
            <Text style={styles.submitButtonText}>Send Message</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  hero: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactIconContainer: {
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#E0E7FF',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  contactDetailsSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginTop: -20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  contactDetails: {
    width: '100%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
  },
  contactIconBackground: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  contactTextContainer: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  contactText: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  formSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  formField: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 16,
    color: '#1F2937',
  },
  textArea: {
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 16,
    color: '#1F2937',
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  submitButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default Contact;
