import { onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { GiftedChat, IMessage, InputToolbar } from "react-native-gifted-chat";
import { addDBDoc } from "../services/addUserToDB.services";
import { dataDB } from "../services/getDataDB.services";

interface User {
	_id: number;
}

interface Message extends IMessage {
	user: User;
}

const Chat = () => {
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: "Hello developer",
				createdAt: new Date(),
				user: {
					_id: 2,
				},
			},
		]);

		const collectionUser = dataDB("chats");
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

		addDBDoc("chats", {
			_id,
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
				_id: 1,
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