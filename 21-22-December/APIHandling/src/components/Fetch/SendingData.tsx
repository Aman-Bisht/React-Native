import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
type DataType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
const SendingData = () => {
  const [check, setChecked] = useState<boolean>(false);
  const [data, setData] = useState<DataType>({
    id: 999,
    userId: 1,
    title: 'Sending Data to the API',
    body: 'Learning How to send the data to the api',
  });
  const insertData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
        setChecked(true);
        ToastAndroid.show('Recored Inserted', ToastAndroid.LONG);
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.LONG));
  };
  return (
    <SafeAreaView>
        <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Sending Data To The API</Text>
        <Button title="Send Data" onPress={insertData} />
        <Text style={styles.data}>
          {check ? JSON.stringify(data) : 'Not Sended'}
        </Text>
        <Text style={styles.body}>
          {check ? (
            <View style={styles.datacontainer}>
              <Text style={styles.userId}>UerID :{data.userId}</Text>
              <Text style={styles.title}>Title :{data.title}</Text>
              <Text style={styles.databody}>{data.body}</Text>
            </View>
          ) : (
            'Not sended Yet'
          )}
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingRight:10,
    paddingLeft:10,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
  },
  data: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#DAE0E2',
    fontWeight: '500',
    fontSize: 18,
  },
datacontainer:{
    paddingRight:"auto"
},
  body: {
    backgroundColor: '#DAE0E2',
    fontWeight: '600',
    fontSize: 16,
    padding:30,
  },
  userId: {
    fontWeight: '800',
    fontSize: 20,
  },
  title: {
    fontWeight: '500',
  },
  databody: {
    textAlign: 'justify',
    fontSize:18,
    fontWeight:"bold"
  },
});

export default SendingData;
