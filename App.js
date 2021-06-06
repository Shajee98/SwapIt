import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './Screens/Signup'
import SigninScreen from './Screens/Signin'
import HomeScreen from './Screens/Homepage'
import BottomTab from './Screens/BottomTab';

const Stack = createStackNavigator();

export default function App() {
 
     return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
