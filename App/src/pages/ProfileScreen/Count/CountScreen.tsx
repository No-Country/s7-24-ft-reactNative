import { User, signOut, updateProfile } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UserContext from "../../../context/UserContext";
import { FirebaseGetAuth } from "../../../firebase/app";

// --------------------------------------------------------------------

import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../../constants";
import {
    changeImageUser,
    getUserPerId,
} from "../../../controllers/user.controller";

// --------------------------------------------------------------------
export const CountScreen = ({ navigation }: any) => {
    const { state } = useContext(UserContext);
    const [dataUser, setDataUser] = useState<any>(null);
    const [image, setImage] = useState<any>(null);

    useEffect(() => {
        async function getData() {
            const userData = await getUserPerId(state.id);

            setImage(userData.photoUrl);
            setDataUser(userData);
        }
        getData();
    }, [state.id]);

    const logout = () => {
        signOut(FirebaseGetAuth)
            .then(() => {})
            .catch((error) => {});
        window.location.reload();
    };

    const updateUser = () => {
        const res = FirebaseGetAuth.currentUser as User;
        updateProfile(res, { displayName: "", photoURL: "" })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch((error) => {});
    };

    const changeImgUser = async () => {
        const imgUrl = await changeImageUser(state.id);

        setImage(imgUrl);
    };

    return (
        <View
            style={{
                backgroundColor: COLORS.background,
                height: "100%",
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginVertical: 25,
                    paddingLeft: 25,
                }}
            >
                <TouchableOpacity onPress={changeImgUser}>
                    <Image
                        style={{ width: 40, height: 40, borderRadius: 20 }}
                        source={
                            image == null
                                ? require("../../../assets/icons/Ellipse.svg")
                                : { uri: image }
                        }
                    />
                    <Image
                        style={{
                            width: 15,
                            height: 15,
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            backgroundColor: "#fff",
                            borderRadius: 100,
                        }}
                        source={require("../../../assets/icons/PlusChat.svg")}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        paddingHorizontal: 10,
                        fontSize: 16,
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Main",
                        textTransform: "capitalize",
                    }}
                >
                    Hola, {dataUser?.name}!
                </Text>
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
                    <Icon
                        name="pencil"
                        size={15}
                        color={"#00000"}
                        onPress={() => navigation.navigate("EditCount")}
                    />
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
                    <Icon
                        name="pencil"
                        size={15}
                        color={"#00000"}
                        onPress={() => navigation.navigate("EditCount")}
                    />
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
                    <Icon
                        name="pencil"
                        size={15}
                        color={"#00000"}
                        onPress={() => navigation.navigate("EditCount")}
                    />
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
        shadowRadius: 3.85,
    },
});
