import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Main from '../screens/main';
import ChatScreen from '../screens/chat'




const Stack = createNativeStackNavigator();

export default function Navigate(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash Screen" component={Splash} />
          <Stack.Screen name="Main Screen" component={Main} />
          <Stack.Screen name="Chat Screen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}