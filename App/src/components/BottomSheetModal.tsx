import React, { useEffect, useRef, useState } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BottomSheet from "react-native-raw-bottom-sheet";

// --------------------------------------------------------------------
import { COLORS } from "../constants";
import { getSubCategoriesPerMainCategory } from "../controllers/subCategory.controller";
import SubCategoryModel from "../models/subCategory.models";
import ObjectStyles from "../styles/objects/objects";

// --------------------------------------------------------------------

const deviceHeight = Dimensions.get("window").height;

function BottomSheetContent({
    title,
    subCatData,
    activesFilter,
    changeFilters,
}: any) {
    const [newsFilters, setNewsFilters] = useState<any[]>([]);

    function pushNewFilter(id: string) {
        if (!newsFilters.some((elem: any) => elem.includes(id))) {
            setNewsFilters([...newsFilters, id]);
        } else {
            setNewsFilters(newsFilters.filter((elem) => elem !== id));
        }
    }

    function aplicar() {
        changeFilters(2, newsFilters);
    }

    return (
        <View style={styles.bottomSheetContainer}>
            <View style={styles.bottomSheetHeader}>
                <Text style={{ fontSize: 20, fontFamily: "Main" }}>
                    Filtrar
                </Text>
                <TouchableOpacity onPress={() => changeFilters(1, [])}>
                    <Text style={{ fontSize: 12, fontFamily: "Main" }}>
                        Restablecer
                    </Text>
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    fontWeight: "600",
                    marginTop: 30,
                    marginLeft: 5,
                    fontFamily: "Main",
                }}
            >
                {title}
            </Text>
            <View style={styles.subCategoriesContainer}>
                {subCatData.map((e: any) => {
                    return (
                        <TouchableOpacity
                            onPress={() => pushNewFilter(e.id)}
                            style={[
                                styles.item,
                                {
                                    backgroundColor: activesFilter.some(
                                        (elem: any) => elem.includes(e.id)
                                    )
                                        ? COLORS.primary
                                        : newsFilters.some((elem: any) =>
                                              elem.includes(e.id)
                                          )
                                        ? COLORS.secondary
                                        : COLORS.white,
                                },
                            ]}
                            key={e.id}
                        >
                            <Text
                                style={{
                                    color: activesFilter.some((elem: any) =>
                                        elem.includes(e.id)
                                    )
                                        ? "#fff"
                                        : "#000",
                                    fontFamily: "Main",
                                }}
                            >
                                {e.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <TouchableOpacity
                onPress={aplicar}
                style={[ObjectStyles.bottomForm, { marginTop: 15 }]}
            >
                <Text style={styles.btnText}>Aplicar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default function BottomSheetModal({
    categoryId,
    activesFilter,
    title,
    changeFilters,
}: any) {
    const refRBSheet = useRef(null);
    const [subCatData, setSubCatData] = useState<SubCategoryModel[]>([]);

    useEffect(() => {
        async function getData() {
            const data = await getSubCategoriesPerMainCategory(categoryId);
            setSubCatData(data);
        }

        getData();
    }, []);

    return (
        <View style={styles.filterContainer}>
            <TouchableOpacity
                style={styles.btnFilter}
                onPress={() => refRBSheet.current?.open()}
            >
                <Text style={{ fontSize: 10, fontFamily: "Main" }}>
                    Filtrar
                </Text>
                <Image
                    style={{ width: 10, height: 10 }}
                    source={require("../assets/icons/FilterIcon.svg")}
                />
            </TouchableOpacity>
            <BottomSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={deviceHeight * 0.45}
                openDuration={1000}
                closeDuration={1000}
                customStyles={{
                    wrapper: {
                        backgroundColor: "#FFFFFF60",
                    },
                    draggableIcon: {
                        backgroundColor: "#8C8C8C",
                    },
                    container: {
                        borderRadius: 20,
                    },
                }}
            >
                <BottomSheetContent
                    title={title}
                    subCatData={subCatData}
                    activesFilter={activesFilter}
                    changeFilters={changeFilters}
                />
            </BottomSheet>
        </View>
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
        filter: "drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.09))",
    },
    bottomSheetContainer: {
        width: "100%",
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
    bottomSheetHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    subCategoriesContainer: {
        marginTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: 5,
        rowGap: 10,
    },
    item: {
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 10,
        width: "auto",
        boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    },
    btnText: {
        fontSize: 15,
        lineHeight: 39,
        color: COLORS.white,
        fontFamily: "Main",
    },
});
