import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'John Hokins',
      status: 'Just an extra ordinary teacher',
      imageUrl:
        'https://st.depositphotos.com/1518767/4298/i/450/depositphotos_42984257-stock-photo-javascript-against-futuristic-black-and.jpg',
    },
    {
      uid: 2,
      name: 'Denis Richie',
      status: 'I ❤️ To Code and Teach!',
      imageUrl:
        'https://st.depositphotos.com/1518767/4298/i/450/depositphotos_42984257-stock-photo-javascript-against-futuristic-black-and.jpg',
    },
    {
      uid: 3,
      name: 'Balbir Singh',
      status: 'Making your GPay smooth',
      imageUrl:
        'https://st.depositphotos.com/1518767/4298/i/450/depositphotos_42984257-stock-photo-javascript-against-futuristic-black-and.jpg',
    },
    {
      uid: 4,
      name: 'Singh',
      status: 'Building secure Digital banks',
      imageUrl:
        'https://st.depositphotos.com/1518767/4298/i/450/depositphotos_42984257-stock-photo-javascript-against-futuristic-black-and.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#EAF0F1',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3335',
  },
  userStatus: {
    fontSize: 12,
    color: 'black',
  },
});
