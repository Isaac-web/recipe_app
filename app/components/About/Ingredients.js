import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'

import AppText from '../AppText';
import AppToggle from '../AppToggle';
import ToggleOnIcon from '../ToggleOnIcon';
import ToggleOffIcon from '../ToggleOffIcon';
import MenuCardList from '../MenuCardList';

export default function Ingredients({ingredientsList}) {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(prev => !prev);

    return (
        <View>
             <View style={[styles.ingredientsHeader, {marginTop: 20}]}>
                    <AppText style={styles.ingredients}>Ingredients</AppText>
                    <AppToggle value={toggle} onToggle={handleToggle} activeIcon={<ToggleOnIcon/>} offIcon={<ToggleOffIcon/>}/>
            </View>
            <MenuCardList data={ingredientsList} vertical={toggle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    ingredients: {
        fontWeight: "bold", 
        fontSize: 18, 
        marginVertical: 10,
    }, 
    ingredientsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 8
    },
})
