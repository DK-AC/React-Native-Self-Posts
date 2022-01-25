import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from "./TabNavigation";
import {AboutScreen} from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="TabNavigation" component={TabNavigation}/>
            <Drawer.Screen name="About" component={AboutScreen}/>
            <Drawer.Screen name="Create" component={CreateScreen}/>
        </Drawer.Navigator>
    );
}