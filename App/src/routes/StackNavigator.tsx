import { createNativeStackNavigator } from "@react-navigation/native-stack";

// --------------------------------------------------------------------

import { useContext, useEffect } from "react";
import { ArrowBackNavigatoHeader } from "../components";
import { COLORS, ROUTES } from "../constants";
import UserContext from "../context/UserContext";
import { FirebaseGetAuth } from "../firebase/app";
import {
    CategoriesScreen,
    GetLocationScreen,
    Login,
    Register,
    ServiceScreen,
} from "../pages";
import { CountScreen } from "../pages/ProfileScreen/Count/CountScreen";
import { HelpScreen } from "../pages/ProfileScreen/Help/HelpScreen";
import { HistoryScreen } from "../pages/ProfileScreen/History/HistoryScreen";
import { MyServiceScreen } from "../pages/ProfileScreen/MyServices/MyServiceScreen";
import { DetailPubli } from "../pages/ProfileScreen/PostPubli/DetailPubli";
import { FinalizadoScreen } from "../pages/ProfileScreen/PostPubli/FinalizadoScreen";
import { PostScreen } from "../pages/ProfileScreen/PostPubli/PostScreen";
import { PublicacionScreen } from "../pages/ProfileScreen/PostPubli/PublicacionScreen";
import DrawerNavigator from "./DrawerNavigator";

// --------------------------------------------------------------------

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
<<<<<<< HEAD
	const { state, dispatch } = useContext(UserContext);
	useEffect(() => {
		FirebaseGetAuth.onAuthStateChanged((user) => {
			if (user !== null) {
				dispatch({
					type: "AUTH",
					payload: {
						email: user.email === null ? "" : user.email,
						id: user.uid,
						name: user.displayName === null ? "" : user.displayName,
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
				<Stack.Screen
					name={ROUTES.COUNT}
					component={CountScreen}
					options={{
						headerShown: true,
						headerLeft: () => <ArrowBackNavigatoHeader />,
						headerRight: () => <MenuNavigatorHeader />,
					}}
				/>
				<Stack.Screen
					name={ROUTES.POST}
					component={PostScreen}
					options={{
						headerShown: true,
						headerLeft: () => <ArrowBackNavigatoHeader />,
						headerRight: () => <MenuNavigatorHeader />,
					}}
				/>
				<Stack.Screen
					name={ROUTES.DETAILPUB}
					component={DetailPubli}
					options={{
						headerShown: true,
						headerLeft: () => <ArrowBackNavigatoHeader />,
						headerRight: () => <MenuNavigatorHeader />,
					}}
				/>
				<Stack.Screen
					name={ROUTES.PUBLICACION}
					component={PublicacionScreen}
					options={{
						headerShown: true,
						headerLeft: () => <ArrowBackNavigatoHeader />,
						headerRight: () => <MenuNavigatorHeader />,
					}}
				/>
				<Stack.Screen
					name={ROUTES.FINALIZADO}
					component={FinalizadoScreen}
					options={{
						headerShown: true,
						headerLeft: () => <ArrowBackNavigatoHeader />,
						headerRight: () => <MenuNavigatorHeader />,
					}}
				/>
				<Stack.Screen
					name={ROUTES.HELP}
					component={HelpScreen}
					options={{
						headerShown: true,
						headerLeft: () => <ArrowBackNavigatoHeader />,
						headerRight: () => <MenuNavigatorHeader />,
					}}
				/>
				<Stack.Screen
					name={ROUTES.MYSERVICE}
					component={MyServiceScreen}
					options={{
						headerShown: true,
						headerLeft: () => <ArrowBackNavigatoHeader />,
						headerRight: () => <MenuNavigatorHeader />,
					}}
				/>
			</Stack.Group>

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
		</Stack.Navigator>
	);
=======
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
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.09)",
                },
            }}
        >
            {state.authorization !== "success" ? (
                <Stack.Group>
                    <Stack.Screen name={ROUTES.LOGIN} component={Login} />

                    <Stack.Screen name={ROUTES.REGISTER} component={Register} />
                </Stack.Group>
            ) : (
                <Stack.Group>
                    <Stack.Screen
                        name={ROUTES.GET_LOCATION}
                        component={GetLocationScreen}
                    />
                    <Stack.Screen
                        name={ROUTES.HOME}
                        component={DrawerNavigator}
                    />
                    <Stack.Screen
                        name={ROUTES.CATEGORY}
                        component={CategoriesScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.SERVICE}
                        component={ServiceScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.HISTORY}
                        component={HistoryScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.COUNT}
                        component={CountScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.POST}
                        component={PostScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.DETAILPUB}
                        component={DetailPubli}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.PUBLICACION}
                        component={PublicacionScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.FINALIZADO}
                        component={FinalizadoScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.HELP}
                        component={HelpScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.MYSERVICE}
                        component={MyServiceScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <ArrowBackNavigatoHeader />,
                        }}
                    />
                </Stack.Group>
            )}
        </Stack.Navigator>
    );
>>>>>>> dev
}
