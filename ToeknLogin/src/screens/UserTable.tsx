import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootList } from '../App';

// Define a type for user data
interface User {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  email: string;
  contact: string;
}
type userProps = {
  navigation:NativeStackScreenProps<RootList,"UserTable">["navigation"]
}

const UserTable = ({navigation}:userProps) => {
  const [userData, setUserData] = useState<User[]>([]);
 
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userDataFromStorage = await AsyncStorage.getItem('userData');
      if (userDataFromStorage) {
        setUserData(JSON.parse(userDataFromStorage));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate("Login");
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const editUser = (index: number) => {
  
    navigation.navigate('CreateUser', { index });
  };

  const deleteUser = async (index: number) => {
    try {
      Alert.alert(
        'Confirm Deletion',
        'Are you sure you want to delete this user?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: async () => {
              const updatedUserData = [...userData];
              updatedUserData.splice(index, 1);

              await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));
              setUserData(updatedUserData);

              Alert.alert('Success', 'User deleted successfully');
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const createUser = () => {
    navigation.navigate('CreateUser');
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={logout} />
      <FlatList
        data={userData}
        keyExtractor={(user, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.userRow}>
            <Text>{item.firstName} {item.lastName}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Gender: {item.gender}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Contact: {item.contact}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Edit" onPress={() => editUser(index)} />
              <Button title="Delete" onPress={() => deleteUser(index)} />
            </View>
          </View>
        )}
      />
      <Button title="Create User" onPress={createUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userRow: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

export default UserTable;



// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootList } from '../App';

// interface User {
//   firstName: string;
//   lastName: string;
//   age: string;
//   gender: string;
//   email: string;
//   contact: string;
// }

// const UserTable = () => {
//   const [userData, setUserData] = useState([]);
//   const {navigation} = useNavigation<NativeStackScreenProps<RootList>>();

//   useEffect(() => {
//     loadUserData();
//   }, []);

//   const loadUserData = async () => {
//     try {
//       const userDataFromStorage = await AsyncStorage.getItem('userData');
//       if (userDataFromStorage) {
//         setUserData(JSON.parse(userDataFromStorage));
//       }
//     } catch (error) {
//       console.error('Error loading user data:', error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await AsyncStorage.removeItem('token');
//       navigation.navigate('Login');
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   const editUser = (index:number) => {
//     navigation.navigate('CreateUser', { index });
//   };

//   const deleteUser = async (index:number) => {
//     try {
//       Alert.alert(
//         'Confirm Deletion',
//         'Are you sure you want to delete this user?',
//         [
//           {
//             text: 'Cancel',
//             style: 'cancel',
//           },
//           {
//             text: 'Delete',
//             onPress: async () => {
//               const updatedUserData = [...userData];
//               updatedUserData.splice(index, 1);

//               await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));
//               setUserData(updatedUserData);

//               Alert.alert('Success', 'User deleted successfully');
//             },
//           },
//         ],
//         { cancelable: false }
//       );
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const createUser = () => {
//     navigation.navigate('CreateUser');
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Logout" onPress={logout} />
//       <FlatList
//         data={userData}
//         keyExtractor={(user, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.userRow}>
//             <Text>{item.firstName:} {item.lastName}</Text>
//             <Text>Age: {item.age}</Text>
//             <Text>Gender: {item.gender}</Text>
//             <Text>Email: {item.email}</Text>
//             <Text>Contact: {item.contact}</Text>
//             { /* Edit and delete buttons only for authorized users */ }
//             <View style={styles.buttonContainer}>
//               <Button title="Edit" onPress={() => editUser(index)} />
//               <Button title="Delete" onPress={() => deleteUser(index)} />
//             </View>
//           </View>
//         )}
//       />
//       <Button title="Create User" onPress={createUser} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   userRow: {
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//   },
// });

// export default UserTable;
