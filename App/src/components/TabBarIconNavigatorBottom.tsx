import { Image } from "react-native";

// --------------------------------------------------------------------

import { TabBarComponentProp } from "../types/types";

// --------------------------------------------------------------------

export default function TabBarIconNavigatorBottom({
  color,
  size,
  iconName,
}: TabBarComponentProp) {
  return (
    <Image
      style={{
        width: size - 7,
        height: size - 7,
        tintColor: color,
      }}
      source={require(`../assets/icons/${iconName}TabBar.svg`)}
    />
  );
}
