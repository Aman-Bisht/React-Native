import React, { useState } from "react"
import { View,Text, StyleSheet, TouchableOpacity, Button } from "react-native"

function StateComponent():JSX.Element{
    const [name,setName] = useState("ABC");
    let data = "EFG"

    function username(){
        setName("MNO")
        data="ABC"
    }
    function username2(val:string){
        setName(val)
        data="LMO"
    }
    return (
        <View>
            <Text style={{fontSize:30,textAlign:"center"}}>State Component</Text>
            <Text style={styles.text}>We should update the name state</Text>
            <Text style={styles.text}>This is with using state {name}</Text>
            <Text style={styles.text}>This is without using state {data}</Text>
           <Button title="Name" onPress={()=>setName("XYZ")}/>
           <Button title="Name2" onPress={username} color="red"/>
           <Button title="Name3" onPress={()=>username2("UVW")} color="orange"/>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:16,
        fontWeight:"400"
    },
    // button:{
    //     backgroundColor:"blue",
    //     height:40,
    //     flex:1,
    //     width:
    // }
})

export default StateComponent