//It update only particular things
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Dimensions,
  Button,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
type DataType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
const FetchPatch = () => {
  const [data, setData] = useState<DataType>();
  const [original, setOriginal] = useState<DataType>();
  const [check, setChecked] = useState<boolean>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(json => setOriginal(json))
      .catch(error => ToastAndroid.show(error, ToastAndroid.SHORT));
  }, []);

  const patchedData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        body: 'Data from the data body should be patched',
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(json => {
        setData(json);
        setChecked(true);
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.SHORT));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Patched The Data</Text>
      <View style={styles.oldCont}>
        <Text style={styles.oldHead}>Data Body Before Patched</Text>
        <Text style={styles.oldId}> Post Id :{original?.id}</Text>
        <Text style={styles.oldUser}> User ID :{original?.userId}</Text>
        <Text style={styles.oldTitle}>{original?.title}</Text>
        <Text style={styles.oldBody}>{original?.body}</Text>
      </View>
      <View style={styles.btn}>
        <Button title="Patched Data" onPress={patchedData} />
      </View>
      <View>
        <Text>
          {check ? (
            <View style={styles.oldCont}>
              <Text style={styles.oldHead}>Data Body After Patched</Text>
              <Text style={styles.oldId}> Post Id :{data?.id}</Text>
              <Text style={styles.oldUser}> User ID :{data?.userId}</Text>
              <Text style={styles.oldTitle}>{data?.title}</Text>
              <Text style={styles.oldBody}>{data?.body}</Text>
            </View>
          ) : (
            'Not sended Yet'
          )}
        </Text>
      </View>
    </View>
  );
};

export default FetchPatch;
const styles = StyleSheet.create({
  container: {
    // backgroundColor:"#DAE0E2",
    backgroundColor: '#FFFFFF',
    height: height,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
  },
  oldCont: {
    backgroundColor: '#DAE0E2',
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    width: width,
  },
  oldHead: {
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 10,
  },
  oldId: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  oldUser: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  oldTitle: {
    fontWeight: 'bold',
  },
  oldBody: {},
  btn: {
    marginBottom: 10,
    width: 200,
    alignSelf: 'center',
  },
});
