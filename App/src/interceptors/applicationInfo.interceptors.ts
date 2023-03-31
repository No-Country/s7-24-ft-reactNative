import { Auth, UserCredential } from "firebase/auth";
import { FirebaseGetAuth } from "../firebase/app";
export const applicationInfo = async (
	email: string,
	password: string,

	method: (
		auth: Auth,
		email: string,
		password: string,
	) => Promise<UserCredential>,
) => {
	try {
		const response = await method(FirebaseGetAuth, email, password);

		const { uid } = (await response).user;

		return {
			ok: true,
			id: uid,
		};
	} catch (error) {
		console.error(error);
		return {
			ok: true,
			id: "",
		};
	}
};
