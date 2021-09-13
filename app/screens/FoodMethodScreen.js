import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TopBanner from '../components/Method/TopBanner';
import StepCard from '../components/Method/StepCard';

export default function FoodMethodScreen() {
    return (
        <ScrollView>
            <TopBanner/>
            <View style={styles.container}>
                <Text style={styles.preparation}>Preparation</Text>
                <StepCard/>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 15,
    },
    preparation: {
        fontWeight: "bold", 
        fontSize: 19, 
        marginVertical: 10,
    }
})
