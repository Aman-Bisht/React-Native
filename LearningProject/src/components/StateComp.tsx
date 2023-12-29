import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

function StateComp() {
    const [value,setValue]=useState<number>(0);

    const incrementOne=()=>{
        setValue((prev)=>prev+1)
    }
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setValue((prev)=>prev+1);
        }
    }
    const reset=()=>{
        setValue(0)
    }
  return (
    <View>
        <Text style={styles.heading}>useState Hook </Text>
      <View style={styles.button}>
        <Button title="Plus 1" onPress={incrementOne}/>
        <Text></Text>
        <Button title="Plus 5" onPress={incrementFive} color="green"/>
      </View>
      <Text style={styles.text}>
        Counter:{value}
      </Text>
      <View style={styles.last}>
        <Button title="Reset" onPress={reset}/>
      </View>
    </View>
  );
}

export default StateComp;

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        textAlign:"center",
        fontWeight:"600",
    },
  button: {
    width: 200,
    margin: 20,
    alignSelf: 'center',
  },
  text:{
    fontSize:20,
    textAlign:"center"
  },
  last:{
    width:100,
    margin:10,
    alignSelf:"center"
  },
});
