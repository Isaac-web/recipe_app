import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config'

export default function NutrientQuantityBar({level=0, color="lightgreen"}) {
    return (
        <View style={styles.container}>
            <View style={[styles.bar, {width: `${level * 100}%`, backgroundColor: color}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        borderRadius: 8, 
        height: 8
    },
    container: {
        height: 8,
        width: "100%",
        backgroundColor: colors.light, 
        borderRadius: 4,
        overflow: "hidden"
    }
})
