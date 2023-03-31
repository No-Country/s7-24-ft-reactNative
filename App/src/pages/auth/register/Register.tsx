import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ButtonFom, ErrorMessageForm, FormAuth } from "../../../components";
import UserContext from "../../../context/UserContext";
import { applicationInfo } from "../../../interceptors";
import RegisterForm from "../../../models/register.models";
import ObjectStyles from "../../../styles/objects/objects";

const Register = () => {
	const [errorPassword, setErrorPassword] = useState("");

	const { state, dispatch } = useContext(UserContext);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterForm>({
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (data: RegisterForm) => {
		if (data.password === data.confirmPassword) {
			const { email, password } = data;
			setErrorPassword("");

			dispatch({
				type: "LOGIN",
				payload: {
					email,
					password,
				},
			});

			applicationInfo(
				data.email,
				data.password,
				createUserWithEmailAndPassword,
			).then((res) => {
				if (res.ok) {
					dispatch({
						type: "SET_ID",
						payload: res.id,
					});
					dispatch({
						type: "SET_AUTHORIZATION",
						payload: "success",
					});
				}
			});
		} else if (data.password !== data.confirmPassword) {
			setErrorPassword(
				"Error las contraseñas no son iguales vuelva intentarlo",
			);
		}
	};

	return (
		<View style={[ObjectStyles.backgroundForm, ObjectStyles.flexBox]}>
			<Text style={ObjectStyles.titleForm}>Regístrate</Text>
			{errorPassword && <Text>{errorPassword}</Text>}

			<FormAuth>
				<View style={ObjectStyles.containerFormInput}>
					<Text style={ObjectStyles.textLabelForm}>Email:</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Ingrese su correo"
								value={value}
								onBlur={onBlur}
								onChangeText={onChange}
								keyboardType="email-address"
								style={ObjectStyles.input}
							/>
						)}
						name="email"
						rules={{ required: true }}
					/>

					{errors.email && (
						<ErrorMessageForm message='Este campo es requirió' />
					)}
				</View>

				<View style={ObjectStyles.containerFormInput}>
					<Text style={ObjectStyles.textLabelForm}>Password:</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Ingrese su correo"
								secureTextEntry={true}
								textContentType="password"
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								style={ObjectStyles.input}
							/>
						)}
						name="password"
						rules={{ required: true }}
					/>
					{errors.password && (
						<ErrorMessageForm message='Este campo es requirió' />
					)}
				</View>

				<View style={ObjectStyles.containerFormInput}>
					<Text style={ObjectStyles.textLabelForm}>Confirmar Password:</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Ingrese su correo"
								secureTextEntry={true}
								textContentType="password"
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								style={ObjectStyles.input}
							/>
						)}
						name="confirmPassword"
						rules={{ required: true }}
					/>
					{errors.password && (
						<ErrorMessageForm message='Este campo es requirió' />
					)}
				</View>

				<ButtonFom text="Regístrate" handlerSubmit={handleSubmit(onSubmit)} />
			</FormAuth>
			<Text style={styles.paragraph}>
				Al crear tu cuenta aceptas nuestro Aviso de privacidad y Términos y
				condiciones.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	paragraph: {
		position: "absolute",
		bottom: 56,
		width: 179,
		fontSize: 8,
		textAlign: "center",
		color: "#000",
	},
});
export default Register;
