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
        backgroundColor: '#5C6AFF',
        borderRadius: 30,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
        width: '80%'
    },
    resultado: {
        fontSize: 22,
        color: '#000',
    }
});


export default Result;