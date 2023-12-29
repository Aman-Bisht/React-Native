import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Scanner from './components/Scanner'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Scanner />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})