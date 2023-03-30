import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

// --------------------------------------------------------------------

import { COLORS, ROUTES } from "../constants";
import { CategoryComponentProp } from "../types/types";

// --------------------------------------------------------------------

export default function CategoryCard({
  data,
  navigation,
}: CategoryComponentProp) {
  const goToTheCategoryScreen = () => {
    navigation.navigate(ROUTES.SERVICES, data);
  };

  return (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={goToTheCategoryScreen}
    >
      <Image
        style={{ width: "100%", height: 100 }}
        source={{ uri: data.img }}
      />
      <Text style={{ paddingVertical: 10, textAlign: "center" }}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    width: "48%",
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
    margin: "auto",
  },
});
