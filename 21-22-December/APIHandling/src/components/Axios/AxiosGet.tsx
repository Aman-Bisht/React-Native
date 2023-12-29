import axios from "axios";
import React, { useEffect, useState } from "react";
import {View,Text, StyleSheet, ToastAndroid, FlatList, Dimensions} from "react-native";
const{width,height} = Dimensions.get("screen")
type DataType = {
    id:number,
    name:string,
    website:string,
}
const AxiosGet = ()=>{
    const [data,setData] = useState<DataType[]>();
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setData(res.data))
        .catch(error=>ToastAndroid.show(error.message,ToastAndroid.LONG))
    },[])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Getting data with the help of axios</Text>
            <View style={styles.headContainer}>
                <Text style={styles.id}>User Id</Text>
                <Text style={styles.name}>User Name</Text>
                <Text style={styles.website}>User Website</Text>
            </View>
            <View>
                <FlatList 
                data={data}
                keyExtractor={item=>item.id+""}
                renderItem={({item})=>(
                    <View style={styles.dataContainer}>
                        <Text style={styles.dataid}>{item.id}</Text>
                        <Text style={styles.dataname}>{item.name}</Text>
                        <Text style={styles.datawebsite}>{item.website}</Text>
                    </View>
                )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:width,
        margin:10,
    },
    title:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"800",
    },
    headContainer:{
        flexDirection:"row",
        justifyContent:"center",
        padding:10,
    },
    dataContainer:{
        flexDirection:"row",
        justifyContent:"center"
    },
    id:{
        width:100,
        textAlign:"center",
        fontSize:15,
        fontWeight:"bold",

    },
    name:{
        width:200,
        textAlign:"center",
        fontSize:15,
        fontWeight:"bold",
        paddingRight:40,
    },
    website:{
        width:150,
        textAlign:'center',
        fontSize:15,
        fontWeight:"bold",
        paddingRight:40,
    },
    dataid:{
        width:80,
        marginLeft:5,
        paddingLeft:30,
        paddingTop:10,
        fontWeight:"bold"
    },
    dataname:{
        width:180,
        padding:10,
        fontWeight:"bold",
    },
    datawebsite:{
        width:150,
        paddingTop:10,
        fontWeight:"bold"
    },

})
export default AxiosGet;