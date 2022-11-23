import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import React from 'react'
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import Payment from '../pages/Payment';
import Notes from '../pages/Notes'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />
            
            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}

            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}

            />

        

            <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Notes"
            component={Notes}
            options={{ headerShown: false }}
            />

            
        </Stack.Navigator>  
    
    )
};