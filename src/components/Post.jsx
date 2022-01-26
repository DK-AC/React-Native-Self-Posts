import React from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {THEME} from "../THEME";

export const Post = ({item, goToPost}) => {

    return (
        <View>
            <TouchableOpacity onPress={()=>goToPost(item)} activeOpacity={0.7}>
                <ImageBackground source={{uri: item.img}} style={styles.img}>
                    <View style={styles.textWrap}>
                        <Text style={styles.title}>
                            {new Date(item.date).toDateString()}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
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
        height: 200,
        marginBottom:10
    },
    textWrap: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        color: THEME.WHITE_COLOR,
    }
});