import React, { useState } from "react";
import {StyleSheet, Text, View,Image, TouchableOpacity} from "react-native";
import DocumentScanner from 'react-native-document-scanner-plugin'


const Scanner =()=>{
    const [scannedImage, setScannedImage] = useState<string>();

    const scanDocument = async () => {
      const { scannedImages } = await DocumentScanner.scanDocument({
        croppedImageQuality:100,
      })
    
      if (scannedImages!=null && scannedImages.length > 0) {
        setScannedImage(scannedImages[0])
      }
    }
    return (
        <View style={styles.container}>
            {scannedImage!=null &&(
                <Image resizeMode="contain"
                style={styles.image}
                source={{uri:scannedImage?.toString()}}
                />
            )}
            <TouchableOpacity style={styles.button} onPress={scanDocument}>
                {/* <Text>Scan Document</Text> */}
                </TouchableOpacity>
        </View>
    )
}

export default Scanner;

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    button:{
        position:"absolute",
        bottom:30,
        alignSelf:"center",
        backgroundColor:"red",
        borderRadius:30,
        width:60,
        height:60,
    },
    image:{
        width:"100%",
        height:"70%"
    },
})




