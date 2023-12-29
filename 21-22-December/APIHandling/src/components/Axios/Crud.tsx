import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { stackType } from './Nav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type propsTypes= NativeStackScreenProps<stackType,"Curd">;
const Crud = ({navigation}:propsTypes) => {
  const operation = (opid: number) => {
    switch (opid) {
      case 1:
        navigation.navigate("GetData")
        break;
      case 2:
        navigation.navigate("AddData")
        break;
      case 3:
        navigation.navigate("PutData")
        break;
      case 4:
        navigation.navigate("DeleteData")
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Curd App</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => operation(1)}>
          <Text style={styles.opacity}>Get User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => operation(2)}>
          <Text style={styles.opacity}>Insert User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => operation(3)}>
          <Text style={styles.opacity}>Update User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => operation(4)}>
          <Text style={styles.opacity}>Delete User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Crud;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
  },
  buttons: {
    margin: 20,
  },
  opacity: {
    fontSize: 35,
    backgroundColor: 'blue',
    color: 'white',
    padding: 15,
    width: 350,
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
});
