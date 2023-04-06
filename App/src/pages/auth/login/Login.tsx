import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect } from "react";
import { ButtonFom, ErrorMessageForm, FormAuth } from "../../../components";
import UserContext from "../../../context/UserContext";
import { applicationInfo } from "../../../interceptors";
import Form from "../../../models/login.models";
import ObjectStyles from "../../../styles/objects/objects";
type Props = {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	navigation: NativeStackNavigationProp<any, any>;
};

const Login = ({ navigation }: Props) => {
	const { state, dispatch } = useContext(UserContext);

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

	const handlerPagination = () => {
		navigation.navigate("Register");
	};

	const onSubmit = (data: Form) => {
		dispatch({
			type: "LOGIN",
			payload: {
				email: data.email,
				password: data.password,
			},
		});

		applicationInfo(data.email, data.password, signInWithEmailAndPassword).then(
			(res) => {
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
			},
		);
	};

	useEffect(() => {}, []);

	return (
		<View style={[ObjectStyles.backgroundForm, ObjectStyles.flexBox]}>
			<Text style={ObjectStyles.titleForm}>Iniciar Sesión</Text>

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

				<ButtonFom
					text="Iniciar Sesión"
					handlerSubmit={handleSubmit(onSubmit)}
				/>

				<View style={[ObjectStyles.flexBox, style.containerLink]}>
					<Text>¿Aun no tienes cuenta?</Text>
					<TouchableOpacity onPress={handlerPagination}>
						<Text style={ObjectStyles.link}>Regístrate</Text>
					</TouchableOpacity>
				</View>
			</FormAuth>
		</View>
	);
};

const style = StyleSheet.create({
	containerLink: {
		gap: 12,
		height: 69,
	},
});

Login.navigationOptions = {
	title: "",
};

export default Login;
