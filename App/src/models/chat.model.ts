interface ChatProps {
	id: string;
	text: string;
	createdAt: Date;
	user: {
		id: string;
		name: string;
		avatar: string;
	};
}

export default ChatProps;
