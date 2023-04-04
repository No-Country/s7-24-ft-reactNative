import { Auth, UserCredential } from "firebase/auth";
import { FirebaseGetAuth } from "../firebase/app";

export const applicationInfo = async (
	emailUser: string,
	passwordUser: string,

	method: (
		auth: Auth,
		email: string,
		password: string,
	) => Promise<UserCredential>,
) => {
	try {
		const response = await method(FirebaseGetAuth, emailUser, passwordUser);

		const { uid, email } = response.user;
		return {
			ok: true,
			id: uid,
			email: email,
			message: "exito",
		};
	} catch (error) {
		console.error(error);
		return {
			ok: false,
			id: "",
			email: "",
			message: "Algo salio mal",
		};
	}
};
