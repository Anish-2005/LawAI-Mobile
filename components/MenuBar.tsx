import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [badgeNumber, setBadgeNumber] = useState('');

  const navigation = useNavigation(); 
  const slideAnim = useRef(new Animated.Value(-250)).current;  // Slide animation for the menu

  // Fetch user data from AsyncStorage
  useEffect(() => {
    const getStoredData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');
        const storedBadgeNumber = await AsyncStorage.getItem('badgeNumber');
        const loggedInStatus = storedName && storedBadgeNumber;

        if (loggedInStatus) {
          setName(storedName);
          setBadgeNumber(storedBadgeNumber);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage', error);
      }
    };

    getStoredData();
  }, []);

  // Handle menu toggle (open/close)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    Animated.timing(slideAnim, {
      toValue: isMenuOpen ? -250 : 0, // Toggle between hidden and shown
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Handle closing the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    Animated.timing(slideAnim, {
      toValue: -250, // Close the menu (hide)
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Menu button */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Ionicons name="menu" size={32} color="darkblue" />
      </TouchableOpacity>

      {/* Animated side menu */}
      {isMenuOpen && (
        <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuTitle}>LawAI</Text>
            <Ionicons name="gavel" size={32} color="white" />
          </View>

          {/* Show user info if logged in */}
          {isLoggedIn && (
            <View style={styles.userInfo}>
              <Image
                source={{ uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images.png' }}
                style={styles.profileImage}
              />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userBadge}>Badge #: {badgeNumber}</Text>
              </View>
            </View>
          )}

          {/* Menu items */}
          <View style={styles.menuItems}>
            <TouchableOpacity onPress={() => navigation.navigate('Query')} style={styles.menuItem}>
              <Text style={styles.menuText}>AI Lawyer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BareActs')} style={styles.menuItem}>
              <Text style={styles.menuText}>Bare Acts</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Database')} style={styles.menuItem}>
              <Text style={styles.menuText}>Database</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FIRDownload')} style={styles.menuItem}>
              <Text style={styles.menuText}>FIR Builder</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(isLoggedIn ? 'Profile' : 'Login')} style={styles.menuItem}>
              <Text style={styles.menuText}>{isLoggedIn ? 'Logged In' : 'Login'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.menuItem}>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            {/* Close button */}
            <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Ensures positioning context for floating elements
    zIndex: 1000, // Ensures that the entire container is above other elements
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1000, // Ensures the menu button is above everything else
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#3b82f6', // Blue color for background
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    elevation: 10, // For Android shadow
    zIndex: 9999, // Ensure the menu floats over other elements
    display: 'flex', // This ensures the menu content is still flexibly arranged
    padding: 20, // Keep padding so menu items inside it are not cramped
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  userDetails: {
    flexDirection: 'column',
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
  },
  userBadge: {
    color: '#cccccc',
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 18,
    color: 'white',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e63946',
    borderRadius: 5,
  },
  closeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MenuBar;
