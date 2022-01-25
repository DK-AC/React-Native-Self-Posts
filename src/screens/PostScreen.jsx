import React from "react";
import {Alert, Button, Image, ScrollView, StyleSheet, Text} from "react-native";
import {DATA} from "../data";
import {Theme} from "../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {platformAndroidWhiteColor} from "../navigation/configNavigation";


export const PostScreen = ({navigation, route}) => {
    const date = new Date(route.params.item.date).toLocaleDateString()
    const postId = route.params.item.id
    const post = DATA.find(i => i.id === postId)


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Пост от ' + date,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="booked"
                          color={platformAndroidWhiteColor}
                          iconName={post.booked ? 'star' : 'star-o'}
                          onPress={() => console.log('booked')}
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
                {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        );
    }


    return (
        <ScrollView>
            <Image style={styles.img} source={{uri: post.img}}/>
            <Text style={styles.textCenter}>{post.text}</Text>
            <Button color={Theme.Red_Color} title={'Delete'} onPress={removePostImgHandler}/>
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
        fontFamily: 'Open_Sans_Regular',
        textAlign: "center",
    },

})