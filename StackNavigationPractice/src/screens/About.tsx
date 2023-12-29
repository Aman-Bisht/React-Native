import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.textarea}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde vero minus, error nostrum neque eligendi! Molestiae expedita fugit impedit error sequi unde reprehenderit, veniam dolorum accusamus inventore consectetur quod.</Text>
      </View>
      <View style={styles.btn}>
        <Button 
        title="Go to contact Page"
        onPress={()=>navigation.navigate("Details")}
        />
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textarea:{
        width:400,
        alignSelf:"center",
        paddingTop:25,
        paddingBottom:30,
        backgroundColor:"#DAE0E2",
        marginBottom:10,
    },
    text:{
        margin:5,
        textAlign:"justify"
    },
    btn:{
        width:200,
        alignSelf:"center"
    },
})