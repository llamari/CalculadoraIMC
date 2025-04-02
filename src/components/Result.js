import { Text, StyleSheet, View } from "react-native";

const Result = ({imc}) => {
    return(
        <View style={styles.resultadoContainer}>
            <Text style={styles.resultado}>Seu IMC é: {imc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultadoContainer: {
        height: 60,
        backgroundColor: '#A6ADFF',
        borderRadius: 40,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10
    },
    resultado: {
        fontSize: 24,
        color: '#000',
    }
});


export default Result;