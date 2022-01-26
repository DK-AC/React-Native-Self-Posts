import {Platform} from "react-native";
import {THEME} from "../THEME";
import {FontAwesome} from "@expo/vector-icons";

export const platformAndroidMainColor = Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE_COLOR
export const platformAndroidWhiteColor = Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR

export const configNavigation = {
    default: {
        headerStyle: {
            backgroundColor: platformAndroidMainColor
        },
        headerTintColor: platformAndroidWhiteColor
    },
    posts: {
        tabBarLabel: 'Все',
        tabBarLabelStyle: {
            color: platformAndroidWhiteColor
        },

        tabBarIcon: () => (
            <FontAwesome name="tasks"
                         color={platformAndroidWhiteColor}
                         size={25}
            />
        ),
    },
    booked: {
        tabBarLabel: 'Избранное',
        tabBarLabelStyle: {
            color: platformAndroidWhiteColor
        },
        tabBarIcon: () => (
            <FontAwesome name="star"
                         color={platformAndroidWhiteColor}
                         size={25}
            />
        ),
    },
    headerHide: {
        headerShown: false,
        drawerLabelStyle: {
            fontFamily: 'open-bold',
        },
        drawerActiveTintColor: THEME.MAIN_COLOR
    }
    ,
    materialBottomTabNavigation: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    drawerMain: {
        title: 'Главная',

    },
    drawerAbout: {
        title: 'О приложении'
    },
    drawerCreate: {
        title: 'Создать пост'
    },
}