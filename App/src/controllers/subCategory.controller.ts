import { doc, getDoc } from "firebase/firestore";

// --------------------------------------------------------------------

import { FirebaseGetFireStore } from "../firebase/app";

// --------------------------------------------------------------------

export async function getSubCategoryPerId(subCatecoryId: string) {
    const docRef = doc(FirebaseGetFireStore, "subCategories", subCatecoryId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        const res = {
            id: docSnap.id,
            name: data.name,
            categoryId: data.category.id,
        };

        return res;
    } else {
        return "El documento no existe";
    }
}
