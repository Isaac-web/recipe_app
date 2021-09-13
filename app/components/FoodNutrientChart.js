import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import NutrientChartBar from './NutrientChartBar'


export default function FoodNutrientChart({data}) {
    return <View>
        <FlatList
            data={data}
            keyExtractor={item => `${item?.level}_${item?.label}`}
            renderItem={({item}) => 
                <View style={styles.container}>
                    <NutrientChartBar 
                        label={item.label} 
                        level={item.level} 
                        barColor={item.color}
                    />
                </View>
            }
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        paddingHorizontal: 8
        
    },
    labelContainer: {
        alignItems: "flex-end",
        paddingRight: 5,
        backgroundColor: "red",
        width: "30%"
    },
    barContainer: {
        backgroundColor: "green",
        width: "70%"
    }
})



