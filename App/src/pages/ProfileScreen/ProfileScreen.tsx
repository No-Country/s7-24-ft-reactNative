import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native"


// --------------------------------------------------------------------

import CategoryCard from "../../components/CategoryCard";
import ServiceCard from "../../components/ServiceCard";
import { COLORS, ROUTES } from "../../constants";
import { data, dataServices } from "../../utils/fakeData";
import {BtnNavigate} from "../../components/BtnNavigate"

// --------------------------------------------------------------------

export default function ProfileScreen({navigation}:any) {
  

  return (
    <View style={{ backgroundColor: COLORS.background, height:'100%'}}>
      <View style={{display:'flex', flexDirection:'row', marginVertical: 25, paddingLeft:25 }}>
        <Image style={styles.icon} source={require('../../assets/icons/ProfileTabBar.svg')}/>
      <Text style={{paddingHorizontal:15}}>Hola, Lucas!</Text>
      </View>
      <View style={{paddingHorizontal:10}}>
      <BtnNavigate onPress={() => navigation.navigate("History")} text={"Historial"} />
      <BtnNavigate onPress={() => {}} text={"Mi cuenta"} />
      <BtnNavigate onPress={() => {}} text={"Ayuda"} />
      <BtnNavigate onPress={() => {}} text={"Publicar servicio"} />
      <BtnNavigate onPress={() => {}} text={"Mis servicios"} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
   icon: {
    width: 24,
    height: 24,
    tintColor: "#49454F",
  },
});
