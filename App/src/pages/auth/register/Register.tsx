import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ButtonFom, ErrorMessageForm, FormAuth } from "../../../components";
import RegisterForm from "../../../models/register.models";
import ObjectStyles from "../../../styles/objects/objects";

const Register = () => {
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
		console.log(data);
	};

	return (
		<View style={[ObjectStyles.backgroundForm, ObjectStyles.flexBox]}>
			<Text style={ObjectStyles.titleForm}>Regístrate</Text>
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
