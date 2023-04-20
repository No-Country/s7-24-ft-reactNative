import { CommonActions, useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { ROUTES } from "../../../constants";
import UserModel from "../../../models/userChatModel.model";

const deviceWidth = Dimensions.get("window").width;

const UserInfo = ({ name, avatar, id, isTalking }: UserModel) => {
    const navigation = useNavigation();

    const goChat = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: ROUTES.CHAT,
                params: {
                    dataUser: {
                        id: id,
                        name: name,
                        photoUrl: avatar,
                    },
                },
            })
        );
    };

    return (
        <TouchableOpacity key={id} style={styles.container} onPress={goChat}>
            <Image
                source={require("../../../assets/icons/Ellipse.svg")}
                style={{ width: 40, height: 40, borderRadius: 50 }}
            />
            <View>
                <Text style={styles.text}>{name}</Text>
                <Text style={[styles.text, { fontSize: 8 }]}>
                    {true ? "Conectado" : "Ausente"}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default UserInfo;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        backgroundColor: "#FFFFFF",
        filter: "drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15))",
        width: deviceWidth - 48,
        marginHorizontal: 24,
    },
    text: {
        fontSize: 17,
        fontFamily: "Main",
        textTransform: "capitalize",
    },
});
