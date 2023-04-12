interface MessageModel {
	_id: number;
	text: string;
	createdAt: Date;
	user: {
		_id: number;
		name: string;
		avatar: string;
	};
}
