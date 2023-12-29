import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}:any) => {
    return (
      <View style={styles.container}>
        <View style={styles.headingSection}>
          <Text style={styles.text}>This is the home page</Text>
        </View>
        <View style={styles.btn}>
          <Button title="Go to Detail"
          onPress={()=>navigation.navigate("About")} />
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
  