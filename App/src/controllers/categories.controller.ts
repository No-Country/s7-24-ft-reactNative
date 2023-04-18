import { collection, doc, getDoc, getDocs } from "firebase/firestore";

// --------------------------------------------------------------------

import { FirebaseGetFireStore } from "../firebase/app";
import CategoryModel from "../models/category.models";

// --------------------------------------------------------------------

export async function getCategories() {
    const querySnapshot = await getDocs(
        collection(FirebaseGetFireStore, "categories")
    );

    const categoriesList = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const res = {
            id: doc.id,
            name: data.name,
            img: data.img,
        };
        return res;
    }) as CategoryModel[];

    return categoriesList;
}


export async function getCategoryPerId(catId: string) {
    const docRef = doc(FirebaseGetFireStore, "categories", catId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        const res = {
            id: docSnap.id,
            name: data.name,
        };

        return res;
    } else {
        return "El documento no existe";
    }
}
