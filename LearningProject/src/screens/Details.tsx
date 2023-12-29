// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// //Navigation
// import { NativeStackScreenProps } from '@react-navigation/native-stack'
// import { RootStackParamList } from '../App'
// import { useNavigation } from '@react-navigation/native'
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// type detailProps = NativeStackScreenProps<RootStackParamList>


// const Details = ({route}:detailProps) => {
//     const { productId } = route.params as { productId?: string };
//   const navigation= useNavigation<NativeStackNavigationProp<RootStackParamList>>()
//   return (
//     <View>
//       <Text>Details:{productId}</Text>
//       <Button
//     title="Go to Home Page"
//     // onPress={()=>navigation.navigate("Home")}
//     // onPress={()=>navigation.goBack()}
//     // onPress={()=>navigation.pop(2)}
//     onPress={()=>navigation.popToTop()}
//       />
//     </View>
//   )
// }

// export default Details

// const styles = StyleSheet.create({})


import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type DetailProp = { 
    // NativeStackScreenProps<RootList,"Details">
    navigation: NativeStackScreenProps<RootList, 'Details'>['navigation'];
}

const Details = ({navigation}:DetailProp) => {
  return (
    <View>
      <Text>Details</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("SectionListComp")}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})