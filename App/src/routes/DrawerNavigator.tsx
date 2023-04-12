import { createDrawerNavigator } from "@react-navigation/drawer";

// --------------------------------------------------------------------

import { ROUTES } from "../constants";
import BottomTabNavigator from "./BottomTabNavigator";

// --------------------------------------------------------------------

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name={ROUTES.HOME_DRAWER}
                component={BottomTabNavigator}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
