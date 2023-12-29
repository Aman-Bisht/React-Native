/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserPost from "./components/UserPost"

const App = () => {
  return (
    <View style={{flex:1}}>
      <UserPost />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})