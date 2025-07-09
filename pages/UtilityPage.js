import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const UtilityPage = ({ isLoggedIn }) => {
  const navigation = useNavigation();

  const menuItems = [
    { name: 'AI Lawyer', icon: 'gavel', description: 'Ask legal queries and get answers from our AI lawyer.', screen: 'Query' },
    { name: 'Bare Acts', icon: 'book', description: 'Access the full text of legal bare acts.', screen: 'Bare Acts' },
    { name: 'Original Documents', icon: 'file', description: 'Upload and manage your original legal documents.', screen: 'Original Documents' },
    { name: 'Database', icon: 'database', description: 'Explore a collection of legal documents and case law.', screen: 'Database' },
    { name: 'FIR Builder', icon: 'file-text', description: 'Generate and download FIR documents.', screen: 'FIR Download' },
   // { name: 'Official FIR Format', icon: 'file-o', description: 'View and download the official FIR format.', screen: 'Official FIR Format' },
   // { name: isLoggedIn ? 'Profile' : 'Login', icon: isLoggedIn ? 'user' : 'sign-in', description: isLoggedIn ? 'View your profile and settings.' : 'Login to access your profile.', screen: isLoggedIn ? 'Profile' : 'Login' },
    { name: 'Settings', icon: 'cogs', description: 'Manage app settings and preferences.', screen: 'Settings' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Law AI</Text>
        <Text style={styles.subHeaderText}>Navigate through the tools and resources below</Text>
      </View>

      <View style={styles.menuItems}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.screen)}
            style={styles.menuItem}
          >
            <View style={styles.iconWrapper}>
              <Icon name={item.icon} size={40} color="#2563EB" /> {/* Blue icon */}
            </View>
            <Text style={styles.menuText}>{item.name}</Text>
            <Text style={styles.menuDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e3a8a', // Dark Blue
  },
  subHeaderText: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  menuItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  iconWrapper: {
    backgroundColor: '#b3d9f7',
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a', // Dark Blue for menu text
    textAlign: 'center',
  },
  menuDescription: {
    fontSize: 12,
    color: '#555', // Keep description text in gray
    textAlign: 'center',
  },
});

export default UtilityPage;
