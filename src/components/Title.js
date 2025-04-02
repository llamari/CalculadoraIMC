import { Text, StyleSheet} from 'react-native';

const Title = () => {

    return(
        <Text style={styles.title}>Calculadora de IMC</Text>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 'larger',
        textAlign: 'center',
    },
})

export default Title;