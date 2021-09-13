import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppText from '../AppText'
import { colors } from '../../../config'


export default function TopBanner() {
    return (
        <View style={styles.container}>
                <MaterialCommunityIcons size={50} name="clock-outline" color={colors.white}/>
               <View>
                    <AppText style={styles.title}>Could be ready in</AppText>
                    <AppText style={styles.subtitle}>2 Minutes</AppText>
               </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: 80,
        padding: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        color: colors.white,
        fontSize: 22,        
    },
    subtitle: {
        color: colors.white,
        fontSize: 18,        
    }
})
