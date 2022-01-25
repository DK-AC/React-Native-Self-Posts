import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {DATA} from "../data";
import {Post} from "../components/Post";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {platformAndroidWhiteColor} from "../navigation/configNavigation";


export const MainScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Мой блог',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="camera"
                          iconName="camera"
                          color={platformAndroidWhiteColor}
                          onPress={() => console.log('photo-camera')}
                    />
                </HeaderButtons>
            ),
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="toggle bar"
                          iconName="bars"
                          color={platformAndroidWhiteColor}
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
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding:10
    }
})