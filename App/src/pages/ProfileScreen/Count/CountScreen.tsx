
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserContext from "../../../context/UserContext";
import { FirebaseGetAuth } from "../../../firebase/app";
import { updateProfile, User, signOut } from "firebase/auth";

// --------------------------------------------------------------------

import { LogoProfile } from "../../../components/LogoProfile";
import { COLORS } from "../../../constants";
import Icon from 'react-native-vector-icons/FontAwesome'

// --------------------------------------------------------------------
export const CountScreen = ({ navigation }: any) => {
    const { state } = useContext(UserContext);

    const logout = () => {
        signOut(FirebaseGetAuth)
            .then(() => {
            })
            .catch((error) => {
            });
            window.location.reload()
    };

    const updateUser = () => {
        const res = FirebaseGetAuth.currentUser as User
        updateProfile(res ,{displayName:'',photoURL:''})
            .then(() => {
  // Profile updated!
  // ...
            }).catch((error) => {
    });
    };

    return (
        <View
            style={{
                backgroundColor: COLORS.background,
                height: "100%",
            }}
        >
            <LogoProfile />

            <View style={styles.container}>
                <View style={{ paddingLeft: 20 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            marginVertical: 10,
                            fontFamily: "Main",
                        }}
                    >
                        {state.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 10,
                            marginBottom: 7,
                            fontFamily: "Main",
                        }}
                    >
                        Nombre completo
                    </Text>
                </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                <Icon name="pencil" size={15} color={"#00000"} onPress={()=> navigation.navigate("EditCount")} />
                </View>
            </View>

            <View style={styles.container}>
                <View style={{ paddingLeft: 20 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            marginVertical: 10,
                            fontFamily: "Main",
                        }}
                    >
                        {state.email}
                    </Text>
                    <Text
                        style={{
                            fontSize: 10,
                            marginBottom: 7,
                            fontFamily: "Main",
                        }}
                    >
                        E-mail
                    </Text>
                </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                <Icon name="pencil" size={15} color={"#00000"} onPress={()=> navigation.navigate("EditCount")} />
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontSize: 16, marginVertical: 10 }}>
                        ··········
                    </Text>
                    <Text
                        style={{
                            fontSize: 10,
                            marginBottom: 7,
                            fontFamily: "Main",
                        }}
                    >
                        Contraseña
                    </Text>
                </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                <Icon name="pencil" size={15} color={"#00000"} onPress={()=> navigation.navigate("EditCount")} />
                </View>
            </View>
            <View style={{ paddingLeft: 20 }}>
                <Text
                    style={{
                        fontSize: 14,
                        textDecorationLine: "underline",
                        marginVertical: 15,
                        color: COLORS.primary,
                        fontFamily: "Main",
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
    container: {
        backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    marginBottom: 5,
                    marginHorizontal: 12,
                    shadowOpacity: 0.25,
                    shadowRadius:3.85
    }
});
