import * as ImagePicker from "expo-image-picker";
import {
    collection,
    doc,
    getDocs,
    limit,
    query,
    updateDoc,
    where,
} from "firebase/firestore";

// --------------------------------------------------------------------

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseGetFireStore, FirebaseStorage } from "../firebase/app";

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
            _id: data.id,
        };

        return res;
    });

    return servicesList[0];
}

export async function changeImageUser(userId: string) {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
    });

    if (!result.cancelled) {
        const name = Math.random().toString(36).substring(7);
        const response = await fetch(result.uri);
        const storageRef = ref(FirebaseStorage, `Users/${name}`);
        await uploadBytes(storageRef, await response.blob());
        const url = await getDownloadURL(storageRef);

        const usuariosRef = collection(FirebaseGetFireStore, "users");
        const consulta = query(
            usuariosRef,
            where("id", "==", userId),
            limit(1)
        );

        await getDocs(consulta).then((querySnapshot) => {
            if (!querySnapshot.empty) {
                const docRef = doc(
                    FirebaseGetFireStore,
                    "users",
                    querySnapshot.docs[0].id
                );

                // Actualiza la propiedad "nombre" del documento
                updateDoc(docRef, {
                    photoUrl: url,
                });
            }
        });

        return url;
    }
}
