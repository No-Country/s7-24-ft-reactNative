import { addDoc, collection } from "firebase/firestore";
import { FirebaseGetFireStore } from "../firebase/app";

export const addUserToDB = async (
	email: string,
	password: string,
	uid: string,
) => {
	try {
		const docRef = await addDoc(collection(FirebaseGetFireStore, "users"), {
			id: uid,
			photoUrl: "",
			name: "",
			email: email,
			password: password,
			country: "",
			city: "",
			locality: "",
		});
		console.log("id del documento", docRef.id);
	} catch (error) {
		console.log("error del documento", error);
	}
};

interface DocsProps {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: any;
}
export const addDBDoc = async (nameDB: string, entity: DocsProps) => {
	try {
		const docRef = await addDoc(
			collection(FirebaseGetFireStore, nameDB),
			entity,
		);
		console.log("id del documento", docRef.id);
	} catch (error) {
		console.log("error del documento", error);
	}
};
