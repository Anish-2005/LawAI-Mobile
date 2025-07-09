import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import Landing from './pages/Landing';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Database from './pages/Database';
import Query from './pages/Query';
import BareActs from './pages/BareActs';
import Download from './pages/Download';
import Team from './pages/Team';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Accessibility from './pages/Accessibility';
import TermsAndConditions from './pages/TermsAndConditions';
import FIRDownload from './pages/FIRDownload';
import UtilityPage from './pages/UtilityPage';
import OriginalDocuments from './pages/OriginalDocuments'; // Import from /pages
import OfficialFIRFormat from './pages/OfficialFIRFormat'; // Import from /pages
import KeyFeatures from './pages/KeyFeatures';
import Vision from './pages/Vision';
import Contact from './pages/Contact';
// Create the stack navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Landing} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Database" component={Database} />
        <Stack.Screen name="Query" component={Query} />
        <Stack.Screen name="Bare Acts" component={BareActs} />
        <Stack.Screen name="Download" component={Download} />
        <Stack.Screen name="Team" component={Team} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        <Stack.Screen name="Accessibility" component={Accessibility} />
        <Stack.Screen name="Terms" component={TermsAndConditions} />
        <Stack.Screen name="FIR Download" component={FIRDownload} />
        <Stack.Screen name="Utilities" component={UtilityPage} />
        <Stack.Screen name="Original Documents" component={OriginalDocuments} />
        <Stack.Screen name="Official FIR Format" component={OfficialFIRFormat} />
        <Stack.Screen name="Vision" component={Vision} />
        <Stack.Screen name="Key Features" component={KeyFeatures} />
        <Stack.Screen name="Contact" component={Contact} />
        {/* If you want to add a fallback, do it as below */}
        <Stack.Screen
          name="NotFound"
          component={NotFound}
          options={{ title: '404 Not Found' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// "NotFound" screen to display a 404 error message
function NotFound() {
  return (
    <View style={styles.notFoundContainer}>
      <Text style={styles.notFoundText}>404: Page Not Found</Text>
    </View>
  );
}

// Styling for the NotFound screen
const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background for the NotFound screen
  },
  notFoundText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default App;
