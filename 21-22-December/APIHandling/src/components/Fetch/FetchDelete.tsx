import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Dimensions,
  Button,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
type DataType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
const FetchDelete = () => {
  const [data, setData] = useState<DataType>();
  const [check, setChecked] = useState<boolean>(false);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(json => {
        setData(json), setChecked(true);
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.LONG));
  }, []);

  const deleteData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    })
      .then(() => {
        setChecked(false),
          ToastAndroid.show('Data has been deleted', ToastAndroid.LONG);
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.LONG));
  };
  return (
    <View style={styles.container}>
      {check ? (
        <>
          <Text style={styles.heading}>The Data</Text>
          <View style={styles.oldCont}>
            <Text style={styles.oldHead}>Data Body Before Patched</Text>
            <Text style={styles.oldId}> Post Id :{data?.id}</Text>
            <Text style={styles.oldUser}> User ID :{data?.userId}</Text>
            <Text style={styles.oldTitle}>{data?.title}</Text>
            <Text style={styles.oldBody}>{data?.body}</Text>
          </View>
        </>
      ) : (
        <View style={styles.deleteCont}>
          <Text style={styles.delete}>Data is Deleted</Text>
        </View>
      )}
      <View style={styles.btn}>
        <Button title="Delete Data" onPress={deleteData} />
      </View>
    </View>
  );
};

export default FetchDelete;
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
  deleteCont: {
    marginTop: 30,
    backgroundColor: '#DAE0E2',
    marginBottom: 10,
  },
  delete: {
    fontSize: 20,
    padding: 30,
    backgroundColor: '#DAE0E2',
    textAlign: 'center',
    fontWeight: '800',
  },
});
