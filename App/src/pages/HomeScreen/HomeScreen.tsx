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

import CategoryCard from "../../components/CategoryCard";
import ServiceCard from "../../components/ServiceCard";
import { COLORS } from "../../constants";
import { Props } from "../../types/types";
import { data, dataServices } from "../../utils/fakeData";

// --------------------------------------------------------------------

export default function HomeScreen({ navigation }: Props) {
  return (
    <>
      <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Buscar" style={{ fontSize: 16 }} />
          <Image
            style={styles.icon}
            source={require("../../assets/icons/SearchIcon.svg")}
          />
        </View>
        <View style={styles.boxBrownContainer}>
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Todo lo que buscas, en un {"\n"} solo lugar.
          </Text>
        </View>
        <View style={styles.categoriesContainer}>
          <Text style={{ fontSize: 20 }}>Categorías</Text>
          <FlatList
            style={styles.categoryTable}
            data={data}
            renderItem={({ item }) => (
              <CategoryCard data={item} navigation={navigation} />
            )}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
          />
          <Text style={{ fontSize: 15, marginTop: 20 }}>Más recomendados</Text>
          <FlatList
            style={styles.categoryTable}
            data={dataServices}
            renderItem={({ item }) => <ServiceCard data={item} />}
            ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 34,
    paddingTop: 10,
    paddingBottom: 40,
  },
  boxBrownContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  categoriesContainer: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 100,
  },
  categoryTable: {
    marginTop: 20,
    gap: 5,
    paddingVertical: 4,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
});
