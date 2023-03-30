import { StyleSheet, View } from "react-native";
import Children from "../models/children.models";

const FormAuth = ({ children }: Children) => {
  return <View style={styles.FormAuth}>{children}</View>;
};

const styles = StyleSheet.create({
  FormAuth: {
    minHeight: 139,
    gap: 20,
  },
});

export default FormAuth;
