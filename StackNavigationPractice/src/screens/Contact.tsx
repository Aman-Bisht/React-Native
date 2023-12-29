import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// import { TextInput } from 'react-native-gesture-handler';

const Contact = ({navigation}:any) => {
    const [data,setData] = useState({
        name:"",
        age:"",
        phoneNumber:"",
        gender:"",
        address:"",

    });

    const goToContact = () => {
        navigation.navigate('Details', data);
    
        // Clear input fields after navigating to Contact screen
        setData({
            name:"",
            age:"",
            phoneNumber:"",
            gender:"",
            address:"",
        });
      };
    return (
      <View style={styles.container}>
      <View style={styles.headingSection}>
        <Text style={styles.text}>Details Page </Text>
      </View>
      <View style={styles.textbox}>
        <TextInput
        placeholder="Enter the name"
        placeholderTextColor="blue"
        value={data.name}
        onChangeText={(newVal:string)=>setData({...data,name:newVal})}
        style={styles.box}
        />
        <TextInput
        placeholder="Enter the age"
        placeholderTextColor="blue"
        value={data.age}
        onChangeText={(newVal:string)=>setData({...data,age:newVal})}
        style={styles.box}
        />
        <TextInput
        placeholder="Enter the gender"
        placeholderTextColor="blue"
        value={data.gender}
        onChangeText={(newVal:string)=>setData({...data,gender:newVal})}
        style={styles.box}
        />
        <TextInput
        placeholder="Enter the address"
        placeholderTextColor="blue"
        value={data.address}
        onChangeText={(newVal:string)=>setData({...data,address:newVal})}
        style={styles.box}
        />
        <TextInput
        placeholder="Enter the contact number"
        placeholderTextColor="blue"
        value={data.phoneNumber}
        onChangeText={(newVal:string)=>setData({...data,phoneNumber:newVal})}
        style={styles.box}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Go to Details"
        onPress={goToContact} />
      </View>
    </View>
    )
  }
  
  export default Contact
  
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
      marginBottom:5,
  
    },
    box:{
      borderColor:"black",
      borderWidth:2,
      padding:10,
      fontSize:20,
      marginBottom:5,  
    },
    btn:{
      paddingTop:20,
      width:150,
      alignSelf:"center"
    }
  });