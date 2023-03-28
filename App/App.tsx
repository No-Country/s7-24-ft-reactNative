import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Login from "./src/pages/auth/login/Login";
import Register from "./src/pages/auth/register/Register";
const Stack = createNativeStackNavigator();
export default function App() {
	const auth = true;

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{auth === true ? (
					<Stack.Screen name="Login" component={Login} />
				) : (
					<Stack.Screen name="Register" component={Register} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
