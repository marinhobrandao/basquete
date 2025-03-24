import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={
        styles.container
      }
    >
      <Text style={styles.text}>Bem vindo a página de basquete</Text>
      
      <Text style={styles.text}>O basquetebol, popularmente conhecido como basquete ou básquete,
         é um esporte coletivo inventado em 1891 pelo professor de educação física canadense James Naismith, na Associação Cristã de Moços de Springfield, 
         em Massachusetts, nos Estados Unidos. É disputado por duas equipes de 12 jogadores que têm como objetivo passar a 
         bola por dentro de uma cesta e evitar que a bola entre na sua cesta colocada nas extremidades da quadra, 
         seja num ginásio ou ao ar livre. Os jogadores podem caminhar na quadra, desde que driblem a cada passo dado. 
         Também é possível executar um passe, ou seja, passar a bola em direção a um companheiro de equipe.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 	"#fff"
  },
  text: {
    color: "#000",
  },
}); 