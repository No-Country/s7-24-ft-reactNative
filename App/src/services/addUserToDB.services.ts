import { addDoc, collection } from "firebase/firestore";
import { FirebaseGetFireStore } from "../firebase/app";

interface DocsProps {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    [key: string]: any;
}
export const addDBDoc = async (nameDB: string, entity: DocsProps) => {
    try {
        const docRef = await addDoc(
            collection(FirebaseGetFireStore, nameDB),
            entity
        );
        return docRef.id;
    } catch (error) {
        console.log("error del documento", error);
    }
};
