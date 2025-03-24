import {View, StyleSheet } from "react-native";
import {Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title:"Opps! Não Encontrado"}}></Stack.Screen>  
    <View style={styles.container}>
      <Link href= "/" style={styles.button}>Volta para a Home</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 	"#fff"
    },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#00000',
    }
}); 

