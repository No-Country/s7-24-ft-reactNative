import { onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import UserContext from "../../context/UserContext";
import { getUserPerId } from "../../controllers/user.controller";
import { getDataDB } from "../../services/getDataDB.services";
import NoUsers from "./components/NoUsers";
import UserInfo from "./components/UserInfo";

const Chats = () => {
    const [users, setUsers] = useState<any>([]);
    const { state } = useContext(UserContext);

    useEffect(() => {
        const collectionUser = getDataDB("chats");
        const q = query(collectionUser, orderBy("createdAt", "desc"));

        async function getSessionId() {
            const user = await getUserPerId(state.id);

            onSnapshot(q, (QuerySnapshot) => {
                const data = QuerySnapshot.docs
                    .map((doc) => ({
                        user: doc.data().user,
                        userTwo: doc.data().userTwo,
                    }))
                    .filter(
                        (item) =>
                            item.user._id === state.id ||
                            item.userTwo._id === state.id
                    );

                const uniqueData = data.filter(
                    (item, index, self) =>
                        index ===
                        self.findIndex(
                            (t) =>
                                t.user._id === item.user._id &&
                                t.userTwo.id === item.userTwo.id
                        )
                );

                const dataShow = uniqueData.map((item) => {
                    if (item.user._id === state.id) {
                        return { data: item.userTwo, isUser: false };
                    }

                    return { data: item.user, isUser: true };
                });
                console.log(dataShow);

                setUsers(dataShow);
            });
        }
        getSessionId();
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
                            <UserInfo item={item} isTalking={false} />
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
