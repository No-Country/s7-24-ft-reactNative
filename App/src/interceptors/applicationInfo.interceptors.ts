import { Auth, UserCredential, updateProfile } from "firebase/auth";
import { FirebaseGetAuth } from "../firebase/app";
export const applicationInfo = async (
	emailUser: string,
	passwordUser: string,
	register: boolean,
	method: (
		auth: Auth,
		email: string,
		password: string,
	) => Promise<UserCredential>,
) => {
	try {
		const response = await method(FirebaseGetAuth, emailUser, passwordUser);

		const { uid, email, photoURL } = response.user;
		const name = email?.split("@") || "";

		if (register) {
			await updateProfile(response.user, { displayName: name[0] });
		}

		return {
			ok: true,
			id: uid,
			email: email,
			name: name[0],
			photoURL,
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
