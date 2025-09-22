import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function About() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>SAIBA MAIS SOBRE O BASQUETE</Text>

<Text style={styles.paragraph}>
        Canadá (1891): O professor James Naismith criou o jogo em Springfield,
        Massachusetts. O primeiro jogo usava uma bola de futebol e cestos de
        pêssegos como alvos.
      </Text>

      <Text style={styles.paragraph}>
        📜 Primeiras Regras Oficiais (1892): O jogo começou com 13 regras
        básicas, incluindo o drible limitado e a proibição de correr segurando a
        bola. Com o tempo, foram adicionados o drible contínuo e a linha de três
        pontos.
      </Text>

      <Text style={styles.paragraph}>
        🏀 Primeira Liga Profissional (1898): Surgiu a National Basketball
        League (NBL) nos EUA, mas durou apenas seis anos. Apesar disso, abriu
        caminho para o basquete profissional.
      </Text>

      <Text style={styles.paragraph}>
        🏆 Fundação da NBA (1946): Criada como BAA, em 1949 fundiu-se com a NBL
        e formou a NBA.
      </Text>

      <Text style={styles.paragraph}>
        🎯 Linha de Três Pontos (1967-1979): Criada pela ABA em 1967, mas só
        adotada pela NBA em 1979. Mudou o jogo, favorecendo arremessadores de
        longa distância.
      </Text>

      <Text style={styles.paragraph}>
        🌍 Dream Team (1992): Michael Jordan, Magic Johnson e Larry Bird
        popularizaram o basquete mundialmente nas Olimpíadas de 1992.
      </Text>

      <Text style={styles.paragraph}>
        🔥 Era do Perímetro (2010s): Stephen Curry e os Warriors revolucionaram
        o jogo com foco nos arremessos de três pontos, tornando-o mais rápido e
        espaçado.
      </Text>

      {/* --- Novos marcos históricos --- */}
      <Text style={styles.paragraph}>
        👩 Basquete Feminino (1892): Pouco tempo após a criação do esporte,
        mulheres também começaram a praticar. Em 1892, a primeira partida
        feminina foi realizada no Smith College, nos EUA.
      </Text>

      <Text style={styles.paragraph}>
        🌐 FIBA (1932): Foi criada a Federação Internacional de Basquetebol
        (FIBA), responsável por organizar as competições mundiais e definir as
        regras internacionais do esporte.
      </Text>

      <Text style={styles.paragraph}>
        🥇 Basquete nas Olimpíadas (1936): O basquete foi incluído nos Jogos
        Olímpicos de Berlim, com jogos sendo disputados ao ar livre em quadras de
        saibro.
      </Text>

      <Text style={styles.paragraph}>
        🌟 Rivalidade Lakers x Celtics (décadas de 1980): Magic Johnson e Larry
        Bird protagonizaram uma das maiores rivalidades da história do esporte,
        elevando a popularidade da NBA mundialmente.
      </Text>

      <Text style={styles.paragraph}>
        🏅 Brasil no Basquete: O Brasil foi um dos primeiros países a se destacar
        fora dos EUA, conquistando os Mundiais de 1959 e 1963, e sendo potência
        nas Américas por décadas.
      </Text>

      {/* --- Informações pessoais mais abaixo --- */}
      <View style={styles.personalInfo}>
        <Text style={styles.subtitle}>📌 Informações Pessoais</Text>
        <Text style={styles.paragraph}>👤 Nome: Gustavo Marinho</Text>
        <Text style={styles.paragraph}>🎂 Idade: 20 anos</Text>
        <Text style={styles.paragraph}>🎓 Estudante de TI</Text>
        <Text style={styles.paragraph}>✉️ Email: gustavomarinho937@gmail.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdc18dff",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#000",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  paragraph: {
    color: "#000",
    width: "90%",
    maxWidth: 600,
    textAlign: "justify",
    marginBottom: 10,
    lineHeight: 20,
  },
  personalInfo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    
     
  },
});
