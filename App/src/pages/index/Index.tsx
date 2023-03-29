import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { UserContext } from "../../context/UserProviderUser";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
const Stack = createNativeStackNavigator();
const Index = () => {
	const { state } = useContext(UserContext);
	return (
		<Stack.Navigator>
			{state.authorization === "not-authorization" ? (
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
				<>{null}</>
			)}
		</Stack.Navigator>
	);
};

export default Index;
