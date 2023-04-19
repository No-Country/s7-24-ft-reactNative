import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View } from 'react-native'
import { FirebaseGetAuth } from "../firebase/app";
import { updateProfile, User } from "firebase/auth";

export const EditIcon = ({ navigation }: any) => {
  
};
  return (
    <View>
        <Icon name="pencil" size={15} color={"#00000"} onPress={()=> navigation.navigate()} />
    </View>
  )
}