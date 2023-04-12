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
  import { BtnNavigate } from "../../../components/BtnNavigate"
  import { LogoProfile } from '../../../components/LogoProfile'
  
  // --------------------------------------------------------------------
  
  export function HelpScreen({navigation}:any) {
    
  
    return (
      <View style={{ backgroundColor: COLORS.background, height:'100%'}}>
       <LogoProfile/>
        <View style={{paddingHorizontal:10}}>
       
        <BtnNavigate onPress={() => navigation.navigate("")} text={"¿Cómo publicar un servicio?"} />
        <BtnNavigate onPress={() => navigation.navigate("")} text={"¿Cómo eliminar un anuncio?"} />
        <BtnNavigate onPress={() => navigation.navigate()} text={"¿Cómo contactarme con un servicio?"} />
        <BtnNavigate onPress={() => navigation.navigate("")} text={"Términos y condiciones"} />
        <BtnNavigate onPress={() => navigation.navigate()} text={"Contactanos"} />
      </View>
      </View>
    );
  }
  