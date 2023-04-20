import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import UserContext from "../context/UserContext";
import { getUserPerId } from "../controllers/user.controller";

export const LogoProfile = () => {
    const { state } = useContext(UserContext);
    const [dataUser, setDataUser] = useState<any>(null);

    useEffect(() => {
        async function getData() {
            const userData = await getUserPerId(state.id);

            setDataUser(userData);
        }
        getData();
    }, [state.id]);

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
                source={
                    dataUser?.photoUrl == ""
                        ? require("../assets/icons/Ellipse.svg")
                        : { uri: dataUser?.photoUrl }
                }
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
                Hola, {dataUser?.name}!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
});
