import {createStackNavigator} from "@react-navigation/stack";
import {Theme} from "../theme";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons";
import React from "react";
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Platform} from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator()

const config = {
    default: {
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? Theme.White_Color : Theme.Main_Color
        },
        headerTintColor: Platform.OS === 'ios' ? Theme.Main_Color : Theme.White_Color
    },
    posts: {
        tabBarLabel: 'Все',
        tabBarLabelStyle: {
            color: Platform.OS === 'android' ? Theme.White_Color : Theme.Main_Color,
        },

        tabBarIcon: () => (
            <FontAwesome name="tasks"
                         color={Platform.OS === 'android' ? Theme.White_Color : Theme.Main_Color}
                         size={25}
            />
        ),
    },
    booked: {
        tabBarLabel: 'Избранное',
        tabBarLabelStyle: {
            color: Platform.OS === 'android' ? Theme.White_Color : Theme.Main_Color
        },
        tabBarIcon: () => (
            <FontAwesome name="star"
                         color={Platform.OS === 'android' ? Theme.White_Color : Theme.Main_Color}
                         size={25}
            />
        ),
    },
    tabNavigator: {
        headerShown: false,
    },
    materialBottomTab: {
        labeled: false,


    }
}

const materialBottomTabNavigationStyle = {
    backgroundColor: Theme.Main_Color,
    shifting: true

}


const PostNavigator = () => {
    return (
        <Stack.Navigator screenOptions={config.default}>
            <Stack.Screen name={'Main'} component={MainScreen}/>
            <Stack.Screen name={'Post'} component={PostScreen}/>
        </Stack.Navigator>
    )
}
const BookedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={config.default}>
            <Stack.Screen name={'Booked'} component={BookedScreen}/>
            <Stack.Screen name={'Post'} component={PostScreen}/>
        </Stack.Navigator>
    )
}


const TabNavigation = () => {
    return (
        Platform.OS === 'android'
            ? <MaterialBottomTab.Navigator barStyle={materialBottomTabNavigationStyle}
                                           shifting={true}
                                           activeColor={Theme.White_Color}
            >
                <MaterialBottomTab.Screen name="Post" component={PostNavigator} options={config.posts}/>
                <MaterialBottomTab.Screen name="Booked" component={BookedNavigator} options={config.booked}/>
            </MaterialBottomTab.Navigator>
            : <Tab.Navigator screenOptions={config.tabNavigator}>
                <Tab.Screen name="Post" component={PostNavigator} options={config.posts}/>
                <Tab.Screen name="Booked" component={BookedNavigator} options={config.booked}/>
            </Tab.Navigator>
    )

}

export const AppNavigation = () => {
    return (<TabNavigation/>)
}
