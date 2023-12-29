import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import Details from './screens/Details';
import LastScreen from './screens/LastScreen';

export type RootList = {
  Home: undefined;
  About: {data?: string} | undefined;
  Details: {info?: string} | undefined;
  LastScreen: undefined;
};

const Stack = createNativeStackNavigator<RootList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="LastScreen" component={LastScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({});
