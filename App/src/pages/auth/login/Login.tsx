import { Button, Text, TextInput, View } from "react-native";
import FormAuth from "../../../components/FormAuth";
const Login = () => {
	return (
		<View>
			<FormAuth>
				<Text>Email:</Text>
				<TextInput />
				<Text>Password:</Text>
				<TextInput />
				<Button title="Ingresar" />
			</FormAuth>
		</View>
	);
};

export default Login;
