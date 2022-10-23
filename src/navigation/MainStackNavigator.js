import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/Home';
import CameraPage from '../screens/Camera'
import UploadPage from '../screens/UploadScreen'
import LoginPage from "../screens/Login"

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Upload" component={UploadPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;