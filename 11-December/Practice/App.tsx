import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import CompantData from './components/CompanyData';
import ButtonComponent from './components/ButtonComponent';
import StateComponent from './components/StateComponent';
import PropsComponent from './components/PropsComponent';


function App(): React.JSX.Element {
  let name = "ABC"
  return (
    <ScrollView>

    {/* <View style={{ flex: 1 }}>
      <View>
        <Text style={{fontSize: 30}}>React native app</Text>
        <Text style={{fontSize: 30}}>This is react native app</Text>
        <Button title="Press me"></Button>
        <Text> This is another text</Text>
        <Text>Other part in next page</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next page</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={{ color: 'white', fontSize: 20 }}>
          This is the next section in the View.
        </Text>
      </View>
      <View>
        <Text>Hii</Text>
      </View>
    </View> */}
    {/* <CompantData /> */}
    {/* <ButtonComponent /> */}
    {/* <StateComponent /> */}
    <PropsComponent name={name} count={30}>
      <Text>I am just testing the condition</Text>
    </PropsComponent>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    marginVertical: 8,
    marginHorizontal: 150,
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black",
    height:40,
    // marginHorizontal:20,
    // marginBottom:500
  },
});
