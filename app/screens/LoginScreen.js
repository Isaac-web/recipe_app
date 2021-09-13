import React from 'react'
import { Image, StyleSheet, View } from 'react-native'


import Screen from './Screen'
import Button from '../components/Button'
import AppTextInput from '../components/AppTextInput'

export default function LoginScreen() {
    return (
        <Screen>
            <View style={styles.container}>
                <Image source={require("../assets/logo-red.png")} style={styles.logo}/>
                <AppTextInput
                 style={styles.textInput} 
                 icon="email" 
                 placeholder="Email"
                 autoCapitalize="none"
                 autoCompleteType="off"
                 keyboardType="email-address"
                 clearButtonMode="always"/>

                <AppTextInput
                 style={styles.textInput} 
                 icon="lock" 
                 placeholder="Password"
                 autoCapitalize="none"
                 autoCompleteType="off"
                 textContentType="password"
                 secureTextEntry
                 clearButtonMode="always"/>

                <Button style={styles.loginButton} title="Login"/>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10, 
        paddingTop: 50,
        alignItems: "center"
    },
    textInput: {
        marginVertical: 10
    },
    loginButton: {
        marginTop: 10
    },
    logo: {
        width: 100, 
        height: 100, 
        marginBottom: 30
    }
})
