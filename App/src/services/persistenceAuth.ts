import {
	browserSessionPersistence,
	setPersistence,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseGetAuth } from "../firebase/dist/app";

export const persistenceAuth = () => {
	setPersistence(FirebaseGetAuth, browserSessionPersistence)
		.then(() => {
			return signInWithEmailAndPassword;
		})
		.catch((error) => {
			console.log(error);
		});
};
