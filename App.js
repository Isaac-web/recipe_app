import React from 'react'
import { StyleSheet } from 'react-native'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import {NavigationContainer} from '@react-navigation/native';
import { colors } from './config';

import navigationTheme from './app/navigation/DefaultTheme';
import Tabs from './app/navigation/Tabs';


``
const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary
  }
}



export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <PaperProvider theme={theme}>
        <Tabs/>
      </PaperProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})