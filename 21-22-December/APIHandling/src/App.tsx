import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FetchGet from './components/Fetch/FetchGet';
import SendingData from './components/Fetch/SendingData';
import FetchPutUpdate from './components/Fetch/FetchPutUpdate';
import FetchPatch from './components/Fetch/FetchPatch';
import FetchDelete from './components/Fetch/FetchDelete';
import AxiosGet from './components/Axios/AxiosGet';
import AxiosPost from './components/Axios/AxiosPost';
import AxiosPut from './components/Axios/AxiosPut';
import AxiosDelete from './components/Axios/AxiosDelete';
import Crud from './components/Axios/Crud';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './components/Axios/Nav';

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <FetchDelete /> */}
      {/* <FetchPatch/> */}
      {/* <FetchPutUpdate/> */}
      {/* <SendingData/> */}
      {/* <FetchGet /> */}

      {/* <AxiosGet /> */}
      {/* <AxiosPost/> */}
      {/* <AxiosPut/> */}
      {/* <AxiosDelete /> */}
      {/* <Crud/> */}

      <NavigationContainer>
        <Nav/>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
