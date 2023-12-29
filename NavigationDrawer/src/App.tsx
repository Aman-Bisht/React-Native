/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Details from './screens/Details';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#6a51ae'},
          headerTitleStyle: {fontWeight: 'bold'},
          headerRight: () => (
            <Pressable onPress={() => Alert.alert('Menu Button is pressed')}>
              <Text style={{color: '#fff', fontSize: 16, padding: 10}}>
                Menu
              </Text>
            </Pressable>
          ),
          drawerContentStyle: {
            backgroundColor: '#e8e4f3',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{title: 'Home Page'}}
        />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Details" component={Details}
        options={{title:"Details Page"}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;

