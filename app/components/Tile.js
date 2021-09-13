import React from 'react'
import { Image, StyleSheet, TouchableOpacity,View } from 'react-native';
import { colors } from '../../config';
import AppText from './AppText';

export default function Tile({imageUri, title, subTitle, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Image style={styles.image} resizeMode="cover" source={imageUri}/>
                <View style={styles.textContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 15, 
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 150,
        backgroundColor: colors.light,
    },
    textContainer:{
        paddingHorizontal: 2,
        paddingVertical: 5
    },  
    title: {
        fontWeight: "bold",
        fontSize: 17, 
    },
    subTitle: {
        color: colors.primary
    }
    
})
