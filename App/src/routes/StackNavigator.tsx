import { createNativeStackNavigator } from "@react-navigation/native-stack";

// --------------------------------------------------------------------

import { ArrowBackNavigatoHeader, MenuNavigatorHeader } from "../components";
import { ROUTES } from "../constants";
import { LoginTest, ServicesScreen } from "../pages";
import DrawerNavigator from "./DrawerNavigator";

// --------------------------------------------------------------------

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginTest} />
      <Stack.Screen
        name={ROUTES.SERVICES}
        component={ServicesScreen}
        options={{
          headerShown: true,
          headerLeft: () => <ArrowBackNavigatoHeader />,
          headerRight: () => <MenuNavigatorHeader />,
        }}
      />
      <Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
