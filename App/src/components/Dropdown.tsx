import React, { useState } from 'react';
import { Picker, Text, View } from 'react-native';
import CategoryModel from '../models/category.models';
import ObjectStyles from "../styles/objects/objects";


export const DropdownExample = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [categoriesData, setCategoriesData] = useState<CategoryModel[]>([]);

  const category = [

    { id: "MzerAWuTGCLcN38zWtJB", name: "Hogar" },

    { id: "X36NrvoLMZsCnF29g8FS", name: "Tecnología" },

    { id: "j6PFgmZO4t4P8eXL9e2W", name: "Profesionales" },

    { id: "q0p5VQgo0s9cWs0ar2uk", name: "Otros servicios" }
  ]



  return (
    <View style={ObjectStyles.containerFormInput}>
      <Text style={ObjectStyles.textLabelForm}>Elija la categoría de su servicio</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue: string, itemIndex: number) =>
          setSelectedValue(itemValue)
        }
        style={ObjectStyles.input}>
        {
          category.map((item) => <Picker.Item label={item.name} value={item.id} />)
        }

      </Picker>
    </View>
  );
};
