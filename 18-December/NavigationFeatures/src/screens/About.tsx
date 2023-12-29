import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {RootList} from '../App';

type AboutProps = NativeStackScreenProps<RootList, 'About'>;

const About = (props: AboutProps) => {
  const {route, navigation} = props;
  const {data} = route.params ?? {};

  const handlePress = () => {
    navigation.replace('Details', {
      info: 'This Info is coming form the About page',
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.btn}>
        <Button title="Go to Deatils screen" onPress={handlePress} />
      </View>
      <Text style={styles.data}>Data: {data}</Text>
    </View>
  );
};

export default About;
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
  data: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
