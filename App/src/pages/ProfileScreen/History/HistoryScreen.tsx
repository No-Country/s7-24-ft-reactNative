import { Image, StyleSheet, Text, View } from "react-native";

// --------------------------------------------------------------------

import { COLORS, ROUTES } from "../../../constants";

// --------------------------------------------------------------------
export const HistoryScreen = ({ navigation }: any) => {
    return (
        <View style={{ backgroundColor: COLORS.background, height: "100%" }}>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70%",
                }}
            >
                <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/historyImage.svg")}
                />
            </View>
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        marginBottom: 20,
                        fontFamily: "Main",
                    }}
                >
                    Aún no tienes búsquedas recientes
                </Text>
                <Text
                    onPress={() => navigation.navigate(ROUTES.HOME)}
                    style={{
                        fontSize: 12,
                        color: COLORS.primary,
                        textDecorationLine: "underline",
                        fontFamily: "Main",
                    }}
                >
                    Explora los servicios
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 188,
        height: 188,
    },
});
