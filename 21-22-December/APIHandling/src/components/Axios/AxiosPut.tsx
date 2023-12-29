import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const {width, height} = Dimensions.get('screen');
type DataType = {
  id: number;
  name: string;
  website: string;
};

const AxiosPut = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [updateData, setUpdateData] = useState<DataType[]>();
  const [checked, setChecked] = useState<boolean>(false);
  const data: DataType = {
    id: parseInt(id, 10),
    name: name,
    website: website,
  };
  const onFocusIdInput = () => {
    setChecked(false);
  };

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        setName(res.data.name);
        setWebsite(res.data.website);
      })
      .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
  };

  const onSubmit = () => {
    if (id !== '' && name !== '' && website !== '') {
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
        .then(res => {
          if (res.data.name) {
            ToastAndroid.show('Update Successfully', ToastAndroid.LONG);
          }
          setChecked(true);
          setUpdateData([res.data]);
        })
        .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
    } else {
      ToastAndroid.show(
        'PLease enter the value to all field',
        ToastAndroid.LONG,
      );
    }
    setId('');
    setName('');
    setWebsite('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AxiosPut Data</Text>
      <View style={styles.textField}>
        <TextInput
          placeholder="Enter the id"
          value={id}
          placeholderTextColor="green"
          onChangeText={newVal => setId(newVal)}
          onSubmitEditing={() => getData()}
          style={styles.id}
          onFocus={onFocusIdInput}
        />
        <TextInput
          placeholder="Enter the name"
          value={name}
          placeholderTextColor="green"
          onChangeText={newVal => setName(newVal)}
          style={styles.name}
        />
        <TextInput
          placeholder="Enter the website"
          value={website}
          placeholderTextColor="green"
          onChangeText={newVal => setWebsite(newVal)}
          onSubmitEditing={() => getData()}
          style={styles.website}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Submit" color="red" onPress={onSubmit} />
      </View>
      <View style={styles.lastCont}>
        {checked ? (
          <View style={styles.update}>
            <Text style={styles.updateText}>{JSON.stringify(updateData)}</Text>
          </View>
        ) : (
          <Text style={styles.last}>Not Updated Yet</Text>
        )}
      </View>
    </View>
  );
};

export default AxiosPut;

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
