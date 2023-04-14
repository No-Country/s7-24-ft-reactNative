import { Text, View } from "react-native";
import Chat from "../../components/Chat";
// --------------------------------------------------------------------

export default function MessagesScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Messages Screen</Text>
			<Chat />
			{/* <Chats /> */}
		</View>
	);
}
