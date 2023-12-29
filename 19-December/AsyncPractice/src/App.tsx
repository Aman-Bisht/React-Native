import React from "react"
import {Dimensions, StyleSheet, Text,View} from "react-native"
import Local from "./component/Local"
 const {height,width} =Dimensions.get("screen")
const App = ()=>{
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Local />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#777E8B",
    height:height,
    width:width,
  },
})