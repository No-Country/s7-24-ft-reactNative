import { useRoute } from "@react-navigation/native";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

// --------------------------------------------------------------------

import { COLORS } from "../constants";
import { FirebaseGetFireStore } from "../firebase/app";
import { historySearch } from "../utils/fakeData";

// --------------------------------------------------------------------
interface SubCategory {
    id: string;
    name: string;
}

const Recommendations = ({ recommendation }: any) => {
    return (
        <View style={styles.recommendationContainer}>
            <Text>{recommendation}</Text>
            <Image
                style={{ width: 14, height: 14 }}
                source={require("../assets/icons/XIcon.svg")}
            />
        </View>
    );
};

const SearchBar = () => {
    const [inputController, setInputController] = useState("");
    const [recommendations, setRecomendations] = useState<SubCategory[]>([]);
    const [subCategoriesData, setSubCategoriesData] = useState<SubCategory[]>(
        []
    );
    const [showHist, setShowHist] = useState(true);
    const route = useRoute();

    useEffect(() => {
        getSubCategories();
    }, []);

    async function getSubCategories() {
        const querySnapshot = await getDocs(
            collection(FirebaseGetFireStore, "subCategories")
        );
        const categoriesList = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            const res = {
                id: doc.id,
                name: data.name,
            };
            return res;
        }) as SubCategory[];
        setSubCategoriesData(categoriesList);
    }

    function handleTextChange(newText: any) {
        setInputController(newText);
        if (newText.length === 0) {
            setShowHist(true);
            setRecomendations([]);
        } else {
            setShowHist(false);
            const subCategoriesFilter = subCategoriesData.filter(
                (subCategory) => {
                    return subCategory.name
                        .toLowerCase()
                        .startsWith(newText.toLowerCase());
                }
            );
            setRecomendations(subCategoriesFilter);
        }
    }

    return (
        <View style={styles.searchBar}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Buscar"
                    style={{ fontSize: 16, width: "100%" }}
                    value={inputController}
                    onChangeText={handleTextChange}
                />
                <Image
                    style={styles.icon}
                    source={require("../assets/icons/SearchIcon.svg")}
                />
            </View>
            <View style={styles.recommendations}>
                {showHist
                    ? route.name !== "Home Tab" &&
                      historySearch.map((e, i) => (
                          <Recommendations recommendation={e.name} key={i} />
                      ))
                    : recommendations.map((e, i) => (
                          <Recommendations recommendation={e.name} key={i} />
                      ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        marginBottom: 24,
        marginHorizontal: 24,
        zIndex: 2,
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 5,
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: "#49454F",
    },
    recommendations: {
        paddingTop: 10,
        backgroundColor: COLORS.white,
        position: "absolute",
        width: "100%",
        top: 40,
    },
    recommendationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomColor: COLORS.shadows,
        borderBottomWidth: 1,
    },
});

export default SearchBar;
