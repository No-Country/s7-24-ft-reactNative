import {
	browserSessionPersistence,
	setPersistence,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseGetAuth } from "../firebase/dist/app";

export const persistenceAuth = async (email: string, password: string) => {
	try {
		await setPersistence(FirebaseGetAuth, browserSessionPersistence);
		const response = await signInWithEmailAndPassword(
			FirebaseGetAuth,
			email,
			password,
		);
		const user = response.user;
		console.log(user);
		return {
			auth: "success",
			uid: user.uid,
		};
	} catch (error) {
		return {
			auth: "no-authorization",

			uid: "",
		};
	}
};
