import { collection } from "firebase/firestore";
import { FirebaseGetFireStore } from "../firebase/app";

export const getDataDB = (nameDB: string) =>
	collection(FirebaseGetFireStore, nameDB);
