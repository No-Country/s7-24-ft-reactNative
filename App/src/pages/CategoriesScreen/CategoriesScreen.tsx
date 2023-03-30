import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// --------------------------------------------------------------------

import { BottomSheetModal } from "../../components";
import ServiceCard from "../../components/ServiceCard";
import { COLORS } from "../../constants";
import { dataServices } from "../../utils/fakeData";

// --------------------------------------------------------------------

export default function CategoriesScreen({ route, navigation }: any) {
  const { id, title, img } = route.params;
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
  };

  const open = () => {
    setShow(true);
  };

  const closeModal = () => {
    close();
  };

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: COLORS.background }}>
      <TouchableOpacity style={styles.filterContainer} onPress={open}>
        <Text style={{ fontSize: 10 }}>Filtrar</Text>
        <Image
          style={{ width: 10, height: 10 }}
          source={require("../../assets/icons/FilterIcon.svg")}
        />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 24 }}>
        <Text style={{ fontSize: 15 }}>Destacados</Text>
        <FlatList
          style={styles.categoryTable}
          data={dataServices}
          renderItem={({ item }) => <ServiceCard data={item} />}
          ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
        />
      </View>
      <BottomSheetModal
        isVisible={show}
        closeSheet={close}
        onTouchOutside={closeModal}
        categoryTitle={title}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 34,
    paddingVertical: 20,
  },
  categoryTable: {
    marginTop: 10,
    gap: 5,
    paddingVertical: 4,
  },
});
