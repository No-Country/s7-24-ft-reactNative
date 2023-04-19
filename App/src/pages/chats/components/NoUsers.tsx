import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ObjectStyles from "../../../styles/objects/objects";
const NoUsers = ({ navigation }: any) => {
    return (
        <View style={[ObjectStyles.flexBox, { marginHorizontal: 24 }]}>
            <Image
                style={styles.img}
                source={require("../../../assets/icons/chatIcon.svg")}
            />
            <Text style={styles.Title}>Aun no tienes mensajes</Text>
            <Text style={styles.text}>
                Envía tu primer mensaje. Encontraras todas tus conversaciones
                aquí
            </Text>
            <TouchableOpacity>
                <Text style={[ObjectStyles.link, styles.linkChat]}>
                    Explore los servicios
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export const styles = StyleSheet.create({
    img: {
        width: 254,
        height: 221,
        marginBottom: 127,
    },

    Title: {
        fontSize: 16,
        color: "#525252",
    },
    text: {
        marginTop: 12,
        fontSize: 12,
        color: "#525252",
        textAlign: "center",
    },
    linkChat: {
        marginTop: 12,
    },
});

export default NoUsers;
