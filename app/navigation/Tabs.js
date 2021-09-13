import React from 'react'
import { StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons'; 


import FeedStack from './FeedStack';
import SearchStack from './SearchStack';

const BottomTabs = createBottomTabNavigator();


export default function Tabs() {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="FeedStack" component={FeedStack} options={{title: "Feed", tabBarIcon:({size, color}) => <SimpleLineIcons name="feed" size={size - 8} color={color}/>}}/>
            <BottomTabs.Screen name="SearchStack" component={SearchStack} options={{title: "Discover", tabBarIcon:({size, color}) => <AntDesign name="search1" size={size - 4} color={color}/>}}/>
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({})
