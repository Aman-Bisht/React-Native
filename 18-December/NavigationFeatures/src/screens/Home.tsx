import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {RootList} from '../App';

// type Homeprops = {
//   navigation: NativeStackScreenProps<RootList, 'Home'>['navigation'];
// };
type HomeProps = NativeStackScreenProps<RootList,"Home">;
const Home = (props: HomeProps) => {
  const {navigation } = props;
  const handlePress = () => {
    navigation.navigate('About', {
      data: 'This data is coming from Home Screen',
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.btn}>
        <Button title="Go to About screen" onPress={()=>navigation.navigate("About",{data:"This data is coming from the Home Screen"})} />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    padding: 10,
  },
});
