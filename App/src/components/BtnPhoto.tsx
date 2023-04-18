import React, { useState } from 'react';
import { TouchableOpacity, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../constants';
interface Props {imageUri:string, setImageUri:(change:string) => void} 

export const BtnPhoto = ({imageUri, setImageUri}: Props) => {

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleImagePicker}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 350,
    height: 40,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  },
});