import { collection, getDocs } from "firebase/firestore";
import { FirebaseGetFireStore } from "../firebase/app";

export const getDataBase = async (nameEntity: string) => {
	try {
		const result = await getDocs(collection(FirebaseGetFireStore, nameEntity));

		return {
			status: true,
			result,
		};
	} catch (error) {
		return {
			status: true,
			result: null,
		};
	}
};
