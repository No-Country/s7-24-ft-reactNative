import { onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { GiftedChat, IMessage, InputToolbar } from "react-native-gifted-chat";
import UserContext from "../context/UserContext";
import { addDBDoc } from "../services/addUserToDB.services";
import { getDataDB } from "../services/getDataDB.services";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

interface User {
    _id: number;
    message: string;
    avatar: string;
    isTalking: boolean;
}

interface Message extends IMessage {
    user: User;
}

const Chat = ({ route }: any) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const { state } = useContext(UserContext);

    const { dataUser } = route.params;

    useEffect(() => {
        const collectionUser = getDataDB("chats");
        const q = query(collectionUser,
            orderBy("createdAt", "desc")
        );

        onSnapshot(q, (QuerySnapshot) => {
            setMessages(
                QuerySnapshot.docs.map((doc) => ({
                    _id: doc.data().id,
                    createdAt: doc.data().createdAt.toDate(),
                    user: doc.data().user,
                    text: doc.data().text,
                    userTwo: doc.data().userTwo

                })).filter(item => item.userTwo.id === dataUser.id && item.user._id === state.id)
            );
        });

    }, []);

    console.log(messages);


    const onSend = useCallback((message: Message[] = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, message)
        );

        const { _id, createdAt, text, user } = message[message.length - 1];

        addDBDoc("chats", {
            _id,
            createdAt,
            text,
            user,
            userTwo: dataUser
        });

    }, []);

    console.log(messages);

    return (
        <View style={{ height: "100%" }}>
            <View style={styles.containerHeader}>
                <Image
                    source={require("../assets/icons/Ellipse.svg")}
                    style={{ width: 40, height: 40, borderRadius: 50 }}
                />
                <View>
                    <Text style={styles.text}>{dataUser.name}</Text>
                    <Text style={[styles.text, { fontSize: 8 }]}>
                        {true ? "Conectado" : "Ausente"}
                    </Text>
                </View>
            </View>
            <GiftedChat
                placeholder="Escribe un mensaje..."
                messages={messages}
                onSend={(message) => onSend(message)}
                user={{
                    _id: state.id,
                    avatar: state.photoUrl,
                    name: state.name,
                }}
                showAvatarForEveryMessage={false}
                showUserAvatar={false}
                messagesContainerStyle={{
                    width: deviceWidth,
                    height: deviceHeight - 200,
                }}
                renderInputToolbar={(props) => (
                    <View
                        style={{
                            height: 35,
                            width: deviceWidth - 20,
                            marginHorizontal: 10,
                            position: "absolute",
                            bottom: 20,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={require("../assets/icons/PlusChat.svg")}
                            style={{ width: 24, height: 24 }}
                        />
                        <InputToolbar
                            {...props}
                            containerStyle={{
                                position: "relative",
                                backgroundColor: "#E7E4E4",
                                borderRadius: 10,
                            }}
                        />
                        <Image
                            source={require("../assets/icons/VoiceChat.svg")}
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    containerHeader: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        width: deviceWidth - 48,
        marginHorizontal: 24,
        borderColor: "#00000010",
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 17,
        fontFamily: "Main",
        textTransform: "capitalize",
    },
});
