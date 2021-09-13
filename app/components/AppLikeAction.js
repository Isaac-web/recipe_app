import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import {AntDesign} from "@expo/vector-icons"
import { colors } from '../../config';
import AppText from './AppText';

export default function AppLikeAction({onLike, numberOfLikes}) {
    return <TouchableWithoutFeedback onPress={onLike}>
        <View style={styles.container}>
        {/* <AppText style={styles.numberOfLikes}>{!numberOfLikes ? "No likes yet" : numberOfLikes}</AppText> */}
        <AntDesign size={20} color={colors.primary} name="hearto"/>
        </View>
    </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center"
    },  
    numberOfLikes: {
        color: colors.dark, 
        marginHorizontal: 4
    }
})
