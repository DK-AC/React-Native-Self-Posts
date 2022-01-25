import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Post} from "./Post";


export const PostList = ({data, goToPost}) => {

    const renderItem = ({item}) => (
        <Post item={item} goToPost={goToPost}/>
    );


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
    }
})