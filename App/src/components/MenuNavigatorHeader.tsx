import { Image, TouchableOpacity } from "react-native";

// --------------------------------------------------------------------

// --------------------------------------------------------------------

export default function MenuNavigatorHeader() {
  return (
    <TouchableOpacity>
      <Image
        style={{ width: 24, height: 24, marginRight: 24 }}
        source={require("../assets/icons/MenuIcon.svg")}
      />
    </TouchableOpacity>
  );
}
