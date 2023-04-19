
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import UserContext from "../../../context/UserContext";
import { FirebaseGetAuth } from "../../../firebase/app";
import { updateProfile, User, signOut } from "firebase/auth";

// --------------------------------------------------------------------

import { LogoProfile } from "../../../components/LogoProfile";
import { COLORS } from "../../../constants";
import Icon from 'react-native-vector-icons/FontAwesome'
import ObjectStyles from "../../../styles/objects/objects";
import { Button } from "react-native-elements";

// --------------------------------------------------------------------
export const EditCount = ({ navigation }: any) => {
    const { state } = useContext(UserContext);
    const [inputValue, setInputValue] = useState(state.name);

    const handleInputChange = (value:string) => {
        setInputValue(value);
      }
      console.log(inputValue)

    const updateUser = () => {
        const res = FirebaseGetAuth.currentUser as User
        updateProfile(res ,{displayName:inputValue})
            .then(() => {
            }).catch((error) => {
    });
    navigation.navigate("Count");
    };

    return (
        <View
            style={{
                backgroundColor: COLORS.background,
                height: "100%",
            }}
        >
            <LogoProfile />

            <View
                style={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    marginBottom: 20,
                    marginHorizontal: 12,
                }}
            >
                <View style={ObjectStyles.containerFormInput}>
                        <Text style={ObjectStyles.textLabelForm}>
                        Nombre y Apellido
                        </Text>
                        <TextInput
                                    placeholder="Nombre y Apellido"
                                    style={ObjectStyles.input}
                                    value={inputValue}
                                    onChangeText={handleInputChange}

                        />
                    </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                <Icon name="pencil" size={15} color={"#00000"} onPress={updateUser} />
                </View>
            </View>
            <View
                style={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    marginBottom: 20,
                    marginHorizontal: 12,
                }}
            >
                <View style={ObjectStyles.containerFormInput}>
                        <Text style={ObjectStyles.textLabelForm}>
                            E-mail 
                        </Text>
                        <TextInput
                                    placeholder="E-mail"
                                    style={ObjectStyles.input}
                                    value={state.email}
                        />
                    </View>
                <View style={{ paddingRight: 20, justifyContent: "center" }}>
                <Icon name="pencil" size={15} color={"#00000"} onPress={()=> navigation.navigate()} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 350,
        height: 40,
        backgroundColor: COLORS.secondary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
    },
});
