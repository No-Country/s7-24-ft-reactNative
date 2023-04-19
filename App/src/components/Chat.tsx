import { onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { GiftedChat, IMessage, InputToolbar } from "react-native-gifted-chat";
import UserContext from "../context/UserContext";
import { addDBDoc } from "../services/addUserToDB.services";
import { getDataDB } from "../services/getDataDB.services";

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
		const q = query(collectionUser, orderBy("createdAt", "desc"));

		onSnapshot(q, (QuerySnapshot) => {
			setMessages(
				QuerySnapshot.docs.map((doc) => ({
					_id: doc.data()._id,
					createdAt: doc.data().createdAt.toDate(),
					user: doc.data().user,
					text: doc.data().text,
				})),
			);
		});
	}, []);

	const onSend = useCallback((message: Message[] = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, message),
		);

		const { _id, createdAt, text, user } = message[message.length - 1];
		console.log(message);
		addDBDoc("chats", {
			_id,
			idUser: dataUser.id,
			nameUser: dataUser.name,
			createdAt,
			text,
			user,
		});
	}, []);

	return (
		<GiftedChat
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
				width: "370px",
				height: "300px",
				backgroundColor: "transparent",
			}}
			renderInputToolbar={(props) => (
				<InputToolbar
					{...props}
					containerStyle={{
						position: "absolute",
						bottom: "81px",
						height: "43px",
					}}
				/>
			)}
		/>
	);
};

export default Chat;

const styles = StyleSheet.create({});