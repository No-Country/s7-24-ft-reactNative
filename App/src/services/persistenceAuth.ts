import {
    browserSessionPersistence,
    setPersistence,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseGetAuth } from "../firebase/app";

export const persistenceAuth = () => {
    setPersistence(FirebaseGetAuth, browserSessionPersistence)
        .then(() => {
            return signInWithEmailAndPassword;
        })
        .catch((error) => {
            console.log(error);
        });
};
