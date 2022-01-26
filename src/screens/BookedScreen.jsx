import React from "react";
import {StyleSheet} from "react-native";
import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";
import {platformAndroidWhiteColor} from "../navigation/configNavigation";


export const BookedScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Избранное',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="toggle bar"
                          iconName="bars"
                          onPress={() => navigation.toggleDrawer()}
                          color={platformAndroidWhiteColor}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    const goToPostHandler = (item) => {
        navigation.navigate('Post', {item})
    }

    return <PostList data={DATA.filter(post => post.booked)} goToPost={goToPostHandler}/>

}
