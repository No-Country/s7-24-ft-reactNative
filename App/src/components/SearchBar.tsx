import {
    CommonActions,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// --------------------------------------------------------------------

import { COLORS, ROUTES } from "../constants";
import UserContext from "../context/UserContext";
import { getSubCategories } from "../controllers/subCategory.controller";
import SubCategoryModel from "../models/subCategory.models";
import ObjectStyles from "../styles/objects/objects";
import { historySearch } from "../utils/fakeData";

// --------------------------------------------------------------------

const Recommendations = ({ recommendation }: any) => {
    const navigation = useNavigation();
    const activeFilters: any = [];

    const goToTheCategoryScreen = () => {
        activeFilters.push(recommendation.id);

        navigation.dispatch(
            CommonActions.navigate({
                name: ROUTES.CATEGORY,
                params: {
                    id: recommendation.categoryId,
                    filter: activeFilters,
                },
            })
        );
    };

    return (
        <TouchableOpacity
            style={styles.recommendationContainer}
            onPress={goToTheCategoryScreen}
        >
            <Text style={ObjectStyles.fontMain}>{recommendation.name}</Text>
            <Image
                style={{ width: 14, height: 14 }}
                source={require("../assets/icons/XIcon.svg")}
            />
        </TouchableOpacity>
    );
};

const SearchBar = () => {
    const [inputController, setInputController] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [suggestions, setSuggestions] = useState<SubCategoryModel[]>([]);
    const [subCatData, setSubCatData] = useState<SubCategoryModel[]>([]);
    const [showHist, setShowHist] = useState(true);
    const { state } = useContext(UserContext);

    const route = useRoute();

    useEffect(() => {
        async function getData() {
            const data = await getSubCategories();
            setSubCatData(data);
        }

        getData();
    }, []);

    function handleTextChange(newText: any) {
        setInputController(newText);
        if (newText.length === 0) {
            setShowHist(true);
            setSuggestions([]);
        } else {
            setShowHist(false);
            const subCategoriesFilter = subCatData.filter((subCategory) => {
                return subCategory.name
                    .toLowerCase()
                    .startsWith(newText.toLowerCase());
            });
            setSuggestions(subCategoriesFilter);
        }
    }

    return (
        <View style={styles.searchBar}>
            <View
                style={[
                    styles.searchContainer,
                    isFocused && styles.inputFocused,
                ]}
            >
                <TextInput
                    placeholder="Buscar"
                    style={[styles.input, ObjectStyles.fontMain]}
                    value={inputController}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
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
                          <Recommendations recommendation={e} key={i} />
                      ))
                    : suggestions.map((e, i) => (
                          <Recommendations recommendation={e} key={i} />
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
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: COLORS.white,
        filter: "drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.09))",
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: "#49454F",
    },
    recommendations: {
        backgroundColor: COLORS.white,
        position: "absolute",
        width: "100%",
        top: 60,
    },
    input: {
        fontSize: 16,
        width: "100%",
        height: 56,
        outlineWidth: 0,
    },
    inputFocused: {
        borderColor: "#05C883",
        borderWidth: 0.5,
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
