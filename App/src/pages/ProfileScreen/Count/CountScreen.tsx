import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserContext from "../../../context/UserContext";
import { FirebaseGetAuth } from "../../../firebase/app";

// --------------------------------------------------------------------

import { EditIcon } from "../../../components/EditIcon";
import { LogoProfile } from "../../../components/LogoProfile";
import { COLORS } from "../../../constants";

// --------------------------------------------------------------------
export const CountScreen = ({ navigation }: any) => {
    const { state } = useContext(UserContext);

    const logout = () => {
        signOut(FirebaseGetAuth)
            .then(() => {
                /*                 navigation.navigate('Login') */
            })
            .catch((error) => {
                // An error happened.
            });
        window.location.reload();
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
                    marginBottom: 5,
                    marginHorizontal: 12,
                }}
            >
                <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontSize: 16, marginVertical: 10 }}>
                        {state.name}
                    </Text>
                    <Text style={{ fontSize: 10, marginBottom: 7 }}>
                        Nombre completo
                    </Text>
                </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                    <EditIcon />
                </View>
            </View>
            <View
                style={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    marginBottom: 5,
                    marginHorizontal: 12,
                }}
            >
                <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontSize: 16, marginVertical: 10 }}>
                        {state.email}
                    </Text>
                    <Text style={{ fontSize: 10, marginBottom: 7 }}>
                        E-mail
                    </Text>
                </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                    <EditIcon />
                </View>
            </View>
            <View
                style={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    marginBottom: 5,
                    marginHorizontal: 12,
                }}
            >
                <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontSize: 16, marginVertical: 10 }}>
                        ··········
                    </Text>
                    <Text style={{ fontSize: 10, marginBottom: 7 }}>
                        Contraseña
                    </Text>
                </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                    <EditIcon />
                </View>
            </View>
            <View style={{ paddingLeft: 20 }}>
                <Text
                    style={{
                        fontSize: 14,
                        textDecorationLine: "underline",
                        marginVertical: 15,
                        color: COLORS.primary,
                    }}
                    onPress={logout}
                >
                    Cerrar sesión
                </Text>
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
});
