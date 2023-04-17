import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import UserContext from "../../context/UserContext";
import { getDataBase } from "../../services/getDataBase.services";
const Chats = () => {
	const [users, setUsers] = useState([]);
	const { state } = useContext(UserContext);

	useEffect(() => {
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		const data: any = [];

		getDataBase("chats").then((res) => {
			if (res.status && res.result !== null) {
				res.result.forEach((item) => {
					console.log(item.data().user._id, state.id);
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
			<FlatList data={users} renderItem={({ item }) => <Text>item</Text>} />
		</View>
	);
};

export default Chats;
