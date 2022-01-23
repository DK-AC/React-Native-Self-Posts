import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";


export const PostScreen = ({navigation, route}) => {
    const date = new Date(route.params.item.date).toLocaleDateString()

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Пост от ' + date
        });
    }, [navigation]);

    return (
        <View style={styles.center}>
            <Text>{route.params.item.id}</Text>
            <Button title={'Go back'} onPress={() => navigation.goBack()}/>

        </View>
    )
}
PostScreen.screenOptions = ({route}) => {
    console.log(route)
    return {
        headerTitle: 'Пост от ' + new Date(route.params.item.date).toLocaleDateString()
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})