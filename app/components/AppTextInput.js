import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'


import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function AppTextInput({icon, multiline,  width="100%", style, ...rest}) {
    return (
        <View style={[styles.container, {width}, style]}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color="grey"/>}
            <TextInput   multiline={multiline} style={[styles.textInput]} {...rest}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 9,
        paddingLeft: 10,
        borderRadius: 25,
        width: "100%", 
        flexDirection: "row", 
        alignItems: "center",
        maxHeight: 100, 
        
    }, 
    icon: {
        paddingRight: 8
    }, 
    textInput: {
        flex: 1,
        
    }
});


// autoCapitalize="none"
// autoCompleteType="off"
// textContentType=""
// clearButtonMode="always"
// keyboardType="email-address"
