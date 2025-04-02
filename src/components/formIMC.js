import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const formIMC = () => {

    return(
        <View>
            <TextInput
            placeholder="altura (cm)"
            />

            <TextInput
            placeholder="peso (kg)"
            />
        </View>
    )
}

export default formIMC