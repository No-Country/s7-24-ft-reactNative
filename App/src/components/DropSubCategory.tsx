import React, { useEffect, useState } from "react";
import { Picker, Text, View } from "react-native";
import { getSubCategoriesPerMainCategory } from "../controllers/subCategory.controller";
import SubCategoryModel from "../models/subCategory.models";
import ObjectStyles from "../styles/objects/objects";

export const DropSubCategory = ({ categoryID, change, active }: any) => {
    const [subCatData, setSubCatData] = useState<SubCategoryModel[]>([]);

    useEffect(() => {
        async function getData() {
            const data = await getSubCategoriesPerMainCategory(categoryID);

            setSubCatData(data);
        }

        getData();
    }, []);

    return (
        <View style={ObjectStyles.containerFormInput}>
            <Text style={ObjectStyles.textLabelForm}>
                Elija una sub categoria
            </Text>
            <Picker
                selectedValue={active}
                onValueChange={(itemValue: string, itemIndex: number) =>
                    change(itemValue)
                }
                style={[ObjectStyles.input, { padding: 5 }]}
            >
                {subCatData.map((item) => (
                    <Picker.Item label={item.name} value={item.id} />
                ))}
            </Picker>
        </View>
    );
};
