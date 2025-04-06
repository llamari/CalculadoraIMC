import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const ClassificaIMC = ({imc}) => {
    const [classificacao, setClassificacao] = useState('');

    useEffect(()=> {
        function Classifica(imc) {
            if (imc < 18.59) {
                setClassificacao("abaixo do peso");
            } else {
                if (imc < 24.99) {
                    setClassificacao("peso normal");
                } else {
                    if (imc < 29.99) {
                        setClassificacao("sobrepeso");
                    } else {
                        if (imc < 34.99) {
                            setClassificacao("obesidade grau I");
                        } else {
                            if (imc < 39.99) {
                                setClassificacao("obesidade grau II");
                            } else {
                                setClassificacao("obesidade grau III (obesidade mórbida)")
                            }
                        }
                    }
                }
            }
        }

        Classifica(imc);
    }, [imc]);

    return(
        <View style={styles.classificacaoContainer}>
            <Text style={styles.classificacao}>Seu IMC é {classificacao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    classificacaoContainer: {
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
    classificacao: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
    }
});

export default ClassificaIMC;