import React, { useState, useEffect } from 'react';
import { View, Text, Picker} from 'react-native';
import ObjectStyles from "../styles/objects/objects"
import { getCategories } from '../controllers/categories.controller';
import CategoryModel from '../models/category.models';


export const DropdownExample = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [categoriesData, setCategoriesData] = useState<CategoryModel[]>([]);

  useEffect(() => {
    async function getData() {
        const dataCat = await getCategories();
        console.log(dataCat)
        setCategoriesData(dataCat);

    }
    getData();
}, [categoriesData]);

console.log(categoriesData)


  return (
    <View style={ObjectStyles.containerFormInput}>
	  <Text style={ObjectStyles.textLabelForm}>Elija la categoría de su servicio</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue: string, itemIndex: number) =>
          setSelectedValue(itemValue)
        }
        style={ObjectStyles.input}>
        <Picker.Item label="Hogar" value="Hogar" />
        <Picker.Item label="Tecnología" value="Tecnología" />
        <Picker.Item label="Profesionales" value="Profesionales" />
        <Picker.Item label="Otros servicios" value="Otros servicios" />
      </Picker>
    </View>
  );
};
