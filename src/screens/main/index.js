import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import FirebaseApp from '../../../api/firebase';

export default function MainScreen(props){
    const [username, setUsername] = useState(null)
    return(
    <View style= {styles.container}>
        <TextInput 
            style = {styles.input}
            placeholder = {'Enter your name here'}
            onChangeText={(t) => setUsername(t)}
        />
        <Button
            title='Save'
            onPress={() => props.navigation.navigate('Chat Screen', {username})}
        ></Button>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    input:{
        borderWidth: 1,
        height: 40,
        width: '90%',
        padding: 10,
        margin: 12
    }
})
