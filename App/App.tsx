import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import StackNavigator from "./src/routes/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
