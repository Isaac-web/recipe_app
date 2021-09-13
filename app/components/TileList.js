import React from 'react'
import {FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Tile from './Tile';

export default function TileList({data}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item?.toString()}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.tileContainer}>
                    <Tile 
                            title={item.title}
                            subTitle={item.subTitle}
                            imageUri={item.imageUri}
                            onPress={() => navigation.navigate("FeedDetail", {id: item.id})}
                    />
                </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    tileContainer: {
        width: "50%",
        padding: 10,
    }
})
