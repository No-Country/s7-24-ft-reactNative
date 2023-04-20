import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ButtonFom, ErrorMessageForm, FormAuth } from "../../../components";
import UserContext from "../../../context/UserContext";
import { applicationInfo } from "../../../interceptors";
import RegisterForm from "../../../models/register.models";
import { addDBDoc } from "../../../services/addUserToDB.services";
import ObjectStyles from "../../../styles/objects/objects";
import { NavigateProp } from "../../../types/types";

const Register = ({ navigation }: NavigateProp) => {
    const [errorPassword, setErrorPassword] = useState("");

    const { state, dispatch } = useContext(UserContext);

    const {
        control,
        handleSubmit,
        reset,
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
            applicationInfo(
                email,
                password,
                true,
                createUserWithEmailAndPassword
            ).then((res) => {
                if (res.ok) {
                    addDBDoc("users", {
                        ...state,
                        email: res.email,
                        id: res.id,
                        name: res.name,
                    });

                    navigation.navigate("Home");
                }
            });
            reset();
        } else if (data.password !== data.confirmPassword) {
            setErrorPassword(
                "Error las contraseñas no son iguales vuelva intentarlo"
            );
        }
    };

    return (
        <View style={[ObjectStyles.backgroundForm, ObjectStyles.flexBox]}>
            <Text style={[ObjectStyles.titleForm, ObjectStyles.fontMain]}>
                Regístrate
            </Text>
            {errorPassword && <Text>{errorPassword}</Text>}

            <FormAuth>
                <View style={ObjectStyles.containerFormInput}>
                    <Text
                        style={[
                            ObjectStyles.textLabelForm,
                            ObjectStyles.fontMain,
                        ]}
                    >
                        Email:
                    </Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Ingrese su correo"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                keyboardType="email-address"
                                style={[
                                    ObjectStyles.input,
                                    ObjectStyles.fontMain,
                                ]}
                            />
                        )}
                        name="email"
                        rules={{ required: true }}
                    />
                    {errors.email && (
                        <ErrorMessageForm message="Este campo es requirió" />
                    )}
                </View>
                <View style={ObjectStyles.containerFormInput}>
                    <Text
                        style={[
                            ObjectStyles.textLabelForm,
                            ObjectStyles.fontMain,
                        ]}
                    >
                        Password:
                    </Text>
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
                                style={[
                                    ObjectStyles.input,
                                    ObjectStyles.fontMain,
                                ]}
                            />
                        )}
                        name="password"
                        rules={{ required: true }}
                    />
                    {errors.password && (
                        <ErrorMessageForm message="Este campo es requirió" />
                    )}
                </View>

                <View style={ObjectStyles.containerFormInput}>
                    <Text
                        style={[
                            ObjectStyles.textLabelForm,
                            ObjectStyles.fontMain,
                        ]}
                    >
                        Confirmar Password:
                    </Text>
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
                                style={[
                                    ObjectStyles.input,
                                    ObjectStyles.fontMain,
                                ]}
                            />
                        )}
                        name="confirmPassword"
                        rules={{ required: true }}
                    />
                    {errors.password && (
                        <ErrorMessageForm message="Este campo es requirió" />
                    )}
                </View>

                <ButtonFom
                    text="Regístrate"
                    handlerSubmit={handleSubmit(onSubmit)}
                />
            </FormAuth>
            <Text style={[styles.paragraph, ObjectStyles.fontMain]}>
                Al crear tu cuenta aceptas nuestro Aviso de privacidad y
                Términos y condiciones.
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
