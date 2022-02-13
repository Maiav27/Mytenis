import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//
import Home from './pages/Home'
import Detail from './pages/Detail'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const Stack =   createNativeStackNavigator();

const Routes= () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown : false}}/>
                <Stack.Screen name='Detail' component={Detail} options={{headerRight : () => (    
                    <TouchableOpacity style={{marginRight : 15}}>
                        <Feather  name='shopping-cart' size={24} color='black'/>
                    </TouchableOpacity>
                )}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}


export default Routes
