import {
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const {height, width} = Dimensions.get('screen');

type DataType = {
  id: number;
  name: string;
  website: string;
};
const AxiosPost = () => {
  const [postList, setPostList] = useState<DataType[]>([]);
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const bdata: DataType = {
    id: parseInt(id),
    name: name,
    website: website,
  };
  const [data, setData] = useState<DataType[]>();
  const fetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data);
        setPostList(res.data);
      })
      .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handlePress = () => {
    if (id !== '' && name !== '' && website !== '') {
      const newId =
        postList.length > 0
          ? Math.max(...postList.map(item => item.id)) + 1
          : 1;

      const newPost: DataType = {
        id: newId,
        name: name,
        website: website,
      };
      axios
        .post('https://jsonplaceholder.typicode.com/users', newPost)
        .then(response => {
          //   const newPost = response.data;
          setPostList([...postList, newPost]);

          setData([...(data || []), newPost]);
          console.warn('NewData ', newPost);
          setId('');
          setName('');
          setWebsite('');
          ToastAndroid.show('Recorded Successfully', ToastAndroid.LONG);
        })
        .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
    } else {
      ToastAndroid.show('Please fill all the filed', ToastAndroid.LONG);
    }
  };
  useEffect(() => {
    console.log('Data state:', data);
    console.log('PostList state:', postList);
  }, [data, postList]);
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Text style={styles.heading}>Post The Data</Text>
        <View style={styles.textBox}>
          <TextInput
            placeholder="Enter the id"
            value={id}
            placeholderTextColor="gray"
            onChangeText={newVal => setId(newVal)}
            style={styles.textId}
          />
          <TextInput
            placeholder="Enter the name"
            placeholderTextColor="gray"
            value={name}
            onChangeText={newVal => setName(newVal)}
            style={styles.textName}
          />
          <TextInput
            placeholder="Enter the website"
            placeholderTextColor="gray"
            value={website}
            onChangeText={newVal => setWebsite(newVal)}
            style={styles.textWebsite}
          />
        </View>
        <View style={styles.btn}>
          <Button title="Post" onPress={handlePress} color="blue"/>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Getting data with the help of axios</Text>
          <View style={styles.headContainer}>
            <Text style={styles.id}>User Id</Text>
            <Text style={styles.name}>User Name</Text>
            <Text style={styles.website}>User Website</Text>
          </View>
          <View>
            <FlatList
              data={data}
              keyExtractor={item => item.id + ''}
              renderItem={({item}) => (
                <View style={styles.dataContainer}>
                  <Text style={styles.dataid}>{item.id}</Text>
                  <Text style={styles.dataname}>{item.name}</Text>
                  <Text style={styles.datawebsite}>{item.website}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AxiosPost;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    margin: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    color:"blue"
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  id: {
    width: 100,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  name: {
    width: 200,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 40,
  },
  website: {
    width: 150,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 40,
  },
  dataid: {
    width: 80,
    marginLeft: 5,
    paddingLeft: 30,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  dataname: {
    width: 180,
    padding: 10,
    fontWeight: 'bold',
  },
  datawebsite: {
    width: 150,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textId: {
    width: 300,
    borderWidth: 2,
    margin: 10,
    borderColor: 'blue',
    fontWeight: '700',
    fontSize: 15,
  },
  textName: {
    width: 300,
    borderWidth: 2,
    margin: 10,
    borderColor: 'blue',
    fontWeight: '700',
    fontSize: 15,
  },
  textWebsite: {
    width: 300,
    borderWidth: 2,
    margin: 10,
    borderColor: 'blue',
    fontSize: 15,

    fontWeight: '700',
  },
});
