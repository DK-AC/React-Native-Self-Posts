import {Platform} from "react-native";
import {Theme} from "../theme";
import {FontAwesome} from "@expo/vector-icons";

export const platformAndroidMainColor = Platform.OS === 'android' ? Theme.Main_Color : Theme.White_Color
export const platformAndroidWhiteColor = Platform.OS === 'android' ? Theme.White_Color : Theme.Main_Color

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
    }
    ,
    materialBottomTabNavigation: {
        backgroundColor: Theme.Main_Color,
    }
}