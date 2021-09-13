import {DefaultTheme} from 'react-native-paper'
import colors from './colors'


export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primray: colors.primary
    }
}