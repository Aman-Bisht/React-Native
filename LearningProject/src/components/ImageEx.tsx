import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
// import Image1 from "../../assest/image.jpg"
const { width, height } = Dimensions.get('window');

const ImageEx = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assest/image.jpg')}
        // source={Image1}
        blurRadius={3} 
      >
        <Text style={styles.heading}>Image Example</Text>
        <Image
          style={styles.images}
          source={{ uri: "https://images.pexels.com/photos/19227786/pexels-photo-19227786/free-photo-of-pedestrian.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
        />
      </ImageBackground>
    </View>
  );
};

export default ImageEx;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    padding: 10,
    margin: 10,
    color: 'white',
  },
  imageBackground: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 300,
    height: 300,
    margin: 10,
  },
});
