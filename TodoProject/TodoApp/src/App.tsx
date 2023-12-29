import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todo from './comp/Todo'
import StackScreen from './comp/StackScreen'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Todo /> */}
      <StackScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})