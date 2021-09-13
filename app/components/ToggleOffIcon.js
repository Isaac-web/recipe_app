import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {FontAwesome} from "@expo/vector-icons";
import { colors } from '../../config';

export default function ToggleOffIcon() {
    return <FontAwesome name="list-ul" size={20} color={colors.black}/>
}

const styles = StyleSheet.create({})
