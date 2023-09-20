import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SPLASH_IMAGE } from '../constants';

// Import your app's logo image (replace 'your_logo.png' with the actual image path)

const SplashScreen: React.FC = ({ navigation }:any) => {
  useEffect(() => {
    // Simulate any additional initialization logic here if needed
    // After initialization, you can navigate to the 'Login' screen like this:
    // navigation.navigate('Login');
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image source={SPLASH_IMAGE} style={styles.logo} /> */}
      <Text style={styles.appName}>BazaarX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Background color of the splash screen
  },
  logo: {
    width: 200, // Adjust the dimensions as needed
    height: 200,
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
  appName: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
