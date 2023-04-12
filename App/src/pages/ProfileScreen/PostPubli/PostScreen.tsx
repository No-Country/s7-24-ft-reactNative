import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  
  
  // --------------------------------------------------------------------
  
  import { COLORS, ROUTES } from "../../../constants";
  import { BtnPhoto } from '../../../components/BtnPhoto'
  
  // --------------------------------------------------------------------
  export const PostScreen = ({navigation}:any) => {
    return (
      <View style={{ backgroundColor: COLORS.background, height:'100%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center', height:'70%'}}>
          <Image style={styles.icon} source={require('../../../assets/icons/ImagePost.svg')}/>
          </View>
          <View style={{display:'flex', justifyContent:'center', alignItems:'center', width: '100%'}}>
          <Text style={{fontSize: 16, marginBottom:10}}>Agregá fotos de tu servicio</Text>
          <Text style={{fontSize: 12, marginBottom:10}}>Asegúrate de que sean de calidad para atraer al público</Text>
          <BtnPhoto />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('DetailP')}>
             <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    icon: {
     width: 280,
     height: 300,
   },
   buttonContainer: {
    width: 350,
    height: 40,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  },
  });