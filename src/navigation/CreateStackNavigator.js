import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {CreateScreen} from "../screens/CreateScreen";
import {configNavigation} from "./configNavigation";

const CreateStack = createStackNavigator()

export const CreateStackNavigator = () => {

    return (
        <CreateStack.Navigator screenOptions={configNavigation.default}>
            <CreateStack.Screen name={'Create Screen'} component={CreateScreen}/>
        </CreateStack.Navigator>
    )
}