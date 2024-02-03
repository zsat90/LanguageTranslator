import React from "react";
import {View, StyleSheet, Text, Button} from 'react-native'

const WelcomeScreen = () => {
    return(
        <View>
            <Text>Welcome To Phrase Finder!</Text>
            <Text>You will first choose the starting language, then select the language you want to translate to.</Text>
            <Text>Enter a phrase then click translate.</Text>
            <Button
                title = "Begin Translating"
            />

        </View>
    )
}

export default WelcomeScreen;