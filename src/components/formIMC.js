//importações
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useState } from "react";
import Result from "./Result";
import ClassificaIMC from "./ClassificacaoIMC";
import AlturaIdeal from "./AlturaIdeal";

//função principal
const FormIMC = () => {
    //declaração de variáveis (useState())
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState();

    //funções
    function CalcularIMC() {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const IMCCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(IMCCalculado);
        }
    }

    //retorna um arquivo JSX
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
                <Text style={styles.textoBotao}>Calcular IMC</Text>
            </TouchableOpacity>

            {imc && <Text style={styles.resultados}> <Result imc={imc} /> <ClassificaIMC imc={imc}/> <AlturaIdeal altura={altura}/></Text>}
        </View>
    );
}

//variável de estização (objeto)
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
        backgroundColor: '#2B3EFF',
        height: 50,
        justifyContent: 'center',
        padding: 10,
        marginBottom: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: '65%',
    },
    textoBotao: {
        fontSize: 24,
        color: '#FFF',
        textAlign: 'center',
    },
    resultados: {
        backgroundColor: '#E5E7FF',
        paddingVertical: 15,
        paddingHorizontal: 0,
        borderRadius: 20,
        width: '82%',
        textAlign: 'center'
    }      
});

//exportação da função principal
export default FormIMC;