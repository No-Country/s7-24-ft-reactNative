import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";

// --------------------------------------------------------------------

// --------------------------------------------------------------------

export default function ArrowBackNavigatorHeader() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image
        style={{ width: 18, height: 12, marginLeft: 24 }}
        source={require("../assets/icons/ArrowLeftIcon.svg")}
      />
    </TouchableOpacity>
  );
}
