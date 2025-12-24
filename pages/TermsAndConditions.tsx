import React from "react";
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Terms and Conditions</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Introduction */}
        <Section>
          <Text style={styles.paragraph}>
            Welcome to CODE-A-COLA! By accessing or using our website, you agree to comply with and be bound by these terms and conditions. Please read them carefully before using our website.
          </Text>
        </Section>

        {/* Terms of Use */}
        <Section title="1. Terms of Use">
          <Text style={styles.paragraph}>
            You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the site.
          </Text>
        </Section>

        {/* Intellectual Property */}
        <Section title="2. Intellectual Property">
          <Text style={styles.paragraph}>
            All content on this website, including text, graphics, logos, and software, is the property of CODE-A-COLA or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our written permission.
          </Text>
        </Section>

        {/* User-Generated Content */}
        <Section title="3. User-Generated Content">
          <Text style={styles.paragraph}>
            If you submit content to our website, you grant CODE-A-COLA a non-exclusive, royalty-free, worldwide, perpetual license to use, display, and distribute the content in connection with our services. You agree that your submissions will not violate any rights of third parties, including copyright, trademark, privacy, or other personal or proprietary rights.
          </Text>
        </Section>

        {/* Limitation of Liability */}
        <Section title="4. Limitation of Liability">
          <Text style={styles.paragraph}>
            CODE-A-COLA will not be liable for any damages resulting from the use or inability to use our website, including any damages caused by viruses or incorrect information.
          </Text>
        </Section>

        {/* External Links */}
        <Section title="5. External Links">
          <Text style={styles.paragraph}>
            Our website may contain links to external websites. CODE-A-COLA is not responsible for the content or practices of these third-party websites.
          </Text>
        </Section>

        {/* Modifications */}
        <Section title="6. Modifications to Terms">
          <Text style={styles.paragraph}>
            CODE-A-COLA reserves the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website constitutes acceptance of the modified terms.
          </Text>
        </Section>

        {/* Contact Information */}
        <Section title="7. Contact Us">
          <Text style={styles.paragraph}>
            If you have any questions about these terms, please contact us at{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("mailto:code.a.cola.01@gmail.com")}
            >
              code.a.cola.01@gmail.com
            </Text>
            .
          </Text>
        </Section>
      </ScrollView>
    </View>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    {title && <Text style={styles.sectionTitle}>{title}</Text>}
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    backgroundColor: "#2563eb",
    paddingVertical: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2563eb",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: "#4b5563",
    marginBottom: 10,
  },
  link: {
    color: "#2563eb",
    textDecorationLine: "underline",
  },
});

export default TermsAndConditions;
