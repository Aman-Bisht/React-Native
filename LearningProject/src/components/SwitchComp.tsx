import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';

const SwitchComp = () => {
  const [title, setTitle] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const handlePress = (title: string, msg: string) => {
    if (title === '' && msg === '') {
      Alert.alert('Missing', 'Please give input to the text field');
    } else {
      Alert.alert(title, msg);
      setTitle('');
      setMsg('');
    }
  };
  return (
    <View>
      <View>
        <Text style={styles.heading}>Text Component</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          placeholder="Enter the title"
          placeholderTextColor="blue"
          value={title}
          style={styles.inputText}
          onChangeText={newVal => setTitle(newVal)}
        />
        <TextInput
          placeholder="Enter the msg"
          placeholderTextColor="blue"
          value={msg}
          style={styles.inputText}
          onChangeText={newVal => setMsg(newVal)}
        />
      </View>
      <View style={styles.btn}>
        <Button disabled={isEnabled} title="Show Message" onPress={() => handlePress(title, msg)} />
      </View>
      <View style={styles.seprator}>
        <Switch
          trackColor={{true: 'skyblue', false: 'pink'}}
          thumbColor={isEnabled ? 'blue' : 'red'}
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>
    </View>
  );
};

export default SwitchComp;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: 10,
  },
  inputText: {
    borderWidth: 1,
    margin: 5,
    borderColor: 'green',
    fontSize: 20,
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  seprator: {
    marginTop: 20,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth + 2,
    width: '95%',
    alignSelf: 'center',
  },
});
