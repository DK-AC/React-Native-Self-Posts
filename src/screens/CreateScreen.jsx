import React, {useState} from "react";
import {Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {platformAndroidWhiteColor} from "../navigation/configNavigation";
import {THEME} from "../THEME";
import {useDispatch} from "react-redux";
import {addPostAC} from "../store/actions/postActions";
import keyboard from "react-native-web/dist/exports/Keyboard";
import {PhotoPicker} from "../components/PhotoPicker";


export const CreateScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(null)
    const [imgUri, setImgUri] = useState(null)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Создать пост',
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

    const savePostHandler = () => {
        const post = {
            img: imgUri,
            text: value,
            date: new Date().toJSON(),
            booked: false
        }
        dispatch(addPostAC(post))
        navigation.navigate('Main')
    }
    const hideKeyBoardHandler = () => keyboard.dismiss()
    const onPick = (uri) => setImgUri(uri)


    return (
        <ScrollView>
            <Pressable onPress={hideKeyBoardHandler}>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>Создать новый пост</Text>
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={setValue}
                        placeholder={'Введите описание поста'}
                        multiline
                    />
                    <PhotoPicker onPick={onPick}/>
                    <Button title={'Создать пост'}
                            onPress={savePostHandler}
                            color={THEME.MAIN_COLOR}
                            disabled={!value || !imgUri}
                    />
                </View>
            </Pressable>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    text: {
        textAlign: "center",
        fontFamily: 'open-regular',
        fontSize: 18,
        color: THEME.MAIN_COLOR,

    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        padding: 10
    }
})