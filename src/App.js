import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={HomePage} /> 
        <Stack.Screen name="WelcomePage" component={WelcomePage} /> 
        <Stack.Screen name="CartPage" component={CartPage} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

