import { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

// --------------------------------------------------------------------

import { BottomSheetModal, ServiceCard } from "../../components";
import { COLORS } from "../../constants";
import { LoaderContext } from "../../context/LoaderContext";
import { getCategoryPerId } from "../../controllers/categories.controller";
import { getServicesPerCategory } from "../../controllers/services.controller";
import ServiceModel from "../../models/services.models";

// --------------------------------------------------------------------

let allServ: any;

export default function CategoriesScreen({ route, navigation }: any) {
    const { id, filter } = route.params;
    const [servicesData, setServicesData] = useState<ServiceModel[]>([]);
    const [catData, setCatDat] = useState<any>({});
    const [activesFilters, setActiveFilters] = useState(filter);
    const { setShowLoader }: any = useContext(LoaderContext);

    useEffect(() => {
        async function getData() {
            const dataCat = await getCategoryPerId(id);
            allServ = await getServicesPerCategory(id);
            setCatDat(dataCat);

            if (filter.length == 0) {
                changeFilters(0, []);
            } else {
                changeFilters(2, []);
            }

            navigation.setOptions({ title: dataCat.name });

            setTimeout(() => {
                setShowLoader(false);
            }, 1000);
        }

        getData();
    }, []);

    async function changeFilters(typeChange: number, newFilters: []) {
        if (typeChange == 0) {
            setServicesData(allServ);
        }
        if (typeChange == 1) {
            setActiveFilters([]);
            setServicesData(allServ);
        }
        if (typeChange == 2) {
            const filtro = [...activesFilters, ...newFilters];

            let uniqueArray = filtro.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });

            setActiveFilters(uniqueArray);

            const data = allServ.filter((e: any) =>
                uniqueArray.includes(e.subCatecoryId)
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
