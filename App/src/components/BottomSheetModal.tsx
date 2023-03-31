import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

// --------------------------------------------------------------------

import { COLORS } from "../constants";
import { subCategories } from "../utils/fakeData";

// --------------------------------------------------------------------

const deviceHeight = Dimensions.get("window").height;

export default function BottomSheetModal({
  isVisible,
  closeSheet,
  onTouchOutside,
  categoryTitle,
}: any) {
  const renderTouchClose = (onTouch: any) => {
    const view = <View style={{ flex: 1, width: "100%" }} />;

    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: "100%" }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeSheet}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#000000AA",
          justifyContent: "flex-end",
        }}
      >
        {renderTouchClose(onTouchOutside)}
        <View style={styles.bottomSheetContainer}>
          <View
            style={{
              margin: "auto",
              width: 40,
              height: 5,
              backgroundColor: "#8C8C8C",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 20 }}>Filtrar</Text>
            <Text>Restablecer</Text>
          </View>
          <Text style={{ fontWeight: "600", marginTop: 30, marginLeft: 5 }}>
            {categoryTitle}
          </Text>
          <View style={styles.subCategoriesContainer}>
            {subCategories.map((e, i) => (
              <View style={styles.item} key={i + 1}>
                <Text>{e}</Text>
              </View>
            ))}
          </View>
          <View
            style={{
              marginTop: 30,
              marginBottom: 10,
              backgroundColor: "#B3261E",
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>Aplicar</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: COLORS.white,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 24,
    paddingBottom: 30,
    paddingTop: 10,
    maxHeight: deviceHeight * 0.7,
  },
  item: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 10,
    width: "auto",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  subCategoriesContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
});
