import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { CompList } from '../App';

type homeprops = {
    navigation:NativeStackScreenProps<CompList,"Home">['navigation']
}
const Home = ({navigation}:homeprops) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingSection}>
        <Text style={styles.text}>This is the home page</Text>
      </View>
      <View style={styles.btn}>
        <Button title="Go to Detail"
        onPress={()=>navigation.navigate("Details")} />
      </View>
    </View>
  );
};

export default Home;
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
