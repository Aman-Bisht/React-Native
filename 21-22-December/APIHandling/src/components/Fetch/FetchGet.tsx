import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  FlatList,
  SafeAreaView,
} from 'react-native';

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const FetchGet = () => {
  const [data, setData] = useState<DataType[]>([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(allData => setData(allData))
      .catch(error => ToastAndroid.show(error, ToastAndroid.SHORT));
  }, []);
  return (
    // <View>
    //     <Text>Fetching Data</Text>
    //   {data.map(item=><Text key={item.it}>{item.title}</Text>)}
    // </View>
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.heading}>Users Post</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id + ''}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.id}>Post No : {item.id} </Text>
              <Text style={styles.userId}>User Id :-{item.userId}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    main:{
        
        backgroundColor:"#8395A7",
    },
    heading:{
        textAlign:"center",
        fontWeight:"800",
        fontSize:23,
        paddingBottom:30,
    },
    container:{
        margin:10,
        textAlign:"justify",
    },
    card:{
        marginBottom:10,
        paddingBottom:10,
        backgroundColor:"#DAE0E2"
    },
    id:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    },
    userId:{
        fontWeight:"bold",
        marginLeft:10,
    },
    title:{
        margin:8,
        fontWeight:"500"
    },
    body:{
        marginLeft:8,
        marginRight:8,
    },
});

export default FetchGet;
