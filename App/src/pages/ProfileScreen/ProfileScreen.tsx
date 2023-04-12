import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";


// --------------------------------------------------------------------

import { COLORS, ROUTES } from "../../constants";
import { BtnNavigate } from "../../components/BtnNavigate"
import { LogoProfile } from '../../components/LogoProfile'

// --------------------------------------------------------------------

export default function ProfileScreen({navigation}:any) {
  return (
    <View style={{ backgroundColor: COLORS.background, height:'100%'}}>
     <LogoProfile/>
      <View style={{paddingHorizontal:10}}>
      <BtnNavigate onPress={() => navigation.navigate("History")} text={"Historial"} />
      <BtnNavigate onPress={() => navigation.navigate("Count")} text={"Mi cuenta"} />
      <BtnNavigate onPress={() => navigation.navigate("Help")} text={"Ayuda"} />
      <BtnNavigate onPress={() => navigation.navigate("Post")} text={"Publicar servicio"} />
      <BtnNavigate onPress={() => navigation.navigate("MyService")} text={"Mis servicios"} />
    </View>
    </View>
  );
}
