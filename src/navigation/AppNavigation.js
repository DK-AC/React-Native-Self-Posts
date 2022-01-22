import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AboutScreen} from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";
import {BookedScreen} from "../screens/BookedScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name={'Home'} component={MainScreen}/>
            <Stack.Screen name={'Post'} component={PostScreen}/>
            <Stack.Screen name={'Booked'} component={BookedScreen}/>
            <Stack.Screen name={'Create'} component={CreateScreen}/>
            <Stack.Screen name={'About'} component={AboutScreen}/>
        </Stack.Navigator>
    )
}

