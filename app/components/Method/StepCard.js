import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config'
import AppText from '../AppText'

export default function StepCard() {
    return (
        <View style={styles.container}>
            <View style={styles.stepCount}>
                <AppText style={styles.stepCountText}> 1 </AppText>
            </View>
            <AppText style={styles.text}>
                This is a card. It shows a step on how to prepare the selected recipe.
                This is a card. It shows a step on how to prepare the selected recipe.
                This is a card. It shows a step on how to prepare the selected recipe.
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        height: "auto",
        backgroundColor: colors.light,
        borderRadius: 5,
        flexDirection: "row", 
        alignItems: "flex-start"
    },
    stepCount: {
        backgroundColor: colors.primary,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        margin: 8,
        marginLeft: 0
    },
    stepCountText: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
        
    },
    text: {
        color: colors.dark,
        fontSize: 17,
        width: "90%"
    }
})
