import { Image, Text, View } from "react-native";

// --------------------------------------------------------------------

// --------------------------------------------------------------------

export default function LogoNavigatorHeader() {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                marginLeft: 24,
            }}
        >
            <Image
                style={{ width: 24, height: 24 }}
                source={require("../assets/icons/LogoIcon.svg")}
            />
            <Text style={{ fontSize: 14, fontFamily: "Main" }}>Servify.</Text>
        </View>
    );
}
