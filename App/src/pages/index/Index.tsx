import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Text } from "react-native";
import UserContext from "../../context/UserContext";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
const Stack = createNativeStackNavigator();
const Index = () => {
	const { state } = useContext(UserContext);
	console.log(state);
	return (
		<Stack.Navigator>
			{"not-authorization" === "not-authorization" ? (
				<>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{
							title: "",
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="Register"
						component={Register}
						options={{
							title: "Register",
							headerShown: false,
						}}
					/>
				</>
			) : (
				<Text>exito</Text>
			)}
		</Stack.Navigator>
	);
};

export default Index;
