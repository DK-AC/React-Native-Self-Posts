import {BookedScreen} from "../screens/BookedScreen";
import {PostScreen} from "../screens/PostScreen";
import React from "react";
import {configNavigation} from "./configNavigation";
import {createStackNavigator} from "@react-navigation/stack";

export const BookedNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={configNavigation.default}>
            <Stack.Screen name={'Booked Screen'} component={BookedScreen}/>
            <Stack.Screen name={'Post Screen'} component={PostScreen}/>
        </Stack.Navigator>
    )
}