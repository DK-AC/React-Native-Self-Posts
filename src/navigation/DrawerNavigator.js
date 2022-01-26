import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from "./TabNavigation";
import {configNavigation} from "./configNavigation";
import {CreateStackNavigator} from "./CreateStackNavigator";
import {AboutStackNavigator} from "./AboutStackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={configNavigation.headerHide}>
            <Drawer.Screen name="Material Bottom Tab Navigation"
                           component={TabNavigation}
                           options={configNavigation.drawerMain}/>
            <Drawer.Screen name="About Screen Drawer"
                           component={AboutStackNavigator}
                           options={configNavigation.drawerAbout}/>
            <Drawer.Screen name="Create Screen Drawer"
                           component={CreateStackNavigator}
                           options={configNavigation.drawerCreate}/>
        </Drawer.Navigator>
    );
}