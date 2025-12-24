import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UtilityHeader from '../components/UtilityPage/UtilityHeader';
import UtilityCard from '../components/UtilityPage/UtilityCard';

const UtilityPage = ({ isLoggedIn }) => {
  const navigation = useNavigation<any>();

  const menuItems = [
    {
      name: 'AI Lawyer',
      icon: 'chatbubbles',
      description: 'Ask legal queries and get instant AI-powered answers.',
      screen: 'Query',
      color: '#2563EB'
    },
    {
      name: 'Bare Acts',
      icon: 'library',
      description: 'Access complete legal bare acts and legislation.',
      screen: 'Bare Acts',
      color: '#059669'
    },
    {
      name: 'Original Documents',
      icon: 'document-text',
      description: 'Download and manage official legal documents.',
      screen: 'Original Documents',
      color: '#DC2626'
    },
    {
      name: 'Database',
      icon: 'server',
      description: 'Explore legal case database and precedents.',
      screen: 'Database',
      color: '#7C3AED'
    },
    {
      name: 'FIR Builder',
      icon: 'create',
      description: 'Generate and customize FIR documents easily.',
      screen: 'FIR Download',
      color: '#EA580C'
    },
    {
      name: 'Settings',
      icon: 'settings',
      description: 'Customize your app preferences and settings.',
      screen: 'Settings',
      color: '#6B7280'
    },
  ];

  return (
    <View style={styles.container}>
      <UtilityHeader />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.grid}>
          {menuItems.map((item, index) => (
            <UtilityCard
              key={index}
              name={item.name}
              icon={item.icon}
              description={item.description}
              color={item.color}
              onPress={() => navigation.navigate(item.screen)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  grid: {
    // Cards will stack vertically with marginBottom
  },
});

export default UtilityPage;
