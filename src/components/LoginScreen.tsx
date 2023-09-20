import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { SPLASH_IMAGE } from '../constants';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here (mock authentication)

    // After successful login, navigate to the Home Screen
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      {/* <Image source ={require('./src/assets/bazaarX.png')} style={styles.logo} /> */}

      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#F8AB01" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    color: '#E2473E',
    marginBottom: 20,
  },
 input: {
  width: '80%',
  backgroundColor: '#FFFFFF',
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  borderColor: '#000000',
  borderWidth: 0.3, // Add this line to set the border width
},
logo: {
  width: 200, // Adjust the dimensions as needed
  height: 200,
  resizeMode: 'contain', // Adjust the resizeMode as needed
},

});

export default LoginScreen;