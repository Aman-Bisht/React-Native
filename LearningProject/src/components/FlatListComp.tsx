import {Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

type dataType = {
  id: string;
  title: string;
};

const DATA = [
  {id: '1', title: 'First Item'},
  {id: '2', title: 'Second Item'},
  {id: '3', title: 'Third Item'},
  {id: '4', title: 'Fourth Item'},
  {id: '5', title: 'Fifth Item'},
];
const FlatListComp = () => {

    const selected = (item:dataType)=>{
        // Alert.alert("Message",title)
        setIsSelected(item.id)
    }

    const [isSelected,setIsSelected]= useState<string>();
  return (
    
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>FlatList Example</Text>
        <View>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=>selected(item)}>

                    <Text style={[styles.titletxt,{backgroundColor:item.id===isSelected?"#6e3b6e":"#f9c2ff",},{color:item.id===isSelected?"white":"blue"}]}>{item.title}</Text>
                </TouchableOpacity>
              
            )}
            extraData={isSelected}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FlatListComp;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection:"row"
    marginTop: 32,
  },
  text: {
    fontSize: 30,
    margin: 30,
    color: 'red',
  },
  titletxt: {
    fontSize: 20,
   
    marginVertical:10,
    marginHorizontal:10,
    padding:20,
    width:400
  },
  itemTitle:{
    
  }
});
