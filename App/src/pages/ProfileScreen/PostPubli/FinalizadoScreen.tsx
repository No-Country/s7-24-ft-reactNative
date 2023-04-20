import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useContext, useEffect } from "react";

// --------------------------------------------------------------------

import { COLORS, ROUTES } from "../../../constants";
import { LoaderContext } from "../../../context/LoaderContext";

// --------------------------------------------------------------------

export const FinalizadoScreen = ({ route, navigation }: any) => {
    const { setShowLoader }: any = useContext(LoaderContext);
    const { id, img } = route.params;

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    }, []);

    return (
        <View
            style={{
                height: "100%",
                backgroundColor: COLORS.background,
                position: "relative",
            }}
        >
            <View
                style={{
                    backgroundColor: COLORS.primary,
                    height: "40%",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ fontSize: 16, color: COLORS.white }}>
                    ¡Tu servicio se publicó con éxito!
                </Text>
                <Image style={styles.icon} source={{ uri: img }} />
            </View>

            <View
                style={{
                    height: "40%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    paddingHorizontal: 30,
                }}
            >
                <Text style={{ fontSize: 16, textAlign: "center" }}>
                    Tu servicio pronto empezará a traer clientes, mantén
                    activadas las notificaciones.
                </Text>
            </View>

            <View
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() =>
                        navigation.navigate(ROUTES.SERVICE, {
                            id,
                            subCatName: "Servicio Creado",
                        })
                    }
                >
                    <Text style={styles.buttonText}>Ver publicación</Text>
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 14,
                        textDecorationLine: "underline",
                        marginVertical: 15,
                        color: COLORS.primary,
                    }}
                    onPress={() => navigation.navigate("Home")}
                >
                    Ir a la home
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 120,
        height: 120,
        borderRadius: 100,
        position: "absolute",
        top: 220,
        left: 0,
        bottom: 0,
        right: 0,
        margin: "auto",
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
