import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "your-api-key",
	authDomain: "your-auth-domain",
	projectId: "your-project-id",
	storageBucket: "your-storage-bucket",
	messagingSenderId: "your-messaging-sender-id",
	appId: "your-app-id",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseGetAuth = getAuth(FirebaseApp);
export const FirebaseGetFireStore = getFirestore(FirebaseApp);
