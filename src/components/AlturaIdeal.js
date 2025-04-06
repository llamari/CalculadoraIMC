import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const AlturaIdeal = ({altura}) => {
    const [pesoMinimo, setPesoMinimo] = useState();
    const [pesoMaximo, setPesoMaximo] = useState();

    useEffect(()=> {
        function PesoMinimo(altura) {
            const alt = parseFloat(altura) / 100;
            const pesoMin = 18.5 * (alt * alt);
            setPesoMinimo(pesoMin.toFixed(1));
        }
        function PesoMaximo(altura) {
            const alt = parseFloat(altura) / 100;
            const pesoMax = 24.9 * (alt * alt);
            setPesoMaximo(pesoMax.toFixed(1));
        }

        PesoMinimo(altura);
        PesoMaximo(altura);
    }, [altura])
    return(
        <View style={styles.alturaIdealContainer}>
            <Text style={styles.alturaIdeal}>O peso ideal para sua altura deve ser entre {pesoMinimo}kg e {pesoMaximo}kg</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    alturaIdealContainer: {
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
    alturaIdeal: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    }
});

export default AlturaIdeal;