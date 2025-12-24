import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Import AsyncStorage

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [badgeNumber, setBadgeNumber] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [isMobile, setIsMobile] = useState(false); // For screen size check

  const navigation = useNavigation();

  // Checking AsyncStorage for login state when the component mounts
  useEffect(() => {
    const checkLogin = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      const storedName = await AsyncStorage.getItem('name');
      const storedBadgeNumber = await AsyncStorage.getItem('badgeNumber');
      const storedEmail = await AsyncStorage.getItem('email');

      if (storedUserId && storedName && storedBadgeNumber && storedEmail) {
        setIsLoggedIn(true);
        setUserId(storedUserId);
        setName(storedName);
        setBadgeNumber(storedBadgeNumber);
        setEmail(storedEmail);
      }
    };

    checkLogin();
  }, []);

  // Handle login logic
  const handleLogin = async () => {
    setUserId(email);
    setIsLoggedIn(true);
    // Store user data in AsyncStorage
    await AsyncStorage.setItem('userId', email);
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('badgeNumber', badgeNumber);
    await AsyncStorage.setItem('email', email);
    console.log('Logging in with', { email, password, name, badgeNumber });
  };

  // Handle logout logic
  const handleLogout = async () => {
    setIsLoggedIn(false);
    setUserId('');
    setName('');
    setBadgeNumber('');
    setEmail('');
    // Clear user data from AsyncStorage
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('name');
    await AsyncStorage.removeItem('badgeNumber');
    await AsyncStorage.removeItem('email');
    console.log('Logged out successfully');
  };

  // Toggle between login and signup form
  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Conditionally render based on login state */}
      <View style={styles.mainContent}>
        {isLoggedIn ? (
          <>
            <Text style={styles.title}>You are logged in</Text>
            <View style={styles.userDetails}>
              <Text><Text style={styles.bold}>Name:</Text> {name}</Text>
              <Text><Text style={styles.bold}>Email:</Text> {email}</Text>
              <Text><Text style={styles.bold}>Badge Number:</Text> {badgeNumber}</Text>
            </View>
            <Button title="Log Out" onPress={handleLogout} />
          </>
        ) : (
          <>
            <Text style={styles.title}>{isSignup ? 'Sign Up' : 'Login'}</Text>
            <View style={styles.form}>
              {isSignup && (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Badge Number"
                    value={badgeNumber}
                    onChangeText={setBadgeNumber}
                  />
                </>
              )}
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <Button title={isSignup ? 'Sign Up' : 'Login'} onPress={handleLogin} />
            </View>
            <TouchableOpacity onPress={toggleForm}>
              <Text style={styles.toggleFormText}>
                {isSignup ? 'Already a user? Login' : 'Not a user? Sign Up'}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0, // Handling notched devices
  },
  mainContent: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  userDetails: {
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  toggleFormText: {
    color: '#007bff',
    marginTop: 10,
  },
});

export default Login;
