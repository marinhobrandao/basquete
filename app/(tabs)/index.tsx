import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import{useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceholderImage = require ('@/assets/images/basquete-img.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModaVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined); 

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não selecionou nenhuma imagem');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () =>{
    setIsModalVisible(true);
  };

  const onModalClose = () =>{
    setIsModalVisible(false); 
  };


  const onSaveImageAsync = async() =>{
    //implements later
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imaageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset}/>
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
          </View>
        </View>
      ) : (
       <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync}/>
        <Button label="Use essa foto" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
      <EmojiPicker isVisible={isModaVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>   
    </GestureHandlerRootView>
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
    height: 100,
  },

  optionsContainer:{
    position:'absolute',
    bottom: 80,
  },
  optionsRow:{
    alignItems:'center',
    flexDirection:'row',
  },
}); 