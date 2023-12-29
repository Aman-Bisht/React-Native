import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import { RootList } from "../App";
import { RouteProp } from "@react-navigation/native";

type Lastprop = {
    navigation:NativeStackScreenProps<RootList,"LastScreen">["navigation"];
    route: RouteProp<RootList,"LastScreen">;
}
const LastScreen = ({route,navigation}:Lastprop)=>{
    const handlePress = ()=>{
        // navigation.pop(3)
        // navigation.popToTop()
        navigation.navigate("Home")
    }
    return (
        <View style={styles.container}>
      <Text style={styles.text}>Last Screen</Text>
      <View style={styles.btn}>
        <Button title="Go Back"  onPress={handlePress}/>
      </View>
    </View>
    )
}

export default LastScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      padding: 20,
      fontSize: 20,
    },
    btn: {
      width: 200,
      alignSelf: 'center',
      padding: 10,
    },
    info:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"600",
    }
  });