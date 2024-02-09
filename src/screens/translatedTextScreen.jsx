import React from "react";
import {View,Text} from 'react-native'
import { styles } from "../styles/globalStyles";

const TranslatedText = ({ route }) => {
    const {translatedText} = route.params; 

    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{translatedText}</Text>
        </View>
    )
}

export default TranslatedText;