import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// --------------------------------------------------------------------

import { useContext, useEffect } from "react";
import { ArrowBackNavigatoHeader, MenuNavigatorHeader } from "../components";
import { COLORS, ROUTES } from "../constants";
import UserContext from "../context/UserContext";
import { FirebaseGetAuth } from "../firebase/app";
import { CategoriesScreen, Login, Register, ServiceScreen } from "../pages";
import DrawerNavigator from "./DrawerNavigator";

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
						component={Login}
						name={ROUTES.LOGIN}
						options={{
							headerShown: false,
						}}
					/>

					<Stack.Screen
						component={Register}
						name={ROUTES.REGISTER}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Group>
			) : (
				<Stack.Group>
					<Stack.Screen component={DrawerNavigator} name={ROUTES.HOME} />

					<Stack.Screen
						component={CategoriesScreen}
						name={ROUTES.CATEGORY}
						options={{
							headerShown: true,
							headerLeft: () => <ArrowBackNavigatoHeader />,
							headerRight: () => <MenuNavigatorHeader />,
						}}
					/>

					<Stack.Screen
						component={ServiceScreen}
						name={ROUTES.SERVICE}
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
