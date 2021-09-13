import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { colors } from '../../config'
import AppText from './AppText'

export default function ListItem({title, iconComponent, showImage, subTitle, image, gutterBottom}) {
    return (
        <View style={[styles.container, {marginBottom: gutterBottom && 10}]}>
            {iconComponent}
            {image || showImage && <Image style={styles.image} source={image}/>}
            
            <View style={styles.textContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 60, 
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.light
    },
    textContainer: {
        marginLeft: 12
    },
    title: {
        color: colors.black,
        fontWeight: "900",
        fontSize: 15
    }, 
    subtitle: {
        color: colors.dark
    }
})
