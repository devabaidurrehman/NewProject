import React, { useState, useEffect, useRef } from 'react';
import {View, StyleSheet, Dimensions,Text, TextInput, Button } from 'react-native';

export default function Main(props){
    const [msg, setMsg] = useState()
    const {username}= props.route.params
   alert(username)
   
    return(
        <View style={styles.container}>
            <Text>This is main screen</Text>
            <TextInput placeholder='Please enter your name' onChangeText={(t)=>setMsg(t)}/>
            <Button title='Send'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})