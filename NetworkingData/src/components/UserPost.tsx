import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
// import Post from './components/Post';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function UserPost(): React.JSX.Element {
  const [postList, setPostList] = useState<Post[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      );
      const data = await response.json();
      setPostList(data);
      setLoading(false);
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      setError('Failed to fetch post list.');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
          }),
        },
      );
      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      
      setPostTitle('');
      setPostBody('');
      setError('');
    } catch (error) {
      console.log('Error adding new post:', error);
      setError('Failed to add new post.');
    }
    setIsPosting(false);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Post Body"
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button
              title={isPosting ? 'Adding...' : 'Add Post'}
              onPress={addPost}
              disabled={isPosting}
            />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.text}>Posts</Text>
            <FlatList
              data={postList}
              renderItem={({item}: any) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.nameText}>{item.title}</Text>
                    <Text style={styles.typeText}>{item.body}</Text>
                  </View>
                );
              }}
              keyExtractor={item => item.id.toString()}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 30,
  },
  typeText: {
    fontSize: 24,
    color: '#666666',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: '#FFC0CB',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center',
  },
  errorText: {
    color: '#D8000C',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UserPost;
