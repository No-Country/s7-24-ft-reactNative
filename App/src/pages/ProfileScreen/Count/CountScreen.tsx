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
  import { EditIcon } from "../../../components/EditIcon"
  import { LogoProfile } from '../../../components/LogoProfile'
  
  // --------------------------------------------------------------------
  export const CountScreen = () => {
    return (
        <View style={{ backgroundColor: COLORS.background, height:'100%', paddingHorizontal:20}}>
            <LogoProfile/>

            <View style={{backgroundColor:'#ffffff', display:'flex', flexDirection:'row', justifyContent:'space-between', borderRadius:5, marginBottom:5}} >
                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize: 16, marginVertical:10}}>Lucas Lopez</Text>
                    <Text style={{fontSize: 10, marginBottom:7}}>Nombre completo</Text>
                </View>
                <View style={{paddingRight:20, justifyContent:'center'}}>
                    <EditIcon />
                </View>
            </View>
            <View style={{backgroundColor:'#ffffff', display:'flex', flexDirection:'row', justifyContent:'space-between', borderRadius:5, marginBottom:5}} >
                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize: 16, marginVertical:10}}>Lucaslopez@gmail.com</Text>
                    <Text style={{fontSize: 10, marginBottom:7}}>E-mail</Text>
                </View>
                <View style={{paddingRight:20, justifyContent:'center'}}>
                    <EditIcon />
                </View>
            </View>
            <View style={{backgroundColor:'#ffffff', display:'flex', flexDirection:'row', justifyContent:'space-between', borderRadius:5, marginBottom:5}} >
                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize: 16, marginVertical:10}}>··········</Text>
                    <Text style={{fontSize: 10, marginBottom:7}}>Contraseña</Text>
                </View>
                <View style={{paddingRight:20, justifyContent:'center'}}>
                    <EditIcon />
                </View>
            </View>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    icon: {
   },
  });