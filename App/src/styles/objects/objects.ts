import { StyleSheet } from "react-native";
import RootStyles from "../setting/setting";

const ObjectStyles = StyleSheet.create({
	flexBox: {
		justifyContent: "center",
		alignItems: "center",
	},
	bottomForm: {
		width: 328,
		height: 39,
		borderRadius: 2,
		textAlign: "center",
		backgroundColor: RootStyles.colorRed,
	},
	backgroundForm: {
		height: "100%",
		backgroundColor: RootStyles.colorWhite,
	},

	input: {
		width: 328,
		height: 32,
		padding: "1em",
		borderRadius: 4,
		fontSize: 14,
		border: "1px solid #d4d4d4",
		color: "rgba(149, 149, 149, 1)",
	},
	titleForm: {
		fontSize: 20,
		color: RootStyles.typographyMajor,
	},
});

export default ObjectStyles;
