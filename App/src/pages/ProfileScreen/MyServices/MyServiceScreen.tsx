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
import {CategoryCard}  from "../../../components";
import Toggle from "../../../components/Toggle";
  
  // --------------------------------------------------------------------

  export const MyServiceScreen = ({navigation}:any) => {
    return (
        <View style={{height:'100%', backgroundColor:COLORS.background}}>
        <View style={{height:'85%', backgroundColor:COLORS.background}}>
          <Toggle />
          <TouchableOpacity
        style={styles.serviceCardContainer}
        >
      <Image style={styles.img} source={require('../../../assets/icons/service.svg')}/>
      <View style={styles.body}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Reparación</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Reparación de pc</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Image
            style={{ width: 6, height: 8 }}
            source={require("../../../assets/icons/LocationIcon.svg")}
          />
          <Text style={{ fontSize: 10 }}>Lomas de zamora</Text>
        </View>
      </View>
    </TouchableOpacity>
    <Toggle />
          <TouchableOpacity
        style={styles.serviceCardContainer}
        >
      <Image style={styles.img} source={require('../../../assets/icons/service.svg')}/>
      <View style={styles.body}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Reparación</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Reparación de pc</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Image
            style={{ width: 6, height: 8 }}
            source={require("../../../assets/icons/LocationIcon.svg")}
          />
          <Text style={{ fontSize: 10 }}>Lomas de zamora</Text>
        </View>
      </View>
    </TouchableOpacity>
    </View>
          <View style={{display:'flex', justifyContent:'flex-end', alignItems:'center', width: '100%'}}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("DetailP")}>
                 <Text style={styles.buttonText}>Agregar servicio</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    icon: {
     width: 120,
     height: 120,
     borderRadius:100,
     position: 'absolute',top: 220, left: 0, bottom: 0, right: 0, margin: "auto"

   },
   buttonContainer: {
    width: 350,
    height: 40,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  },
  serviceCardContainer: {
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    padding: 5,
    overflow: "hidden",
    borderRadius: 5,
    shadowOpacity: 1,
    shadowRadius: 6.27,
    elevation: 4,
    shadowColor: COLORS.shadows,
    backgroundColor: COLORS.white,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  img: {
    borderRadius: 5,
    width: 100,
    height: 73,
  },
  body: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  });