import {
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('screen');
import {firebase} from '@react-native-firebase/database';

type datatype = {
  Student_Id: string;
  Student_Name: string;
  Student_Course: string;
  Student_Branch: string;
};
const Insert = () => {
  const [sid, setSid] = useState<string>('');
  const [sname, setSname] = useState<string>('');
  const [scourse, setScourse] = useState<string>('');
  const [sbranch, setSbranch] = useState<string>('');
  const [dataInfo, setDataInfo] = useState<datatype[]>([]);

  const insertInfo = () => {
    if (
      sid.length > 0 &&
      sname.length > 0 &&
      sbranch.length > 0 &&
      scourse.length > 0
    ) {
      firebase
        .app()
        .database(
          'https://reactnativefirebase-7683f-default-rtdb.firebaseio.com/',
        )
        .ref(`/students/${sid}`)
        .set({
          Student_Id: sid,
          Student_Name: sname,
          Student_Course: scourse,
          Student_Branch: sbranch,
        })
        .then(() => {
          ToastAndroid.show('Successfully Added', ToastAndroid.LONG);
          console.log('Data set.');
        });
    } else {
      ToastAndroid.show('Please enter the information', ToastAndroid.LONG);
    }
    setSid('');
    setSname('');
    setScourse('');
    setSbranch('');
  };

  const displayInfo = () => {
    firebase
      .app()
      .database(
        'https://reactnativefirebase-7683f-default-rtdb.firebaseio.com/',
      )
      .ref(`/students`)
      //   .once('value')
      .on('value', data => {
        // console.log(data.val());
        setDataInfo(data.val());
      });
  };

  const updateInfo = () => {
    if (
      sid.length > 0 &&
      sname.length > 0 &&
      sbranch.length > 0 &&
      scourse.length > 0
    ) {
      firebase
        .app()
        .database(
          'https://reactnativefirebase-7683f-default-rtdb.firebaseio.com/',
        )
        .ref(`/students/${sid}`)
        .update({
          Student_Id: sid,
          Student_Name: sname,
          Student_Course: scourse,
          Student_Branch: sbranch,
        })
        .then(() => {
          ToastAndroid.show('Successfully Added', ToastAndroid.LONG);
          console.log('Data set.');
        });
    } else {
      ToastAndroid.show('Please enter the information', ToastAndroid.LONG);
    }
    setSid('');
    setSname('');
    setScourse('');
    setSbranch('');
  };

  const getStudent = () => {
    firebase
      .app()
      .database(
        'https://reactnativefirebase-7683f-default-rtdb.firebaseio.com/',
      )
      .ref(`/students/${sid}`)
      .once('value', data => {
        // console.log(data.val());
        setSname(data.val().Student_Name);
        setScourse(data.val().Student_Course);
        setSbranch(data.val().Student_Branch);
      });
  };

  const deleteInfo = () => {
    if (sid.length > 0) {
      firebase
        .app()
        .database(
          'https://reactnativefirebase-7683f-default-rtdb.firebaseio.com/',
        )
        .ref(`/students/${sid}`)
        .remove();
    } else {
      ToastAndroid.show('Please enter the id to Delete', ToastAndroid.LONG);
    }
    setSid('');
    setSname('');
    setScourse('');
    setSbranch('');
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Text style={styles.mainheading}>Realtime Database</Text>
        <View style={styles.textBox}>
          <TextInput
            onSubmitEditing={() => getStudent()}
            placeholder="Enter the studentId id"
            value={sid}
            placeholderTextColor="gray"
            onChangeText={newVal => setSid(newVal)}
            style={styles.textId}
          />
          <TextInput
            placeholder="Enter the student name"
            placeholderTextColor="gray"
            value={sname}
            onChangeText={newVal => setSname(newVal)}
            style={styles.textName}
          />
          <TextInput
            placeholder="Enter the student course"
            placeholderTextColor="gray"
            value={scourse}
            onChangeText={newVal => setScourse(newVal)}
            style={styles.course}
          />
          <TextInput
            placeholder="Enter the student branch"
            placeholderTextColor="gray"
            value={sbranch}
            onChangeText={newVal => setSbranch(newVal)}
            style={styles.branch}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={insertInfo} style={styles.btn}>
            <Text style={styles.btnText}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={displayInfo} style={styles.btn}>
            <Text style={styles.btnText}>Display</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={updateInfo} style={styles.btn}>
            <Text style={styles.btnText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteInfo} style={styles.btn}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
          {/* <Button title="Post" color="green" onPress={insertInfo} />
          <Button title="Display" color="green" onPress={displayInfo} /> */}
        </View>

        <View>
          <View style={styles.rowLine}>
            <Text style={styles.heading}>Id</Text>
            <Text style={styles.heading}>Name</Text>
            <Text style={styles.heading}>Course</Text>
            <Text style={styles.heading}>Branch</Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={dataInfo.filter(item => item !== null)}
            keyExtractor={item => item.Student_Id}
            renderItem={({item}) => (
              <View style={styles.rowLine}>
                <Text style={styles.headingText}>{item.Student_Id}</Text>
                <Text style={styles.headingText}>{item.Student_Name}</Text>
                <Text style={styles.headingText}>{item.Student_Course}</Text>
                <Text style={styles.headingText}>{item.Student_Branch}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Insert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    margin: 10,
  },
  mainheading: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    color: 'brown',
  },
  btnContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btn: {
    width: 80,
    // alignSelf: 'center',
    marginTop: 10,

    marginLeft: 10,
    backgroundColor: 'green',
    borderRadius:10,
  },
  btnText: {
    // flexDirection:"row",
    color: 'white',
    fontSize: 18,
    padding: 6,
    fontWeight: 'bold',
    textAlign: 'center',
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
    borderColor: 'black',
    fontWeight: '700',
    fontSize: 15,
    borderRadius: 10,
  },
  textName: {
    width: 300,
    borderWidth: 2,
    margin: 10,
    borderColor: 'black',
    fontWeight: '700',
    fontSize: 15,
    borderRadius: 10,
  },
  course: {
    width: 300,
    borderWidth: 2,
    margin: 10,
    borderColor: 'black',
    fontSize: 15,
    borderRadius: 10,

    fontWeight: '700',
  },
  branch: {
    width: 300,
    borderWidth: 2,
    margin: 10,
    borderColor: 'black',
    fontSize: 15,
    borderRadius: 10,

    fontWeight: '700',
  },
  rowLine: {
    flexDirection: 'row',
    margin: 10,
    // justifyContent:"center",
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 25,
    marginRight: 25,
  },
  headingText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 32,
    marginRight: 20,
  },
});
