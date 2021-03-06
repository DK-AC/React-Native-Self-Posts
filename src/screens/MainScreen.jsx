import React, {useEffect} from "react";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {platformAndroidWhiteColor} from "../navigation/configNavigation";
import {PostList} from "../components/PostList";
import {useDispatch, useSelector} from "react-redux";
import {loadPostsAC} from "../store/actions/postActions";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {THEME} from "../THEME";


export const MainScreen = ({navigation}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPostsAC())
    }, [dispatch])

    const posts = useSelector(state => state.post.allPosts)
    const loading = useSelector(state => state.post.loading)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Мой блог',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="camera"
                          iconName="camera"
                          color={platformAndroidWhiteColor}
                          onPress={() => navigation.navigate('Create Screen Drawer')}
                    />
                </HeaderButtons>
            ),
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="toggle bar"
                          iconName="bars"
                          color={platformAndroidWhiteColor}
                          onPress={() => navigation.toggleDrawer()}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    const goToPostHandler = (item) => {
        navigation.navigate('Post', {item})
    }

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={THEME.MAIN_COLOR}/>
            </View>
        )
    }


    return <PostList data={posts} goToPost={goToPostHandler}/>
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})