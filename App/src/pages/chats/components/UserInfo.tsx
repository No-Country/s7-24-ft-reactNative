import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import UserModel from "../../../models/userChatModel.model";

const UserInfo = ({ name, avatar, id, isTalking }: UserModel) => {
	return (
		<View key={id}>
			<Image
				source={require(avatar || "../../../assets/img/personFill.png")}
				style={{ width: 40, height: 40 }}
			/>
			<Text>{name}</Text>
			<Text>{avatar}</Text>
		</View>
	);
};

export default UserInfo;

const styles = StyleSheet.create({});
