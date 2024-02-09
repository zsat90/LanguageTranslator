import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import { styles } from "../styles/globalStyles";

const WelcomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome To Phrase Finder!</Text>
            <Text style={styles.text}>Enter the word or phrase you wish to translate.</Text>
            <Text style={styles.text}>Then choose the language you want it to be translated to.</Text>
            <Text style={styles.text}>Press the translate button and see your translation.</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Translator')}
            >
                <Text style={styles.buttonText}>Begin Translating</Text>
            </TouchableOpacity>

        </View>
    )
}


export default WelcomeScreen;