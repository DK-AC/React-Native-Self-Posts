import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {configNavigation} from "./configNavigation";
import {AboutScreen} from "../screens/AboutScreen";

const AboutStack = createStackNavigator()

export const AboutStackNavigator = () => {

    return (
        <AboutStack.Navigator screenOptions={configNavigation.default}>
            <AboutStack.Screen name={'Create Screen'} component={AboutScreen}/>
        </AboutStack.Navigator>
    )
}