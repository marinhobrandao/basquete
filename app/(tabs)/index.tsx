import { Text, View, StyleSheet, ImageSourcePropType, Platform } from "react-native";
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import {captureRef} from 'react-native-view-shot';
import domtoimage from 'dom-to-image';
import React, { useRef, useState } from "react";

const PlaceholderImage = require ('@/assets/images/basquete-img.jpg');

export default function Index() {
  const imageRef = useRef<View>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModaVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined); 
  const [renderKey, setRenderKey] = useState(0); 

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

    if (status === null){
      requestPermission();
    }
  };

 
  const onReset = () => {
    setPickedEmoji(undefined);
    setSelectedImage(undefined);
    setRenderKey(k => k + 1); 
  };


  const onResetAll = () => {
    setPickedEmoji(undefined);
    setSelectedImage(undefined);
    setShowAppOptions(false);
    setRenderKey(k => k + 1);
  };

  const onAddSticker = () =>{
    setIsModalVisible(true);
  };

  const onModalClose = () =>{
    setIsModalVisible(false); 
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== "web") {
      try {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== "granted") {
          alert("Permissão para acessar a galeria é necessária!");
          return;
        }

        const localUri = await captureRef(imageRef.current!, {
          height: 440,
          quality: 1,
          result: "tmpfile",
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log("Erro ao salvar:", e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imaageContainer}>
        <View
          ref={imageRef}
          collapsable={false}
          key={`canvas-${renderKey}`}   
          style={{ position: "relative" }}
        >
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && (
            <EmojiSticker
              key={`sticker-${renderKey}`} 
              imageSize={40}
              stickerSource={pickedEmoji}
            />
          )}
        </View>
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
    backgroundColor: 	"#fdc18dff",
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
