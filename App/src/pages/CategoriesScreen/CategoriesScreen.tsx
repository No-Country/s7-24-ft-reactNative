import { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// --------------------------------------------------------------------

import ServiceCard from "../../components/ServiceCard";
import { COLORS } from "../../constants";
import { getServicesPerCategory } from "../../controllers/services.controller";
import ServiceModel from "../../models/services.models";

// --------------------------------------------------------------------

export default function CategoriesScreen({ route, navigation }: any) {
    const { id, name } = route.params;
    const [servicesData, setServicesData] = useState<ServiceModel[]>([]);

    useEffect(() => {
        async function getData() {
            const dataServices = await getServicesPerCategory(id);

            setServicesData(dataServices);
        }

        navigation.setOptions({ title: name });

        getData();
    }, []);

    return (
        <ScrollView style={{ backgroundColor: COLORS.background }}>
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.btnFilter}>
                    <Text style={{ fontSize: 10 }}>Filtrar</Text>
                    <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../../assets/icons/FilterIcon.svg")}
                    />
                </TouchableOpacity>
            </View>
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
    filterContainer: {
        alignItems: "flex-end",
        paddingHorizontal: 24,
        paddingVertical: 10,
    },
    btnFilter: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    categoryTable: {
        marginTop: 10,
        gap: 5,
        paddingVertical: 4,
    },
});
