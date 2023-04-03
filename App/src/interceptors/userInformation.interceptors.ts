export const setUserInformation = (
	auth: string,
	email: string,
	password: string,
) => {
	localStorage.setItem(
		"userInformation",
		JSON.stringify({
			auth,
			email,
			password,
		}),
	);
};

export const getUserInformation = () => {
	const data = localStorage.getItem("userInformation");
	if (data !== null) {
		const user = Object(JSON.parse(data));
		return user;
	}

	return data;
};
