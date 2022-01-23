import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {DATA} from "../data";
import {Post} from "../components/Post";


export const MainScreen = ({navigation}) => {

    const goPost = () => {
        navigation.navigate('Post')
    }

    const renderItem = ({item}) => (
        <Post item={item}/>
    );

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})