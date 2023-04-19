import React from "react";
import { Picker, Text, View } from "react-native";
import ObjectStyles from "../styles/objects/objects";

const category = [
    { id: "MzerAWuTGCLcN38zWtJB", name: "Hogar" },

    { id: "X36NrvoLMZsCnF29g8FS", name: "Tecnología" },

    { id: "j6PFgmZO4t4P8eXL9e2W", name: "Profesionales" },

    { id: "q0p5VQgo0s9cWs0ar2uk", name: "Otros servicios" },
];

export const DropdownExample = ({ change, active }: any) => {
    return (
        <View style={ObjectStyles.containerFormInput}>
            <Text style={ObjectStyles.textLabelForm}>
                Elija la categoría de su servicio
            </Text>
            <Picker
                selectedValue={active}
                onValueChange={(itemValue: string, itemIndex: number) =>
                    change(itemValue)
                }
                style={[ObjectStyles.input, { padding: 5 }]}
            >
                {category.map((item) => (
                    <Picker.Item label={item.name} value={item.id} />
                ))}
            </Picker>
        </View>
    );
};