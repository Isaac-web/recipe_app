import React from 'react'
import { StyleSheet, TouchableOpacity,  View } from 'react-native'

import {colors} from '../../config';


import AppText from './AppText'

export default function Button({ color=colors.primary,  onPress, style, textColor="white", title="Button",  textStyle}) {
    return (
        <View style={{width: "100%"}}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.container, {backgroundColor: color}, style]}>
                    <AppText style={[styles.buttonText, {color: textColor}, textStyle]}>{title}</AppText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonText:  {
        color: "white", 
        textTransform: "uppercase", 
        fontWeight: "bold", 
        fontSize: 15

    },
    container: {
        width: "100%",
        height: 48, 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 25,
    }
})
