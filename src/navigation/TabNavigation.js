import {Platform} from "react-native";
import {THEME} from "../THEME";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {configNavigation} from "./configNavigation";
import {PostNavigator} from "./PostNavigator";
import {BookedNavigator} from "./BookedNavigator";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export const TabNavigation = () => {

    const MaterialBottomTab = createMaterialBottomTabNavigator()
    const Tab = createBottomTabNavigator();

    return (Platform.OS === 'android'
            ? <MaterialBottomTab.Navigator barStyle={configNavigation.materialBottomTabNavigation}
                                           shifting={true}
                                           activeColor={THEME.WHITE_COLOR}
                                           screenOptions={configNavigation.headerHide}
            >
                <MaterialBottomTab.Screen name="Post Material Bottom Tab Navigation "
                                          component={PostNavigator}
                                          options={configNavigation.posts}
                />
                <MaterialBottomTab.Screen name="Booked Material Bottom Tab Navigation"
                                          component={BookedNavigator}
                                          options={configNavigation.booked}
                />
            </MaterialBottomTab.Navigator>
            : <Tab.Navigator screenOptions={configNavigation.headerHide}>
                <Tab.Screen name="Post Tab Screen" component={PostNavigator} options={configNavigation.posts}/>
                <Tab.Screen name="Booked Tab Screen" component={BookedNavigator} options={configNavigation.booked}/>
            </Tab.Navigator>
    )

}