import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../../config'
import AppText from './AppText'

export default function MenuCard({imageUri, title, subTitle, cardStyle}) {
    return (
        <View style={[styles.container, cardStyle]}>
            <Image source={imageUri} style={styles.image}/>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText>{subTitle}</AppText>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1, 
        borderColor: colors.light, 
        height: 180,
        width: 120, 
        justifyContent: "center",
        alignItems: "center", 
        borderRadius: 10
    },
    image: {
        width: 80, 
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.light,
        marginBottom: 10,
    }, 
    title: {
        fontWeight: "700",
        fontSize: 15
    },
    subTitle: {
        color: colors.medium
    }
})
