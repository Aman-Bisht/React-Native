import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

const Contact = ({navigation,route}:any) => {
    const {name,age,gender,address,phoneNumber} = route.params||{name:"Guest"}

    return (
        <View style={styles.container}>
          <View style={styles.headingSection}>
            <Text style={styles.text}>Hii {name}</Text>
            <Text style={styles.text}> {age}</Text>
            <Text style={styles.text}> {gender}</Text>
            <Text style={styles.text}> {address}</Text>
            <Text style={styles.text}> {phoneNumber}</Text>
          </View>
          <View style={styles.btn}>
            <Button title="Go to Home"
            onPress={()=>navigation.navigate("Home")} />
          </View>
        </View>
      );
    };
    
    export default Contact;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      headingSection: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 30,
        fontWeight: '600',
      },
      btn:{
        paddingTop:20,
        width:150,
        alignSelf:"center"
      }
    });