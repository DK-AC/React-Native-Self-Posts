import React from "react";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {platformAndroidWhiteColor} from "../navigation/configNavigation";
import {PostList} from "../components/PostList";
import {DATA} from "../data";


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

    const goToPostHandler = (item) => {
        navigation.navigate('Post', {item})
    }


    return <PostList data={DATA} goToPost={goToPostHandler}/>
}
