import React from "react";
import {FontAwesome} from '@expo/vector-icons';
import {HeaderButton,} from 'react-navigation-header-buttons';
import {Theme} from "../theme";
import {Platform, StyleSheet} from 'react-native'


export const AppHeaderIcon = (props) => {
    return (
        <HeaderButton style={styles.headerButton}
                      IconComponent={FontAwesome}
                      iconSize={23}
                      color={Platform.OS === 'ios' ? Theme.Main_Color : Theme.White_Color}
                      {...props}
        />
    )
}


const styles = StyleSheet.create({
    headerButton: {
        marginHorizontal: 10,
    }
})