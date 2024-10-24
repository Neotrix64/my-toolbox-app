import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GenderPredictor from './screens/GenderPredictor';
import AgePredictor from './screens/FetchAge';
import Universities from './screens/FetchUniversities';
import Weather from './screens/FetchWeather';
import About from './screens/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GenderPredictor" component={GenderPredictor} />
        <Stack.Screen name="AgePredictor" component={AgePredictor} />
        <Stack.Screen name="Universities" component={Universities} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

