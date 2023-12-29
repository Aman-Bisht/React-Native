import React, { PropsWithChildren } from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

type Propstype =PropsWithChildren<{
    name:string,
    age:number,
    // children:JSX.Element
  
}>

function PropsComp(props:Propstype) {
    return (
        <View>
            <View style={styles.container}>
        <Text style={styles.heading}>Props Component</Text>
            </View>
            <View>
                <Text>{props.name}</Text>
                <Text>{props.age}</Text>
                <Text>{props.children}</Text>
            </View>
        </View>
    )
}
export default PropsComp;
const styles = StyleSheet.create({
    container:{
        margin:10,
    },
    heading:{
        fontSize:30,
        fontWeight:"bold",
        alignSelf:"center",
    },
});
