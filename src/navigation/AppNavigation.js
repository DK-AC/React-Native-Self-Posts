import {PostScreen} from "../screens/PostScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {MainScreen} from "../screens/MainScreen";
import {Platform} from "react-native";
import {Theme} from "../theme";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons";
import React from "react";
import {BookedScreen} from "../screens/BookedScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const config = {
    default: {
        headerStyle: {backgroundColor: Platform.OS === "ios" ? Theme.White_Color : Theme.Main_Color},
        headerTintColor: Platform.OS === "ios" ? Theme.Main_Color : Theme.White_Color,
    },
    posts: {
        tabBarLabel: 'Posts',
        tabBarIcon: () => (
            <FontAwesome name="tasks" color={Theme.Main_Color} size={26}/>
        ),
    },
    booked: {
        tabBarLabel: 'Booked',
        tabBarIcon: () => (
            <FontAwesome name="star" color={Theme.Main_Color} size={26}/>
        ),
    },
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
        </Stack.Navigator>
    )
}


const TabNavigation = () => {

    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Post" component={PostNavigator} options={config.posts}/>
            <Tab.Screen name="Booked" component={BookedNavigator} options={config.booked}/>
        </Tab.Navigator>
    )
}

export const AppNavigation = () => {
    return (<TabNavigation/>)
}
