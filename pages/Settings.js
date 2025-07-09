import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Feather } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(15);
  const [highContrast, setHighContrast] = useState(false);
  const [activityLog, setActivityLog] = useState([
    { action: 'Login', time: '2024-11-25 10:30 AM' },
    { action: 'Changed Password', time: '2024-11-20 02:00 PM' },
    { action: 'Enabled 2FA', time: '2024-11-18 08:45 AM' },
    { action: 'Logged Out', time: '2024-11-17 04:10 PM' },
  ]);

  const navigation = useNavigation();

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handle2FAChange = () => {
    setIs2FAEnabled(!is2FAEnabled);
  };

  const handleHighContrastChange = () => {
    setHighContrast(!highContrast);
  };

  const handleSessionTimeoutChange = (value) => {
    setSessionTimeout(value);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.description}>Customize your privacy, security, and accessibility settings.</Text>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <FontAwesome name="user" size={24} color="#4A90E2" />
          <Text style={styles.cardTitle}>Account Settings</Text>
        </View>
        <Text style={styles.cardText}>Manage your account details such as profile and email address.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Feather name="shield" size={24} color="#34D399" />
          <Text style={styles.cardTitle}>Privacy Settings</Text>
        </View>
        <Text style={styles.cardText}>Control your data sharing preferences and visibility settings.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ManagePrivacy')}>
          <Text style={styles.buttonText}>Manage Privacy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="lock" size={24} color="#F56565" />
          <Text style={styles.cardTitle}>Two-Factor Authentication</Text>
        </View>
        <Text style={styles.cardText}>Enable 2FA for additional security on your account.</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Enable Two-Factor Authentication</Text>
          <Switch value={is2FAEnabled} onValueChange={handle2FAChange} />
        </View>
        <Text style={is2FAEnabled ? styles.enabledText : styles.disabledText}>
          {is2FAEnabled ? 'Two-Factor Authentication is enabled. Your account is more secure.' : 'Two-Factor Authentication is disabled. Your account is less secure.'}
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="exit" size={24} color="#ECC94B" />
          <Text style={styles.cardTitle}>Session Timeout</Text>
        </View>
        <Text style={styles.cardText}>Set an automatic session timeout for enhanced security.</Text>
        <TextInput
          style={styles.input}
          value={String(sessionTimeout)}
          onChangeText={handleSessionTimeoutChange}
          keyboardType="numeric"
          maxLength={2}
        />
        <Text style={styles.timeoutText}>Timeout after {sessionTimeout} minutes of inactivity.</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="accessibility" size={24} color="#9F7AEA" />
          <Text style={styles.cardTitle}>Accessibility</Text>
        </View>
        <Text style={styles.cardText}>Adjust text size or enable high contrast for better readability.</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Enable High Contrast Mode</Text>
          <Switch value={highContrast} onValueChange={handleHighContrastChange} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Feather name="list" size={24} color="#F6A024" />
          <Text style={styles.cardTitle}>Activity Log</Text>
        </View>
        <Text style={styles.cardText}>Review your recent account activities for transparency.</Text>
        <View style={styles.activityLog}>
          {activityLog.map((log, index) => (
            <Text key={index} style={styles.activityLogItem}>
              <Text style={styles.activityAction}>{log.action}</Text> at {log.time}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7FAFC',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#2B6CB0',
    textAlign: 'center',
    marginVertical: 16,
  },
  description: {
    fontSize: 18,
    color: '#4A5568',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3748',
    marginLeft: 8,
  },
  cardText: {
    color: '#718096',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2B6CB0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  switchLabel: {
    fontSize: 16,
    color: '#4A5568',
  },
  enabledText: {
    color: '#38A169',
    fontSize: 14,
  },
  disabledText: {
    color: '#E53E3E',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
  },
  timeoutText: {
    color: '#718096',
    fontSize: 14,
  },
  activityLog: {
    marginTop: 8,
  },
  activityLogItem: {
    color: '#4A5568',
    fontSize: 14,
    marginBottom: 8,
  },
  activityAction: {
    fontWeight: '600',
  },
});

export default Settings;
