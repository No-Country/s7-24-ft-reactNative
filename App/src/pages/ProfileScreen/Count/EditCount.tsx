
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import UserContext from "../../../context/UserContext";
import { FirebaseGetAuth } from "../../../firebase/app";
import { updateProfile, User, updateEmail } from "firebase/auth";

// --------------------------------------------------------------------

import { LogoProfile } from "../../../components/LogoProfile";
import { COLORS } from "../../../constants";
import Icon from 'react-native-vector-icons/FontAwesome'
import ObjectStyles from "../../../styles/objects/objects";
import RootStyles from "../../../styles/setting/setting"
import { Button } from "react-native-elements";

// --------------------------------------------------------------------
export const EditCount = ({ navigation }: any) => {
    const { state } = useContext(UserContext);
    const [inputName, SetInputName] = useState(state.name);
    const [inputEmail, SetInputEmail] = useState(state.email);

    const handleInputName = (value:string) => {
        SetInputName(value);
      }

    const handleInputEmail = (value:string) => {
        SetInputEmail(value);
      }
      console.log(inputName)
      console.log(inputEmail)

    const updateNameUser = () => {
        const res = FirebaseGetAuth.currentUser as User
        updateProfile(res ,{displayName:inputName})
            .then(() => {
            }).catch((error) => {
    });
    window.location.reload();
    navigation.navigate("Count")
    };

    const updateEmailUser = () => {
        const res = FirebaseGetAuth.currentUser as User
        updateEmail(res, inputEmail).then(() => {
        }).catch((error) => {
        });
        window.location.reload()
    };
    return (
        <View
            style={{
                backgroundColor: COLORS.background,
                height: "100%",
            }}
        >
            <LogoProfile />

            <View
                style={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    marginBottom: 20,
                    marginHorizontal: 12,
                }}
            >
                <View style={ObjectStyles.containerFormInput}>
                        <Text style={ObjectStyles.textLabelForm}>
                        Nombre y Apellido
                        </Text>
                        <TextInput
                                    placeholder="Nombre y Apellido"
                                    style={styles.input}
                                    value={inputName}
                                    onChangeText={handleInputName}

                        />
                    </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                <Icon name="pencil" size={15} color={"#00000"} onPress={updateNameUser} />
                </View>
            </View>
            <View
                style={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    marginBottom: 20,
                    marginHorizontal: 12,
                }}
            >
                <View style={ObjectStyles.containerFormInput}>
                        <Text style={ObjectStyles.textLabelForm}>
                            E-mail 
                        </Text>
                        <TextInput
                                    placeholder="E-mail"
                                    style={styles.input}
                                    value={inputEmail}
                                    onChangeText={handleInputEmail}
                        />
                    </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                <Icon name="pencil" size={15} color={"#00000"} onPress={updateEmailUser} />
                </View>
            </View>
            <View
                style={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    marginBottom: 20,
                    marginHorizontal: 12,
                }}
            >
                <View style={ObjectStyles.containerFormInput}>
                        <Text style={ObjectStyles.textLabelForm}>
                        Contraseña
                        </Text>
                        <TextInput
                                    placeholder="Contraseña"
                                    style={styles.input}
                                    value='··········'
                                    secureTextEntry={true}

                        />
                    </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                <Icon name="pencil" size={15} color={"#00000"} onPress={updateNameUser} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 350,
        height: 40,
        backgroundColor: COLORS.secondary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
    },
    input: {
        width: 300,
        height: 36,
        padding: "1em",
        borderRadius: 10,
        fontSize: 14,
        border: ".2px solid #0C0C0C50",
        backgroundColor: RootStyles.colorWhite,
        color: "rgba(149, 149, 149, 1)",
        boxShadow: " 0px 2px 5px rgba(0, 0, 0, 0.09)",
    },

});
