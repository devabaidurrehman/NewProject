import React, { useState, useEffect, useRef } from 'react';
import {View, StyleSheet, Dimensions,Text, TextInput, Button } from 'react-native';

export default function Main(props){
    const [username, setUsername] = useState(null)
    const saveBtn = () =>{
        props.navigation.navigate('Chat Screen', {username})
    }
    return(
        <View style={styles.container}>
            <Text>This is main screen</Text>
            <TextInput placeholder='Please enter your name' onChangeText={(t)=>setUsername(t)}/>
            <Button title='Save' onPress={()=>saveBtn()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})