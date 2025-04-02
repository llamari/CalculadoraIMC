import { Text, StyleSheet } from "react-native";

const Result = ({imc}) => {
    return(
        <Text style={styles.resultado}>Seu IMC é: {imc}</Text>
    )
}

const styles = StyleSheet.create({
    resultado: {
        fontSize: 'large',
        color: 'aquamarine'
    }
})

export default Result;