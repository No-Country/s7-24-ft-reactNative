import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// --------------------------------------------------------------------

import { COLORS } from "../../constants";

// --------------------------------------------------------------------

export default function ServiceScreen({ route, navigation }: any) {
  const { id, title, service, location, img, rating } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

  return (
    <View
      style={{
        backgroundColor: COLORS.background,
        paddingHorizontal: 24,
        paddingBottom: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>{service}</Text>
        <View style={{ flexDirection: "row", gap: 3 }}>
          <Image
            style={{ width: 17, height: 16 }}
            source={require("../../assets/icons/StarIcon.svg")}
          />
          <Text>{rating}</Text>
        </View>
      </View>
      <Image
        style={{ width: "100%", height: 280, marginTop: 10, borderRadius: 10 }}
        source={{ uri: img }}
      />
      <TouchableOpacity
        style={{
          paddingVertical: 25,
          flexDirection: "row",
          justifyContent: "center",
          gap: 15,
          borderBottomWidth: 2,
          borderBottomColor: "#817A7Aaa",
        }}
      >
        <Image
          style={{ width: 17, height: 16 }}
          source={require("../../assets/icons/ShareIcon.svg")}
        />
        <Text>Compartir</Text>
      </TouchableOpacity>
      <View
        style={{
          paddingVertical: 25,
          borderBottomWidth: 2,
          borderBottomColor: "#817A7Aaa",
          gap: 10,
        }}
      >
        <Text style={{ color: COLORS.text }}>Descripcion:</Text>
        <Text style={{ color: COLORS.text }}>
          Amueblamientos de cocina y oficinas a medida.{"\n"}
          Trabajamos con excelentes presupuestos y materiales de alta calidad
          con garantía de 12 meses.{"\n"}
          Ofrecemos atención personalizada y catálogo propio. {"\n"}
          Envíos fuera de CABA corre por cuenta del cliente{"\n"}
          No trabajos con servicios de reparación de muebles.
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 25,
          gap: 10,
        }}
      >
        <Text style={{ color: COLORS.text }}>Ubicacion:</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "flex-end",
          }}
        >
          <Image
            style={{ width: 16, height: 22 }}
            source={require("../../assets/icons/LocationIcon.svg")}
          />
          <Text style={{ color: COLORS.text }}>{location}</Text>
        </View>
      </View>
      <View style={{ minHeight: 230, width: "100%" }}>
        <Image
          style={{ width: "100%", height: 230, position: "absolute" }}
          source={{
            uri: "https://maureinmobiliaria.com/wp-content/uploads/mapas/capital_satelital.jpg",
          }}
        />
      </View>
      <View
        style={{
          marginTop: 30,
          paddingVertical: 25,
          borderTopWidth: 2,
          borderTopColor: "#817A7Aaa",
        }}
      >
        <Text style={{ color: "#1C1B1F" }}>Publicado por:</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 10,
          }}
        >
          <Image
            style={{ width: 25, height: 25, borderRadius: 22 }}
            source={{
              uri: "https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg",
            }}
          />
          <View>
            <Text style={{ fontSize: 12 }}>Naruto</Text>
            <Text style={{ fontSize: 8 }}>Miembro de Servis desde 20221</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: "#F9DEDC",
              borderRadius: 5,
              width: "50%",
            }}
          >
            <Text style={{ color: "#B3261E", textAlign: "center" }}>
              Mensaje
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: "#B3261E",
              borderRadius: 5,
              width: "50%",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Text style={{ color: "#fff" }}>WhatsApp</Text>
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../../assets/icons/WhatsAppIcon.svg")}
            />
          </View>
        </View>
        <Text
          style={{
            textDecorationLine: "underline",
            textAlign: "center",
            marginTop: 25,
          }}
        >
          Denunciar
        </Text>
      </View>
    </View>
  );
}
