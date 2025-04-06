import { Text, StyleSheet, View } from "react-native";

const Result = ({imc}) => { //Recebe o imc como parametro
    return(
        <View style={styles.resultadoContainer}> {/*Retorna uma View (div) com um Text (p) dizendo qual é o seu IMC*/}
            <Text style={styles.resultado}>Seu IMC é: {imc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultadoContainer: { //Estiliza a View que contém o texto
        height: 60,
        backgroundColor: '#5C6AFF',
        borderRadius: 30,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
        width: '80%'
    },
    resultado: { //estiliza o texto em si
        fontSize: 22,
        color: '#000',
    }
});

export default Result;