import { Text, View } from "react-native";
import Chats from "../chats/Chats";
// --------------------------------------------------------------------

export default function MessagesScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Messages Screen</Text>
			{/* 			<Chat /> */}
			<Chats />
		</View>
	);
}
