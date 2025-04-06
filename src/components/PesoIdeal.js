import { useEffect, useState } from "react"; //impota o useState e useEffect do react
import { StyleSheet, Text, View } from "react-native";

const PesoIdeal = ({altura}) => { //recebe altura como parametro
    const [pesoMinimo, setPesoMinimo] = useState(); 
    const [pesoMaximo, setPesoMaximo] = useState();

    useEffect(()=> {
        function PesoMinimo(altura) {
            const alt = parseFloat(altura) / 100;//transforma de cm pra m
            const pesoMin = 18.5 * (alt * alt);//faz a conta
            setPesoMinimo(pesoMin.toFixed(1));//deixa com apenas 1 casa decimal
        }
        function PesoMaximo(altura) {
            const alt = parseFloat(altura) / 100; //transforma de cm pra m
            const pesoMax = 24.9 * (alt * alt);//faz a conta
            setPesoMaximo(pesoMax.toFixed(1));//deixa com apenas 1 casa decimal
        }

        PesoMinimo(altura);//chama a função PesoMinimo
        PesoMaximo(altura);//chama a função PesoMaximo
    }, [altura]); //roda toda vez que a altura mudar
    
    return(
        <View style={styles.pesoIdealContainer}> {/*Retorna uma View com um Text falando o intervalo no qual deve estar o seu peso*/}
            <Text style={styles.pesoIdeal}>O peso ideal para sua altura deve ser entre {pesoMinimo}kg e {pesoMaximo}kg</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pesoIdealContainer: {//estiiza a View
        lineHeight: 20,
        height: 'auto',
        backgroundColor: '#C9CEFF',
        borderRadius: 30,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
        width: '80%',
    },
    pesoIdeal: { //estiliza o Text
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    }
});

export default PesoIdeal; //exporta