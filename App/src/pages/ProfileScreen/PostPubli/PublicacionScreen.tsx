import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// --------------------------------------------------------------------

import { COLORS } from "../../../constants";
import { LoaderContext } from "../../../context/LoaderContext";
import { addDBDoc } from "../../../services/addUserToDB.services";

// --------------------------------------------------------------------

export const PublicacionScreen = ({ route, navigation }: any) => {
    const { template } = route.params;
    const { setShowLoader }: any = useContext(LoaderContext);

    const publish = async () => {
        setShowLoader(true);

        const idService = await addDBDoc("services", template);

        navigation.navigate("Finalizado", { id: idService, img: template.img });
    };

    return (
        <View style={{ backgroundColor: COLORS.background, height: "100%" }}>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40%",
                    marginTop: 20,
                }}
            >
                <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/listo.svg")}
                />
            </View>
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Text style={{ fontSize: 20, marginBottom: 10 }}>¡Listo!</Text>
                <Text style={{ fontSize: 13, marginBottom: 10 }}>
                    Publicarás gratis por 30 días
                </Text>
            </View>
            <View
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "100%",
                    height: "40%",
                }}
            >
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={publish}
                >
                    <Text style={styles.buttonText}>Publicar</Text>
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 14,
                        textDecorationLine: "underline",
                        marginVertical: 15,
                        color: COLORS.primary,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    Revisar
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 220,
        height: 200,
    },
    buttonContainer: {
        width: 350,
        height: 40,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
    },
});
