import React, { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import UserContext from "../../context/UserContext";
import { getDataBase } from "../../services/getDataBase.services";
import NoUsers from "./components/NoUsers";
import UserInfo from "./components/UserInfo";
interface Props {
    _id: string;
    avatar: string;
    name: string;
}
const Chats = () => {
    const [users, setUsers] = useState<Props[]>([]);
    const { state } = useContext(UserContext);

    useEffect(() => {
        // rome-ignore lint/suspicious/noExplicitAny: <explanation>
        const data: any = [];

        getDataBase("chats").then((res) => {
            if (res.status && res.result !== null) {
                res.result.forEach((item) => {
                    if (state.id === item.data().user._id) {
                        data.push(item.data().user);
                    }
                });

                setUsers(data);
            }
        });
    }, []);

    console.log(users);

    return (
        <View>
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

export default Chats;
