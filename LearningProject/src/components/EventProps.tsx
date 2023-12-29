import { Button, StyleSheet,Text, View } from 'react-native'
import React, { useState } from 'react'

type propsType = {
    // add:()=>void
    // add:(a:number,b:number)=>void
    add:(a:number,b:number)=>string
}

const EventProps = (props:propsType) => {
    const [result,setResult] = useState<string>("")

  return (
    <View>
        <View >
            <Text style={styles.heading}>Props as an Event</Text>
        </View>
        <View style={styles.container}>
            <Button title="Run Function" 
            // onPress={props.add}
            onPress={()=>setResult(props.add(30,40))}
            />
        </View>
        <Text>The {result}</Text>
    </View>
  )
}

export default EventProps

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        alignSelf:"center",
        fontWeight:"bold"
    },
    container:{
        width:150,
        margin:10,
        alignSelf:"center"
    }
})