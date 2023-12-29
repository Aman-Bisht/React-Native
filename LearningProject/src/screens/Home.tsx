// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// //navigation
// import { NativeStackScreenProps } from '@react-navigation/native-stack'

// import {RootStackParamList} from "../App"
// import { Screen } from 'react-native-screens'

// type homeProp = NativeStackScreenProps<RootStackParamList,"Home">
// const Home = ({navigation}:homeProp) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home Screen</Text>
//       <Button
//       title="Go to detail"
//       onPress={()=>navigation.navigate("Details",{
//         productId:"100"
//       })}
//         // onPress={()=>navigation.navigate("Details")}
//         // onPress={()=>navigation.push("Details",{
//         //     productId:"100"
//         // })}
//       />
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//     container:{},
//     text:{},
// })

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeProp = {
    // NativeStackScreenProps<RootList,"Home">
    navigation: NativeStackScreenProps<RootList, 'Home'>['navigation'];
}

const Home = ({navigation}:HomeProp) => {
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
