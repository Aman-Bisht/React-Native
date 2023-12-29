import React from "react";
import {View,Button,Text, SafeAreaView, StyleSheet} from "react-native";

function username(ab:string){
    console.warn("Hello ",ab)
    console.log("Hello ",ab)
}
const fruit = ()=>{
    console.warn("Apple")
}
function ButtonComponent():JSX.Element{
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Button and OnPressComponent
                </Text>
                <Text style={styles.text}>To submit the form press the button</Text>
                <Button title="Continue" onPress={()=>username("ABC")}/>
                <Text style={styles.text}> To invoke the function press the green button</Text>
                <Button title="function" color={"green"} onPress={fruit}/>
            </View>

        </SafeAreaView>
    )
}
export default ButtonComponent

const styles = StyleSheet.create({
 container:{
    flex:1,
    flexDirection:"column"
 },
 heading:{
    fontSize:20,
    fontWeight:"700",
    textAlign:"center",
    marginTop:12,
 },
 text:{
    fontSize:18,
    fontWeight:"400",
    paddingTop:10,
    paddingBottom:8,
 }
});