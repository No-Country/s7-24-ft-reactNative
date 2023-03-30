import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import { ButtonFom, ErrorMessageForm, FormAuth } from "../../../components";
import Form from "../../../models/login.models";
import ObjectStyles from "../../../styles/objects/objects";

type Props = {
	navigation: NativeStackNavigationProp<any, any>;
};

const Login = ({ navigation }: Props) => {
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
		console.log(data);
	};

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
		height: 69,
		gap: 12,
	},
});

Login.navigationOptions = {
	title: "",
};

export default Login;