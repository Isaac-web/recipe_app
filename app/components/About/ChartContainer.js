import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppText from '../AppText';
import FoodNutrientChart from '../FoodNutrientChart';

export default function ChartContainer({chartData}) {
    return (
        <View style={styles.chartContainer}>
            <AppText style={[styles.ingredients, {marginLeft: 8}]}>Breakdown</AppText>
            <FoodNutrientChart data={chartData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    chartContainer: {
        marginVertical: 30
    },
    container: {
        paddingHorizontal: 0, 
    },
    ingredients: {
        fontWeight: "bold", 
        fontSize: 18, 
        marginVertical: 10,
    },
})
