import { StyleSheet } from "react-native";
import RootStyles from "../setting/setting";

const ObjectStyles = StyleSheet.create({
    flexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    bottomForm: {
        width: "100%",
        height: 39,
        borderRadius: 10,
        textAlign: "center",
        backgroundColor: RootStyles.colorOnErrorContainer,
    },
    backgroundForm: {
        height: "100%",
        backgroundColor: RootStyles.backgroundColorApp,
    },

    input: {
        width: 328,
        height: 36,
        padding: "1em",
        borderRadius: 10,
        fontSize: 14,
        fontFamily: "Main",
        border: ".2px solid #0C0C0C50",
        backgroundColor: RootStyles.colorWhite,
        color: "rgba(149, 149, 149, 1)",
        boxShadow: " 0px 2px 5px rgba(0, 0, 0, 0.09)",
    },
    titleForm: {
        position: "absolute",
        top: "20%",
        fontSize: 20,
        color: RootStyles.typographyMajor,
    },

    link: {
        textDecorationLine: "underline",
    },

    textLabelForm: {
        marginBottom: 12,
        color: RootStyles.colorBck,
        fontSize: 14,
        fontFamily: "Main",
    },

    containerFormInput: {
        display: "flex",
        height: 60,
    },

    fontMain: {
        fontFamily: "Main",
    },
});

export default ObjectStyles;
