import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { ArrowForward } from "./ArrowFoward";
interface Props {
	text?: string;
	styleText?: ViewStyle;
	onPress?: any;
}

export const BtnNavigate: React.FC<Props> = ({
	text = "texto",
	styleText,
	onPress,
	...props
}) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity style={[style.toucheable]} onPress={onPress}>
			<Text style={[style.text]}>{text}</Text>
			<ArrowForward />
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	toucheable: {
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 12,
		borderRadius: 5,
		height: 50,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		marginBottom: 5,
	},
	text: {
		color: "#323232",
		textAlign: "center",
		fontSize: 16,
		lineHeight: 24,
		fontWeight: "400",
	},
});
