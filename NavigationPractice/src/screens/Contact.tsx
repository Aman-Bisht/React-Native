import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompList } from '../App';
import { RouteProp } from '@react-navigation/native';

type contactProps = {
    navigation:NativeStackScreenProps<CompList,"Contact">['navigation'],
    route: RouteProp<CompList,"Contact">
}

const Contact = ({navigation,route}:contactProps) => {
    const {name} = route.params||{name:"Guest"}

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:name,
        })
    },[navigation,name])

    return (
        <View style={styles.container}>
          <View style={styles.headingSection}>
            <Text style={styles.text}>Hii {name}</Text>
          </View>
          <View style={styles.btn}>
            <Button title="Update Name"
            onPress={()=>navigation.setParams({name:"India"})} />
            <Button title="Go to Home"
            onPress={()=>navigation.navigate("Home")} />
          </View>
        </View>
      );
    };
    
    export default Contact;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      headingSection: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 30,
        fontWeight: '600',
      },
      btn:{
        paddingTop:20,
        width:150,
        alignSelf:"center"
      }
    });
    