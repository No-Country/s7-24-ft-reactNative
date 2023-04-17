import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import {
    BottomLogo,
    ButtonFom,
    ErrorMessageForm,
    FormAuth,
    LazyLoadingStart,
} from "../../../components";
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
    const [isPending, setIsPending] = useState(false);

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

    useEffect(() => {
        setIsPending(true);
    }, []);
    const onSubmit = (data: Form) => {
        applicationInfo(
            data.email,
            data.password,
            false,
            signInWithEmailAndPassword
        ).then((res) => {
            if (res.ok) {
                dispatch({
                    type: "AUTH",
                    payload: {
                        authorization: "success",
                        email: res.email === null ? "" : res.email,
                        id: res.id,
                    },
                });
            }
        });
    };

    return isPending === true ? (
        <View style={[ObjectStyles.backgroundForm, ObjectStyles.flexBox]}>
            <Text style={ObjectStyles.titleForm}>Iniciar Sesión</Text>

            <FormAuth>
                <View style={ObjectStyles.containerFormInput}>
                    <Text style={ObjectStyles.textLabelForm}>
                        Correo electrónico:
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
                                style={ObjectStyles.input}
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
                    <Text style={ObjectStyles.textLabelForm}>Contraseña:</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Ingrese su contraseña"
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
                        <ErrorMessageForm message="Este campo es requirió" />
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
            <BottomLogo />
        </View>
    ) : (
        <LazyLoadingStart />
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
