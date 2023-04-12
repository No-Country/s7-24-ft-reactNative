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

import { COLORS, ROUTES } from "../../../constants";

// --------------------------------------------------------------------
export const HistoryScreen = () => {
  return (
    <View style={{ backgroundColor: COLORS.background, height:'100%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', height:'70%'}}>
        <Image style={styles.icon} source={require('../../../assets/icons/historyImage.svg')}/>
        </View>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 16, marginBottom:20}}>Aún no tienes búsquedas recientes</Text>
        <Text style={{fontSize: 12, color:'red'}}>Explora los servicios</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
   width: 330,
   height: 300,
 },
});