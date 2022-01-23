import {PostScreen} from "../screens/PostScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {MainScreen} from "../screens/MainScreen";
import {Platform} from "react-native";
import {Theme} from "../theme";

const Stack = createStackNavigator();

const config = {
    default: {
        headerStyle: {backgroundColor: Platform.OS === "ios" ? Theme.White_Color : Theme.Main_Color},
        headerTintColor: Platform.OS === "ios" ? Theme.Main_Color : Theme.White_Color,
    },
}

export const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={config.default}>
            <Stack.Screen name={'Main'} component={MainScreen}/>
            <Stack.Screen name={'Post'} component={PostScreen} options={{title: 'new'}}/>
            <Stack.Screen name={'Booked'} component={BookedScreen}/>
            <Stack.Screen name={'Create'} component={CreateScreen}/>
            <Stack.Screen name={'About'} component={AboutScreen}/>
        </Stack.Navigator>
    )
}

