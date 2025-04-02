import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useState } from "react";
import Result from "./Result";

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState();

    function CalcularIMC() {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const IMCCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(IMCCalculado);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                value={altura}
                onChangeText={setAltura}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                value={peso}
                onChangeText={setPeso}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.botao} onPress={CalcularIMC}>
                <Text>Calcular IMC</Text>
            </TouchableOpacity>

            {imc && <Result imc={imc} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
        padding: 20,
        width: '100%',
    },
    input: {
        width: "80%", 
        height: 40,
        backgroundColor: "#d9d9d9",
        borderRadius: 40,
        marginVertical: 10, 
    },
    botao: {
        backgroundColor: '#5C6AFF',
        height: 50,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 40,
    }
});

export default FormIMC;
