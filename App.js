import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/formIMC';

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/background.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Title/>
        <FormIMC/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    paddingTop: 100,
    width: "100%",
  },
  background: {
    flex: 1,
    width: "100%",
  },
});