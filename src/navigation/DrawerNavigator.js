import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from "./TabNavigation";
import {AboutScreen} from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";
import {configNavigation} from "./configNavigation";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={configNavigation.headerHide}>
            <Drawer.Screen name="TabNavigation" component={TabNavigation}/>
            <Drawer.Screen name="About" component={AboutScreen}/>
            <Drawer.Screen name="Create" component={CreateScreen}/>
        </Drawer.Navigator>
    );
}