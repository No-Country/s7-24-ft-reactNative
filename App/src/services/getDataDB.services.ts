import { collection } from "firebase/firestore";
import { FirebaseGetFireStore } from "../firebase/app";

export const dataDB = (nameDB: string) =>
	collection(FirebaseGetFireStore, nameDB);
