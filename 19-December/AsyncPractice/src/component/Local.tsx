import React, { useState } from "react";
import {View,Text, StyleSheet, Button} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Local = ()=>{
    const [user,setUser] = useState<string>();
    const addData = async()=>{
       await AsyncStorage.setItem("name","Adam");
        // setUser(user)
    }    
    const getData = async()=>{
        const user = await AsyncStorage.getItem("name");
        setUser(user!);
        console.warn(user);
    }
    const removeData  = async()=>{
        await AsyncStorage.removeItem("name");
        setUser("");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Local</Text>
            <View style={styles.btnAdd}>
                <Button title="Set Data" 
                onPress={addData}/>
            </View>
            <View style={styles.btnGet}>
                <Button title="Get Data"
                onPress={getData} />
            </View>
            <View style={styles.btnRemove}>
                <Button title="Remove Data" 
                onPress={removeData}/>
            </View>
            <Text>Name = {user}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
 backgroundColor:"#A4B0BD",
 padding:10,
 margin:10,
 height:300,
 },
 text:{
    fontSize:20,
    fontWeight:"700",
    textAlign:"center"
 },
 btnAdd:{
    margin:10,

 },
 btnGet:{
    margin:10,
 },
 btnRemove:{
    margin:10,
 },
})

export default Local