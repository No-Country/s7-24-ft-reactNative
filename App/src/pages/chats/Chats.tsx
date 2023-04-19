import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import UserContext from "../../context/UserContext";
import { getDataBase } from "../../services/getDataBase.services";
import NoUsers from "./components/NoUsers";
import UserInfo from "./components/UserInfo";
interface Props {
    _id: string;
    avatar?: string;
    name: string;
}
const Chats = () => {
    const [users, setUsers] = useState<Props[]>([]);
    const [idUsers, setIdUsers] = useState<string[]>([]);
    const { state } = useContext(UserContext);

    useEffect(() => {
        const data: Props[] = [];
        const idSet = new Set<string>();
        getDataBase("chats").then((res) => {
            if (res.status && res.result !== null) {
                res.result.forEach((item) => {
                    if (state.id === item.data().user._id) {
                        const idUser = item.data().idUser;
                        if (!idSet.has(idUser)) {
                            idSet.add(idUser);
                            data.push({ _id: idUser, name: item.data().nameUser });
                        }
                    }
                });
                setUsers(data);
            }
        });
    }, []);


    return (
        <View style={styles.container}>
            {users.length === 0 ? (
                <NoUsers />
            ) : (
                <>
                    <FlatList
                        data={users}
                        renderItem={({ item }) => (
                            <UserInfo
                                avatar={item.avatar}
                                id={item._id}
                                name={item.name}
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

        height: "100vh",
        width: "100%",
        backgroundColor: "#F7FCF8",
    }
})
export default Chats;
