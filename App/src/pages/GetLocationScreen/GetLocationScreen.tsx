import { CommonActions, useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// --------------------------------------------------------------------

import { useContext, useEffect } from "react";
import { COLORS, ROUTES } from "../../constants";
import { LoaderContext } from "../../context/LoaderContext";
import ObjectStyles from "../../styles/objects/objects";

// --------------------------------------------------------------------

Location.setGoogleApiKey("AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik");

export default function GetLocationScreen() {
    const { setShowLoader } = useContext(LoaderContext);
    const navigation = useNavigation();

    useEffect(() => {
        async function isLocationTrue() {
            const { status } =
                await Location.requestForegroundPermissionsAsync();

            if (status == "granted") {
                setShowLoader(true);

                navigation.dispatch(
                    CommonActions.navigate({
                        name: ROUTES.HOME,
                    })
                );
            }
        }
        isLocationTrue();
    }, []);

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});

        setShowLoader(true);

        navigation.dispatch(
            CommonActions.navigate({
                name: ROUTES.HOME,
            })
        );
    };

    return (
        <View
            style={[
                ObjectStyles.backgroundForm,
                ObjectStyles.flexBox,
                { marginHorizontal: 24 },
            ]}
        >
            <Text style={ObjectStyles.titleForm}>¡Bienvenido!</Text>
            <Image
                style={{ width: 179, height: 234 }}
                source={require("../../assets/images/GetLocation.svg")}
            />
            <TouchableOpacity
                onPress={getLocation}
                style={[
                    ObjectStyles.bottomForm,
                    {
                        marginTop: 15,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                    },
                ]}
            >
                <Text style={styles.btnText}>Activar ubicacion</Text>
                <Image
                    style={{ width: 16, height: 16 }}
                    source={require("../../assets/icons/UbicatonIcon.svg")}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btnText: {
        fontSize: 15,
        lineHeight: 39,
        color: COLORS.white,
    },
});
