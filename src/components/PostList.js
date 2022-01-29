import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {Post} from "./Post";


export const PostList = ({data, goToPost}) => {

    const renderItem = ({item}) => (
        <Post item={item} goToPost={goToPost}/>
    );

    if (!data.length) {
        return (
            <View>
                <Text style={styles.noItem}>Постов пока нет</Text>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    noItem: {
        fontSize: 18,
        fontFamily: 'open-regular',
        marginVertical: 10,
        textAlign: "center"

    }
})