import { collection, getDocs, query, where } from "firebase/firestore";

// --------------------------------------------------------------------

import { FirebaseGetFireStore } from "../firebase/app";

// --------------------------------------------------------------------

export async function getUserPerId(userId: string) {
    const collectionRef = collection(FirebaseGetFireStore, "users");

    const filteredQuery = query(collectionRef, where("id", "==", userId));

    const querySnapshot = await getDocs(filteredQuery);

    const servicesList = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const res = {
            id: doc.id,
            name: data.name,
            photoUrl: data.photoUrl,
        };

        return res;
    });

    return servicesList[0];
}
