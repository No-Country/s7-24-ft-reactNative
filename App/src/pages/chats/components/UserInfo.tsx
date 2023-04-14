import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserModel from "../../../models/userChatModel.model";

const UserInfo = ({ name, avatar, id, isTalking }: UserModel) => {
	return (
		<View>
			<Text>{name}</Text>
			<Text>{avatar}</Text>
			<Text>{id}</Text>
		</View>
	);
};

export default UserInfo;

const styles = StyleSheet.create({});
