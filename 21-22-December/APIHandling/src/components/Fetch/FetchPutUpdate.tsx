import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Button,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('screen');
type dataType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
const FetchPutUpdate = () => {
  const [original, setOrignal] = useState<dataType>();
  const [data, setData] = useState<dataType>();
  const [check, setChecked] = useState<boolean>(false);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(alldata => setOrignal(alldata))
      .catch(error => ToastAndroid.show(error, ToastAndroid.SHORT));
  }, []);

  const updatingData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        userId: 12,
        title: 'Updating Data',
        body: 'The data has been Updated Now',
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(json => {
        setData(json);
        setChecked(true);
        ToastAndroid.show('Recored Inserted', ToastAndroid.LONG);
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.LONG));
  };
  //   const bData = data?.body;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Updating The Data</Text>
      <View style={styles.oldCont}>
        <Text style={styles.oldHead}>Data Body Before Updating</Text>
        <Text style={styles.oldId}> Post Id :{original?.id}</Text>
        <Text style={styles.oldUser}> User ID :{original?.userId}</Text>
        <Text style={styles.oldTitle}>{original?.title}</Text>
        <Text style={styles.oldBody}>{original?.body}</Text>
      </View>
      <View style={styles.btn}>
        <Button title="Update Data" onPress={updatingData} />
      </View>
      <View>
        <Text>
          {check ? (
            <View style={styles.oldCont}>
              <Text style={styles.oldHead}>Data Body After Updating</Text>
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
export default FetchPutUpdate;
