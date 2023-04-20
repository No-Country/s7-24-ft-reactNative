import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// --------------------------------------------------------------------

import { PublishedBy } from "../../components";
import BottomSheetShare from "../../components/BottomSheetShare";
import { COLORS } from "../../constants";
import { LoaderContext } from "../../context/LoaderContext";
import UserContext from "../../context/UserContext";
import {
    addedAndRemoveRat,
    generateRatingStar,
    getServicePerId,
} from "../../controllers/services.controller";
import ServiceModel from "../../models/services.models";
import ObjectStyles from "../../styles/objects/objects";

// --------------------------------------------------------------------

interface ServiceData extends ServiceModel {
    description: string;
    moreDescription: string;
    userId: string;
    whats: string;
}

export default function ServiceScreen({ route, navigation }: any) {
    const { id, subCatName } = route.params;
    const [serviceData, setServiceData] = useState<ServiceData>();
    const { setShowLoader }: any = useContext(LoaderContext);
    const [rating, setRating] = useState(0);

    const { state } = useContext(UserContext);

    useEffect(() => {
        navigation.setOptions({ title: subCatName });

        getData();
    }, []);

    async function getData() {
        const serviceData = (await getServicePerId(id)) as ServiceData;
        const rat = await generateRatingStar(id);

        setRating(rat);
        setServiceData(serviceData);

        setTimeout(() => {
            setShowLoader(false);
        }, 1000);
    }

    const onShare = async () => {};

    const changeFav = async () => {
        await addedAndRemoveRat(
            id,
            serviceData?.rating.includes(state.id),
            state.id
        );

        getData();
    };

    return (
        <View style={styles.serviceScreen}>
            <View style={styles.serviceHeader}>
                <Text
                    style={[
                        { fontSize: 20, fontWeight: "500" },
                        ObjectStyles.fontMain,
                    ]}
                >
                    {serviceData?.service}
                </Text>
                <View style={{ flexDirection: "row", gap: 3 }}>
                    <Image
                        style={{ width: 17, height: 16 }}
                        source={require("../../assets/icons/StarIcon.svg")}
                    />
                    <Text style={ObjectStyles.fontMain}>{rating}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.iconStarF} onPress={changeFav}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={
                            serviceData?.rating.includes(state.id)
                                ? require("../../assets/icons/StarIcon.svg")
                                : require("../../assets/icons/StarEmpty.svg")
                        }
                    />
                </TouchableOpacity>
                <Image
                    style={styles.serviceImage}
                    source={{ uri: serviceData?.img }}
                />
            </View>
            <BottomSheetShare img={serviceData?.img} />
            <View style={styles.descriptionContainer}>
                <Text style={[{ color: COLORS.text }, ObjectStyles.fontMain]}>
                    Descripcion:
                </Text>
                <Text style={[{ color: COLORS.text }, ObjectStyles.fontMain]}>
                    {serviceData?.description}
                </Text>
                <Text style={[{ color: COLORS.text }, ObjectStyles.fontMain]}>
                    {serviceData?.moreDescription}
                </Text>
            </View>
            <View
                style={{
                    paddingVertical: 25,
                    gap: 10,
                }}
            >
                <Text style={[{ color: COLORS.text }, ObjectStyles.fontMain]}>
                    Ubicacion:
                </Text>
                <View style={styles.locationRow}>
                    <Image
                        style={{ width: 16, height: 22 }}
                        source={require("../../assets/icons/LocationIcon.svg")}
                    />
                    <Text
                        style={[{ color: COLORS.text }, ObjectStyles.fontMain]}
                    >
                        {serviceData?.location}
                    </Text>
                </View>
            </View>
            <PublishedBy
                userId={serviceData?.userId}
                whats={serviceData?.whats}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    serviceScreen: {
        backgroundColor: COLORS.background,
        paddingHorizontal: 24,
        paddingBottom: 50,
    },
    serviceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: 20,
    },
    serviceImage: {
        width: "100%",
        height: 280,
        marginTop: 10,
        borderRadius: 10,
    },
    btnShare: {
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#817A7Aaa",
    },
    descriptionContainer: {
        paddingVertical: 25,
        borderBottomWidth: 2,
        borderBottomColor: "#817A7Aaa",
        gap: 10,
    },
    locationRow: {
        flexDirection: "row",
        gap: 5,
        alignItems: "flex-end",
    },
    iconStarF: {
        backgroundColor: "white",
        width: 33,
        height: 33,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 20,
        right: 10,
        zIndex: 5,
        borderRadius: 50,
    },
});
