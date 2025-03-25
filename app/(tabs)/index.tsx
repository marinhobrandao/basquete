import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import {Image} from 'expo-image';

const PlaceholderImage = require ('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imaageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>BEM VINDO A PAGINA DE BASQUETE</Text>
      
      <Text style={styles.text}>O basquetebol, popularmente conhecido como basquete ou básquete,
         é um esporte coletivo inventado em 1891 pelo professor de educação física canadense James Naismith, na Associação Cristã de Moços de Springfield, 
         em Massachusetts, nos Estados Unidos. É disputado por duas equipes de 12 jogadores que têm como objetivo passar a 
         bola por dentro de uma cesta e evitar que a bola entre na sua cesta colocada nas extremidades da quadra, 
         seja num ginásio ou ao ar livre. Os jogadores podem caminhar na quadra, desde que driblem a cada passo dado. 
         Também é possível executar um passe, ou seja, passar a bola em direção a um companheiro de equipe.</Text>
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
    flex: 1,
  },

  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },

  text: {
    color: "#000",
    width: '80%',
    maxWidth: 600,
    textAlign: 'justify',
    padding: 10,
  },
}); 