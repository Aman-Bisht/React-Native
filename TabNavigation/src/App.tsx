import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Details from './screens/Details';


import Icon from "react-native-vector-icons/FontAwesome"


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator   screenOptions={{
        tabBarActiveTintColor:"purple",
        tabBarInactiveTintColor:"gray",
        tabBarActiveBackgroundColor:"#74B9FF",
        tabBarInactiveBackgroundColor:"#A4B0BD",
        tabBarLabelStyle:{
          fontSize:15,
          fontWeight:"900"
        },
       
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
         
        }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon:()=><Icon name="home" size={20}/>,
        }}/>
        <Tab.Screen name="About" component={About} 
        options={{
          tabBarIcon:()=><Icon name="archive" size={20}/>
        }}/>
        <Tab.Screen name="Contact" component={Contact} 
        options={{
          tabBarIcon:()=><Icon name="file-text" size={20}/>
        }}/>
        <Tab.Screen name="Details" component={Details} 
        options={{
          tabBarIcon:()=><Icon name="drivers-license" size={20}/>
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
