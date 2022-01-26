import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {platformAndroidWhiteColor} from "../navigation/configNavigation";


export const AboutScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'О приложении',
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


    return (
        <View style={styles.center}>
            <Text>Приложение для личных заметок.</Text>
            <Text>Версия приложения<Text style={styles.boldText}> 1.0.0 </Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    boldText: {
        fontFamily: 'open-bold'
    }
})