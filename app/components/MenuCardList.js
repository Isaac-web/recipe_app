import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import MenuCard from './MenuCard';
import ListItem from './ListItem';
import { Divider } from 'react-native-paper';





export default function MenuCardList({data, vertical=true}) {
    return (
        <View>

            <FlatList
                    data={data}
                    horizontal={!vertical}
                    ItemSeparatorComponent={() => <Divider style={styles.divider}/>}
                    keyExtractor={item => item.id?.toString()}
                    renderItem={({item}) => 
                    (vertical ? 
                        <ListItem 
                        title={item.title}
                        showImage
                        subTitle={item.subTitle}
                        image={item.imageUri}
                        /> :
                        <MenuCard    
                            cardStyle={styles.cardStyle}
                            imageUri={item?.imageUri}
                            subTitle={item.subTitle}
                            title={item.title} 
                    />)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        marginHorizontal: 15
    },
    divider: {
        marginVertical: 6
    }
})
