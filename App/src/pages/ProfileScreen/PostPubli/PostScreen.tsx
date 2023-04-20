import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// --------------------------------------------------------------------

import { BtnPhoto } from "../../../components/BtnPhoto";
import { COLORS } from "../../../constants";

// --------------------------------------------------------------------
export const PostScreen = ({ navigation }: any) => {
    const [imageUri, setImageUri] = useState(null);

    const goToTheCreatePost = () => {
        if (imageUri !== null) {
            navigation.navigate("DetailP", { imgurl: imageUri });
        }
    };

    return (
        <View style={{ backgroundColor: COLORS.background, height: "100%" }}>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70%",
                }}
            >
                {imageUri === null ? (
                    <Image
                        style={styles.icon}
                        source={require("../../../assets/icons/ImagePost.svg")}
                    />
                ) : (
                    <Image style={styles.icon} source={{ uri: imageUri }} />
                )}
            </View>
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        marginBottom: 10,
                        fontFamily: "Main",
                    }}
                >
                    Agregá fotos de tu servicio
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        marginBottom: 10,
                        fontFamily: "Main",
                    }}
                >
                    Asegúrate de que sean de calidad para atraer al público
                </Text>
                <BtnPhoto imageUri={imageUri} setImageUri={setImageUri} />
                <TouchableOpacity
                    style={[
                        styles.buttonContainer,
                        { opacity: imageUri === null ? 0.5 : 1 },
                    ]}
                    onPress={goToTheCreatePost}
                >
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 280,
        height: 300,
    },
    buttonContainer: {
        width: 350,
        height: 40,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: "Main",
    },
});
