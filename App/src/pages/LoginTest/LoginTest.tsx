import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

type ItemProps = {
  navigation: NativeStackNavigationProp<any, any>;
};

export default function LoginTest({ navigation }: ItemProps) {
  const goToTheHomeScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={goToTheHomeScreen}>
        <Text> Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
