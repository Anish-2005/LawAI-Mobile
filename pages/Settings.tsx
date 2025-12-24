import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Import settings components
import {
  SettingsHeader,
  SettingsSection,
  SettingsItem,
  SettingsToggle,
  SettingsInput,
  ActivityLog
} from '../components/Settings';

interface ActivityLogItem {
  action: string;
  time: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

const Settings: React.FC = () => {
  const navigation = useNavigation();

  // Account & Security Settings
  const [notifications, setNotifications] = useState<boolean>(true);
  const [pushNotifications, setPushNotifications] = useState<boolean>(true);
  const [emailNotifications, setEmailNotifications] = useState<boolean>(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState<boolean>(false);
  const [biometricAuth, setBiometricAuth] = useState<boolean>(true);
  const [sessionTimeout, setSessionTimeout] = useState<string>('15');

  // Appearance Settings
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<string>('medium');

  // Privacy & Data Settings
  const [dataSharing, setDataSharing] = useState<boolean>(false);
  const [analytics, setAnalytics] = useState<boolean>(true);
  const [autoBackup, setAutoBackup] = useState<boolean>(true);

  // Legal & App Settings
  const [caseReminders, setCaseReminders] = useState<boolean>(true);
  const [courtDateAlerts, setCourtDateAlerts] = useState<boolean>(true);
  const [documentAutoSave, setDocumentAutoSave] = useState<boolean>(true);

  // Activity Log
  const [activityLog, setActivityLog] = useState<ActivityLogItem[]>([
    { action: 'Login', time: '2025-12-25 10:30 AM', icon: 'log-in' },
    { action: 'Generated FIR Report', time: '2025-12-24 02:00 PM', icon: 'document-text' },
    { action: 'Updated Profile', time: '2025-12-23 08:45 AM', icon: 'person' },
    { action: 'Changed Password', time: '2025-12-20 04:10 PM', icon: 'key' },
    { action: 'Enabled Biometric Auth', time: '2025-12-18 11:30 AM', icon: 'finger-print' },
  ]);

  const handleSessionTimeoutChange = (value: string): void => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 5 && numValue <= 120) {
      setSessionTimeout(value);
    }
  };

  const handleClearActivityLog = () => {
    Alert.alert(
      'Clear Activity Log',
      'Are you sure you want to clear all activity logs? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => setActivityLog([])
        }
      ]
    );
  };

  const handleResetSettings = () => {
    Alert.alert(
      'Reset Settings',
      'Are you sure you want to reset all settings to default? This will restore the app to its initial configuration.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            // Reset all settings to defaults
            setNotifications(true);
            setPushNotifications(true);
            setEmailNotifications(false);
            setIs2FAEnabled(false);
            setBiometricAuth(true);
            setSessionTimeout('15');
            setDarkMode(false);
            setHighContrast(false);
            setFontSize('medium');
            setDataSharing(false);
            setAnalytics(true);
            setAutoBackup(true);
            setCaseReminders(true);
            setCourtDateAlerts(true);
            setDocumentAutoSave(true);
            Alert.alert('Settings Reset', 'All settings have been reset to default values.');
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SettingsHeader
        title="Settings"
        subtitle="Customize your app experience and manage your account"
        iconName="settings"
      />

      {/* Account & Profile Section */}
      <SettingsSection
        title="Account & Profile"
        description="Manage your account details and profile information"
        iconName="person"
        iconColor="#3b82f6"
      >
        <SettingsItem
          title="Edit Profile"
          subtitle="Update your personal information and preferences"
          iconName="person-outline"
          iconColor="#3b82f6"
          onPress={() => (navigation as any).navigate('EditProfile')}
          showArrow
        />
        <SettingsItem
          title="Change Password"
          subtitle="Update your account password for security"
          iconName="key-outline"
          iconColor="#f59e0b"
          onPress={() => (navigation as any).navigate('ChangePassword')}
          showArrow
        />
        <SettingsItem
          title="Account Verification"
          subtitle="Verify your identity and account status"
          iconName="checkmark-circle-outline"
          iconColor="#10b981"
          onPress={() => (navigation as any).navigate('AccountVerification')}
          showArrow
        />
      </SettingsSection>

      {/* Security Section */}
      <SettingsSection
        title="Security & Privacy"
        description="Configure security settings and privacy preferences"
        iconName="shield"
        iconColor="#ef4444"
      >
        <SettingsToggle
          title="Two-Factor Authentication"
          subtitle="Add an extra layer of security to your account"
          value={is2FAEnabled}
          onValueChange={setIs2FAEnabled}
        />
        <SettingsToggle
          title="Biometric Authentication"
          subtitle="Use fingerprint or face recognition to unlock the app"
          value={biometricAuth}
          onValueChange={setBiometricAuth}
        />
        <SettingsInput
          title="Session Timeout"
          subtitle="Automatically log out after period of inactivity (5-120 minutes)"
          value={sessionTimeout}
          onChangeText={handleSessionTimeoutChange}
          placeholder="15"
          keyboardType="numeric"
          maxLength={3}
        />
        <SettingsToggle
          title="Data Sharing"
          subtitle="Allow sharing of anonymized usage data"
          value={dataSharing}
          onValueChange={setDataSharing}
        />
        <SettingsToggle
          title="Analytics & Crash Reports"
          subtitle="Help improve the app by sharing analytics data"
          value={analytics}
          onValueChange={setAnalytics}
        />
      </SettingsSection>

      {/* Notifications Section */}
      <SettingsSection
        title="Notifications"
        description="Manage how and when you receive notifications"
        iconName="notifications"
        iconColor="#8b5cf6"
      >
        <SettingsToggle
          title="Push Notifications"
          subtitle="Receive push notifications for important updates"
          value={pushNotifications}
          onValueChange={setPushNotifications}
        />
        <SettingsToggle
          title="Email Notifications"
          subtitle="Receive email updates about your account and cases"
          value={emailNotifications}
          onValueChange={setEmailNotifications}
        />
        <SettingsToggle
          title="Case Reminders"
          subtitle="Get reminded about upcoming case deadlines"
          value={caseReminders}
          onValueChange={setCaseReminders}
        />
        <SettingsToggle
          title="Court Date Alerts"
          subtitle="Receive alerts for scheduled court appearances"
          value={courtDateAlerts}
          onValueChange={setCourtDateAlerts}
        />
      </SettingsSection>

      {/* Appearance Section */}
      <SettingsSection
        title="Appearance"
        description="Customize the look and feel of the application"
        iconName="color-palette"
        iconColor="#f59e0b"
      >
        <SettingsToggle
          title="Dark Mode"
          subtitle="Switch to dark theme for better visibility in low light"
          value={darkMode}
          onValueChange={setDarkMode}
        />
        <SettingsToggle
          title="High Contrast"
          subtitle="Increase contrast for better accessibility"
          value={highContrast}
          onValueChange={setHighContrast}
        />
        <SettingsItem
          title="Font Size"
          subtitle={`Current: ${fontSize}`}
          iconName="text"
          iconColor="#6b7280"
          onPress={() => {
            const sizes = ['small', 'medium', 'large'];
            const currentIndex = sizes.indexOf(fontSize);
            const nextIndex = (currentIndex + 1) % sizes.length;
            setFontSize(sizes[nextIndex]);
          }}
        />
      </SettingsSection>

      {/* Legal & Documents Section */}
      <SettingsSection
        title="Legal & Documents"
        description="Configure settings related to legal documents and case management"
        iconName="document-text"
        iconColor="#059669"
      >
        <SettingsToggle
          title="Auto-Save Documents"
          subtitle="Automatically save document drafts as you work"
          value={documentAutoSave}
          onValueChange={setDocumentAutoSave}
        />
        <SettingsToggle
          title="Automatic Backup"
          subtitle="Regularly backup your documents and case data"
          value={autoBackup}
          onValueChange={setAutoBackup}
        />
        <SettingsItem
          title="Document Templates"
          subtitle="Manage and customize document templates"
          iconName="folder-outline"
          iconColor="#059669"
          onPress={() => (navigation as any).navigate('DocumentTemplates')}
          showArrow
        />
        <SettingsItem
          title="Export Data"
          subtitle="Download all your data and documents"
          iconName="download-outline"
          iconColor="#059669"
          onPress={() => (navigation as any).navigate('ExportData')}
          showArrow
        />
      </SettingsSection>

      {/* Activity Log Section */}
      <SettingsSection
        title="Activity Log"
        description="Review your recent account activities and security events"
        iconName="list"
        iconColor="#6b7280"
      >
        <ActivityLog activities={activityLog} />
        <View style={styles.logActions}>
          <SettingsItem
            title="Clear Activity Log"
            subtitle="Remove all activity records"
            iconName="trash-outline"
            iconColor="#ef4444"
            onPress={handleClearActivityLog}
          />
        </View>
      </SettingsSection>

      {/* App Management Section */}
      <SettingsSection
        title="App Management"
        description="Manage app settings and data"
        iconName="cog"
        iconColor="#6b7280"
      >
        <SettingsItem
          title="Reset All Settings"
          subtitle="Restore all settings to their default values"
          iconName="refresh-outline"
          iconColor="#f59e0b"
          onPress={handleResetSettings}
        />
        <SettingsItem
          title="About"
          subtitle="App version, terms, and privacy policy"
          iconName="information-circle-outline"
          iconColor="#6b7280"
          onPress={() => (navigation as any).navigate('About')}
          showArrow
        />
        <SettingsItem
          title="Help & Support"
          subtitle="Get help and contact support"
          iconName="help-circle-outline"
          iconColor="#3b82f6"
          onPress={() => (navigation as any).navigate('Help')}
          showArrow
        />
      </SettingsSection>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  logActions: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
});

export default Settings;
