import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// --------------------------------------------------------------------

import { COLORS, ROUTES } from "../constants";
import { getUserPerId } from "../controllers/user.controller";

// --------------------------------------------------------------------

export default function PublishedBy({ userId, whats }: any) {
    const [dataUser, setDataUser] = useState<any>(null);
    const navigation = useNavigation();

    useEffect(() => {
        async function getData() {
            const userData = await getUserPerId(userId);
            setDataUser(userData);
        }
        getData();
    }, [userId]);

    const openWhatsApp = () => {
        Linking.openURL(`whatsapp://send?phone=${whats}`);
    };

    const createNewChat = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: ROUTES.CHAT,
                params: { dataUser },
            })
        );
    };

    return (
        <View style={styles.publishByContainer}>
            <Text style={{ color: "#1C1B1F" }}>Publicado por:</Text>
            <View style={styles.publishedByHeader}>
                <Image
                    style={{ width: 25, height: 25, borderRadius: 22 }}
                    source={
                        dataUser?.photoUrl == ""
                            ? require("../assets/icons/Ellipse.svg")
                            : { uri: dataUser?.photoUrl }
                    }
                />
                <View>
                    <Text style={{ fontSize: 12 }}>{dataUser?.name}</Text>
                    <Text style={{ fontSize: 8 }}>
                        Miembro de Servis desde 20221
                    </Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.btnMessage}
                    onPress={createNewChat}
                >
                    <Text style={{ color: "#000", textAlign: "center" }}>
                        Mensaje
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnWhatsApp}
                    onPress={openWhatsApp}
                >
                    <Text style={{ color: "#fff" }}>WhatsApp</Text>
                    <Image
                        style={{ width: 18, height: 18 }}
                        source={require("../assets/icons/WhatsAppIcon.svg")}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.btnToReport}>Denunciar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    publishByContainer: {
        marginTop: 30,
        paddingVertical: 25,
        borderTopWidth: 2,
        borderTopColor: "#817A7Aaa",
    },
    publishedByHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginTop: 10,
    },
    btnToReport: {
        textDecorationLine: "underline",
        textAlign: "center",
        marginTop: 25,
    },
    btnWhatsApp: {
        paddingVertical: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        width: "50%",
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
    },
    btnMessage: {
        paddingVertical: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        width: "50%",
    },
    btnContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
});
