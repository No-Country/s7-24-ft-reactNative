import React, { useState } from 'react';
import { View, Text, Picker} from 'react-native';
import ObjectStyles from "../styles/objects/objects"

export const DropdownExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('java');

  return (
    <View style={ObjectStyles.containerFormInput}>
	  <Text style={ObjectStyles.textLabelForm}>Elija la categoría de su servicio</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue: string, itemIndex: number) =>
          setSelectedValue(itemValue)
        }
        style={ObjectStyles.input}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="Ruby" value="ruby" />
      </Picker>
    </View>
  );
};
