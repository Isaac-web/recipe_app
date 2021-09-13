import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack'

import FeedScreen from '../screens/FeedScreen';
import ListDetailTab from '../components/ListDetailTab';


const Stack = createStackNavigator();

export default  FeedStack = () =>  
    <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={FeedScreen} options={{title: "Home"}}/>
        <Stack.Screen name="FeedDetail" component={ListDetailTab}/>
    </Stack.Navigator>

const styles = StyleSheet.create({})
