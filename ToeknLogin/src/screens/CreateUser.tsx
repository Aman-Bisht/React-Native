import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RootList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface CreateUserRouteParams {
  index?: number;
}
type createProps = {
  navigation:NativeStackScreenProps<RootList,"CreateUser">["navigation"]
}

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  contact: string;
  email: string;
  gender: 'Male' | 'Female' | 'Other';
}

const CreateUser = ({navigation}:createProps) => {
  const route = useRoute();
   const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    age: '',
    contact: '',
    email: '',
    gender: 'Male',
  });
  const [emailError, setEmailError] = useState<string>('');
  const [contactError, setContactError] = useState<string>('');

  const userParams = route.params as CreateUserRouteParams | undefined;

  useEffect(() => {
    if (userParams && userParams.index !== undefined) {
      // If editing, load user data from AsyncStorage based on the index
      loadUserData(userParams.index);
    }
  }, [route.params]);

  const loadUserData = async (index: number) => {
    try {
      const userDataFromStorage = await AsyncStorage.getItem('userData');
      if (userDataFromStorage) {
        const userData: FormData[] = JSON.parse(userDataFromStorage);
        const userToEdit = userData[index];
        setFormData({
          firstName: userToEdit.firstName,
          lastName: userToEdit.lastName,
          age: userToEdit.age.toString(),
          contact: userToEdit.contact,
          email: userToEdit.email,
          gender: userToEdit.gender,
        });
      }
    } catch (error) {
      console.error('Error loading user data for edit:', error);
    }
  };

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addUserAndUpdateTable = async () => {
    const { firstName, lastName, age, email, contact, gender } = formData;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailPattern.test(email);

    const isContactValid = /^\d{10}$/.test(contact);

    if (!isEmailValid) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

    if (!isContactValid) {
      setContactError('Contact number must be 10 digits');
    } else {
      setContactError('');
    }

    if (isEmailValid && isContactValid) {
      try {
        const userDataFromStorage = await AsyncStorage.getItem('userData');
        const userData: FormData[] = userDataFromStorage ? JSON.parse(userDataFromStorage) : [];
    
        if (userParams && userParams.index !== undefined) {
          // If editing, update the existing user data
          
          const index = userParams.index;
          userData[index] = {
            firstName,
            lastName,
            age,
            email,
            contact,
            gender,
          };
        } else {
          // If creating a new user, add to the user data
          userData.push({
            firstName,
            lastName,
            age,
            email,
            contact,
            gender,
          });
        }

        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        Alert.alert('Success', 'User data saved successfully');
        navigation.navigate('UserTable');
      } catch (error) {
        console.error('Error saving user data:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={formData.age}
        onChangeText={(value) => handleInputChange('age', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={formData.contact}
        onChangeText={(value) => handleInputChange('contact', value)}
      />
      <Text style={styles.error}>{contactError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <Text style={styles.error}>{emailError}</Text>
      <View style={styles.genderContainer}>
        <Text>Gender:</Text>
        <View style={styles.radioContainer}>
          <Button
            title="Male"
            onPress={() => handleInputChange('gender', 'Male')}
            color={formData.gender === 'Male' ? 'blue' : 'black'}
          />
          <Button
            title="Female"
            onPress={() => handleInputChange('gender', 'Female')}
            color={formData.gender === 'Female' ? 'blue' : 'black'}
          />
          <Button
            title="Other"
            onPress={() => handleInputChange('gender', 'Other')}
            color={formData.gender === 'Other' ? 'blue' : 'black'}
          />
        </View>
      </View>
      <Button title="Submit" onPress={addUserAndUpdateTable} />
      <Button title="Login" onPress={()=>navigation.navigate("Login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  error: {
    color: 'red',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default CreateUser;
