import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import { RootList } from "../App";
import { RouteProp } from "@react-navigation/native";

type DetailProp = {
    navigation:NativeStackScreenProps<RootList,"Details">["navigation"];
    route: RouteProp<RootList,"Details">;
}
const Details = ({route,navigation}:DetailProp)=>{
    const {info} = route.params??{};
    const handlePress = ()=>{
        // navigation.push("LastScreen")
        navigation.navigate("LastScreen");
        
    }
    return (
        <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <View style={styles.btn}>
        <Button title="Go Back"  onPress={handlePress}/>
      </View>
      <Text style={styles.info}>Info : {info}</Text>
    </View>
    )
}

export default Details;
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