import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const ClassificaIMC = ({imc}) => { //Recebe imc como parametro
    const [classificacao, setClassificacao] = useState(''); //cria a variável classificação

    useEffect(()=> {
        function Classifica(imc) {
            if (imc < 18.59) { //Vê se o IMC é menor que 18.59
                setClassificacao("abaixo do peso");
            } else {
                if (imc < 24.99) { //Vê se o IMC é menor que 24.99
                    setClassificacao("peso normal");
                } else {
                    if (imc < 29.99) { //Vê se o IMC é menor que 29.99
                        setClassificacao("sobrepeso");
                    } else {
                        if (imc < 34.99) { //Vê se o IMC é menor que 34.99
                            setClassificacao("obesidade grau I");
                        } else {
                            if (imc <= 39.99) { //Vê se o IMC é menor que 39.99
                                setClassificacao("obesidade grau II");
                            } else { //Se o IMC for maior que 39.99 é considerado obesidade grau III
                                setClassificacao("obesidade grau III (obesidade mórbida)")
                            }
                        }
                    }
                }
            }
        }

        Classifica(imc); //chama a função
    }, [imc]); // roda toda vez que o imc mudar

    return(
        <View style={styles.classificacaoContainer}> {/*Retorna uma View com um Text falando a classificação do seu IMC*/}
            <Text style={styles.classificacao}>Seu IMC é {classificacao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    classificacaoContainer: { // estiliza a View de classificação
        lineHeight: 20,
        height: 'auto',
        backgroundColor: '#9BA4FF',
        borderRadius: 30,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
        width: '80%',
    },
    classificacao: { //estiliza o texto
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
    }
});

export default ClassificaIMC; //exporta