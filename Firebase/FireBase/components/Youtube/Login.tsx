import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const {width, height} = Dimensions.get('screen');

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [title, setTitle] = useState('Login');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '672308322518-3m6j5qjt8mujuavbrgi03lgqc32c44q1.apps.googleusercontent.com',
    });
  }, []);

  const userRegister = () => {
    if (title === 'Register') {
      if (email.length > 0 && pwd.length > 0) {
        auth()
          .createUserWithEmailAndPassword(email, pwd)
          .then(() => {
            ToastAndroid.show(
              'User account created & signed in!',
              ToastAndroid.LONG,
            );
          })
          .catch(error => {
            ToastAndroid.show(error.message, ToastAndroid.LONG);

            console.error(error);
          });
      } else {
        ToastAndroid.show('Enter Email and Password', ToastAndroid.LONG);
      }
    } else {
      if (email.length > 0 && pwd.length > 0) {
        auth()
          .signInWithEmailAndPassword(email, pwd)
          .then(() => {
            ToastAndroid.show('User signed in!', ToastAndroid.LONG);
          })
          .catch(error => {
            ToastAndroid.show(error.message, ToastAndroid.LONG);

            console.error(error);
          });
      } else {
        ToastAndroid.show('Enter Email and Password', ToastAndroid.LONG);
      }
    }
  };

  const gmailLogin = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {title === 'Login' ? 'Login' : 'Register'}
      </Text>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.text}
          placeholder="Email Id"
          placeholderTextColor="green"
          value={email}
          onChangeText={mail => setEmail(mail)}
        />
        <TextInput
          style={styles.text}
          placeholder="Password"
          placeholderTextColor="green"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={pass => setPwd(pass)}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={userRegister}>
        <Text style={styles.button}>
          {title === 'Login' ? 'Login' : 'Register'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerContainer}
        onPress={() => setTitle('Register')}>
        <Text style={styles.register}>Register here, if not Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.gmailContainer}
        onPress={() =>
          gmailLogin()
            .then(() => ToastAndroid.show('User Signed In!', ToastAndroid.LONG))
            .catch(error => {
              console.log(error);
              ToastAndroid.show(error + '', ToastAndroid.LONG);
            })
        }>
        <Text style={styles.gmail}>Gmail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    padding: 10,
    borderBottomWidth: 2,
    margin: 10,
  },
  buttonContainer: {
    backgroundColor: 'brown',
    width: width - 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  button: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
  registerContainer: {
    width: width - 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  register: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
    padding: 10,
    borderBottomWidth: 1,
  },
  gmailContainer: {
    backgroundColor: 'blue',
    width: width - 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  gmail: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
});
