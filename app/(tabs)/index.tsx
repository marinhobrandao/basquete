import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import{useState} from 'react';

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require ('@/assets/images/basquete-img.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled){
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Você não selecionou nenhuma imagem');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imaageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
   
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync}/>
        <Button label="Use essa foto"/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 	"#F0B786",
  },

  imaageContainer:{
    width: '100%',
    maxWidth: 700,
    paddingHorizontal: 20,
  },

  footerContainer:{
    alignItems:'center',
    justifyContent: 'flex-end',
  },
}); 