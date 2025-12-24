import React from "react";
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Introduction */}
        <Section title="Introduction">
          <Text style={styles.paragraph}>
            At LawAI, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website and use our services.
          </Text>
        </Section>

        {/* Information We Collect */}
        <Section title="Information We Collect">
          <Text style={styles.paragraph}>We collect the following types of information:</Text>
          <BulletPoint>
            <Text>
              <Text style={styles.bold}>Personal Information:</Text> This includes your name, email address, and other details that you provide when you register on our website or contact us.
            </Text>
          </BulletPoint>
          <BulletPoint>
            <Text>
              <Text style={styles.bold}>Usage Data:</Text> We collect data on how you interact with our website, including IP address, browser type, pages visited, etc.
            </Text>
          </BulletPoint>
          <BulletPoint>
            <Text>
              <Text style={styles.bold}>Cookies:</Text> We use cookies to enhance your experience and gather data about website usage.
            </Text>
          </BulletPoint>
        </Section>

        {/* How We Use Your Information */}
        <Section title="How We Use Your Information">
          <Text style={styles.paragraph}>We use your information for the following purposes:</Text>
          <BulletPoint>To improve our website and services</BulletPoint>
          <BulletPoint>To respond to your inquiries and provide customer support</BulletPoint>
          <BulletPoint>To send you updates, promotions, or other marketing materials (if you opt-in)</BulletPoint>
          <BulletPoint>To monitor and analyze usage patterns to improve user experience</BulletPoint>
        </Section>

        {/* Data Protection */}
        <Section title="Data Protection">
          <Text style={styles.paragraph}>
            We take the security of your data seriously. We implement technical and organizational measures to protect your personal information from unauthorized access, alteration, and deletion.
          </Text>
        </Section>

        {/* Your Rights */}
        <Section title="Your Rights">
          <Text style={styles.paragraph}>
            You have the right to access, correct, and delete your personal information. You can also opt out of receiving marketing emails by following the unsubscribe link in the email or by contacting us directly.
          </Text>
        </Section>

        {/* Changes to This Policy */}
        <Section title="Changes to This Policy">
          <Text style={styles.paragraph}>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of any significant updates.
          </Text>
        </Section>

        {/* Contact Us */}
        <Section title="Contact Us">
          <Text style={styles.paragraph}>
            If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
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
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const BulletPoint = ({ children }) => (
  <View style={styles.bulletPoint}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
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
    paddingHorizontal: 16,
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
  bold: {
    fontWeight: "bold",
  },
  bulletPoint: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    lineHeight: 24,
    marginRight: 8,
    color: "#4b5563",
  },
  bulletText: {
    fontSize: 16,
    color: "#4b5563",
    flex: 1,
  },
  link: {
    color: "#2563eb",
    textDecorationLine: "underline",
  },
});

export default PrivacyPolicy;
