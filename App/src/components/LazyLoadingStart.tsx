import { Image, StyleSheet, Text, View } from "react-native";
import ObjectStyles from "../styles/objects/objects";
import RootStyles from "../styles/setting/setting";
const LazyLoadingStart = () => {
    return (
        <View style={[styles.backgroundColorLazy, ObjectStyles.flexBox]}>
            <Image
                source={require("../../assets/logoIndex.svg")}
                style={styles.img}
            />
            <Text style={styles.text}>Servify.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundColorLazy: {
        flex: 1,
        position: "relative",
        backgroundColor: RootStyles.colorOnErrorContainer,
    },
    text: {
        position: "absolute",
        bottom: 35,
        fontSize: 32,
        color: RootStyles.colorWhite,
    },

    img: {
        minWidth: 170,
        height: 165,
        textAlign: "center",
    },
});
export default LazyLoadingStart;
