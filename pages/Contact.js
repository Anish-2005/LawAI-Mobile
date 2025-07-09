import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure this package is installed

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
    <View style={styles.contactSection}>
      {/* Get in Touch Section */}
      <View style={styles.contactHeader}>
        <Text style={styles.heading}>Get in Touch</Text>
        <Text style={styles.description}>
          Have questions, feedback, or just want to say hello? Fill out the form or reach us via our contact details below. We're here to help!
        </Text>
        <View style={styles.contactDetails}>
          <View style={styles.contactItem}>
            <Icon name="envelope" size={20} color="#3b82f6" />
            <Text style={styles.contactText}>code.a.cola.01@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon name="phone" size={20} color="#3b82f6" />
            <Text style={styles.contactText}>+91-123-456-7890</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon name="map-marker" size={20} color="#3b82f6" />
            <Text style={styles.contactText}>Ministry of Law & Justice, Madhya Pradesh, India</Text>
          </View>
        </View>
      </View>

      {/* Input Form Section */}
      <View style={styles.formSection}>
        <View style={styles.formField}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="youremail@example.com"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Your message here..."
            value={formData.message}
            onChangeText={(text) => handleInputChange('message', text)}
            multiline
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactSection: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#ebf8ff',
    flex: 1,
  },
  contactHeader: {
    marginBottom: 32,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 16,
    maxWidth: 400,
  },
  contactDetails: {
    width: '100%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#4b5563',
    marginLeft: 8,
  },
  formSection: {
    marginTop: 16,
  },
  formField: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: '#d1d5db',
    borderWidth: 1,
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: '#d1d5db',
    borderWidth: 1,
    fontSize: 16,
    height: 120,
  },
  submitButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Contact;
