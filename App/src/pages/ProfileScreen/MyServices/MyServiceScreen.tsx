import { useContext, useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


// --------------------------------------------------------------------

import Toggle from "../../../components/Toggle";
import { COLORS } from "../../../constants";
import UserContext from "../../../context/UserContext";
import { getDataBase } from "../../../services/getDataBase.services";


interface Prop {
  img: string,
  nameServices: string,
  description: string,
  location: string
}
// --------------------------------------------------------------------

export const MyServiceScreen = ({ navigation }: any) => {
  const [servicios, setServicios] = useState<Prop[]>([])
  const { state } = useContext(UserContext);

  useEffect(() => {
    const services: Prop[] = []
    getDataBase("services").then((resp) => {
      if (resp.status) {
        resp.result?.forEach(items => {
          if (items.data().idUser === state.id) {

            services.push({
              nameServices: items.data().service,
              description: items.data().description,
              location: items.data().address,
              img: items.data().img
            })
          }
        })
      }
      setServicios(services);
    });

  }, []);


  return (
    <KeyboardAwareScrollView style={{ height: '100%', backgroundColor: COLORS.background }}>
      <Toggle />

      {
        servicios.map(item => (
          <TouchableOpacity
            style={styles.serviceCardContainer}

          >
            <Image style={styles.img} source={{ uri: item.img }} />
            <View style={styles.body}>
              <View>
                <Text style={{ fontSize: 15, fontWeight: "500" }}>{item.nameServices}</Text>
              </View>
              <Text style={{ fontSize: 12 }}>{item.description}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Image
                  style={{ width: 6, height: 8 }}
                  source={require("../../../assets/icons/LocationIcon.svg")}
                />
                <Text style={{ fontSize: 10 }}>{item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      }

      <View style={{ alignItems: 'center', width: '100%' }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("DetailP")}>
          <Text style={styles.buttonText}>Agregar servicio</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 120,
    height: 120,
    borderRadius: 100,
    position: 'absolute', top: 220, left: 0, bottom: 0, right: 0, margin: "auto"

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