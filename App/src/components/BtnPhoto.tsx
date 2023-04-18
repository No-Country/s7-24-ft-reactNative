
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants';
import { FirebaseStorage } from '../firebase/app';

interface Props { imageUri: string, setImageUri: (change: string) => void }

export const BtnPhoto = ({ imageUri, setImageUri }: Props) => {

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });


    if (!result.cancelled) {

      const name = Math.random().toString(36).substring(7);
      const response = await fetch(result.uri);
      const storageRef = ref(FirebaseStorage, `Services/${name}`);
      const uploadTask = await uploadBytes(storageRef, await response.blob());
      const url = await getDownloadURL(storageRef);

      setImageUri(url);
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