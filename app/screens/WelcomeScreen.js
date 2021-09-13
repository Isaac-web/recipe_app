import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../../config'
import AppText from '../components/AppText'


import Button from '../components/Button'

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <AppText>Cooking made simple</AppText>
            </View>
            <Button  style={styles.loginButton} title="Login"/>
            <Button color={colors.secondary} style={styles.signUpButton} title="Sign Up"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        paddingHorizontal: 10, 
        alignItems: "center",
        justifyContent: "flex-end", 
        paddingBottom: 40
    },
    loginButton: {
        marginVertical: 10
    },
    logo: {
        height: 100, 
        width: 100
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 80
    },
    signUpButton: {
        marginVertical: 10
    }
})
