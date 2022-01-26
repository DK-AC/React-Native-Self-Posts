import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from "./TabNavigation";
import {configNavigation} from "./configNavigation";
import {CreateStackNavigator} from "./CreateStackNavigator";
import {AboutStackNavigator} from "./AboutStackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={configNavigation.headerHide}>
            <Drawer.Screen name="TabNavigation" component={TabNavigation}/>
            <Drawer.Screen name="About" component={AboutStackNavigator}/>
            <Drawer.Screen name="Create" component={CreateStackNavigator}/>
        </Drawer.Navigator>
    );
}