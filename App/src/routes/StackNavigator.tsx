import { createNativeStackNavigator } from "@react-navigation/native-stack";

// --------------------------------------------------------------------

import { ArrowBackNavigatoHeader, MenuNavigatorHeader } from "../components";
import { COLORS, ROUTES } from "../constants";
import { CategoriesScreen, LoginTest, ServiceScreen } from "../pages";
import DrawerNavigator from "./DrawerNavigator";

// --------------------------------------------------------------------

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: COLORS.background,
        },
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginTest} />
      <Stack.Screen
        name={ROUTES.CATEGORY}
        component={CategoriesScreen}
        options={{
          headerShown: true,
          headerLeft: () => <ArrowBackNavigatoHeader />,
          headerRight: () => <MenuNavigatorHeader />,
        }}
      />
      <Stack.Screen
        name={ROUTES.SERVICE}
        component={ServiceScreen}
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
