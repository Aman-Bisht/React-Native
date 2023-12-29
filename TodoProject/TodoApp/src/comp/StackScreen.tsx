import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './Login';
import Todo from './Todo';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Splash';
import Random from './Random';

export type screenType = {
  Login: {title: string};
  Todo: undefined;
  Splash: undefined;
  Random: undefined;
};

const Stack = createNativeStackNavigator<screenType>();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{title: 'Login'}}
        />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Random" component={Random} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
const styles = StyleSheet.create({});
