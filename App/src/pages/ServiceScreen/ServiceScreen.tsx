import { useContext, useEffect, useState } from "react";
import {
    Image,
    Share,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// --------------------------------------------------------------------

import { PublishedBy } from "../../components";
import { COLORS } from "../../constants";
import { LoaderContext } from "../../context/LoaderContext";
import { getServicePerId } from "../../controllers/services.controller";
import ServiceModel from "../../models/services.models";

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

    useEffect(() => {
        async function getData() {
            const serviceData = (await getServicePerId(id)) as ServiceData;

            setServiceData(serviceData);

            setTimeout(() => {
                setShowLoader(false);
            }, 1000);
        }

        navigation.setOptions({ title: subCatName });

        getData();
    }, []);

    const onShare = async () => {
        const shareContent = {
            title: serviceData?.service,
            message: serviceData?.description,
            url: "https://ejemplo.com/publicacion", // URL de la publicación a compartir
        };

        const shareOptions = {
            dialogTitle: subCatName,
        };

        try {
            const result = await Share.share(shareContent, shareOptions);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.serviceScreen}>
            <View style={styles.serviceHeader}>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                    {serviceData?.service}
                </Text>
                <View style={{ flexDirection: "row", gap: 3 }}>
                    <Image
                        style={{ width: 17, height: 16 }}
                        source={require("../../assets/icons/StarIcon.svg")}
                    />
                    <Text>{serviceData?.rating}</Text>
                </View>
            </View>
            <Image
                style={styles.serviceImage}
                source={{ uri: serviceData?.img }}
            />
            <TouchableOpacity style={styles.btnShare} onPress={onShare}>
                <Image
                    style={{ width: 17, height: 16 }}
                    source={require("../../assets/icons/ShareIcon.svg")}
                />
                <Text>Compartir</Text>
            </TouchableOpacity>
            <View style={styles.descriptionContainer}>
                <Text style={{ color: COLORS.text }}>Descripcion:</Text>
                <Text style={{ color: COLORS.text }}>
                    {serviceData?.description}
                </Text>
                <Text style={{ color: COLORS.text }}>
                    {serviceData?.moreDescription}
                </Text>
            </View>
            <View
                style={{
                    paddingVertical: 25,
                    gap: 10,
                }}
            >
                <Text style={{ color: COLORS.text }}>Ubicacion:</Text>
                <View style={styles.locationRow}>
                    <Image
                        style={{ width: 16, height: 22 }}
                        source={require("../../assets/icons/LocationIcon.svg")}
                    />
                    <Text style={{ color: COLORS.text }}>
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
});
