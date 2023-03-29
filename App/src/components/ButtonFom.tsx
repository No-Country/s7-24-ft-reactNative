import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ObjectStyles from "../styles/objects/objects";
import RootStyles from "../styles/setting/setting";
interface Props {
	text: string;
}

const ButtonFom = ({ text }: Props) => {
	return (
		<TouchableOpacity style={[ObjectStyles.bottomForm, styles.bottom]}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	bottom: {
		marginTop: 40,
	},
	text: {
		fontSize: 15,
		lineHeight: 39,
		color: RootStyles.colorWhite,
	},
});
export default ButtonFom;
