import { Text, StyleSheet} from 'react-native';

const Title = () => {

    return(
        <Text style={styles.title}>Calculadora de IMC</Text> 
    ) //Retorna apenas um Text com o Título
}

const styles = StyleSheet.create({
    title: { //Estiliza o título para ele ter mais destaque
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 25,
    },
})

export default Title; //Exporta o componente