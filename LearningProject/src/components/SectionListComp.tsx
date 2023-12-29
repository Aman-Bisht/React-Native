import {  Button, Dimensions, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootList } from '../App';
const {width,height} = Dimensions.get("screen")

const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];


type SectionProps={
  navigation: NativeStackScreenProps<RootList>['navigation']
}

const SectionListComp = ({navigation}:SectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Section List Example</Text>
      <View>
        <SectionList  
        sections={DATA}
        keyExtractor={(index)=>index}
        renderItem={({item})=>(
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section:{title}})=>(
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        />
      </View>
      <View style={styles.btn}>
        <Button
        title="Go to Image page"
        onPress={()=>navigation.navigate("ImageComp")}
        />
      </View>
    </View>
  )
}

export default SectionListComp

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingTop:30,
    marginBottom:30,
    paddingBottom:30,
  },
  heading:{
    fontSize:30,
    paddingTop:10,
    fontWeight:"600",
  },
  sectionTitle:{
    fontSize:20,
    marginTop:20,
    backgroundColor:"#fff",
    // width:width,
    width:380,
    padding:20,
    marginBottom:10,
    color:"#000",
    fontWeight:"800",
  },
  itemContainer:{
    backgroundColor:"#badc57",
    // height:30,
    borderColor:"black",
    borderWidth:1,
    marginBottom:10,
  },
  itemText:{
    fontSize:17,
    color:"#000",
    fontWeight:"600",
    padding:14,
    
  },
  btn:{

  }
})