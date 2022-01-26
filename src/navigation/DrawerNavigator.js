import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from "./TabNavigation";
import {configNavigation} from "./configNavigation";
import {CreateStackNavigator} from "./CreateStackNavigator";
import {AboutStackNavigator} from "./AboutStackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={configNavigation.headerHide}>
            <Drawer.Screen name="TabNavigation"
                           component={TabNavigation}
                           options={configNavigation.drawerMain}/>
            <Drawer.Screen name="About"
                           component={AboutStackNavigator}
                           options={configNavigation.drawerAbout}/>
            <Drawer.Screen name="Create"
                           component={CreateStackNavigator}
                           options={configNavigation.drawerCreate}/>
        </Drawer.Navigator>
    );
}