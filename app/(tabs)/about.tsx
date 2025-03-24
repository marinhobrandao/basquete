import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';


export default function about() {
  return (
    <View
      style={
        styles.container
      }
    >
      <Text style={styles.text}>Saiba mais sobre</Text><br></br>
      <Text style={styles.text}>Aqui estão os principais marcos da evolução do esporte:

Criação:

Canadá (1891): O professor James Naismith, no Canadá, criou o jogo enquanto trabalhava nos EUA, em Springfield, Massachusetts.
A ideia era criar um esporte indoor para manter os alunos ativos durante o inverno.
O primeiro jogo usava uma bola de futebol e cestos de pêssegos como alvos.

Primeiras Regras Oficiais (1892): O jogo começou com 13 regras básicas, incluindo o drible limitado e a proibição de correr segurando a bola.
Com o tempo, regras como o drible contínuo e a linha de três pontos foram adicionadas.

Primeira Liga Profissional (1898): Surgiu a National Basketball League (NBL) nos EUA, mas durou apenas seis anos.
Apesar disso, abriu caminho para o basquete profissional.

Fundação da NBA (1946): Em 1946, a Basketball Association of America (BAA) foi criada e, em 1949, fundiu-se com a National Basketball League (NBL), formando a NBA.

Introdução da Linha de Três Pontos (1967-1979): Criada pela American Basketball Association (ABA) em 1967, mas só adotada pela NBA em 1979.
Mudou completamente o jogo, favorecendo jogadores habilidosos no arremesso de longa distância.

O "Dream Team" e a Globalização (1992): O time dos EUA nas Olimpíadas de 1992, com Michael Jordan, Magic Johnson e Larry Bird, popularizou o basquete mundialmente.
Ajudou a tornar a NBA um fenômeno global.

Revolução do Jogo com o Jogo de Perímetro (2010s): A era de Stephen Curry e o Golden State Warriors mudou o foco do jogo para os arremessos de três pontos.
O jogo ficou mais rápido e baseado em espaçamento e movimentação.
</Text>
    </View>
  );
  
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",

  },

  text:{color: '#000'},
}) 