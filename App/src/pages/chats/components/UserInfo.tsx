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
import ObjectStyles from "../../../styles/objects/objects";

const deviceWidth = Dimensions.get("window").width;

const UserInfo = ({ item, isTalking }: any) => {
    const navigation = useNavigation();
    const dataChat = {
        id: item.data.id,
        _id: item.data._id,
        name: item.data.name,
        photoUrl: item.data.photoUrl,
    };
    console.log(dataChat);

    console.log(item);
    const goChat = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: ROUTES.CHAT,
                params: {
                    dataUser: dataChat,
                },
            })
        );
    };

    return (
        <TouchableOpacity
            key={item?.data._id}
            style={styles.container}
            onPress={goChat}
        >
            <Image
                source={require("../../../assets/icons/Ellipse.svg")}
                style={{ width: 40, height: 40, borderRadius: 50 }}
            />
            <View>
                <Text style={[styles.text, ObjectStyles.fontMain]}>
                    {item?.data.name}
                </Text>
                <Text
                    style={[
                        styles.text,
                        { fontSize: 8 },
                        ObjectStyles.fontMain,
                    ]}
                >
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
