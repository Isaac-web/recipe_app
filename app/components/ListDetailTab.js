import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native';
import {Tabs, TabScreen} from 'react-native-paper-tabs';

import Screen from '../screens/Screen';
import ListDetailScreen from '../screens/ListDetailScreen';
import FoodMethodScreen from '../screens/FoodMethodScreen';


export default function ListDetailTab({route}) {
    const [value, setValue] = useState(0);

    return (
       <>
          <Tabs
            style={{backgroundColor: "white", color: "red"}}
          >
              <TabScreen label="About">
                    <ListDetailScreen
                         listId={route?.params.id}
                         title="One-pan Honey Garlic Chicken"
                         subTitle="Sub title"
                         category={"Continental"}
                        
                    />
              </TabScreen>
              <TabScreen label="Method">
                <FoodMethodScreen/>
              </TabScreen>
          </Tabs>
       </>
    )
}

const styles = StyleSheet.create({})
