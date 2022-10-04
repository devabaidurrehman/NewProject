import React, { useState, useEffect, useRef } from 'react';
import {View, StyleSheet, Dimensions,Text } from 'react-native';

export default function Splash(props){

    setTimeout(()=>{
        props.navigation.navigate('Main Screen')
    },3000)
    return(
        <View>
            <Text>This is Splash Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})