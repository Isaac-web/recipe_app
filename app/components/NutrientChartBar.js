import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-paper'
import AppText from './AppText'
import NutrientQuantityBar from './NutrientQuantityBar'

export default function NutrientChartBar({label, level, barColor}) {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <AppText style={styles.label}>{label}</AppText>
            </View>
            
            <View style={styles.barContainer}>
                <NutrientQuantityBar level={level} color={barColor}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    barContainer: {
        width: "70%",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 5
    },
    label: {
        fontWeight: "900",
        fontSize: 15
    },
    labelContainer: {
        width: "30%",
        alignItems: "flex-start",
        paddingRight: 5
    }
})
