import { CommonActions, useNavigation } from "@react-navigation/native";
import React from "react";
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

// --------------------------------------------------------------------

const dataUser = {
    id: "123",
    name: "Diego",
    photoUrl:
        "data:image/jpeg;base64,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",
};

export default function PublishedBy() {
    const groupId = "JVTHZOnI05oANnQtsiGB63";
    const navigation = useNavigation();

    const openWhatsApp = () => {
        Linking.openURL(`whatsapp://group/${groupId}`);
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
                    source={{
                        uri: "https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg",
                    }}
                />
                <View>
                    <Text style={{ fontSize: 12 }}>Naruto</Text>
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
