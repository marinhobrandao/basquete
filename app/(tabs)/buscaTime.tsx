import {View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useBuscaJogo } from '@/hooks/useBuscaTime';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function BuscaJogo(){
  const { input, setInput, times, setTimes, filtrados, setFiltrados, buscar } = useBuscaJogo();
  const [erro, setErro] = useState('');
  
  const limpar = () => {
    setInput('');
    setFiltrados([]);
    setErro('');
  };

   return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Times NBA</Text>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Digite o nome do time..."
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            if (input.trim() === '') {
              setErro('Você precisa digitar o nome de um time.');
              return;
            }
            setErro('');
            buscar();
          }}
        >
          <Text style={styles.iconText}>🔍</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={limpar}>
          <Text style={styles.iconText}>❌</Text>
        </TouchableOpacity>
      </View>

      {erro !== '' && <Text style={styles.erroTexto}>{erro}</Text>}

      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <View>
              <Text style={styles.nome}>{item.name}</Text>
              <Text style={styles.fonte}>Apelido: {item.nickname}</Text>
              <Text style={styles.fonte}>Cidade: {item.city}</Text>
              <Text style={styles.fonte}>Franquia: {item.nbaFranchise ? 'Sim' : 'Não'}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#F0B786'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#e2ac6d',
    marginRight: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F27A33',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  iconText: {
    color: '#fff',
    fontSize: 20,
  },
  erroTexto: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2c084',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4
  },
  fonte: {
    paddingVertical: 2,
    color: '#555',
    fontSize: 14
  }
});
