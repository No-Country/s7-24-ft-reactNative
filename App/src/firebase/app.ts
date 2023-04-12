// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhbNBPL2U3GWRKHjEp0E3JPyDcKtSmSW8",
    authDomain: "nc-reactnative.firebaseapp.com",
    projectId: "nc-reactnative",
    storageBucket: "nc-reactnative.appspot.com",
    messagingSenderId: "619182330674",
    appId: "1:619182330674:web:3bdb2d20ec642ad17c7d2b",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseGetAuth = getAuth(FirebaseApp);
export const FirebaseGetFireStore = getFirestore(FirebaseApp);
