//importações
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useState } from "react";
import Result from "./Result";
import ClassificaIMC from "./ClassificacaoIMC";
import AlturaIdeal from "./PesoIdeal";

//função principal
const FormIMC = () => {
    //declaração de variáveis (useState()). useState() é usado para criar uma variável e uma função para mudar essa variável. Utilizando useState ao invés de var ou let a página é atualizada automaticamente quando o valor é mudado. (Essa explicação ficaria muito longa para por no vídeo)
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState();

    //funções
    function CalcularIMC() { //função para calcular o IMC
        if (peso && altura) { //só calcula se houver peso e altura
            const alturaMetros = parseFloat(altura) / 100; //transformade cm pra m
            const IMCCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); //calcula o IMC
            setImc(IMCCalculado);
        }
    }

    //retorna um arquivo JSX
    return (
        <View style={styles.container}> {/*View englobando tudo*/}
            <TextInput //Input para a altura
                style={styles.input}
                placeholder="Altura (cm)"
                value={altura} 
                onChangeText={setAltura} //guarda o valor do input na variável altura
                keyboardType="numeric" //permite que o usuário possa apenas inserir números
            />
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                value={peso}
                onChangeText={setPeso} //guarda o valor do input na variável peso
                keyboardType="numeric" //permite que o usuário possa apenas inserir números
            />
            <TouchableOpacity style={styles.botao} onPress={CalcularIMC}> {/*"Botão" que chama a função de calcular IMC*/}
                <Text style={styles.textoBotao}>Calcular IMC</Text>
            </TouchableOpacity>

            {imc && <Text style={styles.resultados}> <Result imc={imc} /> <ClassificaIMC imc={imc}/> <PesoIdeal altura={altura}/></Text>} {/* SE IMC EXISTIR, cria um Text com Result, ClassificaIMC e AlturaIdeal dentro*/}
        </View>
    );
}

//variável de estização 
const styles = StyleSheet.create({
    container: { //classe container que é a div que contém tudo
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
        padding: 20,
        width: '100%',
    },
    input: { //estiliza os inputs
        width: "80%", 
        height: 40,
        backgroundColor: "#d9d9d9",
        borderRadius: 40,
        marginVertical: 10, 
    },
    botao: { //estiliza o botão TouchableOpacity
        backgroundColor: '#2B3EFF',
        height: 50,
        justifyContent: 'center',
        padding: 10,
        marginBottom: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: '65%',
    },
    textoBotao: { //extiliza o texto do botão
        fontSize: 24,
        color: '#FFF',
        textAlign: 'center',
    },
    resultados: { //estiliza o Text que contém todos os resultados do cálculo do seu IMC (Resultado, Classificação e Peso Ideal)
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