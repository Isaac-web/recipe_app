import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ListItem from '../components/ListItem'

export default function ProcedureList({data}) {
       return (
        <View>
            <FlatList 
            data={data}
            keyExtractor={item => item?.toString()}
            renderItem={({item}) => 
                <View>
                    <ListItem title={item}/>
                </View>
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({})
