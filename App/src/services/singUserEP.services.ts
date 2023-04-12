import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseGetAuth } from "../firebase/app";
import Form from "../models/login.models";

export const singUserEP = async (user: Form) => {
    try {
        const response = signInWithEmailAndPassword(
            FirebaseGetAuth,
            user.email,
            user.password
        );

        const { uid } = (await response).user;

        return {
            ok: true,
            id: uid,
        };
    } catch (error) {
        return {
            ok: true,
            id: "",
        };
    }
};
