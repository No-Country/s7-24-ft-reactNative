import { Image, StyleSheet, Text, View } from "react-native";

// --------------------------------------------------------------------

import { COLORS } from "../constants";
import { ServiceComponentProp } from "../types/types";

// --------------------------------------------------------------------

export default function ServiceCard({ data }: ServiceComponentProp) {
  return (
    <View style={styles.serviceCardContainer}>
      <Image style={styles.img} source={{ uri: data.img }} />
      <View style={styles.body}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>{data.title}</Text>
        </View>
        <Text style={{ fontSize: 12 }}>{data.service}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Image
            style={{ width: 6, height: 8 }}
            source={require("../assets/icons/LocationIcon.svg")}
          />
          <Text style={{ fontSize: 10 }}>{data.location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  serviceCardContainer: {
    flexDirection: "row",
    padding: 5,
    overflow: "hidden",
    borderRadius: 5,
    shadowOpacity: 1,
    shadowRadius: 6.27,
    elevation: 4,
    shadowColor: COLORS.shadows,
    shadowOffset: {
      width: 2,
      height: 4,
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
