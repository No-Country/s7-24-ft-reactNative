import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ObjectStyles from "../styles/objects/objects";
import RootStyles from "../styles/setting/setting";
interface Props {
  text: string;
  handlerSubmit: () => void;
}

const ButtonFom = ({ text, handlerSubmit }: Props) => {
  return (
    <TouchableOpacity
      style={[ObjectStyles.bottomForm, styles.bottom]}
      onPress={handlerSubmit}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottom: {
    marginTop: 35,
  },
  text: {
    fontSize: 15,
    lineHeight: 39,
    color: RootStyles.colorWhite,
  },
});
export default ButtonFom;
