import { Image, Text, View } from "react-native";

// --------------------------------------------------------------------

// --------------------------------------------------------------------

export default function BottomLogo() {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                justifyContent: "center",
                position: "absolute",
                bottom: 35,
            }}
        >
            <Image
                style={{ width: 24, height: 24 }}
                source={require("../assets/icons/LogoIcon.svg")}
            />
            <Text>Servify.</Text>
        </View>
    );
}
