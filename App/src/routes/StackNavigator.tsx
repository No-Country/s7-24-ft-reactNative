import { createNativeStackNavigator } from "@react-navigation/native-stack";

// --------------------------------------------------------------------

import { useContext } from "react";
import { ArrowBackNavigatoHeader, MenuNavigatorHeader } from "../components";
import { COLORS, ROUTES } from "../constants";
import UserContext from "../context/UserContext";
import { CategoriesScreen, Login, Register, ServiceScreen } from "../pages";
import DrawerNavigator from "./DrawerNavigator";

// --------------------------------------------------------------------

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
	const { state } = useContext(UserContext);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerTitleAlign: "center",
				headerStyle: {
					backgroundColor: COLORS.background,
				},
			}}
		> 

    {
      
    }
			<Stack.Group>
				<Stack.Screen
					name={ROUTES.LOGIN}
					component={Login}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name={ROUTES.REGISTER}
					component={Register}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Group>

			<Stack.Group>
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
			</Stack.Group>
		</Stack.Navigator>
	);
}
