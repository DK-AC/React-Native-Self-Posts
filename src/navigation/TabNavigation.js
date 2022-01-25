import {Platform} from "react-native";
import {Theme} from "../theme";
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
                                           activeColor={Theme.White_Color}
                                           screenOptions={configNavigation.headerHide}
            >
                <MaterialBottomTab.Screen name="Post"
                                          component={PostNavigator}
                                          options={configNavigation.posts}
                />
                <MaterialBottomTab.Screen name="Booked"
                                          component={BookedNavigator}
                                          options={configNavigation.booked}
                />
            </MaterialBottomTab.Navigator>
            : <Tab.Navigator screenOptions={configNavigation.headerHide}>
                <Tab.Screen name="Post" component={PostNavigator} options={configNavigation.posts}/>
                <Tab.Screen name="Booked" component={BookedNavigator} options={configNavigation.booked}/>
            </Tab.Navigator>
    )

}