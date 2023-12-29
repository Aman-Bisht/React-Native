// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   ToastAndroid,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import ButtonComp from './components/ButtonComp';
// import StateComp from './components/StateComp';
// import InputComp from './components/InputComp';
// import SwitchComp from './components/SwitchComp';
// import ImageEx from './components/ImageEx';
// import PropsComp from './components/PropsComp';
// import EventProps from './components/EventProps';
// import FlatListComp from './components/FlatListComp';
// import SectionList from './components/SectionListComp';
// import SectionListComp from './components/SectionListComp';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// //screens
// import Home from './screens/Home';
// import Details from './screens/Details';

// export type RootStackParamList = {
//   Home: undefined;
//   Details: {productId: string};
// };

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// const Stack = createNativeStackNavigator<RootStackParamList>();
// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   let name = 'ABC';
//   let age = 31;

//   // const add = ()=>{
//   //   let a = 10;
//   //   let b=30;
//   //   let sum = a+b;
//   //   ToastAndroid.show("Sum = "+sum,ToastAndroid.SHORT)
//   // }
//   const add = (a: number, b: number): string => {
//     let sum = a + b;
//     // ToastAndroid.show("Sum = "+sum,ToastAndroid.SHORT)
//     return 'Return Result ' + sum;
//   };

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     // <SafeAreaView style={backgroundStyle}>
//     //   <ScrollView>
//     //    <ButtonComp />
//     //   <StateComp />
//     //   <InputComp />
//     //   <SwitchComp />
//     //   <ImageEx />
//     //   <PropsComp name={name} age={age}>
//     //     <Text>Hii this side is ABC from Xcue labs</Text>
//     //   </PropsComp>
//     //   <EventProps add={add} />
//     //   <FlatListComp />
//     //   <SectionListComp />
//     //   </ScrollView>
//     // </SafeAreaView >
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} options={{title:"Trending Product"}} />
//         <Stack.Screen name="Details" component={Details} options={{title:"Product Details"}} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import SectionListComp from './components/SectionListComp';
import FlatListComp from './components/FlatListComp';
import ImageEx from './components/ImageEx';

const Stack = createNativeStackNavigator();

export type RootList = {
    Home: undefined;
    Details:undefined;
    SectionListComp:undefined;
    ImageComp:undefined,
    FlatListComp:undefined,
  };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Trending Home"}}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="SectionListComp" component={SectionListComp} options={{title:"Section List Component"}} />
        <Stack.Screen name="ImageComp" component={ImageEx}/>
        <Stack.Screen name="FlatListComp" component={FlatListComp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
