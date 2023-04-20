import { useIsFocused } from "@react-navigation/native";
import { Image } from "react-native";

// --------------------------------------------------------------------

import { TabBarComponentProp } from "../types/types";

// --------------------------------------------------------------------

export default function TabBarIconNavigatorBottom({
    color,
    size,
    iconName,
}: TabBarComponentProp) {
    const isFocused = useIsFocused();

    return (
        <Image
            style={{
                width: size - 7,
                height: size - 7,
                tintColor: color,
            }}
            source={
                isFocused
                    ? require(`../assets/icons/${iconName}TabBarActive.svg`)
                    : require(`../assets/icons/${iconName}TabBar.svg`)
            }
        />
    );
}
