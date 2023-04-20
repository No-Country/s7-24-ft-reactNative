import { useContext, useEffect, useState } from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

// --------------------------------------------------------------------

import { onAuthStateChanged } from "firebase/auth";
import { CategoryCard, SearchBar, ServiceCard } from "../../components";
import { COLORS } from "../../constants";
import { LoaderContext } from "../../context/LoaderContext";
import UserContext from "../../context/UserContext";
import { getCategories } from "../../controllers/categories.controller";
import { getServices } from "../../controllers/services.controller";
import { FirebaseGetAuth } from "../../firebase/app";
import CategoryModel from "../../models/category.models";
import ServiceModel from "../../models/services.models";
import ObjectStyles from "../../styles/objects/objects";
import { NavigateProp } from "../../types/types";
// --------------------------------------------------------------------

export default function HomeScreen({ navigation }: NavigateProp) {
    const [categoriesData, setCategoriesData] = useState<CategoryModel[]>([]);
    const [servicesData, setServicesData] = useState<ServiceModel[]>([]);
    const { setShowLoader }: any = useContext(LoaderContext);
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        onAuthStateChanged(FirebaseGetAuth, (user) => {
            if (user) {
                dispatch({
                    type: "AUTH",
                    payload: {
                        id: user.uid,
                        email: user.email || "",
                        name: user.displayName || "",
                    },
                });
            } else {
                navigation.navigate("Login");
            }
        });
    }, []);

    useEffect(() => {
        async function getData() {
            const dataCat = await getCategories();
            const dataServices = await getServices();

            setCategoriesData(dataCat);
            setServicesData(dataServices);

            setTimeout(() => {
                setShowLoader(false);
            }, 3000);
        }

        getData();
    }, []);

    return (
        <ScrollView style={{ backgroundColor: COLORS.background }}>
            <SearchBar />
            <View style={styles.boxBrownContainer}>
                <Image
                    style={styles.boxBrownImage}
                    source={require("../../assets/images/SettingsHome.svg")}
                />
                <Text style={[styles.boxBrownText, ObjectStyles.fontMain]}>
                    Todo lo que buscas, en un {"\n"} solo lugar.
                </Text>
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={[{ fontSize: 20 }, ObjectStyles.fontMain]}>
                    Categorías
                </Text>
                <FlatList
                    style={styles.categoryTable}
                    data={categoriesData}
                    renderItem={({ item }) => <CategoryCard data={item} />}
                    numColumns={2}
                    ItemSeparatorComponent={() => (
                        <View style={{ margin: 10 }} />
                    )}
                />
                <Text
                    style={[
                        { fontSize: 15, marginTop: 20 },
                        ObjectStyles.fontMain,
                    ]}
                >
                    Más recomendados
                </Text>
                <FlatList
                    style={styles.categoryTable}
                    data={servicesData.slice(0, 4)}
                    renderItem={({ item }) => <ServiceCard data={item} />}
                    ItemSeparatorComponent={() => (
                        <View style={{ margin: 5 }} />
                    )}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    boxBrownContainer: {
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 40,
        minHeight: 145,
    },
    boxBrownText: {
        color: "#000",
        fontSize: 20,
        margin: "auto",
        fontWeight: "500",
    },
    boxBrownImage: {
        position: "absolute",
        left: 0,
        top: 7,
        width: 136,
        height: 131,
        zIndex: -1,
    },
    categoriesContainer: {
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 100,
    },
    categoryTable: {
        marginTop: 20,
        gap: 5,
        paddingVertical: 4,
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: "#49454F",
    },
});
