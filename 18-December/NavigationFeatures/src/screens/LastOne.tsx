import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {View,Text, StyleSheet, Button} from "react-native"
import { RootList } from "../App";

type LastProps = {
    navigation:NativeStackScreenProps<RootList,"LastScreen">["navigation"]
}
const LastOne=({navigation}:LastProps)=>{
    const handlePress = ()=>{
        navigation.navigate("Home");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>LastOne Screen</Text>
            <View style={styles.btn}>
                <Button title="Home page"/>
            </View>
        </View>
    )
}

export default LastOne;
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:20,
        fontWeight:"600",
        textAlign:"center"
    },
    btn:{
        width:200,
        padding:8,
    }
})