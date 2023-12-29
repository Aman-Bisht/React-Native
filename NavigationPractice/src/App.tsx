import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { UIEventHandler } from 'react';
import Home from './screens/Home';
import Details from './screens/Details';
import Contact from './screens/Contact';
import { Alert, Pressable,Text } from 'react-native';

const Stack = createNativeStackNavigator();
export type CompList = {
  Home:undefined,
  Details:undefined,
  Contact:{name?:string}|undefined,
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign:"center",
        headerTintColor:"#fff",
        headerStyle:{backgroundColor:"#6a51ae"},
        headerTitleStyle:{fontWeight:"bold"},
        headerRight:()=>(
          <Pressable onPress={()=>Alert.alert("Menu Button is pressed")}>
            <Text style={{color:"#fff",fontSize:16}}>Menu</Text>
          </Pressable>
        ),
        contentStyle:{
          backgroundColor:"#e8e4f3"
        }
      }}>
        <Stack.Screen name="Home" component={Home} options={{title:"Home Page",headerTitleAlign:"center"}}/>
        <Stack.Screen name="Details" component={Details} options={{
          title:"Detail Page",
          headerTitleAlign:"center",
          headerTintColor:"#fff",
          headerStyle:{backgroundColor:"#6a51ae"},
          headerTitleStyle:{fontWeight:"bold"},
          headerRight:()=>(
            <Pressable onPress={()=>Alert.alert("Menu Button is pressed")}>
              <Text style={{color:"#fff",fontSize:16}}>Menu</Text>
            </Pressable>
          ),
          contentStyle:{
            backgroundColor:"#e8e4f3"
          }
          }}/>
        <Stack.Screen name="Contact" component={Contact} options={{title:"Contact Page",headerTitleAlign:"center"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



