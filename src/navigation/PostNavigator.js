import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {configNavigation} from "./configNavigation";

export const PostNavigator = () => {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={configNavigation.default}>
            <Stack.Screen name={'Main'} component={MainScreen}/>
            <Stack.Screen name={'Post'} component={PostScreen}/>
        </Stack.Navigator>
    )
}