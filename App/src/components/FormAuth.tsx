import React from "react";
import { StyleSheet, View } from "react-native";
import Children from "../models/children.models";

const FormAuth = ({ children }: Children) => {
	return <View style={styles.FormAuth}>{children}</View>;
};

const styles = StyleSheet.create({
	FormAuth: {
		gap: 20,
		minHeight: 139,
	},
});

export default FormAuth;
