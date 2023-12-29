import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import {View,Text, StyleSheet} from "react-native"
import Login from "./screens/Login";
import UserTable from "./screens/UserTable";
import CreateUser from "./screens/CreateUser";

const Stack = createNativeStackNavigator();
export type RootList = {
  Login:any,
  UserTable:any,
  CreateUser:any,  
}
const App=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="UserTable" component={UserTable}/>
        <Stack.Screen name="CreateUser" component={CreateUser}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
const styles=StyleSheet.create({

})