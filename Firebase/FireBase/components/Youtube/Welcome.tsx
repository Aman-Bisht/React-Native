import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Insert from './Insert';
import Firestore from './Firestore';
const {width, height} = Dimensions.get('window');
type propsType = {
  email: string | null;
};
const Welcome = (props: propsType) => {
  const logoutUser = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome {props.email}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={logoutUser}>
          <Text style={styles.button}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* <Insert /> */}
      <Firestore/>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
 },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
    // marginLeft:20,//add
  },
  buttonContainer: {
    flex:1,
    backgroundColor: 'brown',
    // width:100,
    width: width - 300,
    alignSelf: 'flex-end',
    marginLeft: 10,
    borderRadius: 5,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
});
