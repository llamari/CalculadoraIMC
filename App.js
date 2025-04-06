//Todas as importações
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/formIMC';

export default function App() {
  return (
    <ImageBackground //Adiciona uma imagem de fundo
      source={require("./assets/background.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      {/*Div para todos os componentes*/}
      <View style={styles.container}>
        <Title/> {/* Chama o componente Title */}
        <FormIMC/> {/* Chama o componente FormIMC */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { //Estiliza a View (div) principal
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    paddingTop: 100,
    width: "100%",
  },
  background: { //Estiliza a imagem de fundo
    flex: 1,
    width: "100%",
  },
});