import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import UserContext from "../context/UserContext";

export const LogoProfile = () => {
    const { state } = useContext(UserContext);

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                marginVertical: 25,
                paddingLeft: 25,
            }}
        >
            <Image
                style={styles.icon}
                source={require("../assets/icons/Ellipse.svg")}
            />
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
                Hola, {state.name}!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
});
