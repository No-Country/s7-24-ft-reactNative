import { onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { IMessage } from "react-native-gifted-chat";
import UserContext from "../../context/UserContext";
import { getUserPerId } from "../../controllers/user.controller";
import { getDataDB } from "../../services/getDataDB.services";
import NoUsers from "./components/NoUsers";
import UserInfo from "./components/UserInfo";

interface Props {
    _id: string;
    avatar?: string;
    name: string;
}
interface User {
    _id: number;
    message: string;
    avatar: string;
    isTalking: boolean;
}

interface Message extends IMessage {
    user: User;
}
const Chats = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [users, setUsers] = useState<any>([]);
    const [idUsers, setIdUsers] = useState<string[]>([]);
    const { state } = useContext(UserContext);

    useEffect(() => {

        const data: Props[] = [];
        const idSet = new Set<string>();
        const collectionUser = getDataDB("chats");
        const q = query(collectionUser,
            orderBy("createdAt", "desc")
        );

        const getSession = async () => await getUserPerId(state.id);


        onSnapshot(q, (QuerySnapshot) => {

            const data = QuerySnapshot.docs.map((doc) => ({
                user: doc.data().user,
                userTwo: doc.data().userTwo

            })).filter(item => item.user._id === state.id || item.userTwo.id === getSession().id)

            const uniqueData = data.filter((item, index, self) =>
                index === self.findIndex((t) => (
                    t.user._id === item.user._id && t.userTwo.id === item.userTwo.id
                ))
            );

            setUsers(uniqueData);
        });

    }, []);

    return (
        <View style={styles.container}>
            {users.length === 0 ? (
                <NoUsers />
            ) : (
                <>
                    <FlatList
                        style={styles.chatsContainer}
                        data={users}
                        renderItem={({ item }) => (
                            <UserInfo
                                avatar={item.userTwo.avatar}
                                id={item.userTwo.id}
                                name={item.userTwo.name}
                                isTalking={false}
                            />
                        )}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: "29px",
        height: "100%",
        width: "100%",
        backgroundColor: "#F7FCF8",
    },
    chatsContainer: {
        gap: 10,
    },
});
export default Chats;
