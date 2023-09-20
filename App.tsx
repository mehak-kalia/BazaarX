

 import React, { useEffect, useState } from 'react';
 import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import SplashScreen from './src/components/SplashScreen'; // Import your SplashScreen component
 import LoginScreen from './src/components/LoginScreen'; // Import your LoginScreen component
 
 const Stack = createStackNavigator();
 
 function App(): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';
   const [showSplash, setShowSplash] = useState(false);
 
   useEffect(() => {
     // Simulate a delay to show the splash screen for a few seconds (adjust the delay as needed)
     setTimeout(() => {
       setShowSplash(false); // Hide the splash screen
     }, 3000); // 3000 milliseconds (3 seconds)
 
     // You can add more initialization logic here if needed
   }, []);
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? 'black' : 'white',
   };
 
   return (
     <NavigationContainer>
       <SafeAreaView style={backgroundStyle}>
         <StatusBar
           barStyle={isDarkMode ? 'light-content' : 'dark-content'}
           backgroundColor={backgroundStyle.backgroundColor}
         />
         <Stack.Navigator initialRouteName="Splash">
           {showSplash ? (
             <Stack.Screen
               name="Splash"
               component={SplashScreen}
             />
           ) : (
             <Stack.Screen
               name="Login"
               component={LoginScreen}
             />
           )}
         </Stack.Navigator>
       </SafeAreaView>
     </NavigationContainer>
   );
 }
 
 const styles = StyleSheet.create({
   // Your styles here
 });
 
 export default App;
 