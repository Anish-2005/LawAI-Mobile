import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Accessibility = () => {
  return (
    <View style={styles.container}>
      {/* Accessibility Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Accessibility Statement</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {/* Intro Section */}
        <View style={styles.section}>
          <Text style={styles.paragraph}>
            CODE-A-COLA is committed to making our application accessible and inclusive to all
            users, regardless of their abilities. We aim to ensure that our digital content can be
            accessed and enjoyed by everyone.
          </Text>
        </View>

        {/* Accessibility Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accessibility Features</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              - Text alternatives for non-text content, including images and videos.
            </Text>
            <Text style={styles.listItem}>
              - Keyboard navigability to allow access without the need for a mouse.
            </Text>
            <Text style={styles.listItem}>
              - Compatible with screen readers to provide content descriptions.
            </Text>
            <Text style={styles.listItem}>
              - Readable fonts, clear contrasts, and scalable text for better legibility.
            </Text>
          </View>
        </View>

        {/* Best Practices Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Best Practices</Text>
          <Text style={styles.paragraph}>
            We follow the Web Content Accessibility Guidelines (WCAG) 2.1, which provide standards
            for making web content more accessible for people with disabilities. Our application
            strives to meet Level AA compliance, which includes:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              - Providing text descriptions for images and icons.
            </Text>
            <Text style={styles.listItem}>
              - Ensuring all functionality is operable through a keyboard.
            </Text>
            <Text style={styles.listItem}>
              - Offering text that is scalable and contrasts well with backgrounds.
            </Text>
            <Text style={styles.listItem}>
              - Maintaining a logical structure and readable layout.
            </Text>
          </View>
        </View>

        {/* Feedback Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>We Value Your Feedback</Text>
          <Text style={styles.paragraph}>
            Accessibility is an ongoing effort, and we welcome feedback to improve our services. If
            you encounter any barriers or have suggestions, please contact us at:
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:code.a.cola.01@gmail.com')}>
            <Text style={styles.email}>code.a.cola.01@gmail.com</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#2563EB',
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 8,
  },
  list: {
    paddingLeft: 16,
  },
  listItem: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default Accessibility;
