import UserModel from "./userChatModel.model";
interface ChatProps {
	id: string;
	text: string;
	createdAt: Date;
	user: UserModel;
}

export default ChatProps;
