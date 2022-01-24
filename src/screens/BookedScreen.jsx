import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";


export const BookedScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Избранное',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="toggle bar"
                          iconName="bars"
                          onPress={() => console.log('toggle bar')}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    const goToPost = (item) => {
        navigation.navigate('Post', {item})
    }

    const renderItem = ({item}) => (
        <Post item={item} goToPost={goToPost}/>
    );


    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA.filter(post => post.booked !== false)}
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