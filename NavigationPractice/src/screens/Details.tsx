import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CompList } from '../App'

type DetailsProps = {
    navigation: NativeStackScreenProps<CompList,"Details">['navigation']
}

const Details = ({navigation}:DetailsProps) => {
  const [name,setName] = useState<string>("");
  return (
    <View style={styles.container}>
    <View style={styles.headingSection}>
      <Text style={styles.text}>Details Page </Text>
    </View>
    <View style={styles.textbox}>
      <TextInput
      placeholder="Enter the name"
      placeholderTextColor="blue"
      value={name}
      onChangeText={(newVal)=>setName(newVal)}
      style={styles.box}
      />
    </View>
    <View style={styles.btn}>
      <Button title="Go to Contact"
      onPress={()=>navigation.navigate("Contact",{name})} />
    </View>
  </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headingSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
  },
  textbox:{
    width:400,
    marginTop:30,
    justifyContent:"center",
    alignSelf:"center",

  },
  box:{
    borderColor:"black",
    borderWidth:2,
    padding:10,
    fontSize:20,

  },
  btn:{
    paddingTop:20,
    width:150,
    alignSelf:"center"
  }
});
