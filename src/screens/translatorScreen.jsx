import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";


const TranslatorPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Translate:</Text>
      <Picker
        style = {styles.picker}
        selectedValue = {selectedLanguage}
        onValueChange = {(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        {/* import and map through langues.js file for values */}
      </Picker>
      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        multiline
        placeholder="Enter text"
      />
      <Button
        title= 'Translate'
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        marginTop: 100,
        padding: 20,
    },
    text: {
      fontSize: 20,
      marginBottom: 20
    },
    picker: {
      width: 200,
      height: 50,
      marginBottom: 20,
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#ccc",
      width: '80%',
      height: 100,
      padding: 10,
      textAlignVertical: 'top',
      marginTop: 200
    }

})

export default TranslatorPage;
