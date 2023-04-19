import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";

// --------------------------------------------------------------------

import { FirebaseGetFireStore } from "../firebase/app";
import ServiceModel from "../models/services.models";

// --------------------------------------------------------------------

export async function getServices() {
    const querySnapshot = await getDocs(
        collection(FirebaseGetFireStore, "services")
    );
    const servicesList = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const res = {
            id: doc.id,
            img: data.img,
            service: data.service,
            rating: data.rating,
            location: `${data.address} - ${data.numberAddress}`,
            subCatecoryId: data.subCategory,
        };
        return res;
    }) as ServiceModel[];
    return servicesList;
}

export async function getServicesPerCategory(catId: string) {
    const collectionRef = collection(FirebaseGetFireStore, "services");

    const filteredQuery = query(collectionRef, where("category", "==", catId));

    const querySnapshot = await getDocs(filteredQuery);

    const servicesList = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const res = {
            id: doc.id,
            img: data.img,
            service: data.service,
            rating: data.rating,
            location: `${data.address} - ${data.numberAddress}`,
            subCatecoryId: data.subCategory,
        };
        return res;
    }) as ServiceModel[];
    return servicesList;
}

export async function getServicePerId(serId: string) {
    const docRef = doc(FirebaseGetFireStore, "services", serId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        const res = {
            id: docSnap.id,
            img: data.img,
            service: data.service,
            rating: data.rating,
            location: `${data.address} - ${data.numberAddress}`,
            subCatecoryId: data.subCategory,
            description: data.description,
            moreDescription: data.moreDescription,
            userId: data.idUser,
            whats: data.whatsApp,
        };

        return res;
    } else {
        return "El documento no existe";
    }
}
