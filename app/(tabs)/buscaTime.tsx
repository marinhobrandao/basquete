import {View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useBuscaJogo } from '@/hooks/useBuscaTime';

export default function BuscaJogo(){
 const { input, setInput, times,setTimes, filtrados,setFiltrados, buscar} = useBuscaJogo();

  return (
    <View style={styles.container}>   

    <Text style={styles.titulo}>Times NBA</Text>  
      <TextInput
        placeholder="Digite o nome do time..."
        style={styles.input}
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity style={styles.botao} onPress={buscar}>
        <Text style={styles.botaoTexto}>BUSCAR</Text>
      </TouchableOpacity>

      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <View>
              <Text style={styles.nome}>{item.name} ({item.nickname})</Text>
              <Text>Cidade: {item.city}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#F0B786' },
  input: {borderWidth: 1, borderColor: '#000', padding: 8, borderRadius: 4, marginBottom: 8, backgroundColor: '#e2ac6d'},
  botao: {backgroundColor: '#F27A33', padding: 12, alignItems: 'center', borderRadius: 4, marginBottom: 12},
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
  item: {flexDirection: 'row', alignItems: 'center', marginBottom: 12},
  logo: { width: 50, height: 50, marginRight: 12},
  nome: {fontWeight: 'bold'},
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }
});
