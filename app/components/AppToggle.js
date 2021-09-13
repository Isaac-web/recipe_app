import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';


export default function AppToggle({value, onToggle, activeIcon, offIcon}) {
    return (
        <TouchableWithoutFeedback onPress={onToggle}>
            <View>
                {value && activeIcon}
                {!value && offIcon}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({})
