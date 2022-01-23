import React from "react";
import {ImageBackground, StyleSheet, Text, View} from 'react-native'
import {Theme} from "../theme";

export const Post = ({item}) => {

    return (
        <View>
            <ImageBackground source={{uri: item.img}} style={styles.img}>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>
                        {new Date(item.date).toLocaleDateString()}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        overflow: "hidden",
    },
    img: {
        width: '100%',
        height: 200
    },
    textWrap: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: Theme.White_Color
    }
});