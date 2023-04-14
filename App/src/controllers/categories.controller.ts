import { collection, getDocs } from "firebase/firestore";

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
