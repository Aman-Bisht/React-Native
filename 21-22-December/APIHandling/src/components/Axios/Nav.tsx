import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AxiosGet from './AxiosGet'
import AxiosPost from './AxiosPost'
import AxiosPut from './AxiosPut'
import AxiosDelete from './AxiosDelete'
import Crud from './Crud'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type stackType = {
    GetData:undefined,
    AddData:undefined,
    PutData:undefined,
    DeleteData:undefined,
    Curd:undefined,
}
const Stack = createNativeStackNavigator<stackType>()
const Nav = () => {
  return (
    <Stack.Navigator initialRouteName='Curd'>
        <Stack.Screen name="GetData" component={AxiosGet}/>
        <Stack.Screen name="AddData" component={AxiosPost}/>
        <Stack.Screen name="PutData" component={AxiosPut}/>
        <Stack.Screen name="DeleteData" component={AxiosDelete}/>
        <Stack.Screen name="Curd" component={Crud} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default Nav

const styles = StyleSheet.create({})