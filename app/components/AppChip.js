import React from 'react'
import { StyleSheet } from 'react-native'
import {Chip} from 'react-native-paper';
import { colors } from '../../config';
import AppText from './AppText';

export default function AppChip({title, onPress, style}) {
    return (
       <Chip style={[styles.chip, style]} onPress={onPress}>
           <AppText style={styles.title}>{title}</AppText>
       </Chip>
    )
}

const styles = StyleSheet.create({
    chip: {
        backgroundColor: colors.light, 
        maxWidth: 100, 
        justifyContent: "center", 
        alignItems: "center",
        padding: 3,
        margin: 5, 
        marginLeft: 0,
        borderRadius: 20
    },
    title: {
        color: colors.dark
    }
})
