import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const allQuestions: Question[] = [
  { question: "Quem é conhecido como 'King James'?", options: ["LeBron James", "Stephen Curry", "Kevin Durant", "Kobe Bryant"], answer: "LeBron James" },
  { question: "Quantos jogadores existem em quadra por time na NBA?", options: ["5", "6", "4", "7"], answer: "5" },
  { question: "Qual time tem o apelido 'Lakers'?", options: ["Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors", "Miami Heat"], answer: "Los Angeles Lakers" },
  { question: "Quem detém o recorde de mais pontos em um único jogo da NBA?", options: ["Michael Jordan", "Wilt Chamberlain", "Kobe Bryant", "LeBron James"], answer: "Wilt Chamberlain" },
  { question: "Quem é conhecido como 'Chef Curry'?", options: ["Stephen Curry", "LeBron James", "Kevin Durant", "James Harden"], answer: "Stephen Curry" },
  { question: "Qual jogador tem mais títulos de MVP da NBA?", options: ["LeBron James", "Kareem Abdul-Jabbar", "Michael Jordan", "Magic Johnson"], answer: "Kareem Abdul-Jabbar" },
  { question: "Qual time venceu mais campeonatos da NBA?", options: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"], answer: "Boston Celtics" },
  { question: "Qual posição é conhecida como 'G' na NBA?", options: ["Guard", "Forward", "Center", "Power Forward"], answer: "Guard" },
  { question: "Quem é o maior pontuador da história da NBA?", options: ["LeBron James", "Kareem Abdul-Jabbar", "Michael Jordan", "Karl Malone"], answer: "Kareem Abdul-Jabbar" },
  { question: "Qual jogador é conhecido pelo apelido 'The Black Mamba'?", options: ["Kobe Bryant", "Michael Jordan", "LeBron James", "Kevin Durant"], answer: "Kobe Bryant" },
  { question: "Quem ganhou o MVP da NBA em 2023?", options: ["Joel Embiid", "Giannis Antetokounmpo", "Luka Doncic", "Nikola Jokic"], answer: "Joel Embiid" },
  { question: "Qual jogador é famoso pelo 'skyhook'?", options: ["Kareem Abdul-Jabbar", "Shaquille O'Neal", "Dirk Nowitzki", "Hakeem Olajuwon"], answer: "Kareem Abdul-Jabbar" },
  { question: "Qual jogador tem o recorde de mais triplos em uma temporada?", options: ["Stephen Curry", "Klay Thompson", "James Harden", "Ray Allen"], answer: "Stephen Curry" },
  { question: "Qual jogador ganhou 6 campeonatos com os Bulls nos anos 90?", options: ["Michael Jordan", "Scottie Pippen", "Dennis Rodman", "Steve Kerr"], answer: "Michael Jordan" },
  { question: "Quem é conhecido como 'The Beard'?", options: ["James Harden", "LeBron James", "Anthony Davis", "Chris Paul"], answer: "James Harden" },
  // Novas 5 perguntas adicionadas:
  { question: "Qual jogador é apelidado de 'The Greek Freak'?", options: ["Giannis Antetokounmpo", "Nikola Jokic", "Luka Doncic", "Anthony Davis"], answer: "Giannis Antetokounmpo" },
  { question: "Qual time da NBA é conhecido como 'Heat'?", options: ["Miami Heat", "Toronto Raptors", "Houston Rockets", "San Antonio Spurs"], answer: "Miami Heat" },
  { question: "Qual jogador é famoso pelo movimento 'Eurostep'?", options: ["Manu Ginóbili", "Kyrie Irving", "James Harden", "Chris Paul"], answer: "Manu Ginóbili" },
  { question: "Quem é o maior pontuador de todos os tempos da NBA em playoffs?", options: ["LeBron James", "Michael Jordan", "Kareem Abdul-Jabbar", "Kobe Bryant"], answer: "LeBron James" },
  { question: "Qual jogador é famoso pelo apelido 'The Claw'?", options: ["Kawhi Leonard", "Kevin Durant", "Paul George", "Draymond Green"], answer: "Kawhi Leonard" },
];

export default function QuizScreen() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(10);
  const timerInterval = useRef<number | null>(null);
  const progressAnim = useRef(new Animated.Value(0)).current;

  const startQuiz = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setFeedback("");
    setScore(0);
    setShowResult(false);
    setQuizStarted(true);
    setTimer(10);
  };

  useEffect(() => {
    if (quizStarted && !showResult) {
      progressAnim.setValue(0);
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: false,
      }).start();

      timerInterval.current = setInterval(() => {
        setTimer(prev => {
          if (prev === 1) {
            handleNext();
            return 10;
          }
          return prev - 1;
        });
      }, 1000) as unknown as number;

      return () => {
        if (timerInterval.current) clearInterval(timerInterval.current);
      };
    }
  }, [quizStarted, currentQuestion]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(prev => prev + 1);
      setFeedback("✅ Correto!");
    } else {
      setFeedback(`❌ Errado! Resposta correta: ${questions[currentQuestion].answer}`);
    }

    setTimeout(handleNext, 1000);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setFeedback("");
    setTimer(10);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
      if (timerInterval.current) clearInterval(timerInterval.current);
    }
  };

  

  if (!quizStarted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz de Basquete 🏀</Text>
        <TouchableOpacity style={styles.startButton} onPress={startQuiz}>
          <Text style={styles.startText}>Iniciar Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (showResult) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz finalizado!</Text>
        <Text style={styles.score}>Sua pontuação: {score} / {questions.length}</Text>
        <TouchableOpacity style={styles.restartButton} onPress={startQuiz}>
          <Text style={styles.restartText}>Jogar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const question = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Tempo: {timer}s</Text>
      <View style={styles.progressBarBackground}>
        <Animated.View style={[styles.progressBar, { flex: progressAnim }]} />
      </View>

      <Text style={styles.question}>{question.question}</Text>
      {question.options.map(option => (
        <TouchableOpacity
          key={option}
          style={[styles.option, selectedOption === option && styles.selectedOption]}
          onPress={() => handleSelect(option)}
          disabled={!!selectedOption}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      {feedback && <Text style={styles.feedback}>{feedback}</Text>}
      <Text style={styles.progressText}>Pergunta {currentQuestion + 1} / {questions.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#fdc18dff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  question: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  option: { backgroundColor: "#e65b0bff", padding: 15, borderRadius: 10, marginBottom: 10 },
  selectedOption: { backgroundColor: "#add8e6" },
  optionText: { fontSize: 16 },
  feedback: { fontSize: 18, fontWeight: "bold", marginVertical: 10, textAlign: "center" },
  progressText: { textAlign: "center", marginTop: 10, fontSize: 16 },
  score: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  restartButton: { backgroundColor: "#4caf50", padding: 15, borderRadius: 10, alignItems: "center" },
  restartText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  startButton: { backgroundColor: "#007bff", padding: 15, borderRadius: 10, alignItems: "center" },
  startText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  timer: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  progressBarBackground: { flexDirection: "row", height: 10, backgroundColor: "#ddd", borderRadius: 5, overflow: "hidden", marginBottom: 20 },
  progressBar: { backgroundColor: "#4caf50", borderRadius: 5 },
});
