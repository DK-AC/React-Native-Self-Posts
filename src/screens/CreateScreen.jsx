import React, {useState} from "react";
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {platformAndroidWhiteColor} from "../navigation/configNavigation";
import {THEME} from "../THEME";


export const CreateScreen = ({navigation}) => {

    const [value, setValue] = useState('')

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
        setValue(value)
    }

    return (
        <ScrollView>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Создать новый пост</Text>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                    placeholder={'Введите описание поста'}
                    multiline
                />
                <Image
                    style={styles.image}
                    source={{uri: ('https://kyky-public-storage.s3.eu-central-1.amazonaws.com/image/file/21757/Demid2.jpg')}}
                />
                {/*<Text>'12312</Text>*/}
                <Button title={'Создать пост'}
                        onPress={savePostHandler}
                        color={THEME.MAIN_COLOR}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    text: {
        textAlign: "center",
        fontFamily: 'open-bold',
        fontSize: 16,
        color: THEME.MAIN_COLOR
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    }
})