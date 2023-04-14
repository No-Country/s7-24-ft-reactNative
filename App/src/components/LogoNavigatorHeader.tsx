import { Image, Text, View } from "react-native";

// --------------------------------------------------------------------

// --------------------------------------------------------------------

export default function LogoNavigatorHeader() {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "flex-end",
                gap: 3,
                marginLeft: 24,
            }}
        >
            <Image
                style={{ width: 24, height: 24 }}
                source={require("../assets/icons/LogoIcon.svg")}
            />
            <Text>Servis</Text>
        </View>
    );
}
