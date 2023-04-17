import { collection, doc, getDoc, getDocs } from "firebase/firestore";

// --------------------------------------------------------------------

import { FirebaseGetFireStore } from "../firebase/app";
import SubCategoryModel from "../models/subCategory.models";

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

export async function getSubCategories() {
    const querySnapshot = await getDocs(
        collection(FirebaseGetFireStore, "subCategories")
    );

    const subCategoriesList = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const res = {
            id: doc.id,
            name: data.name,
            categoryId: data.category.id,
        };
        return res;
    }) as SubCategoryModel[];

    return subCategoriesList;
}

export async function getSubCategoriesPerMainCategory(categoryId: any) {
    const data = await getSubCategories();

    return data.filter((subCat) => subCat.categoryId === categoryId);
}
