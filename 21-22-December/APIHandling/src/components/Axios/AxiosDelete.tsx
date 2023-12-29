import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  ToastAndroid,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

type DataType = {
  id: number;
  name: string;
  website: string;
};

const AxiosDelete = () => {
  const [id, setId] = useState('');
  const [checked, setChecked] = useState<boolean>(false);
  const [data, setData] = useState<DataType[]>();

  const onFocusIdInput = () => {
    setChecked(false);
  };
  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        setChecked(true);
        setData([res.data]);
      })
      .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
  };

  const onSubmit = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setChecked(false);
        ToastAndroid.show('Deleted Successfully', ToastAndroid.LONG);
        setId("")
      })
      .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Axios Delete Data</Text>
      <View style={styles.textField}>
        <TextInput
          placeholder="Enter the id"
          value={id}
          placeholderTextColor="green"
          onChangeText={newVal => setId(newVal)}
          style={styles.id}
          onFocus={onFocusIdInput}
          onSubmitEditing={() => getData()}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Delete" color="red" onPress={onSubmit} />
      </View>
      <View style={styles.lastCont}>
        {checked ? (
          <View style={styles.update}>
            <Text style={styles.updateText}>{JSON.stringify(data)}</Text>
          </View>
        ) : (
          <Text style={styles.last}>Not Updated Yet</Text>
        )}
      </View>
    </View>
  );
};

export default AxiosDelete;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  textField: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  id: {
    width: 300,
    borderWidth: 2,
    margin: 10,
    borderColor: 'red',
    fontWeight: '700',
    fontSize: 15,
  },
  name: {
    width: 300,
    borderWidth: 2,
    margin: 10,
    borderColor: 'red',
    fontWeight: '700',
    fontSize: 15,
  },
  website: {
    width: 300,
    borderWidth: 2,
    margin: 10,
    borderColor: 'red',
    fontSize: 15,

    fontWeight: '700',
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  lastCont: {
    backgroundColor: '#8395A7',
    marginTop: 30,
    padding: 10,
  },
  update: {
    width: width,
    height: 40,
  },
  last: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  updateText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'red',
  },
});
