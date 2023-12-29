import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import { RootList } from '../App';
import {PRODUCTS_LIST} from "../data/contant"
import Separator from "../components/Separator"
import ProductItem from "../components/ProductItem"

type HomeProps = {
    navigation:NativeStackScreenProps<RootList,"Home">["navigation"]
}

const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={PRODUCTS_LIST}
      keyExtractor={item=>item.id}
      ItemSeparatorComponent={Separator}
      renderItem={({item})=>(
        <Pressable
        onPress={()=>{
            navigation.navigate("Details",{
                product: item
            })
        }}
        >
            <ProductItem product={item}/>
        </Pressable>
      )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"center",
        padding:20,
        // margin:20,
        backgroundColor:"#EAF0F1",
    }
});


