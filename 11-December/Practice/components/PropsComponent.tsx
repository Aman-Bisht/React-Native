import React, { PropsWithChildren } from "react";
import {View,Text} from "react-native";
type propsType=PropsWithChildren<{
    name:string,
    count:number,
}>

function PropsComponent(props:propsType):JSX.Element{
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.count}</Text>
            {props.children}
        </View>
    )
}

export default PropsComponent;