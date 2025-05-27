import { ImageSourcePropType, View } from "react-native";
import { Image } from 'expo-image';

type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource}: Props){
    return(
        <View style={{top: -515, left: 2}}>
            <Image source={stickerSource} style={{ width: imageSize, height: imageSize}} />
        </View>
    );
}