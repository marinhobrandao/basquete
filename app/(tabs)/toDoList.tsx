import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '../hooks/useTarefas';

export default function App() {
  const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarTarefa} >
        <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
        
      </View>
      
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarefaContainer}>
            <Text style={styles.tarefaTexto}>{item.texto}</Text>
            <TouchableOpacity onPress={() => removerTarefa(item.id)}>
              <Text style={styles.remover}>✖</Text>  
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F0B786' },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', marginBottom: 10, backgroundColor: '#e2ac6d' },
  input: { flex: 1, borderWidth: 1, borderColor: '#000', padding: 10, borderRadius: 5},
  tarefaContainer: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#e2ac6d', padding: 15, marginBottom: 5, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  tarefaTexto: { fontSize: 16 },
  remover: { fontSize: 18, color: 'red' },

  botao: {
    backgroundColor: '#F27A33',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },

  textoBotao: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
