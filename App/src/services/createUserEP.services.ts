import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseGetAuth } from "../firebase/dist/app";
import Form from "../models/login.models";

export const createUserEP = async (user: Form) => {
	try {
		const response = createUserWithEmailAndPassword(
			FirebaseGetAuth,
			user.email,
			user.password,
		);

		const { uid } = (await response).user;

		return {
			ok: true,
			id: uid,
		};
	} catch (error) {
		return {
			ok: false,
			id: "",
		};
	}
};
