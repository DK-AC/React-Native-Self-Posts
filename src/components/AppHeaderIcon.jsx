import React from "react";
import {FontAwesome} from '@expo/vector-icons';
import {HeaderButton,} from 'react-navigation-header-buttons';
import {THEME} from "../THEME";
import {Platform, StyleSheet} from 'react-native'


export const AppHeaderIcon = (props) => {
    return (
        <HeaderButton style={styles.headerButton}
                      IconComponent={FontAwesome}
                      iconSize={23}
                      color={Platform.OS === 'ios' ? THEME.MAIN_COLOR : THEME.WHITE_COLOR}
                      {...props}
        />
    )
}


const styles = StyleSheet.create({
    headerButton: {
        marginHorizontal: 10,
    }
})