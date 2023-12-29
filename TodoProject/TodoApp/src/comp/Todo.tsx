import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Icons from 'react-native-vector-icons/FontAwesome';
import uuid from 'react-native-uuid';
import {firebase} from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenType} from './StackScreen';

type propsType = {
  listItem: taskType;
};
type taskType = {
  sid: number;
  taskId: string;
  task: string;
  completed: boolean;
};
type todoType = NativeStackScreenProps<screenType, 'Todo'>;

const ItemSeparator = () => <View style={styles.separator} />;

const Todo = ({navigation}: todoType) => {
  const [task, setTask] = useState<string>('');
  const [sid, setSid] = useState<number>(0);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [allTask, setAllTask] = useState<taskType[]>([
    {
      sid: 1,
      task: 'Task1',
      completed: true,
      taskId: '1',
    },
  ]);

  useEffect(() => {
    firebase
      .app()
      .database('https://todoapp-9945a-default-rtdb.firebaseio.com/')
      .ref('/tododata')
      .once('value')
      .then(data => {
        if (data.val() != null) {
          setAllTask(data.val());
          setSid(data.val().length);
        }
      });
  }, [refresh]);

  const getsid = async () => {
    await firebase
      .app()
      .database('https://todoapp-9945a-default-rtdb.firebaseio.com/')
      .ref('/tododata')
      .once('value')
      .then(data => {
        if (data.val() != null) {
          setSid(data.val().length);
        }
      });
  };

  const addTask = () => {
    getsid().then(() => {
      firebase
        .app()
        .database('https://todoapp-9945a-default-rtdb.firebaseio.com/')
        .ref(`/tododata/${sid}`)
        .set({
          sid: sid,
          taskId: uuid.v4().toString(),
          task: task,
          completed: false,
        })
        .then(() => {
          setTask('');
          setRefresh(!refresh);
          ToastAndroid.show('Data is added', ToastAndroid.LONG);
        });
    });
  };

  const deleteTask = (ssid: number) => {
    firebase
      .app()
      .database('https://todoapp-9945a-default-rtdb.firebaseio.com/')
      .ref(`/tododata/${ssid}`)
      .remove()
      .then(() => {
        setTask('');
        setRefresh(!refresh);
        ToastAndroid.show('Task Deleted', ToastAndroid.LONG);
      });
  };

  const toggleTask = (listItem: taskType) => {
    firebase
      .app()
      .database('https://todoapp-9945a-default-rtdb.firebaseio.com/')
      .ref(`/tododata/${listItem.sid}`)
      .update({
        completed: !listItem.completed,
      })
      .then(() => {
        setRefresh(!refresh);
        ToastAndroid.show('Task Updated', ToastAndroid.LONG);
      });
  };

  const deleteAll = () => {
    firebase
      .app()
      .database('https://todoapp-9945a-default-rtdb.firebaseio.com/')
      .ref(`/tododata`)
      .remove()
      .then(() => {
        //   setTask('');
        setAllTask([]);
        setRefresh(!refresh);
        ToastAndroid.show('All Task Deleted', ToastAndroid.LONG);
      });
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('login');
      navigation.replace('Login', {title: 'Login'});
    } catch (err) {
      console.log(err);
    }
  };

  const ListItem = ({listItem}: propsType) => {
    return (
      <View style={styles.listContainer}>
        <Text
          style={[
            styles.listText,
            listItem.completed ? {textDecorationLine: 'line-through'} : {},
          ]}>
          {listItem.task}
        </Text>
        <View>
          {listItem.completed ? (
            <TouchableOpacity onPress={() => toggleTask(listItem)}>
              <Icon name="check-box" size={30} color="#fcba03" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => toggleTask(listItem)}>
              <Icon name="check-box-outline-blank" size={30} color="#3498DB" />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Icon
              name="delete"
              size={30}
              color="#3498DB"
              onPress={() => deleteTask(listItem.sid)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const random = () => {
    navigation.navigate('Random');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Todo App</Text>
        <View style={styles.icons}>
          <Icon name="delete" size={30} color="#3498DB" onPress={deleteAll} />
          <Icons
            name="user-times"
            size={30}
            color="#3498DB"
            style={styles.logoutIcons}
            onPress={logout}
          />
        </View>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={allTask.filter(item => item != null)}
          keyExtractor={item => item.taskId}
          renderItem={({item}) => <ListItem listItem={item} />}
          ItemSeparatorComponent={() => <ItemSeparator />}
          extraData={refresh}
        />
      </View>
      {/* <View style={styles.Button}>
        <Button title="Random Page" onPress={random} />
      </View> */}
      <View style={styles.footer}>
        <TextInput
          onSubmitEditing={() => addTask()}
          style={styles.inputText}
          placeholder="Add Task"
          placeholderTextColor="#3498DB"
          value={task}
          onChangeText={newTask => setTask(newTask)}
        />
        <TouchableOpacity style={styles.addtask} onPress={addTask}>
          <Icon name="add" size={60} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  Button: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3498DB',
    marginLeft: 20,
  },
  icons: {
    flexDirection: 'row',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  inputText: {
    borderWidth: 1,
    width: '83%',
    borderRadius: 10,
    borderColor: '#3498DB',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addtask: {
    backgroundColor: '#3498DB',
    borderRadius: 60,
    marginLeft: 10,
  },
  listContainer: {
    flexDirection: 'row',
    margin: 10,
    elevation: 60,
    justifyContent: 'space-between',
  },
  flatList: {
    flex: 5,
  },
  listText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3498DB',
  },
  separator: {
    backgroundColor: '#3498DB',
    height: 2,
    margin: 10,
  },
  logoutIcons: {
    marginLeft: 10,
  },
});
