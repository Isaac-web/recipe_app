import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../config';
import AppTextInput from '../components/AppTextInput';



import Button from '../components/Button';
import Screen from './Screen';



export default function RegisterScreen() {
    return (
       <Screen>
           <View style={styles.container}>
                <AppTextInput
                    icon="account"
                    placeholder="Name"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    keyboardType="email-address"
                    clearButtonMode="always"
                    style={styles.textInput}
                />
                <AppTextInput
                    icon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    keyboardType="email-address"
                    clearButtonMode="always"
                    style={styles.textInput}
                />
                <AppTextInput
                    icon="lock"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    keyboardType="email-address"
                    textContentType="password"
                    secureTextEntry
                    clearButtonMode="always"
                    style={styles.textInput}
                />
                <AppTextInput
                    icon="lock"
                    placeholder="Confirm Password"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    keyboardType="email-address"
                    textContentType="password"
                    secureTextEntry
                    clearButtonMode="always"
                    style={styles.textInput}
                />

                <Button color={colors.primary} style={styles.signupButton} title="Sign Up"/>
           </View>
       </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }, 
    signupButton: {
        marginVertical: 10
    },
    textInput: {
        marginVertical: 10
    }
})
