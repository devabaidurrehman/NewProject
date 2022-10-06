import { useEffect, useState } from 'react'
import {View, Text, StyleSheet, TextInput, Button, FlatList} from 'react-native'
import { sendMsg } from '../../services/index'
import { collection, query } from "firebase/firestore";
import { FIREBASE_DB_COLLECTION } from '../../../res/strings'


export default function ChatScreen(props){
    const {username} = props.route.params
    const [msg, setMsg] = useState(null)


    const DATA = [
        {
          username: 'Abaid',
          msg: 'Hello there',
        },
        {
          username: 'Saqib',
          msg: 'Khach',
        },
        {
          username: 'Ahamd',
          msg: 'Love',
        },
      ];
      const renderItem = ({ item }) => (
        
            item.username == username ?
            <View style={{
                backgroundColor : "green",
                margin:2,
                padding: 10,
                width: '50%',
                borderRadius: 10,
                alignSelf: 'flex-end'
            }}>

            <Text style={{fontSize:12, fontWeight: 'bold'}}>{'You'}</Text>
            <Text style={{fontSize:12}}>{item.msg}</Text>

            </View>
            :
            <View style={{
                backgroundColor : '#d3d3d3',
                margin:2,
                padding: 10,
                width: '50%',
                borderRadius: 10,
            }}>

            <Text style={{fontSize:12, fontWeight: 'bold'}}>{item.username}</Text>
            <Text style={{fontSize:12}}>{item.msg}</Text>

            </View>
        
      );
      const onsendPressed = async () => {
        if(msg !== ''){
            let payload = {username, msg}
            let res = await sendMsg(payload)
            if(res)
                setMsg('')
        }else{
            alert('Kindly enter your message')
        }
      }
    return(
        <View style = {styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.username}
            />
            
            <View style = {{flexDirection: 'row', justifyContent:'center'}}>
                <TextInput 
                    style = {styles.input}
                    placeholder = {'Message'}
                    onChangeText={(t) => setMsg(t)}
                />
                <Button 
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0
                    }}
                   title="Send"
                    onPress={()=>onsendPressed()}
                />
                
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        margin: 10
    },
    input:{
        borderWidth: 1,
        width: '100%',
        padding: 10,
        borderRadius: 10
        
    }
})
