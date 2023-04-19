import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

// --------------------------------------------------------------------

import { BottomSheetModal, ServiceCard } from "../../components";
import { COLORS } from "../../constants";
import { getCategoryPerId } from "../../controllers/categories.controller";
import { getServicesPerCategory } from "../../controllers/services.controller";
import ServiceModel from "../../models/services.models";

// --------------------------------------------------------------------

export default function CategoriesScreen({ route, navigation }: any) {
    const { id, filter } = route.params;
    const [servicesData, setServicesData] = useState<ServiceModel[]>([]);
    const [catData, setCatDat] = useState<any>({});
    const [activesFilters, setActiveFilters] = useState(filter);

    useEffect(() => {
        async function getData() {
            const dataCat = await getCategoryPerId(id);

            setCatDat(dataCat);
            changeFilters(true, []);
            navigation.setOptions({ title: dataCat.name });
        }

        getData();
    }, []);

    async function getServices() {
        const dataServices = await getServicesPerCategory(id);

        return dataServices;
    }

    async function changeFilters(typeChange: boolean, newFilters: []) {
        const dataServices = await getServices();

        if (typeChange) {
            setActiveFilters([]);
            setServicesData(dataServices);
        } else {
            setActiveFilters([...activesFilters, newFilters]);

            const data = dataServices.filter((e: any) =>
                activesFilters.includes(e.subCatecoryId)
            );

            setServicesData(data);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: COLORS.background }}>
            <BottomSheetModal
                categoryId={id}
                title={catData.name}
                activesFilter={activesFilters}
                changeFilters={changeFilters}
            />
            <View style={{ paddingHorizontal: 24 }}>
                <Text style={{ fontSize: 15 }}>Destacados</Text>
                <FlatList
                    style={styles.categoryTable}
                    data={servicesData}
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
    categoryTable: {
        marginTop: 10,
        gap: 5,
        paddingVertical: 4,
    },
});
