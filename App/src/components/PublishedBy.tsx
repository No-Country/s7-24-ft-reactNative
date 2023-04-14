import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// --------------------------------------------------------------------

// --------------------------------------------------------------------

export default function PublishedBy() {
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
                <TouchableOpacity style={styles.btnMessage}>
                    <Text style={{ color: "#B3261E", textAlign: "center" }}>
                        Mensaje
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnWhatsApp}>
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
        backgroundColor: "#B3261E",
        borderRadius: 5,
        width: "50%",
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
    },
    btnMessage: {
        paddingVertical: 10,
        backgroundColor: "#F9DEDC",
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
