import { FirebaseGetFireStore } from "../firebase/app"
import { addDoc, collection } from "firebase/firestore"
interface entityProps {[key:string]:any}

export const addServiceToDB = async (nameDb : string, entity:entityProps) => {
 try{const doc = await addDoc(collection(FirebaseGetFireStore, nameDb), entity)} catch(err){console.log(err)}
}