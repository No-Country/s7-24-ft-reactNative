import { useContext } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { LoaderContext } from "../context/LoaderContext";
// --------------------------------------------------------------------

import { COLORS } from "../constants";
// --------------------------------------------------------------------

export default function Loader() {
    const { showLoader } = useContext(LoaderContext);

    if (showLoader) {
        return (
            <View style={styles.loaderContainer}>
                <Image
                    source={{
                        uri: "https://cdn.dribbble.com/users/225707/screenshots/2958729/jelly-fluid-loader.gif",
                    }}
                    style={styles.naruto}
                    resizeMode="contain"
                />
                <ActivityIndicator
                    size="large"
                    color="#fff"
                    style={styles.loader}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loaderContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
    },
    naruto: {
        height: 200,
        width: 200,
    },
    loader: {
        marginTop: 20,
    },
});
