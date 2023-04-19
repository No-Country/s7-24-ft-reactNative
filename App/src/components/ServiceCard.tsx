import { CommonActions, useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// --------------------------------------------------------------------

import { useEffect, useState } from "react";
import { COLORS, ROUTES } from "../constants";
import { LoaderContext } from "../context/LoaderContext";
import { getSubCategoryPerId } from "../controllers/subCategory.controller";
import ServiceModel from "../models/services.models";
import SubCategoryModel from "../models/subCategory.models";

// --------------------------------------------------------------------

function StarIcon() {
    return (
        <Image
            style={{ width: 10, height: 10 }}
            source={require("../assets/icons/StarIcon.svg")}
        />
    );
}

export default function ServiceCard({ data }: { data: ServiceModel }) {
    const [nameSubCategory, setNameSubCategory] = useState("");
    const { setShowLoader }: any = useContext(LoaderContext);
    const navigation = useNavigation();

    useEffect(() => {
        async function getData() {
            const subCategory = (await getSubCategoryPerId(
                data.subCatecoryId
            )) as SubCategoryModel;
            setNameSubCategory(subCategory.name);
        }
        getData();
    }, []);

    const goToTheServiceScreen = () => {
        setShowLoader(true);

        navigation.dispatch(
            CommonActions.navigate({
                name: ROUTES.SERVICE,
                params: {
                    id: data.id,
                    subCatName: nameSubCategory,
                },
            })
        );
    };

    return (
        <TouchableOpacity
            style={styles.serviceCardContainer}
            onPress={goToTheServiceScreen}
        >
            <Image style={styles.img} source={{ uri: data.img }} />
            <View style={styles.body}>
                <View style={styles.cardHeaderContainer}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>
                        {nameSubCategory}
                    </Text>
                    <View style={styles.ratingContainer}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <Text style={{ fontSize: 7, fontWeight: "500" }}>
                            {data.rating}
                        </Text>
                    </View>
                </View>
                <Text style={{ fontSize: 12 }}>{data.service}</Text>
                <View style={styles.centerElements}>
                    <Image
                        style={{ width: 6, height: 8 }}
                        source={require("../assets/icons/LocationIcon.svg")}
                    />
                    <Text style={{ fontSize: 10 }}>{data.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    serviceCardContainer: {
        flexDirection: "row",
        padding: 5,
        overflow: "hidden",
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.27,
        elevation: 4,
        shadowColor: COLORS.shadows,
        backgroundColor: COLORS.white,
        shadowOffset: {
            width: 2,
            height: 2,
        },
    },
    centerElements: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    img: {
        borderRadius: 5,
        width: 100,
        height: 73,
    },
    body: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: "space-between",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        marginBottom: 2,
    },
    cardHeaderContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 6,
    },
});
