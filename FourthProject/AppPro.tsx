import React from 'react';
import {SafeAreaView, View, Text,StyleSheet,useColorScheme} from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme()==="dark"
    const displayMode = useColorScheme();
  return (
      <View style={styles.container}>
        <Text style={isDarkMode?styles.whiteText:styles.darkText}>Hello</Text>
        <Text>Display mode is: {displayMode}</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    whiteText:{
        color:"#ffffff",
    },
    darkText:{
        color:"#000000",
    }
})
export default AppPro;
