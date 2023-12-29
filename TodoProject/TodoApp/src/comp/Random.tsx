import React from "react";
import {View,Text, StyleSheet} from "react-native";

const Random = ()=>{
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Random Page Of Todo App</Text>
            </View>
            {/* <Text style={styles.heading}>Random Color</Text> */}
        </View>
    )
}

export default Random
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    heading:{
        fontSize:30,
        textAlign:"center",
        fontWeight:"900",
        color:"#3498DB"
    }
})