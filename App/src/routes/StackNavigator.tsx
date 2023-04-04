import { createNativeStackNavigator } from "@react-navigation/native-stack";

// --------------------------------------------------------------------

import { useContext, useEffect } from "react";
import { ArrowBackNavigatoHeader, MenuNavigatorHeader } from "../components";
import { COLORS, ROUTES } from "../constants";
import UserContext from "../context/UserContext";
import { FirebaseGetAuth } from "../firebase/app";
import { CategoriesScreen, Login, Register, ServiceScreen } from "../pages";
import DrawerNavigator from "./DrawerNavigator";
import { HistoryScreen } from "../pages/ProfileScreen/HistoryScreen";

// --------------------------------------------------------------------

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
	const { state, dispatch } = useContext(UserContext);
	useEffect(() => {
		FirebaseGetAuth.onAuthStateChanged((user) => {
			if (user !== null) {
				dispatch({
					type: "AUTH",
					payload: {
						authorization: "success",
						email: user.email === null ? "" : user.email,
						id: user.uid,
					},
				});
			}
		});
	}, []);

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
			{state.authorization !== "success" ? (
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
			) : (
				<Stack.Group>
					<Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} />
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

					<Stack.Screen
						name={ROUTES.HISTORY}
						component={HistoryScreen}
						options={{
							headerShown: true,
							headerLeft: () => <ArrowBackNavigatoHeader />,
							headerRight: () => <MenuNavigatorHeader />,
						}}
					/>

				</Stack.Group>
			)}
		</Stack.Navigator>
	);
}
