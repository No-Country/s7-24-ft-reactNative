import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import ButtonFom from "../../../components/ButtonFom";
import FormAuth from "../../../components/FormAuth";
import Form from "../../../models/login.models";
import ObjectStyles from "../../../styles/objects/objects";

const Login = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Form>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
		<View style={[ObjectStyles.backgroundForm, ObjectStyles.flexBox]}>
			<Text style={ObjectStyles.titleForm}>Iniciar Sesión</Text>
			<FormAuth>
				<Text>Email:</Text>
				<Controller
					control={control}
					render={({ field: { onChange, value } }) => (
						<TextInput
							placeholder="Ingrese su correo"
							value={value}
							onChangeText={onChange}
							keyboardType="email-address"
							style={ObjectStyles.input}
						/>
					)}
					name="email"
					rules={{ required: true }}
				/>

				<Text>Password:</Text>
				<Controller
					control={control}
					render={({ field: { onChange, value } }) => (
						<TextInput
							placeholder="Ingrese su correo"
							secureTextEntry={true}
							textContentType="password"
							onChangeText={onChange}
							value={value}
							style={ObjectStyles.input}
						/>
					)}
					name="password"
					rules={{ required: true }}
				/>

				<ButtonFom text="Iniciar Sesión" />
			</FormAuth>
		</View>
	);
};

export default Login;
