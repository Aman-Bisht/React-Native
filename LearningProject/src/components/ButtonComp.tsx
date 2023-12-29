import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ButtonComp() {
    const press=(title:string,msg:string)=>{
        Alert.alert(title,msg)
    }
  return (
    <View style={styles.button}>
      <Text style={styles.txt}>ButtonComp</Text>
      <Button title="Press here" onPress={()=>press("Warning!","Now react-native using typescript by default.")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        width:150,
        margin:20,
        alignSelf:"center",
    },
    txt:{
      fontSize:20,
      marginBottom:20,
      alignSelf:"center",
    }
})