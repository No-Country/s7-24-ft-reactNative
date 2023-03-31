import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseGetAuth } from "../firebase/dist/app";
import Form from "../models/login.models";

export const createUserEP = (user: Form) => {
	createUserWithEmailAndPassword(FirebaseGetAuth, user.email, user.password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			const errorCode = "Error 404";
			const errorMessage = "Error al autenticar el usuario";
			console.log(errorCode, errorMessage);
		});
};
