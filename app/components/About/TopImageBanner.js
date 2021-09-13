import React from 'react'
import { StyleSheet, Image, View } from 'react-native';

import AppText from '../AppText';
import AppChip from '../AppChip';
import AppLikeAction from '../AppLikeAction';
import { colors } from '../../../config';


export default function TopImageBanner({title, imageUri, category}) {
    return (
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <Image style={styles.image} source={imageUri}/>
            <View style={styles.actionsContainer}>
                <AppChip title={category}/>
                <AppLikeAction/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between",
        padding: 3,
        paddingHorizontal: 8
    },
    title: {
        marginHorizontal: 8,
        fontSize: 30, 
        fontWeight: "bold",
    },
    image: {
        height: 380,
        width: "100%",
        backgroundColor: colors.light
    },  
})
