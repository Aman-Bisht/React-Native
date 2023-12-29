import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootList } from '../App';

type loginProps = {
    navigation:NativeStackScreenProps<RootList,"Login">["navigation"]
  }

const Login = ({navigation}:loginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    // Check if user is already logged in
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // User is already logged in, navigate to UserTable
        navigation.navigate('UserTable');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const login = async () => {
    if (username === username&&username !=="" && password === password&&password!=="") {
      try {
        // Save token using AsyncStorage
        const token = 'your_generated_token'; // Replace with your token generation logic
        await AsyncStorage.setItem('token', token);
        navigation.navigate('UserTable');
      } catch (error) {
        console.error('Error saving token:', error);
      }
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  const goToTablePage = () => {
    navigation.navigate('UserTable');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.btn1}>
      <Button title="Login" onPress={login} />
      </View>
      <View style={styles.btn2}>
      <Button title="Go to Table Page" onPress={goToTablePage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: '100%',
  },
  btn1:{
    padding:10,
    margin:10
  },
  btn2:{
    padding:10,
    margin:10
  },
});

export default Login;
