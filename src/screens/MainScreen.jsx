import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";


export const MainScreen = ({navigation}) => {

    const goPost = () => {
        navigation.navigate('Post')
    }

    return (
        <View style={styles.center}>
            <Text>Main Screen</Text>
            <Button onPress={goPost} title={'Go to post'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})