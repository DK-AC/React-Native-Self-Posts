import React, {useCallback, useEffect} from "react";
import {Alert, Button, Image, ScrollView, StyleSheet, Text} from "react-native";
import {THEME} from "../THEME";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {platformAndroidWhiteColor} from "../navigation/configNavigation";
import {useDispatch, useSelector} from "react-redux";
import {changePostAC, deletePostAC} from "../store/actions/postActions";


export const PostScreen = ({navigation, route}) => {

    const dispatch = useDispatch()

    const postId = route.params.item.id
    const post = useSelector(state => state.post.allPosts.find(post => post.id === postId))
    const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))

    const changeBookedHandler = useCallback(() => {
        dispatch(changePostAC(post))
    }, [dispatch, postId])


    useEffect(() => {
        navigation.setParams(changeBookedHandler())
    }, [changeBookedHandler])

    useEffect(() => {
        navigation.setParams({booked})
    }, [booked])


    React.useLayoutEffect(() => {

        const date = new Date(route.params.item.date).toLocaleDateString()
        navigation.setOptions({

            title: 'Пост от ' + date,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="booked"
                          color={platformAndroidWhiteColor}
                          iconName={post.booked ? 'star' : 'star-o'}
                          onPress={changeBookedHandler}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    const removePostImgHandler = () => {
        Alert.alert(
            `Удалить`,
            `Вы действительно хотите удалить пост?`,
            [
                {
                    text: "Отмена",
                    style: "cancel"
                },
                {text: "OK", onPress: () => dispatch(deletePostAC(postId))}
            ]
        );
    }

    if (!post) {
        return null
    }

    return (
        <ScrollView>
            <Image style={styles.img} source={{uri: post.img}}/>
            <Text style={styles.textCenter}>{post.text}</Text>
            <Button color={THEME.RED_COLOR} title={'Delete'} onPress={removePostImgHandler}/>
        </ScrollView>

    )
}

PostScreen.screenOptions = ({route}) => {
    return {
        headerTitle: 'Пост от ' + new Date(route.params.item.date).toLocaleDateString()
    }
}

const styles = StyleSheet.create({

    center: {
        flex: 1,
        justifyContent: "center",
        margin: 10
    },
    img: {
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    textCenter: {
        fontFamily: 'open-regular',
        textAlign: "center",
    },

})